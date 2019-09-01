const onSimpleClick = function() {
  console.clear();

  const source = Rx.Observable.interval(400)
    .take(9)
    .map(
      i =>
        [
          1,
          2,
          "foo",
          "bar",
          1,
          2,
          "foo",
          "bar",
          1,
          2,
          "foo",
          "bar",
          1,
          2,
          "foo",
          "bar"
        ][i]
    );

  const result = source.map(x => parseInt(x)).filter(x => !isNaN(x));
  // .reduce((pre, cur) => pre + cur);

  result.subscribe(x => console.log(x));
};

document.querySelector(".btn-primary").addEventListener("click", function(e) {
  const target = e.target;
  switch (target.getAttribute("data-tag")) {
    case "simple":
      onSimpleClick();
      break;
    case "dbclick":
      onDoubleClick();
  }
});
