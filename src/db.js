export const fakeLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "09396903816" && password === "K@mij3314") {
        resolve({
          token: "sample token ",
          firstName: "Ali",
          lastName: "Komijani",
          username: "09396903816",
        });
      } else {
        reject("invalid username or password");
      }
    }, 3000);
  });
};
