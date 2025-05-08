import CategoriesTabs from '@/shared/categoriesTabs/categoriesTabs'
import { TabOption } from '@/shared/categoriesTabs/categoriesTabs.const'
import SortPopover from '@/shared/sortPopover'

interface Props {
  tabs: TabOption[]
  activeTab: string
  onChange: (_tab: string) => void
}

const TopBar = ({ tabs, activeTab, onChange }: Props) => {
  return (
    <div
      className='grid grid-cols-[2fr_1fr] items-start [&>*:last-child]:justify-self-end
      gap-10 w-full sticky top-0 bg-background z-10'
    >
      <CategoriesTabs tabs={tabs} onChange={onChange} activeTab={activeTab} />
      <SortPopover />
    </div>
  )
}

export default TopBar
