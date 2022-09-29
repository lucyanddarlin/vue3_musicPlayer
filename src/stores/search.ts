import { defineStore } from "pinia";
import { reqSuggestSearch } from "@/utils";
import type { searchSuggest } from "@/modules/apiDataType/searchData";
export const useSearchStore = defineStore("search", {
  state: () => {
    return {
      searchKeyWord: "",
      showPopover: false,
      suggestSearchResult: {} as searchSuggest,
    };
  },
  getters: {
    showHot: (state) => {
      return state.searchKeyWord === "";
    },
  },
  actions: {
    async suggestSearch() {
      const { result } = await reqSuggestSearch(this.searchKeyWord);
      this.suggestSearchResult = result;
    },
  },
});
