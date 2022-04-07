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
