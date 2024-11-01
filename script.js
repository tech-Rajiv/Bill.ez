const products = [
  //sparklers
  { category: "sparklers", name: "7 cm electric sparklers", price: 20, imageUrl: "products/sparklers/7cm.jpg" },
  { category: "sparklers", name: "10 cm green sparklers", price: 30, imageUrl: "products/sparklers/10cm.jpg" },
  { category: "sparklers", name: "12 cm 50/50 sparklers", price: 40, imageUrl: "products/sparklers/12cm.jpg" },
  { category: "sparklers", name: "12 no Pinky Ruby Electric", price: 50, imageUrl: "products/sparklers/15cm.jpg" },
  { category: "sparklers", name: "15 cm Bharat Couloured", price: 60, imageUrl: "products/sparklers/18cm.jpg" },
  { category: "sparklers", name: "30 cm Bharat Couloured", price: 60, imageUrl: "products/sparklers/30cm.jpg" },
  { category: "sparklers", name: "5 in 1 mingle-mix maharaja", price: 30, imageUrl: "products/sparklers/5in1minglemix.jpg" },
  { category: "sparklers", name: "5 in 1 multi-pack sparklers", price: 150, imageUrl: "products/sparklers/5in1.jpg" },
  { category: "sparklers", name: "75 cm Mahraja Mix", price: 400, imageUrl: "products/sparklers/75cm.jpg" },

  //chalri
  { category: "chakri", name: "Royal violetta Spinner", price: 140, imageUrl: "products/chakri/royalspinner.jpg" },
  { category: "chakri", name: "ARD's Special Chakkar", price: 150, imageUrl: "products/chakri/ard.jpg" },
  { category: "chakri", name: "Spinner Special shivram", price: 200, imageUrl: "products/chakri/shivramSpinnerSpecial.jpg" },
  { category: "chakri", name: "Winner Special kings", price: 240, imageUrl: "products/chakri/winner.jpg" },
  { category: "chakri", name: "Spinner Delux shivram", price: 280, imageUrl: "products/chakri/spinnerDelux.jpg" },

//bomb
  { category: "bomb", name: "MIRCHI bomb", price: 120, imageUrl: "products/bomb/mirchi.jpg" },
  { category: "bomb", name: "Cammando bomb", price: 100, imageUrl: "products/bomb/commando.jpg" },
  { category: "bomb", name: "Night King bomb", price: 140, imageUrl: "products/bomb/nightking.jpg" },
  { category: "bomb", name: "chhote Sarkar bomb", price: 160, imageUrl: "products/bomb/sarkar.jpg" },
  { category: "bomb", name: "Big Marshal bomb", price: 220, imageUrl: "products/bomb/bigmarshal.jpg" },
  { category: "bomb", name: "Vip bomb", price: 250, imageUrl: "products/bomb/vip.jpg" },
  { category: "bomb", name: "Andhi Tufaan bomb", price: 350, imageUrl: "products/bomb/andhitufaan.jpg" },

//kids
{ category: "kids", name: "popup 1pcs", price:10, imageUrl: "products/kids/popup.jpg" },
{ category: "kids", name: "full box-Popup 50pcs", price:400, imageUrl: "products/kids/popupbox.jpg" },
{ category: "kids", name: "playboy kitkat", price:40, imageUrl: "products/kids/playboy.jpg" },
{ category: "kids", name: "Pim-Pom kitkat", price:50, imageUrl: "products/kids/pimpom.jpg" },
{ category: "kids", name: "Throw bomb 1pcs", price:20, imageUrl: "products/kids/throw.jpg" },
{ category: "kids", name: "full box-Throw bomb 10pcs", price:200, imageUrl: "products/kids/throwbox.jpg" },
{ category: "kids", name: "bidi bomb 1pcs", price:20, imageUrl: "products/kids/bidi.jpg" },
{ category: "kids", name: "full box-bidi bomb 10pcs", price:200, imageUrl: "products/kids/bidibox.jpg" },


//kothi
{ category: "kothi", name: "Flower pot Big", price:70, imageUrl: "products/kothi/bigpot.jpg" },
{ category: "kothi", name: "5g Gain color kothi", price:120, imageUrl: "products/kothi/5g.jpg" },
{ category: "kothi", name: "jay Ambe Color kothi", price:150, imageUrl: "products/kothi/colorkothi.jpg" },
{ category: "kothi", name: "Standard Color kothi", price:180, imageUrl: "products/kothi/standard.jpg" },
{ category: "kothi", name: "Pushpa2 Color kothi", price:180, imageUrl: "products/kothi/pushpa.jpg" },
{ category: "kothi", name: "King Color Jumbo-kothi", price:200, imageUrl: "products/kothi/kingjumbo.jpg" },
{ category: "kothi", name: "azad Little Flowerpots", price:240, imageUrl: "products/kothi/matlakothi.jpg" },
{ category: "kothi", name: "azad Anarkali Flowerpots", price:260, imageUrl: "products/kothi/anarkali.jpg" },
{ category: "kothi", name: "Aryan Color kothi Delux", price:250, imageUrl: "products/kothi/aryandelux.jpg" },
{ category: "kothi", name: "Anjali Multi- Clr-kothi 15pcs", price:350, imageUrl: "products/kothi/anjali.jpg" },

//shorts
{ category: "shots", name: "Hindustan, 3G 3 shots ", price:300, imageUrl: "products/shots/hindustan.jpg" },
{ category: "shots", name: "Panch Avatar 5 shots ", price:240, imageUrl: "products/shots/panchavatar.jpg" },
{ category: "shots", name: "Avengers 5 shots ", price:300, imageUrl: "products/shots/avengers.jpg" },
{ category: "shots", name: "7 shots aryan", price:300, imageUrl: "products/shots/7shots.jpg" },
{ category: "shots", name: "12 shots Skyworks Bentex", price:300, imageUrl: "products/shots/12shot.jpg" },
{ category: "shots", name: "fteen 15 shots simba", price:500, imageUrl: "products/shots/fteen.jpg" },
{ category: "shots", name: "BhavikJi multi-clr 15shot", price:700, imageUrl: "products/shots/fteen.jpg" },
{ category: "shots", name: "20 shots Atlas blackberry", price:400, imageUrl: "products/shots/atlas.jpg" },
{ category: "shots", name: "25 shots Fantasia", price:550, imageUrl: "products/shots/fantasia.jpg" },
{ category: "shots", name: "TROY 25 shots", price:840, imageUrl: "products/shots/troy.jpg" },
{ category: "shots", name: "AMERICAN EXPRESS BIG", price:1000, imageUrl: "products/shots/americanexpress.jpg" },

//laar
{category: "laar", name: "BIJLI small", price:20, imageUrl: "products/laar/bijlis.jpg"},
{category: "laar", name: "BIJLI big", price:30, imageUrl: "products/laar/bijlib.jpg"},
{category: "laar", name: "2Sound Coronataion Gaint", price:50, imageUrl: "products/laar/30.jpg"},
{category: "laar", name: "Golden Hulk, delux eagle", price:60, imageUrl: "products/laar/60.jpg"},
{category: "laar", name: "Madagasacar Delux", price:200, imageUrl: "products/laar/mada.jpg"},
{category: "laar", name: "Aladin 40 Delux", price:250, imageUrl: "products/laar/aladin.jpg"},



//laarbig 
{category: "laarbig", name: "1000 laar Vip", price:300, imageUrl: "products/laar/1000.jpg"},
{category: "laarbig", name: "2000 laar ", price:600, imageUrl: "products/laar/2000.jpg"},
{category: "laarbig", name: "5000 laar Glad", price:1400, imageUrl: "products/laar/5000.jpg"},


  ]



