export default function sortByHealth(arr) {
  arr.sort((a, b) => (a.health > b.health ? 1 : -1));
  return arr.reverse();
}
