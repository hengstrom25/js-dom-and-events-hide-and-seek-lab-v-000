function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].textContent = parseInt(ranks[i].textContent) + n
  }
  return ranks
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

