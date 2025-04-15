'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import NProgress from 'nprogress'

let timeout: NodeJS.Timeout

export default function ProgressBar() {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    NProgress.start()

    // Add a slight delay to allow the UI to stabilize
    timeout = setTimeout(() => {
      NProgress.done()
    }, 300)

    return () => {
      clearTimeout(timeout)
    }
  }, [pathname])

  return null
}
