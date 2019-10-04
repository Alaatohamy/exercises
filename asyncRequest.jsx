function solution(U, N) {
  return new Promise((resolve, reject) => {
    try {
      let genderBrands = (async () => await getTopBrandsForGender(U.gender))();
      let userBrands = (async () => await getLikedBrands(U.id))();
      let errorMsg = new CustomError("Not enough data");
      let brandNames = [];

      if (genderBrands.length < N && userBrands.length < N) {
        reject(errorMsg);
      } else if (userBrands.length > genderBrands.length) {
        brandNames = genderBrands.map(item => item.name);
        resolve(brandNames);
      } else {
        brandNames = userBrands.map(item => item.name);
        resolve(brandNames);
      }
    } catch (error) {
      reject(errorMsg);
    }
  });
}
