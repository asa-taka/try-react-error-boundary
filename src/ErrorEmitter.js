import React from 'react'

export default function ErrorEmitter() {
  throw new Error(`Sometiong occured: ${new Date()}`)
}