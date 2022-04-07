function sortMe(){
    var Asc = document.getElementById('sort1'); 
    var desc = document.getElementById('sort2');
    if (desc == "TyCompany") {
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
        elseif(desc == "TyModel"); {
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
        elseif(desc == "TyMemory"); {
            if (Asc == "ascend") {
                productarray.sort((a, b) => a.TyMemory - b.TyMemory);
            }
            else if (Asc == "decend") {

                productarray.sort((a, b) => a.TyMemory - b.TyMemory);

            } else {

            }
        }
        elseif(desc == "TyPrice"); {
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

// function validateForm() {
//     let x = document.forms["myForm"]["company"].value;
//     if (x == "") {
//       alert("company must be filled out");
//       return false;
//     }
//   }

