import React from 'react'

interface iconProps {
    color?: string,
    size?: string
}
export default function IconLoading<iconProps>({ color = '#bfbfbf', size = '14' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
    )
}
