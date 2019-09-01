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

const onDoubleClick = function(btn) {
  const clickStream = Rx.Observable.fromEvent(btn, "click");
  const doubleClickStream = clickStream
    .buffer(() => clickStream.throttle(250))
    .map(arr => arr.length)
    .filter(len => len === 2);

  doubleClickStream.subscribe(event =>
    console.log("Hooray! I'm double clicked!")
  );
};

document
  .querySelector(".btn-primary[data-tag='simple']")
  .addEventListener("click", onSimpleClick);
