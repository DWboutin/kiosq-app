export type Theme = {
  colors: {
    neutral: {
      white: string;
      lightest: string;
      light: string;
      medium: string;
      darker: string;
      black: string;
    };
    primary: {
      lightest: string;
      light: string;
      medium: string;
      dark: string;
    };
  };
  fonts: {
    family: {
      Nunito: {
        Regular: string;
        Semibold: string;
        Bold: string;
      };
      Lato: {
        Regular: string;
        Bold: string;
      };
    };
  };
  borderRadius: {
    small: number;
    medium: number;
    large: number;
  };
};

export const theme: Theme = {
  colors: {
    neutral: {
      white: "#FFFFFF",
      lightest: "#F3F3F3",
      light: "#E0E0E0",
      medium: "#9398A1",
      darker: "#43454D",
      black: "#202020",
    },
    primary: {
      lightest: "#A5F471",
      light: "#80D488",
      medium: "#1A7F65",
      dark: "#086049",
    },
  },
  fonts: {
    family: {
      Nunito: {
        Regular: "Nunito_400Regular",
        Semibold: "Nunito_600SemiBold",
        Bold: "Nunito_700Bold",
      },
      Lato: {
        Regular: "Lato_400Regular",
        Bold: "Lato_700Bold",
      },
    },
  },
  borderRadius: {
    small: 4,
    medium: 8,
    large: 16,
  },
};
