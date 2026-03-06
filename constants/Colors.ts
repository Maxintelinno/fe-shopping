const tintColorLight = '#1B3A57'; // Navy Blue (น้ำเงินคราม)
const tintColorDark = '#A4C639';  // Lime Green (เขียวยอดตอง) as dark mode tint

export default {
  light: {
    text: '#1A1A1A',
    background: '#F8F9FA',
    tint: tintColorLight,
    tabIconDefault: '#9E9E9E',
    tabIconSelected: tintColorLight,
    accent: '#1B3A57', // Indigo (น้ำเงินคราม)
    secondary: '#A4C639', // Lime Green (เขียวยอดตอง)
    surface: '#FFFFFF',
    border: '#E0E0E0',
  },
  dark: {
    text: '#F8F9FA',
    background: '#1A1A1A',
    tint: tintColorDark,
    tabIconDefault: '#616161',
    tabIconSelected: tintColorDark,
    accent: '#1B3A57', // Indigo (น้ำเงินคราม)
    secondary: '#1B3A57', // Navy Blue as secondary in dark
    surface: '#1B3A57',
    border: '#333333',
  },
};
