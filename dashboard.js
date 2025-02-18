
fetch("http://localhost:5500/orders")
    .then(response => response.json())
    .then(orders => {
        const orderContainer = document.getElementById("orderHistory");
        orders.forEach(order => {
            const div = document.createElement("div");
            div.innerHTML = `<strong>Order #${order.id}</strong>: <span style="margin-left:20px">${order.product}<span> - <strong>$${order.price}</strong> (${order.date})`;
            div.style.padding = "10px";
div.style.margin = "5px 0";
div.style.backgroundColor = "rgb(237, 234, 234)";
div.style.fontFamily = "Arial, sans-serif";
            
            orderContainer.appendChild(div);
        });
    })
    .catch(error => console.error("Error fetching orders:", error));

    const update=document.getElementById("update");
    const updateForm=document.getElementById("updateForm");
    update.addEventListener("click",()=>{
        updateForm.style.display="block";
    });

