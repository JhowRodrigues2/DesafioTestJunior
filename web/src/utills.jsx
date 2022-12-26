export function login({ email, password }) {
  const delay = (0.7 + Math.random() * 2) * 1000;

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (password === "password123" && !!email) {
        resolve("Login feito com sucesso!");
      } else {
        reject("e-mail or password wrong.");
      }
    }, delay);
  });
}
