function solution(U, N) {
  return new Promise((resolve, reject) => {
    let genderBrands = null;
    let userBrands = null;
    let errorMsg = new CustomError("Not enough data");
    let brandNames = [];

    try {
      (async () => {
        await (async () => {
          genderBrands = await getTopBrandsForGender(U.gender);
        })();
        await (async () => {
          userBrands = await getLikedBrands(U.id);
        })();
      })().then(() => {
        if (genderBrands.length < N && userBrands.length < N) {
          reject(errorMsg);
        } else if (userBrands.length > genderBrands.length) {
          brandNames = genderBrands.map(item => item.name);
          resolve(brandNames);
        } else {
          brandNames = userBrands.map(item => item.name);
          resolve(brandNames);
        }
      });
    } catch (error) {
      reject(errorMsg);
    }
  });
}
