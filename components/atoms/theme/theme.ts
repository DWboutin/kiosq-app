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
    secondary: {
      danger: string;
    };
    categories: {
      preparedMeals: {
        backgroundColor: string;
        contentColor: string;
      };
      clothes: {
        backgroundColor: string;
        contentColor: string;
      };
      fruits: {
        backgroundColor: string;
        contentColor: string;
      };
      vegetables: {
        backgroundColor: string;
        contentColor: string;
      };
      craftsmanship: {
        backgroundColor: string;
        contentColor: string;
      };
      bakery: {
        backgroundColor: string;
        contentColor: string;
      };
      coffeeShop: {
        backgroundColor: string;
        contentColor: string;
      };
      selfcare: {
        backgroundColor: string;
        contentColor: string;
      };
      alcohol: {
        backgroundColor: string;
        contentColor: string;
      };
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
      Inter: {
        Regular: string;
        Medium: string;
        Semibold: string;
      };
    };
  };
  borderRadius: {
    small: number;
    medium: number;
    large: number;
    xlarge: number;
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
    secondary: {
      danger: "#F41F1F",
    },
    categories: {
      preparedMeals: {
        backgroundColor: "#EEEAFE",
        contentColor: "#63559D",
      },
      clothes: {
        backgroundColor: "#E2FAD2",
        contentColor: "#506740",
      },
      fruits: {
        backgroundColor: "#FFE3EE",
        contentColor: "#855568",
      },
      vegetables: {
        backgroundColor: "#FFF2DB",
        contentColor: "#A67D33",
      },
      craftsmanship: {
        backgroundColor: "#D6F0FF",
        contentColor: "#347893",
      },
      bakery: {
        backgroundColor: "#FFF2DB",
        contentColor: "#806941",
      },
      coffeeShop: {
        backgroundColor: "#715D50",
        contentColor: "#FAE1D2",
      },
      selfcare: {
        backgroundColor: "#3E7777",
        contentColor: "#DEFBFB",
      },
      alcohol: {
        backgroundColor: "#7C3335",
        contentColor: "#FFDDDE",
      },
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
      Inter: {
        Regular: "Inter_400Regular",
        Medium: "Inter_500Medium",
        Semibold: "Inter_600SemiBold",
      },
    },
  },
  borderRadius: {
    small: 4,
    medium: 8,
    large: 16,
    xlarge: 20,
  },
};
