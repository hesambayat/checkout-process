import Cache from '@/utils/cache'
import minutes from '@/utils/minutes'

const GithubUserCache = new Cache(20)

export default async username => {
  const cached = GithubUserCache.get(username)
  if (cached) {
    return cached
  }

  try {
    const result = await fetch(`https://api.github.com/users/${username}`)
    const data = await result.json()
    if (data.message === undefined) {
      GithubUserCache.set(username, data, minutes(60))
    }
    return data
  } catch (error) {
    throw !navigator.onLine ? { message: 'No internet connection' } : error
  }
}
