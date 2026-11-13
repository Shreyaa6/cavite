import React from 'react'

export type NavTab = 'curate' | 'templates' | 'experience' | 'ats' | 'about'

interface BottomLeftNavProps {
  activeTab: NavTab
  onSelectTab: (tab: NavTab) => void
}

export const BottomLeftNav: React.FC<BottomLeftNavProps> = ({ activeTab, onSelectTab }) => {
  const items: { id: NavTab; label: string }[] = [
    { id: 'curate', label: 'Curate CV' },
    { id: 'templates', label: 'Templates' },
    { id: 'experience', label: 'Experience' },
    { id: 'ats', label: 'ATS Score' },
    { id: 'about', label: 'Account' },
  ]

  return (
    <nav className="bottom-left-nav" aria-label="Page navigation">
      <ul className="nav-list">
        {items.map((item) => {
          const isActive = activeTab === item.id
          return (
            <li key={item.id} className="nav-item">
              <button
                type="button"
                className={`nav-button ${isActive ? 'nav-button-active' : ''}`}
                onClick={() => onSelectTab(item.id)}
              >
                {isActive && <span className="nav-slash">/ </span>}
                <span className="nav-label">{item.label}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

