{
  // Asynchronous behavior of TypeScript

  const getPromise = <T>(param: T): Promise<T> =>
    new Promise((resolve, reject) => {
      if (param) resolve(param);
      else reject("Failed to load data!");
    });

  const str: string = "Something";
  const user = { name: "Sakib", age: 24 };

  interface User {
    name: string;
    age: number;
  }

  const getData = async <T>(param: T): Promise<T> => {
    const data: T = await getPromise(param);
    console.log({ data });
    return data;
  };
  getData<string>(str);
  getData<User>(user);

  // Fetch post from server
  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  const getPost = async (): Promise<Post> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log(data);
    return data;
  };
  getPost();
}
