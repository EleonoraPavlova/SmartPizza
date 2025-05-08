import { ReactElement } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TabOption } from '@/shared/categoriesTabs/categoriesTabs.const'
import { Typography } from '@/shared/typography'

interface Props {
  tabs: TabOption[]
  activeTab: string
  onChange: (_tab: string) => void
}

const CategoriesTabs = ({ tabs, activeTab, onChange }: Props): ReactElement => {
  return (
    <Tabs defaultValue={tabs[0].value} onValueChange={onChange}>
      <TabsList className='gap-4 w-[60%]'>
        {tabs.map((t) => (
          <TabsTrigger value={t.value} key={t.value} className={t.value === activeTab ? 'text-primary' : ''}>
            {t.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((t) => (
        <TabsContent value={t.value} key={t.value}>
          <Typography as='h6'>
            🍕 This is mock content for <b>{t.label}</b> category.
          </Typography>
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default CategoriesTabs
