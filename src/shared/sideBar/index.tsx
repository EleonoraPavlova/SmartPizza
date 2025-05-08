import { ReactElement } from 'react'

import Filter from '@/shared/sideBar/filter'
import { SIDEBAR_FILTERS } from '@/shared/sideBar/sideBar.const'

const SideBar = (): ReactElement => {
  return (
    <div className='min-w-[244px] h-full flex flex-col gap-[30px]'>
      <Filter filters={SIDEBAR_FILTERS} />
    </div>
  )
}

export default SideBar
