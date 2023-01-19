// TODO: write your code here
export default function getHealth({ player }) {
  if (player.health > 50) {
    return 'healthy';
  }
  if (player.health < 15) {
    return 'critical';
  }
  return 'wounded';
}
// player = { name: 'маг', health: 20 };
// player = { name: 'маг', health: 51 };
// player = { name: 'маг', health: 5 };

// console.log(player);
// getHealth({ player });
