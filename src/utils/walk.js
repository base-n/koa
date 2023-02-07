var walk = require("walkdir");
var flat = require("./flat");

// async with path callback
export function tpl(path, depth) {
  return flat(walk.sync(path, { max_depth: depth || 1 }));
}
