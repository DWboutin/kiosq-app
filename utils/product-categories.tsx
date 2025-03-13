import { PreparedMealsIcon } from "@/components/atoms/icons/prepared-meals-icon/prepared-meals-icon";
import { theme } from "@/components/atoms/theme/theme";
import { ClothesIcon } from "@/components/atoms/icons/clothes-icon/clothes-icon";
import { FruitsIcon } from "@/components/atoms/icons/fruits-icon/fruits-icon";
import { VegetablesIcon } from "@/components/atoms/icons/vegetables-icon/vegatables-icon";
import { CraftsmanshipIcon } from "@/components/atoms/icons/craftsmanship-icon/craftsmanship-icon";
import { BakeryIcon } from "@/components/atoms/icons/bakery-icon/bakery-icon";
import { CoffeeShopIcon } from "@/components/atoms/icons/coffee-shop-icon/coffee-shop-icon";
import { SelfcareIcon } from "@/components/atoms/icons/selfcare-icon/selfcare-icon";
import { AlcoholIcon } from "@/components/atoms/icons/alcohol-icon/alcohol-icon";

export const productCategories = [
  {
    name: "fruits",
    backgroundColor: theme.colors.categories.fruits.backgroundColor,
    contentColor: theme.colors.categories.fruits.contentColor,
    text: "Fruits",
    icon: FruitsIcon,
  },
  {
    name: "vegetables",
    backgroundColor: theme.colors.categories.vegetables.backgroundColor,
    contentColor: theme.colors.categories.vegetables.contentColor,
    text: "Légumes",
    icon: VegetablesIcon,
  },
  {
    name: "bakery",
    backgroundColor: theme.colors.categories.bakery.backgroundColor,
    contentColor: theme.colors.categories.bakery.contentColor,
    text: "Boulangeries & Pâtisseries",
    icon: BakeryIcon,
  },
  {
    name: "preparedMeals",
    backgroundColor: theme.colors.categories.preparedMeals.backgroundColor,
    contentColor: theme.colors.categories.preparedMeals.contentColor,
    text: "Plats préparés & Restaurants",
    icon: PreparedMealsIcon,
  },
  {
    name: "coffeeShop",
    backgroundColor: theme.colors.categories.coffeeShop.backgroundColor,
    contentColor: theme.colors.categories.coffeeShop.contentColor,
    text: "Cafés & Torréfacteurs",
    icon: CoffeeShopIcon,
  },
  {
    name: "alcohol",
    backgroundColor: theme.colors.categories.alcohol.backgroundColor,
    contentColor: theme.colors.categories.alcohol.contentColor,
    text: "Vins, Bières & Spiritueux",
    icon: AlcoholIcon,
  },
  {
    name: "clothes",
    backgroundColor: theme.colors.categories.clothes.backgroundColor,
    contentColor: theme.colors.categories.clothes.contentColor,
    text: "Vêtements",
    icon: ClothesIcon,
  },
  {
    name: "craftsmanship",
    backgroundColor: theme.colors.categories.craftsmanship.backgroundColor,
    contentColor: theme.colors.categories.craftsmanship.contentColor,
    text: "Artisanat & Créateurs",
    icon: CraftsmanshipIcon,
  },
  {
    name: "selfcare",
    backgroundColor: theme.colors.categories.selfcare.backgroundColor,
    contentColor: theme.colors.categories.selfcare.contentColor,
    text: "Soins & Beauté",
    icon: SelfcareIcon,
  },
];
