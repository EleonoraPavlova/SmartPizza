'use client'

import { ShoppingCart, User } from 'lucide-react'
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import Logo from '@/shared/logo'

type HeaderProps = ComponentPropsWithoutRef<'header'>
type HeaderRef = ComponentRef<'header'>

export const Header = forwardRef<HeaderRef, HeaderProps>(({ className, ...rest }, ref) => {
  return (
    <header ref={ref} className={cn('w-full bg-background rounded-t-[30px]', className)} {...rest}>
      <div className='flex items-center gap-4 py-[20px] px-[64px]'>
        <Logo />
        <Input placeholder='Searching of pizza' />
        <div className='flex items-center gap-2'>
          <Button variant='outline'>
            <User width={10} height={10} />
            Login
          </Button>
          <Button variant='outline'>
            <ShoppingCart width={16} height={16} />
          </Button>
        </div>
      </div>
      <span className='flex w-full h-[1px] bg-muted-foreground/30' />
    </header>
  )
})

Header.displayName = 'Header'
