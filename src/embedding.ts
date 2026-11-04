/** Headless embedding surface. Uses the same Sessions owner as the full Runtime.
 * Consumers provide lifecycle, permissions, prompts, tools and transport, while
 * retaining superagent role binding, scoped tools/skills and durable delivery. */
export { Sessions, ROUTER_PRESET, WORKER_PRESET } from './app/sessions.ts'
export type { SessionsHost } from './app/sessions.ts'
export { AgentDelivery } from './app/delivery.ts'
export { Effects, Later } from './app/effects.ts'
export { Store } from './app/store.ts'
export { HealthBoard } from './infra/health.ts'
