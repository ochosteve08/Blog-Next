const getAllUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("failed to fetch data");
  const users = response.json();
  return users;
};

export default getAllUsers;
