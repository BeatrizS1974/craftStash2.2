document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("submitBtn");

    if (submitBtn) {
        submitBtn.addEventListener("click", function() {
            const productDescription = document.getElementById("productDescription").value;
            const color = document.getElementById("color").value;
            const manufacturer = document.getElementById("manufacturer").value;
            const productType = document.getElementById("productType").value;
            const location = document.getElementById("location").value;
            const quantity = document.getElementById("quantity").value;

    
    
    if (!productDescription || !color || !manufacturer || !productType || !location || !quantity) {
        alert("All fields are required!");
        return;  // Stop the form submission if fields are empty
    }
    const data = {
        ProductDescription: productDescription,
        Color: color,
        ManufacturerName: manufacturer,
        ProductType: productType,
        Location: location,
        Quantity: quantity,
    };

            console.log("Product Description:" , productDescription);
            console.log("Color:" , color);
            console.log("Manufacturer:" , manufacturer);
            console.log("Product Type:" , productType);
            console.log("Location:" , location);
            console.log("Quantity:" , quantity);   

            alert("Submission Successful!");
        });

    } else {
        console.error("Submit button with ID 'submitBtn' not found.");

    }

    // Clear form fields
    const clearBtn = document.getElementById("clearBtn");
    if (clearBtn) {
        clearBtn.addEventListener("click", function() {
            document.getElementById("dataForm").reset();
        });
    }

});

    
