function sortMe(){
    var Asc = document.getElementById('sort1'); 
    var desc = document.getElementById('sort2');
    if (desc == "company") {
        if (Asc == "ascend") {
            productarray.sort((a, b) => {
                if (a.TyCompany < b.TyCompany) {
                    return -1;
                }
                if (a.TyCompany > b.TyCompany) {
                    return 1;
                }
                return 0;
            });
        }
        else if (Asc == "decend") {
            productarray.sort((a, b) => {
                if (a.TyCompany > b.TyCompany) {
                    return -1;
                }
                if (a.TyCompany < b.TyCompany) {
                    return 1;
                }
                return 0;
            });
        }
        else {
            console.log(productarray);
        }
        elseif(desc == "model"); {
            if (Asc == "ascend") {
                productarray.sort((a, b) => {
                    if (a.TyModel < b.TyModel) {
                        return -1;
                    }
                    if (a.TyCompany > b.TyCompany) {
                        return 1;
                    }
                    return 0;
                });
            }
            else if (Asc == "decend") {
                productarray.sort((a, b) => {
                    if (a.TyModel > b.TyModel) {
                        return -1;
                    }
                    if (a.TyModel < b.TyModel) {
                        return 1;
                    }
                    return 0;
                });
            }
            else {

            }
        }
        elseif(desc == "memory"); {
            if (Asc == "ascend") {
                productarray.sort((a, b) => a.TyMemory - b.TyMemory);
            }
            else if (Asc == "decend") {

                productarray.sort((a, b) => a.TyMemory - b.TyMemory);

            } else {

            }
        }
        elseif(desc == "price"); {
            if (Asc == "ascend") {
                productarray.sort((a, b) => a.TyPrice - b.TyPrice);
            }
            else if (Asc == "decend") {

                productarray.sort((a, b) => a.TyPrice - b.TyPrice);

            } else {
            }
        } 
        addInfo();
    };
}

   function updateFun(){
    var item = document.getElementById("SelectedProduct").value;
    var index = document.getElementById("Updatedquantity").value;
    var x =  productarray;
    
    Data.TyQuantity = NewQuantity;

    document.getElementById("UpdatedItems").innerHTML = options;
    document.getElementById("SelectedProducts").innerHTML =options;
       addInfo();

    }

    productarray.push(product);
    addInfo();

     var options = "<option>-select field-</option>"
     productarray.forEach((element, index) => {
        options += '<option value ="${index}">${element.TyCompany} ${element.TyModel}</option>'
     });
     document.getElementById("SelectedProducts").innerHTML = option;
     document.getElementById("UpdatedItems").innerHTML = option;
    

     function itemUpdate(){
         var index = document.getElementById("Updateditems").value
         var newquantity = document.getElementById("Updatedquantity").value 
         var data = productarray[index];
         data.TyQuantity = NewQuantity;
         addInfo();
     }

     function del(index){
        productarray.splice(index,1);
        addInfo();
     };

     document.getElementById("box").checked;

     function check(index){
        var value = check[index];
        productarray.splice(index,1);
        addInfo();
     }