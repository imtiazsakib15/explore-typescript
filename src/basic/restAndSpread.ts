{
  const friends: string[] = ["a", "b", "c"];

  const family: string[] = ["d", "e", "f"];

  const friendsAndFamily: string[] = [...friends, ...family];

  const greetFriends = (...friends: string[]): void =>
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));

  greetFriends(...friends);
}
