const defaultTheme = {
  breakpoints: {
    xs: '321px',
    sm: '576px',
    md: '767px',
    lg: '991px',
    xl: '1104px',
  },
  colors: {
    black: '#000000',
    primary: '#1F2044',
    secondary: {
      dark: '#1D5297',
      light: '#7cb8e9',
      primary: '#2E93EE',
      variant: '#5582B4',
    },
    dark: '#363636',
    light: '#93A3BB',
    white: {
      dark: '#f1f1f1',
      primary: '#ffffff',
    },
    gray: {
      dark: '#A6B6CC',
      light: '#F1F3F6',
      primary: '#CDD8DF',
      variant: '#E6EBEF',
    },
    success: {
      dark: '#2CA26E',
      light: '#BAE6D3',
      primary: '#30B47A',
    },
    error: {
      dark: '#DA4336',
      light: '#F16A5E',
      primary: '#FC3C2B',
    },
    danger: {
      dark: '#F67922',
      light: '#FFA464',
      primary: '#FF9442',
    },
    warning: {
      dark: '#EEC100',
      light: '#FAE694',
      primary: '#FFCF00',
    },
  },
  font: {
    sizes: {
      xxs: '12px',
      xs: '13px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '22px',
      xxl: '28px',
    },
    weights: {
      regular: 400,
      bold: 700,
    },
  },
  layers: {
    base: 0,
    overlay: 10,
    modal: 20,
    awaysOnTop: 30,
  },
};

export default defaultTheme;
