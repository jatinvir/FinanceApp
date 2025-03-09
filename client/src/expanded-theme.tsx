// # Grabbing types in createPalette from @mui/material/styles/createPalette
// eslint-disable-next-line 
import createPalette, {Palette, PaletteColor } from '@mui/material/styles/createPalette'

declare module '@mui/material/styles/createPalette' {
  interface PaletteColor {
    [key: number]: string;
  }
  interface Palette {
    tertiary: PaletteColor
  }
}