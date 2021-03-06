import next from './engine';

const scale = 4;
const worldWidth = Math.floor(document.documentElement.clientWidth / scale);
const worldHeight = Math.floor(document.documentElement.clientHeight / scale);

const render = (world, ctx) => {
  ctx.fillStyle = '#202020';
  ctx.fillRect(0, 0, worldWidth * scale, worldHeight * scale);
  ctx.fillStyle = 'green';
  world.forEach((row, y) => {
    row.forEach((alive, x) => {
      if (alive === 1) {
        ctx.fillRect(x * scale, y * scale, scale - 1, scale - 1);
      }
    });
  });
};

const randomWorld = (width, height) =>
   [...Array(height)].map((row, y) =>
    [...Array(width)].flatMap((cell, x) => Math.random() > 0.9)
  );


const start = (world, ctx) => {
  render(world, ctx);
  requestAnimationFrame(() => start(next(world), ctx));
};

const canvas = document.querySelector('canvas');
canvas.width = worldWidth * scale;
canvas.height = worldHeight * scale;

start(randomWorld(worldWidth, worldHeight), canvas.getContext('2d'));