//search function
const searchInput = document.querySelector('.searchInput');
const searchListArea = document.querySelector('.searchListShowArea');

const searchfunction = () => {
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value;
    searchListArea.style.display = "block";

    const filteredArray = products.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    let temp = "";

    filteredArray.forEach(item => {
      const highlightedName = item.name.replace(searchTerm, match => `<span class="bg-yellow-200">${match}</span>`);

      temp += `
        <div class="w-full h-[60px] flex items-center justify-between">
          <h2>${highlightedName}</h2>
          <button data-price="${item.price}"
            data-product="${item.name}" 
            data-url="${item.imageUrl}"
            class="shadow rounded-xl text-center w-[50px] h-[30px] bg-gradient-to-r from-orange-400 to-amber-400 hover:to-orange-400 px-2"
            type="submit">Add
          </button>
        </div>`;
    });
    searchListArea.innerHTML = temp;
  });

  //focusout
  searchInput.addEventListener("focusout", () => {
    setTimeout(() => {
      searchListArea.style.display = "none";
      searchInput.value = "";
    }, 200)

  });
}
searchfunction();

//adding thorugh Search
searchListArea.addEventListener("click", (e) => {
  let quantity = 1;
  if (e.target.tagName == "BUTTON") {
    const product = e.target.dataset.product;
    const price = Number(e.target.dataset.price);
    const url = e.target.dataset.url
    maintainOrdersArray(product, price, quantity,url)


  }
})







