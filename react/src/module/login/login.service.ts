
// TODO:
// 1. хранить токен
// 2. в каждый запрос добаывлять заголовок 'verify-token-g-music' = 'token'

export async function login (): Promise<{ status: boolean }> {
  return await new Promise((resolve) => setTimeout(() => { resolve({ status: true }) }, 1000))
}
