import { knightMoves } from "./knight.js";

const path = knightMoves([3, 3], [4, 3]);
if (path !== null) {
  console.log(
    `You made it in %d move%s! Here's your path: `,
    path.length - 1,
    path.length - 1 > 1 ? "s" : ""
  );
  path.forEach((coordinate) => {
    console.log(coordinate);
  });
}