//showing product SubCatagory
const showSubCatagory = (n) => {
  console.log(n)
  const filteredArray = products.filter(item => item.category.toLowerCase() === n.toLowerCase());

  console.log(filteredArray);
  const subcategory = document.querySelector('.cardProducts')
  subcategory.innerHTML = "";
  let temp = "";
  filteredArray.forEach(item => {
    temp += `<div class="bg-white rounded-lg shadow-lg w-[255px] flex-shrink-0">
          <picture>
  <source srcset="${item.imageUrl}" type="image/webp">
  <source srcset="${item.imageUrl}" type="image/jpeg">
  <img  class="w-full h-56 object-cover rounded-t-lg" src="${item.imageUrl}" srcset="large-image.jpg 1024w, medium-image.jpg 640w, small-image.jpg 320w" 
  sizes="(max-width: 600px) 320px, (max-width: 1024px) 640px, 1024px"
  alt="description">
</picture>
            <div class="mt-2 flex text-wrap  flex-col px-2">
              <div class=" px-1 bg-white w-full">
                <h4 class="w-full text-gray-700 text-base leading-tight">${item.name}</h4>
               <div class="flex justify-between mt-2 ">
                <h2 class="text-gray-700">₹<span class="text-green-600 text-2xl">${item.price}</span></h2>
                <div class="quantityDiv flex justify-around items-center">
                 <span class="minusQuantity px-4 py-1 rounded-xl bg-gray-200">-</span><span class="quantity text-center w-10 text-lg"> 01 </span><span class="plusQuantity px-4 rounded-xl bg-gray-200 py-1 ">+</span>
              </div>
               </div>
              </div>
                <button class="my-2 cardInfo bg-gradient-to-r from-orange-400 to-amber-400  px-2 py-2 rounded-lg w-full text-center "  data-product="${item.name}"  data-price="${item.price}" data-url="${item.imageUrl}" type="button">Add To Cart</button>
             
          </div>
        </div>`
  })
  subcategory.innerHTML = temp;

}
document.querySelector('.categories').addEventListener("click", (e) => {
  const name = e.target.dataset.product
  //console.log(name)
  if (name) {
    showSubCatagory(name);
  }
})


showSubCatagory("kids")

//quantity
const cardProducts = document.querySelector('.cardProducts')
cardProducts.addEventListener("click", (e) => {
  //console.log(e.target.classList)
  let quantityDiv = e.target.parentElement.querySelector('.quantity')

  if (e.target.classList.contains("plusQuantity")) {
    quantityDiv.innerHTML = String(Number(quantityDiv.innerHTML) + 1).padStart(2, '0');
  }

  if (e.target.classList.contains("minusQuantity") && Number(quantityDiv.innerHTML) >= 2) {
    quantityDiv.innerHTML = String(Number(quantityDiv.innerHTML) - 1).padStart(2, '0');
  }

  if (e.target.tagName == "BUTTON") {
    e.target.innerHTML = `<div class="flex gap-2 justify-center" ><svg class="" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" id="Check--Streamline-Sharp" height="20" width="20"><desc>Check Streamline Icon: https://streamlinehq.com</desc><g id="check--check-form-validation-checkmark-success-add-addition-tick"><path id="Vector 2356 (Stroke)" fill="#000000" fill-rule="evenodd" d="M23.914 6.914 8.5 22.328 0.086 13.914l2.828 -2.828L8.5 16.672 21.086 4.086l2.828 2.828Z" clip-rule="evenodd" stroke-width="1"></path></g></svg>added</div>`
    setTimeout(() => {
      e.target.innerHTML = "Add To Cart"
    }, 800)

    const quantity = Number(quantityDiv.innerHTML)
    const product = e.target.dataset.product;
    const price = Number(e.target.dataset.price);
    const src = e.target.dataset.url;

    // console.log(quantity)

    //addItemFunc(product, price, quantity);
    maintainOrdersArray(product, price, quantity, src)
    document.querySelectorAll('.quantity').forEach(item => {
      item.innerHTML = "01";
    })

  }
})

let ordersArray = []
//maimtainorderArray
const maintainOrdersArray = (productx, pricex, quantityx, srcx) => {

  for (let item in ordersArray) {
    if (ordersArray[item].product == productx) {

      ordersArray[item].quantity += quantityx;
      ordersArray[item].totalPrice += quantityx * pricex
      //console.log(ordersArray)
      addListThroghObject(ordersArray)
      return
    }
  }
  const newobj = {
    product: productx,
    price: pricex,
    quantity: quantityx,
    totalPrice: pricex * quantityx,
    src: srcx
  }
  ordersArray.unshift(newobj)
  addListThroghObject(ordersArray)
  //console.log(ordersArray)
}



