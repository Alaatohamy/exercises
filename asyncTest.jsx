let errorMsg = new Error("Not enough data");

// async function getGenderBrand() {
//   try {
//     return await fetch('https://jsonplaceholder.typicode.com/users').json();
//   } catch (error) {
//     return errorMsg;
//   }
// }
// ​
// async function getUserBrand() {
//   try {
//     return await fetch('https://jsonplaceholder.typicode.com/comments').json();
//   } catch (error) {
//     return errorMsg;
//   }
// }

function solution(N) {
  return new Promise((resolve, reject) => {
    /**Using async await and it works */
    // let genderBrands = null;
    // let userBrands = null;
    // (async () => {
    //   let result = await fetch("https://jsonplaceholder.typicode.com/users");
    //   genderBrands = await result.json();
    //   let result2 = await fetch("https://jsonplaceholder.typicode.com/users");
    //   userBrands = await result2.json();
    // })().then(() =>
    //   console.log("3", "genderBrands", genderBrands, "userBrands", userBrands)
    // );
  
    /**Using .then and it works */
    let genderBrands = null;
    let userBrands = null;
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        genderBrands = data;
      })
      .then(
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(response => response.json())
          .then(data => {
            userBrands = data;
            console.log("genderBrands", genderBrands, "userBrands", userBrands);
          })
      );

    if(typeof genderBrands === "object" && typeof userBrands === "object") {
      reject(errorMsg);
    }​
    if (genderBrands.length < N && userBrands.length < N) {
      reject(errorMsg);
    } else if (userBrands.length > genderBrands.length) {
      resolve(userBrands.map(item => item.name));
    } else {
      resolve(genderBrands.map(item => item.name));
    }
  });
}