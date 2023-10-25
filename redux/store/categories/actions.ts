// import {getFoodCategories} from "../../API/foodApi";
import {getFoodCategories} from '@/app/api/food';
import {CategoriesType} from '@/types/categoriesType';
import {Dispatch} from 'redux';
// import { ListType } from "../foods-list/modules";
// import { CategoriesType } from "../../moduls/types-interfaces/categoriesType";

// dispatch - this's action/s
export const SET_FOOD_CATEGORY =
  './categories/SET_FOOD_CATEGORY';

export type FoodCategoryActionType = {
  type: typeof SET_FOOD_CATEGORY;
  categories: CategoriesType | null;
};

export type ActionsType = FoodCategoryActionType;

export const foodCategory = (
  category: string,
  dataType: string,
) => {
  return async (
    dispatch: Dispatch<ActionsType>,
  ): Promise<void> => {
    try {
      const response = await getFoodCategories(
        category,
        dataType,
      );
      console.log(response, 'res');
      const data = await response;
      dispatch({
        type: SET_FOOD_CATEGORY,
        categories: data,
      });
    } catch (e) {
      // Обработка ошибок
    }
  };
};
