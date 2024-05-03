{
  const user: {
    name: { firstName: string; middleName: string; lastName: string };
    email: string;
  } = {
    name: { firstName: "Imtiaz", middleName: "Ahmed", lastName: "Sakib" },
    email: "s@g.com",
  };
  const {
    name: { firstName, middleName: midName },
    email,
  } = user;

  console.log(firstName, midName);
  console.log(email);

  const friends: string[] = ["a", "b", "c", "d", "e"];
  const [, secondFriend, ...restFriends] = friends;

  console.log(secondFriend);
  console.log(restFriends);
}
