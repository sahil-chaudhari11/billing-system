   let items=[];
    
   //click on add itmes 
   function addItems(){

    let itemName=document.getElementById('item-Name').value;
    let itemPrice=document.getElementById('item-Price').value;
    let itemQuantity=document.getElementById('item-Quantity').value;
    

if(itemName&& itemQuantity && itemPrice){
   items.push(
      {
         name:itemName,
         price:parseInt(itemPrice),
         quantity:itemQuantity


      }
   )
   console.log(items);
   showItems();
   calculatingTotalPrice();
   clearItem();

   
}
   
//show items function is used to item show on display 
}
   function showItems(){
      const tbody=document.querySelector('#billing-table tbody')
      tbody.innerHTML=""
      items.forEach(items=>{
         const tr=document.createElement('tr')

         const nameTD=document.createElement('td')
         nameTD.innerText=items.name;

         const QuantityTD=document.createElement('td')
         QuantityTD.innerText=items.quantity;

         const PriceTD=document.createElement('td')
         PriceTD.innerText=items.price;

         tr.appendChild(nameTD)
         tr.appendChild(QuantityTD)
         tr.appendChild(PriceTD)
         tbody.appendChild(tr)
      })
    
}

//final calculation

function calculatingTotalPrice(){
   let totalPrice=0;
   for(let i=0; i<items.length;i++){
      const item=items[i];
      totalPrice+=item.price*item.quantity;
      console.log(totalPrice);
      

   }
   document.getElementById('total-price').innerText=`Billing Amount:${totalPrice}.00`;
}

function clearItem(){
document.getElementById('item-Name').value="";
document.getElementById('item-Price').value="";
document.getElementById('item-Quantity').value="";


}