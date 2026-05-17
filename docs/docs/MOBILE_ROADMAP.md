# Mobile App Roadmap

## Overview

The Settled mobile app will be built using React Native with Expo, allowing code sharing with the existing Next.js web application. The swipe-based interaction pattern is naturally suited to mobile devices.

---

## Architecture

### Monorepo Structure (Recommended)

```
settled-monorepo/
├── apps/
│   ├── web/              # Next.js web app (current)
│   └── mobile/           # React Native/Expo app
├── packages/
│   ├── types/            # Shared TypeScript types
│   ├── api/              # Shared API service layer
│   ├── utils/            # Shared utility functions
│   └── ui/               # Shared UI primitives (where possible)
├── package.json
└── turbo.json            # Turborepo configuration
```

### Shared Code

The following can be shared between web and mobile:

| Package | Contents |
|---------|----------|
| `@settled/types` | All TypeScript interfaces and enums |
| `@settled/api` | API service functions (fetch-based, platform-agnostic) |
| `@settled/utils` | Helper functions, validation, recommendation engine |

---

## Navigation Mapping

| Web Route | Mobile Screen | Notes |
|-----------|---------------|-------|
| `/` | `HomeScreen` | Landing/dashboard |
| `/login` | `LoginScreen` | Auth flow |
| `/signup` | `SignUpScreen` | Auth flow |
| `/onboarding` | `OnboardingFlow` | Multi-step navigator |
| `/dashboard` | `DashboardScreen` | Main tab |
| `/rooms/create` | `CreateRoomScreen` | Modal |
| `/rooms/[id]` | `RoomScreen` | Swipe interface |
| `/rooms/[id]/results` | `ResultsScreen` | Match results |
| `/profile` | `ProfileScreen` | Settings tab |
| `/favourites` | `FavouritesScreen` | Favourites tab |

### Tab Navigation

```
Bottom Tabs:
├── Home (Dashboard)
├── Create Room
├── Favourites
└── Profile
```

---

## Platform-Specific Considerations

### Swipe Gestures
- Use `react-native-gesture-handler` for performant swipe detection
- `react-native-reanimated` for smooth card animations
- Consider haptic feedback on swipe actions (`expo-haptics`)

### Push Notifications
- Room invitations
- Match notifications
- "Your group is waiting" reminders
- Use `expo-notifications` for cross-platform support

### Deep Linking
- Universal links for room invitations (e.g., `settled.app/join/ABC123`)
- App-to-app deep links for delivery platforms (Uber Eats, Just Eat, Deliveroo)
- Use `expo-linking` for handling incoming links

### Offline Support
- Cache card data locally using `@react-native-async-storage/async-storage`
- Queue swipe actions when offline, sync when reconnected
- Show cached favourites and match history offline

### Camera/QR Code
- QR code scanning for joining rooms (alternative to typing codes)
- Use `expo-camera` or `expo-barcode-scanner`

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | React Native + Expo (SDK 51+) |
| Navigation | React Navigation v6 |
| State Management | Zustand or React Context |
| Animations | React Native Reanimated 3 |
| Gestures | React Native Gesture Handler |
| Auth | Supabase Auth (same as web) |
| Database | Supabase (same as web) |
| Notifications | Expo Notifications |
| OTA Updates | EAS Update |

---

## Development Phases

### Phase 1: Core Experience (MVP)
- [ ] Project setup with Expo
- [ ] Authentication (login, signup)
- [ ] Room creation and joining
- [ ] Swipe interface for all categories
- [ ] Match results display
- [ ] Basic profile management

### Phase 2: Enhanced Features
- [ ] Push notifications
- [ ] Favourites and match history
- [ ] Dark mode
- [ ] Offline support
- [ ] QR code room joining
- [ ] Haptic feedback

### Phase 3: Polish & Launch
- [ ] App Store optimisation (ASO)
- [ ] Performance profiling and optimisation
- [ ] Accessibility audit (VoiceOver, TalkBack)
- [ ] Analytics integration
- [ ] Crash reporting (Sentry)
- [ ] Beta testing via TestFlight / Google Play Beta

---

## App Store Requirements

### iOS (App Store)
- Minimum iOS 15.0
- Support iPhone SE (2nd gen) and above
- Dark mode support required
- Privacy nutrition labels
- App Tracking Transparency (ATT) if using analytics

### Android (Google Play)
- Minimum Android 10 (API 29)
- Target Android 14 (API 34)
- Material You theming support
- Data safety section
- Adaptive icons

---

## Estimated Timeline

| Phase | Duration | Team |
|-------|----------|------|
| Phase 1 (MVP) | 8-10 weeks | 2 developers |
| Phase 2 (Enhanced) | 4-6 weeks | 2 developers |
| Phase 3 (Polish) | 3-4 weeks | 2 developers + QA |
| **Total** | **15-20 weeks** | |
