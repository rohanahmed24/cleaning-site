"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface ExpandableItemProps {
  title: string
  children?: React.ReactNode
}

export function ExpandableItem({ title, children }: ExpandableItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border border-gray-200 rounded-full overflow-hidden transition-all duration-300">
      <div
        className="px-6 py-4 flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-medium font-outfit">{title}</span>
        <button
          className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          <svg viewBox="0 0 24 24" className={cn("w-4 h-4 transition-transform", isExpanded && "rotate-45")}>
            <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
        </button>
      </div>

      <div className={cn("px-6 overflow-hidden transition-all duration-300", isExpanded ? "max-h-96 pb-4" : "max-h-0")}>
        {children}
      </div>
    </div>
  )
}
