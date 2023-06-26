const displayElement = document.getElementById("display");
const ButtonElement = document.getElementById("btn");
const CreateElement = document.getElementById("Ce");

ButtonElement.addEventListener("click", f);

function f() {
    console.log(document)
  console.log("\n\t Button Clicked");
  let url = "url.txt";
  const PromiseObject = fetch("http://127.0.0.1:5500/Anim/url.txt");
  console.log("\n\t" + JSON.stringify(PromiseObject));
  PromiseObject.then((res) => {
    console.log(res);
    return res.text();
  })
    .then((data) => {
      console.log(data);
      displayElement.innerHTML = data;
    })
    .catch((error) => {
      console.log(error);
    });
}

document.getElementById("Er").addEventListener("click", () => {
  console.log("\n\tCatch Error button clicked \n");
  fetch("v.json")
    .then((res) => {
      console.log(res);
      return res.text();
    })
    .then((data) => {
      console.log(data);
      displayElement.innerText = data;
    })
    .catch((error) => {
      console.log(error);
    });
});

CreateElement.addEventListener("click", () => {
  console.log("\n\t create Promise is clicked ..!");

  const myPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("2 seconds please");
      }, 2000);
    });
  };
  console.log(myPromise());
  displayElement.innerHTML = myPromise();
});
