import { cva, type VariantProps } from 'class-variance-authority'

export const typographyVariants = cva('m-0 p-0 break-words whitespace-normal', {
  variants: {
    variant: {
      h1: 'text-[36px] leading-l font-bold xs:text-l xs:leading-m',
      h2: 'text-xl leading-l font-bold xs:text-m xs:leading-m',
      h3: 'text-l leading-m font-bold xs:text-s xs:leading-m',
      h4: 'text-m leading-m font-bold xs:text-s xs:leading-s',
      body1: 'text-m leading-m font-regular xs:text-s xs:leading-s',
      body2: 'text-s leading-m font-regular xs:text-xs xs:leading-s',
      subtitle1: 'text-m leading-m font-bold xs:leading-s',
      subtitle2: 'text-s leading-m font-regular xs:text-xs xs:leading-s',
      overline: 'text-xs leading-s font-bold xs:text-xxs xs:leading-s',
      caption: 'text-xs leading-s font-regular xs:text-xxs xs:leading-s',
      link1: 'text-s leading-m font-regular text-info-500 cursor-pointer visited:text-info-900 xs:text-xs xs:leading-s',
      link2:
        'text-xs leading-s font-regular text-info-500 cursor-pointer visited:text-info-900 xs:text-xxs xs:leading-s',
      error: 'text-xs text-destructive xs:text-xxs',
      gray: 'text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'body1',
  },
})

export type TypographyVariant = VariantProps<typeof typographyVariants>
