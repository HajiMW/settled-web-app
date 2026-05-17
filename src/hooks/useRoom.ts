'use client';

import { useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase/client';
import { generateRoomCode } from '@/lib/utils/helpers';
import type { Room, RoomSettings, Category } from '@/types';

interface RoomState {
  room: Room | null;
  loading: boolean;
  error: string | null;
}

/**
 * Custom hook for room management.
 * Provides create, join, leave, and participant management.
 */
export function useRoom() {
  const [state, setState] = useState<RoomState>({
    room: null,
    loading: false,
    error: null,
  });

  const createRoom = useCallback(
    async (name: string, category: Category, hostId: string, settings?: Partial<RoomSettings>) => {
      setState((prev) => ({ ...prev, loading: true, error: null }));
      try {
        const roomCode = generateRoomCode();
        const newRoom: Room = {
          id: roomCode,
          name,
          category,
          hostId,
          participants: [hostId],
          status: 'waiting',
          settings: {
            maxParticipants: settings?.maxParticipants || 4,
            swipeTimeout: settings?.swipeTimeout || 30,
            avoidRepeats: settings?.avoidRepeats ?? true,
            category,
          },
          createdAt: new Date().toISOString(),
        };

        // In production, this would insert into Supabase:
        // const { data, error } = await supabase
        //   .from('rooms')
        //   .insert(newRoom)
        //   .select()
        //   .single();

        setState({ room: newRoom, loading: false, error: null });
        return newRoom;
      } catch (error: any) {
        setState((prev) => ({ ...prev, loading: false, error: error.message }));
        return null;
      }
    },
    []
  );

  const joinRoom = useCallback(async (roomCode: string, userId: string) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      // In production, this would query and update Supabase:
      // const { data: room, error } = await supabase
      //   .from('rooms')
      //   .select('*')
      //   .eq('id', roomCode)
      //   .single();

      // Mock: simulate joining a room
      setState((prev) => ({
        ...prev,
        room: prev.room
          ? {
              ...prev.room,
              participants: [...prev.room.participants, userId],
            }
          : null,
        loading: false,
        error: null,
      }));
    } catch (error: any) {
      setState((prev) => ({ ...prev, loading: false, error: error.message }));
    }
  }, []);

  const leaveRoom = useCallback(async (userId: string) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      // In production, this would update Supabase
      setState((prev) => ({
        ...prev,
        room: prev.room
          ? {
              ...prev.room,
              participants: prev.room.participants.filter((id) => id !== userId),
            }
          : null,
        loading: false,
        error: null,
      }));
    } catch (error: any) {
      setState((prev) => ({ ...prev, loading: false, error: error.message }));
    }
  }, []);

  const getParticipants = useCallback((): string[] => {
    return state.room?.participants || [];
  }, [state.room]);

  return {
    room: state.room,
    loading: state.loading,
    error: state.error,
    createRoom,
    joinRoom,
    leaveRoom,
    getParticipants,
  };
}
