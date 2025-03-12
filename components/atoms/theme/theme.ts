export type Theme = {
  colors: {
    white: string;
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
        Semibold: string;
      };
    };
  };
};

export const theme: Theme = {
  colors: {
    white: "#FFFFFF",
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
        Semibold: "Lato_700Bold",
      },
    },
  },
};
