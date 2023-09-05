export const filterRestro = (searchText, restroLists) => {
  return restroLists.filter((restuarant) =>
    restuarant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
};

