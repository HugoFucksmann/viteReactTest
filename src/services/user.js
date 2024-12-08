export async function getUser(user) {
  const obteneruser = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
      return null;
    });

  return obteneruser;
}
