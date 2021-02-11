const buttons = document.querySelectorAll("button");

[].forEach.call(buttons, function (button) {
  button.addEventListener(
    "click",
    function () {
      //Lägg in och fyll datalagret vid checkout

      
      window.dataLayer = window.dataLayer || [];
      
      dataLayer.push({
        event: this,
        product: this.getAttribute("data-product"),
        value: this.getAttribute("data-price")
      });

      console.log(document.getElementById("pizza"))
      console.log(this.getAttribute("data-product"))

      window.location =
        "thankyou.html?product=" +
        button.getAttribute("data-product") +
        "&price=" +
        button.getAttribute("data-price");
    },
    false
  );
});
