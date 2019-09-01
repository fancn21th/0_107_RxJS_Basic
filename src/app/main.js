console.clear();

var source = Rx.Observable.interval(400)
  .take(9)
  .map(i => [1, 2, "foo", "bar", 1, 2, "foo", "bar", 1, 2, "foo", "bar"][i]);

source.subscribe(x => console.log(x));
