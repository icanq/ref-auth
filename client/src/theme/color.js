
let themeColor = {
  black: "#252525",
  blackLight: "#CCCCCC",
  grey: "#666666",
  white: "#FDFDFD",
  white1: "#F2F2F2",
  white2: "#E4E4E4",
  primary: {
    main: "#BE171E",
    dark: "#8D0107",
    1: "#620000",
    2: "#851015",
    3: "#E5A2A5",
    4: "#F9E8E9"
  },
  secondary: {
    main: "#127F0A",
    dark: "#054609",
    1: "#0D5907",
    2: "#59A554",
    3: "#A0CC9D",
    4: "#E7F2E7"
  }
}

themeColor = {
  ...themeColor,
  blackGradient: `linear-gradient(90deg, #4B4B4B, #00000000)`,
  primary: {
    ...themeColor.primary,
    gradient: (color1, color2, deg) => `linear-gradient(${deg || 270}deg,${color1 ? themeColor.primary[color1] : themeColor.primary.main},${color2 ? themeColor.primary[color2] : themeColor.primary[2]})`
  },
  secondary: {
    ...themeColor.secondary,
    gradient: (color1, color2, deg) => `linear-gradient(${deg || 270}deg,${color1 ? themeColor.secondary[color1] : themeColor.secondary.main},${color2 ? themeColor.secondary[color2] : themeColor.secondary[1]})`
  }
}

export default themeColor;