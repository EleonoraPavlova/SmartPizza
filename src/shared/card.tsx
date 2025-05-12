import { ComponentPropsWithoutRef, ElementType, ForwardedRef, forwardRef } from 'react'

import { cn } from '@/lib/utils'

type Props<T extends ElementType = 'div'> = {
  as?: T
} & ComponentPropsWithoutRef<T>
type InferType<T> = T extends ElementType<infer U> ? U : never

export const Card = forwardRef(<T extends ElementType = 'div'>(props: Props<T>, ref: ForwardedRef<InferType<T>>) => {
  const { as: Component = 'div', className, ...rest } = props
  const classNames = cn('w-full py-[40px] px-[64px] bg-background rounded-b-[30px]', className)

  return <Component className={classNames} ref={ref} {...rest} />
})

Card.displayName = 'Card'
