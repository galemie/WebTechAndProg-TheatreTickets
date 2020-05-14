
//interactive elements input fields
const txtName = document.getElementById("name");
const txtAddress = document.getElementById("address");
const txtQuantity = document.getElementById("quantity");

//interactive elements show list
const imgFirstShow = document.getElementById("firstShow");
const imgSecondShow = document.getElementById("secondShow");
const imgThirdShow = document.getElementById("thirdShow");
const imgFourthShow = document.getElementById("fourthShow");
const validForm = document.getElementById("quantity");
//interactive elements delivery methods
const deliveryMethod = document.getElementsByName("deliveryMethod");

//interactive elements output fields
const txtPersonalDetails = document.getElementById("personalDetails");
const txtGivenAddress = document.getElementById("givenAddress");
const txtNoOfSeats = document.getElementById("noOfSeats");
const txtShowTitle = document.getElementById("showTitle");
const txtShowPrice = document.getElementById("showPrice");
const txtDeliveryName = document.getElementById("deliveryName");
const txtDeliveryCost = document.getElementById("deliveryCost");
const txtCost = document.getElementById("cost");
const txtDiscount = document.getElementById("discount");
const txtTotalCost = document.getElementById("totalCost");
//interactive elements button
const btnSubmit = document.getElementById("submit");
const btnBookNow = document.getElementById("bookNow");
const btnShowDiscount = document.getElementById("showDiscount");

let price;
let deliver;
let discount;

//values
const Phantom = parseFloat(79);
const Hamilton = parseFloat(85);
const Lion = parseFloat(67);
const Miss = parseFloat(83);

const eticket = parseFloat(0);
const collection = parseFloat(1.50);
const post = parseFloat(3.99);

//event listeners
imgFirstShow.addEventListener("click", firstShow);
imgSecondShow.addEventListener("click", secondShow);
imgThirdShow.addEventListener("click", thirdShow);
imgFourthShow.addEventListener("click", fourthShow);

deliveryMethod[0].addEventListener("change", deliveryName1);
deliveryMethod[1].addEventListener("change", deliveryName2);
deliveryMethod[2].addEventListener("change", deliveryName3);

btnSubmit.addEventListener("click", submit);
btnBookNow.addEventListener("click", bookNow);
btnShowDiscount.addEventListener("click", showDiscount);

//functions

//show menu functions
function firstShow() {
    imgFirstShow.setAttribute("class", "highlighted");
    imgSecondShow.removeAttribute("class");
    imgThirdShow.removeAttribute("class");
    imgFourthShow.removeAttribute("class");
    txtShowTitle.innerText = `Phantom`;
    txtShowPrice.innerText = ` £ ` + Phantom.toFixed(2);
    price = parseFloat(Phantom);
}

function secondShow() {
    imgSecondShow.setAttribute("class", "highlighted");
    imgFirstShow.removeAttribute("class");
    imgThirdShow.removeAttribute("class");
    imgFourthShow.removeAttribute("class");
    txtShowTitle.innerText = `Hamilton`;
    txtShowPrice.innerText = ` £ ` + Hamilton.toFixed(2);
    price = parseFloat(Hamilton);
}

function thirdShow() {
    imgThirdShow.setAttribute("class", "highlighted");
    imgFirstShow.removeAttribute("class");
    imgSecondShow.removeAttribute("class");
    imgFourthShow.removeAttribute("class");
    txtShowTitle.innerText = `Lion King`;
    txtShowPrice.innerText = ` £ ` + Lion.toFixed(2);
    price = parseFloat(Lion);
}

function fourthShow() {
    imgFourthShow.setAttribute("class", "highlighted");
    imgFirstShow.removeAttribute("class");
    imgSecondShow.removeAttribute("class");
    imgThirdShow.removeAttribute("class");
    txtShowTitle.innerText = `Miss Saigon`;
    txtShowPrice.innerText = ` £ ` + Miss.toFixed(2);
    price = parseFloat(Miss);
}


//delivery menu functions
function deliveryName1() {
    txtDeliveryName.innerText = `e-ticket`;
    txtDeliveryCost.innerText = ` £ ` + eticket.toFixed(2);
    deliver = parseFloat(eticket);
}
function deliveryName2() {
    txtDeliveryName.innerText = `collection`;
    txtDeliveryCost.innerText = ` £ ` + collection.toFixed(2);
    deliver = parseFloat(collection);
}
function deliveryName3() {
    txtDeliveryName.innerText = `by post`;
    txtDeliveryCost.innerText = ` £ ` + post.toFixed(2);
    deliver = parseFloat(post);
}

//submit function
function submit() {
    if (validForm.checkValidity()) {
        event.preventDefault();

    const txtPersonalDetails = document.getElementById("name").value;
    document.getElementById("personalDetails").innerHTML = txtPersonalDetails;

    const txtGivenAddress = document.getElementById("address").value;
    document.getElementById("givenAddress").innerHTML = txtGivenAddress;

    const txtNoOfSeats = document.getElementById("quantity").value;
    document.getElementById("noOfSeats").innerHTML = txtNoOfSeats;
}
}

function bookNow() {
    if (validForm.checkValidity()) {
        event.preventDefault();

    const q = parseFloat(txtNoOfSeats.value);
    const s = parseFloat(`${price}`);
    const d = parseFloat(`${deliver}`);
    const costT = parseFloat(d+(q*s));

   
    txtCost.innerText = ` £ ${costT}`;

}
}
function showDiscount() {
    if (validForm.checkValidity()) {
        event.preventDefault();
    const q = parseFloat(txtNoOfSeats.value);
    const s = parseFloat(`${price}`);
    const d = parseFloat(`${deliver}`);
    const costT = parseFloat(d+(q*s));

    if (q >= 10) {
        discount = parseFloat(`${(15 / 100) * costT}`);
        }
    
        else if (q >= 6) {
            discount = parseFloat(`${(10 / 100) * costT}`);
        }
    
        else if (q >= 0){
            discount = parseFloat(0);
        }
        
    txtDiscount.innerText = ` £ ${parseFloat(discount).toFixed(2)}`;
    txtTotalCost.innerText = ` £ ${parseFloat(costT - discount).toFixed(2)}`;
}
}