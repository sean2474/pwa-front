'use client'

import { ReactNode, useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyB2GcCJrDTl7FP6rZ8pt3mwT6zgCAr7hmE",
  authDomain: "prep-wrestling-academy-269d8.firebaseapp.com",
  projectId: "prep-wrestling-academy-269d8",
  storageBucket: "prep-wrestling-academy-269d8.appspot.com",
  messagingSenderId: "925058533873",
  appId: "1:925058533873:web:eac1f50b3ad824986f9c50",
  measurementId: "G-8QFERW418M"
}

const initializeFirebase = () => {
  const app = initializeApp(firebaseConfig)
  const analytics = getAnalytics(app)
  logEvent(analytics, 'notification_received')
}

const FirebaseProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      initializeFirebase()
    }
  }, [])

  return <>{children}</>
}

export default FirebaseProvider
