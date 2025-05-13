import { ReactElement, useCallback } from 'react'

import { Button } from '@/components/ui/button'
import { TabOption } from '@/shared/categoriesTabs/categoriesTabs.const'
import { useCategoryStore } from '@/store/category'

interface Props {
  tabs: TabOption[]
  onChange: (_tab: string) => void
}

const CategoriesTabs = ({ tabs, onChange }: Props): ReactElement => {
  const categoryActiveId = useCategoryStore((state) => state.activeCategoryId)

  const handleTabChange = useCallback(
    (value: string) => {
      onChange(value)
    },
    [onChange]
  )

  return (
    <div className='inline-flex gap-4 bg-muted rounded-2xl p-1.5'>
      {tabs.map((t) => (
        <Button
          variant='ghost'
          key={t.value}
          className={`px-4 py-2 rounded-md transition-colors ${
            t.value === categoryActiveId ? 'text-primary bg-white hover:bg-white/80' : 'hover:text-primary'
          }`}
          onClick={() => handleTabChange(t.value)}
        >
          {t.label}
        </Button>
      ))}
    </div>
  )
}

export default CategoriesTabs