const showOrderLists = document.querySelector('.showOrderLists')
const addListThroghObject = (array) => {
  if (array) {
    let clutter = "";
    showOrderLists.innerHTML = "";
    array.forEach(item => {
      clutter += `<div data-delete="${item.totalAmount}" data-product="${item.product}" class="orderlist  my-2 max-w-[650px] mx-auto px-2 ">
        <div class="popular bg-white p-1 rounded-2xl flex items-center justify-between  w-[100%] items-center">
          <div class="left flex gap-3">
            <div class="w-[140px]  rounded-2xl border-4 border-white overflow-hidden">
              <img class="w-full h-full object-cover" src="${item.src}" alt="">
            </div>
            <div class="data py-2 w-full">
              <h2 class="leading-none font-semibold">${item.product}</h2>
              <h4 class="leading-none text-sm mt-1 font-semibold opacity-40">${item.price}(${item.quantity})</h4>
              <h5 class="mt-1 font-semibold text-green-700">₹${item.totalPrice}</h5>
            </div>
          </div>
          <div class=" div mx-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="deleteIcon" viewBox="0 0 24 24" width="25px" fill="gray">
              <path class="deleteIcon"  d="M20 7V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V7H2V5H22V7H20ZM11 9V11H13V9H11ZM11 12V14H13V12H11ZM11 15V17H13V15H11ZM7 2H17V4H7V2Z"></path>
            </svg>
          </div>
        </div>
      </div>`
      showOrderLists.innerHTML = clutter
    })
    showFinalPrice()
    showTotalQuantity()
    addHistoryButtons()

  } else {
    showOrderLists.innerHTML = "";
    showFinalPrice()
    showTotalQuantity()

  }
  //console.log(ordersArray)
}





//delete in obejct and list
showOrderLists.addEventListener("click", (e) => {
  const orderlist = e.target.closest('.orderlist')
  //console.log(orderlist.dataset.product)
  //console.log(e.target.classList)
  if (e.target.classList.contains('deleteIcon')) {
    //console.log("delete")
    const toRemove = orderlist.dataset.product
    // console.log(toRemove)
    const index = ordersArray.findIndex(item => item.product.toLowerCase() == toRemove.toLowerCase())
    console.log(index)
    if (index >= 0) {
      ordersArray.splice(index, 1)
    }
    addListThroghObject(ordersArray)


  }
});

let numberOfItem = 0;
const showTotalQuantity = () => {
  numberOfItem = 0;
  ordersArray.forEach(item => {
    numberOfItem += item.quantity
  })
  document.querySelector('.quantityDiv').innerHTML = numberOfItem;
  // console.log(numberOfItem)

}


let amount = 0;
const showFinalPrice = () => {
  //  console.log("sum")
  let sum = 0;
  ordersArray.forEach(item => {
    sum += item.totalPrice
  })
  const displayFinalPrice = document.querySelector('.displayFinalPrice')
  displayFinalPrice.innerHTML = sum;
  amount = sum;

}


//addbutton dynamic
const addHistoryButtons = () => {
  //  console.log("here")
  if (ordersArray.length >= 1) {
    document.querySelector('.buttonsDynamic').style.display = "block";
    document.querySelector('.message').innerHTML = "";
  } else {
    document.querySelector('.buttonsDynamic').style.display = "none";
    document.querySelector('.message').innerHTML = "No Items to Display"
  }
}


//clearButton working
document.querySelector('.clearButton').addEventListener("click", () => {
  ordersArray = [];
  addListThroghObject()
  addHistoryButtons()
})


//addhistorymodal show
document.querySelector('.addHistoryBtn').addEventListener("click", () => {
  document.querySelector('.modalAddHistory').style.display = "block";
  document.querySelector('.priceTopay').innerHTML= amount;
  /*
  const qrdiv= document.querySelector('.qrdiv');
  qrdiv.innerHTML="";
  const url = `upi://pay?pa=9998487424@pthdfc&pn=YourNameHere&am=${amount}&tn=Payment for Services&cu=INR`;
  $(qrdiv).qrcode({
      text:url,
      width : 190,
      height : 190,
    }) */
  
  
  

})



