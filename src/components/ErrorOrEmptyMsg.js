import React from 'react'

export default function ErrorOrEmptyMsg({children}) {
  return (
    <div className="center">
      <div className="empty-error-message">{children}</div>
    </div>
  )
}
