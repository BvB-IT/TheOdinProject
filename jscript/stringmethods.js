function myFunction() {
  let text = document.getElementById("demo").innerHTML;
  text = text.replaceAll("Cats", "Dogs");
  document.getElementById("demo").innerHTML = text.replace(
    /Microsoft/g,
    "W3Schools"
  );
}
