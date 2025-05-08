import { ComponentPropsWithoutRef, ElementType } from 'react'

import { cn } from '@/lib/utils'
import { typographyVariants } from '@/shared/typography/typography-variants'

export type TypographyVariant =
  | 'body1'
  | 'body2'
  | 'caption'
  | 'error'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'link1'
  | 'link2'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2'

type TypographyProps<T extends ElementType> = {
  as?: T
  gray?: boolean
  variant?: TypographyVariant
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
  const { as: Component = 'p', className, gray, variant = 'body1', ...rest } = props

  const classNames = cn(typographyVariants({ variant }), gray && typographyVariants({ variant: 'gray' }), className)

  return <Component className={classNames} {...rest} />
}
