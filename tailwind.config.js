const generateColorClass = (variable) => {
  return ({ opacityValue }) =>
    opacityValue
      ? `rgba(var(--${variable}), ${opacityValue})`
      : `rgb(var(--${variable}))`
}

const textColor = {
  primary: generateColorClass('text-primary'),
  secondary: generateColorClass('text-secondary'),
  tertiary: generateColorClass('text-tertiary'),
  accent: generateColorClass('text-accent'),
  contrast: generateColorClass('text-contrast'),
}

const backgroundColor = {
  primary: generateColorClass('bg-primary'),
  secondary: generateColorClass('bg-secondary'),
  tertiary: generateColorClass('bg-tertiary'),
}

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor,
      backgroundColor,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
