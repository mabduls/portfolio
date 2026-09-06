export const simulationDuration = 120

export const syntheticAircraft = [
  {
    id: 'SYN-204',
    callsign: 'DEMO 204',
    altitude: '31,000 ft',
    speed: '472 kt',
    routeLabel: 'Sector North → Sector East',
    route: [
      { x: 8, y: 31 },
      { x: 27, y: 22 },
      { x: 48, y: 35 },
      { x: 72, y: 27 },
      { x: 92, y: 42 },
    ],
  },
  {
    id: 'SYN-518',
    callsign: 'DEMO 518',
    altitude: '24,500 ft',
    speed: '418 kt',
    routeLabel: 'Sector West → Sector South',
    route: [
      { x: 12, y: 62 },
      { x: 32, y: 52 },
      { x: 51, y: 68 },
      { x: 68, y: 76 },
      { x: 88, y: 66 },
    ],
  },
  {
    id: 'SYN-731',
    callsign: 'DEMO 731',
    altitude: '36,200 ft',
    speed: '495 kt',
    routeLabel: 'Sector Central → Sector North',
    route: [
      { x: 21, y: 84 },
      { x: 35, y: 71 },
      { x: 49, y: 54 },
      { x: 58, y: 31 },
      { x: 70, y: 12 },
    ],
  },
]

export function interpolateRoute(route, progress) {
  const clamped = Math.min(Math.max(progress, 0), 1)
  const scaled = clamped * (route.length - 1)
  const index = Math.min(Math.floor(scaled), route.length - 2)
  const localProgress = scaled - index
  const start = route[index]
  const end = route[index + 1]
  return {
    x: start.x + (end.x - start.x) * localProgress,
    y: start.y + (end.y - start.y) * localProgress,
  }
}
