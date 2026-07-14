import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { buildSteamStoreUrl } from '../lib/utils'

const GetPage = () =>
{
    const router = useRouter()
    const steamStoreUrl = buildSteamStoreUrl(router.query, 'homepage_redirect')

    useEffect(() =>
    {
        router.replace(steamStoreUrl)
    }, [router, steamStoreUrl])

    return <></>
}

export default GetPage