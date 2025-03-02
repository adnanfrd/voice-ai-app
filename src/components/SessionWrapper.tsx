"use client";
import React from 'react'
import { SessionProvider } from "next-auth/react"

const SessionWrapper = ({children}:any) => {
  return (
    <SessionProvider>
    <div>{children}</div>
    </SessionProvider>
  )
}

export default SessionWrapper