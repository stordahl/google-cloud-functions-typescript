const d = async (n, o) => {
  const { body: e, method: l } = n;
  l === "GET" && o.send("Hello, World!"), l === "POST" && e.name && o.send(`Hello, ${e.name}!`);
};
export {
  d as helloWorld
};