//sortmethord
const sortPrice = () => {
  ordersArray.sort((a, b) => b.totalPrice - a.totalPrice)
  addListThroghObject(ordersArray)
}
const sortQuantity = () => {
  ordersArray.sort((a, b) => b.quantity - a.quantity)
  addListThroghObject(ordersArray)
}
document.querySelector('.sortPrice').addEventListener("click", sortPrice)
document.querySelector('.sortQuantity').addEventListener("click", sortQuantity)











document.querySelector('.downloadPdfAndAddHistoryBtn').addEventListener("click", () => {
  const date = new Date();

  const detailsObj = {
    "name": document.querySelector('.nameInput').value || "User",

    "phone": document.querySelector('.phoneInput').value || "XXX",

    "email": document.querySelector('.emailInput').value || "none",

    "date": date.toLocaleDateString(),

    "time": date.toLocaleTimeString(),

    "finalAmount": amount,

    "totalQuantity": numberOfItem,
  }

  //console.log(ordersArray)

  //console.log(ordersArray)
  // addDatafunction(detailsObj,ordersArray)
  detailsObj.totalitems = ordersArray;
  addHistory(detailsObj)
  addDatafunction(detailsObj)

  document.querySelector('.modalAddHistory').style.display = "none";
})

document.querySelector('.closeModal').addEventListener("click", () => {
  document.querySelector('.modalAddHistory').style.display = "none";
})




function addHistory(object) {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.unshift(object);
  localStorage.setItem("orders", JSON.stringify(orders));
};









//module database connections here.
const getDatabtn = document.querySelector('.getDatabtn')
import { app, auth, signOut } from "./firebase.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";




//db
const db = getDatabase(app, "https://diwali-shop-default-rtdb.asia-southeast1.firebasedatabase.app");




//adddata by index
async function addDatafunction(orderDetails) {
  const user = auth.currentUser; // Get the current user
  if (user) {
    const userRef = ref(db, `users/${user.uid}/orders`); // Reference to the user's orders
    const orderKey = Date.now(); // Create a unique key using timestamp

    try {
      await set(ref(db, `users/${user.uid}/orders/${orderKey}`), orderDetails); // Save order
      alert("Order saved successfully!");
      window.location.reload();

    } catch (error) {
      console.error("Error saving order:", error);
    }
  } else {
    console.log("No user signed in.");
  }
};




;

// Function to get orders and print them on the DOM
/*
const getOrders = async () => {
  const ordersListContainer = document.getElementById('ordersList'); // Reference to the DOM container
  const user = auth.currentUser; // Get the current user
  
  if (user) {
    const ordersRef = ref(db, `users/${user.uid}/orders`); // Reference to the user's orders

    try {
      const snapshot = await get(ordersRef);
      if (snapshot.exists()) {
        console.log(snapshot.val())
        const orders = snapshot.val();
        ordersListContainer.innerHTML = ''; // Clear existing content

        // Iterate over the orders and create DOM elements
        Object.keys(orders).forEach(orderKey => {
          const order = orders[orderKey]; // Access the order entry

          // Create a div to hold the order details
          const orderDiv = document.createElement('div');
          orderDiv.classList.add('order-card', 'p-4', 'mb-4', 'bg-gray-100', 'rounded-lg', 'shadow');

          // Set the inner HTML of the orderDiv
          orderDiv.innerHTML = `
            <h3 class="text-lg font-semibold mb-2">Order from ${order.date} at ${order.time}</h3>
            <p><strong>Name:</strong> ${order.name}</p>
            <p><strong>Phone:</strong> ${order.phone}</p>
            <p><strong>Email:</strong> ${order.email}</p>
            <p><strong>Total Amount:</strong> $${order.finalAmount}</p>
            <p><strong>Total Quantity:</strong> ${order.totalQuantity} items</p>
            <h4 class="font-bold">Items:</h4>
            <ul class="list-disc pl-4">
              ${order.totalitems.map(item => `<li>${item.product} - ${item.quantity} x $${item.price} = $${item.totalPrice}</li>`).join('')}
            </ul>
          `;

          // Append the orderDiv to the ordersListContainer
          ordersListContainer.appendChild(orderDiv);
        });
      } else {
        ordersListContainer.innerHTML = '<p>No orders found.</p>'; // Show message if no orders exist
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  } else {
    console.log("No user signed in.");
  }
};*/




//signout
const signoutbtn = document.querySelector('.signoutbtn');
const usersignout = async () => {
  try {
    await signOut(auth);
    window.location.href = "index.html";
  } catch (error) {
    console.error("Sign-out error:", error);
  }
};



//eventlistners
signoutbtn.addEventListener("click", usersignout);
//   getDatabtn.addEventListener("click",getOrders)
