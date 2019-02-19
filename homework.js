// -------------------------- Home work 16 --------------------------
// -------------------------- ФИО Матыка А.С  --------------------------


//-------------------------------------------1 задание 1 способ ------------------------------------------------
/**
 * @description - main class, parent
 * @param {string} name - name of planet (class property)
 */
function Planet(name) {
    this.name = name || "earth";
    /**
     * @description - function class method that return string with name property
     * @returns {string}
     */
    this.getName = function () {
        return 'Planet name is ' + this.name;
    };
}

/**
 * @description - inheritor сlass that override getName method
 * @param {string} satelliteName - name of satellite (class property)
 */
function PlanetWithSatellite(name, satelliteName) {
    Planet.call(this, name);

    this.satelliteName = satelliteName;
    var parentgetName = this.getName;
    this.getName = function () {
        return "The satellite is " + this.satelliteName + "." + parentgetName.call(this);
    };
}

var earth = new PlanetWithSatellite('earth', 'moon');
document.write(earth.getName());



// -----------------------------------------------1 задание через прототип------------------------------------------------
/**
 * @description - main class, parent
 * @param {string} name - name of planet (class property)
 */
function Planet(name) {
    this.name = name;
}
Planet.prototype.getName = function () {
    return 'Planet name is ' + this.name;
};

/**
 * @description - inheritor сlass that override getName method
 * @param {string} satelliteName - name of satellite (class property)
 */
function PlanetWithSatellite(name, satelliteName) {
    Planet.call(this, name);
    this.satelliteName = satelliteName;
}

PlanetWithSatellite.prototype = Object.create(Planet.prototype);
PlanetWithSatellite.prototype.constructor = PlanetWithSatellite;

PlanetWithSatellite.prototype.getName = function () {
    return 'The name is ' + Planet.prototype.getName.call(this) + "The satellite is " + this.satelliteName;
};

var earth = new PlanetWithSatellite('earth', 'moon');
earth.getName();


// -----------------------------------------------2 задание через прототипы 1 способ ------------------------------------------------
/**
 * @description - main class, parent
 * @param {string} name - name of  Building(class property)
 *  @param {number} floor - count of  floor(class property)
 */
function Building(name, floor) {
    this.name = name || "дом";
    this.floor = floor || 10;
}
Building.prototype.getFloor = function () {
    return this.floor;
};

/**
 * @description - inheritor сlass that override getFloor method
 * @param {name} name- name of LiveBuilding (class property)
 * @param {flat} flat- count of flat (class property)
 */
function LiveBuilding(name, flat) {
    Building.call(this, arguments);

    this.name = name || "жылой дом";
    this.flat = flat || 10;
}

LiveBuilding.prototype = Object.create(Building.prototype);
LiveBuilding.prototype.constructor = LiveBuilding;

LiveBuilding.prototype.getFloor = function () {
    return this.name + " <br>" + 'количество квартир на этаже ' + this.flat + "<br>Общее количество квартир в доме=" + this.flat * Building.prototype.getFloor.call(this) + "<br>";
};
LiveBuilding.prototype.getFlat = function () {
    return this.flat;
};
var home = new LiveBuilding;
document.write(home.getFloor()); //1 жилой дом

/**
 * @description - inheritor сlass that override getShopFloor method
 * @param {string} name- name of ShoppingCenter (class property)
 * @param {Number} countShopFloor- count of floor (class property)
 */
function ShoppingCenter(name, countShopFloor) {
    LiveBuilding.call(this, arguments);
    this.countShopFloor = countShopFloor || 10;
    this.name = name || "магазин";
}

ShoppingCenter.prototype = Object.create(LiveBuilding.prototype);
ShoppingCenter.prototype.constructor = ShoppingCenter;

ShoppingCenter.prototype.getShopFloor = function () {
    return this.name + " <br> " + 'количество этажей' + this.countShopFloor + "<br>.Количество магазинов=" + this.countShopFloor * LiveBuilding.prototype.getFlat.call(this);
};

var shop = new ShoppingCenter;
document.write(shop.getShopFloor()); //магазин

//--------------------------------------2 задание через фиональное наследование-------------------------------------
/**
 * @description - main class, parent
 * @param {string} name - name of  Building(class property)
 *  @param {number} floor - count of  floor(class property)
 */
function Building(name, floor) {
    this.name = name || "дом";
    this.floor = floor || 10;
    this.getFloor = function () {
        return this.floor;
    };
}

/**
 * @description - inheritor сlass that override getFloor method
 * @param {name} name- name of LiveBuilding (class property)
 * @param {flat} flat- count of flat (class property)
 */
function LiveBuilding(name, flat) {
    Building.call(this, arguments);

    this.name = name || "жылой дом";
    this.flat = flat || 10;
    var getFloor = this.getFloor;
    this.getFloor = function () {
        return this.name + " <br>" + 'количество квартир на этаже ' + this.flat + "<br>Общее количество квартир в доме=" + this.flat * getFloor.call(this) + "<br>";
    };
}

var home = new LiveBuilding;
document.write(home.getFloor()); //1 жилой дом

/**
 * @description - inheritor сlass that override getShopFloor method
 * @param {string} name- name of ShoppingCenter (class property)
 * @param {Number} countShopFloor- count of floor (class property)
 */
function ShoppingCenter(name, countShopFloor) {
    LiveBuilding.call(this, arguments);
    this.countShopFloor = countShopFloor || 10;
    this.name = name || "магазин";
    this.getShopFloor = function () {
        return this.name + " <br> " + 'количество этажей' + this.countShopFloor + "<br>.Количество магазинов=" + this.countShopFloor * this.flat;
    };
}

var shop = new ShoppingCenter;
document.write(shop.getShopFloor()); //магазин

//-----------------------------------------------3 задание es 5----------------------------------------
/**
 * @desc main class Furniture
 * @param {string} name - Furniture name
 * @param {number} price - Furniture price
 */
function Furniture(name, price) {
    this.name = name;
    this.price = price;
}

Furniture.prototype.getInfo = function () {
    return "name:" + this.name + " price:" + this.price;
};

/**
* @desc inheritor сlass that override getInfo method
* @param {number} price -  HomeFurnitures price
* @param {string} name -  HomeFurnitures name
* @param {boolean} hasCompTable -  HomeFurnitures chair
*/
function HomeFurnitures(name, price, chair) {
    Furniture.call(this, name, price);
    this.chair = chair || false;
}

HomeFurnitures.prototype = Object.create(Furniture.prototype);
HomeFurnitures.prototype.constructor = HomeFurnitures;

HomeFurnitures.prototype.getInfo = function () {
    return Furniture.prototype.getInfo.call(this) + " наличие стула :" + this.chair + "<br>"
};

let homeChair = new HomeFurnitures('home furniture', 100, true);
document.write(homeChair.getInfo());

/**
* @desc office furniture
* @param {string} name - office furniture name
* @param {number} price - office furniture price
* @param {boolean} table - office furniture table
*/
function OfficeFirniture(name, price, table) {
    Furniture.call(this, name, price);
    this.table = table || false;
}

OfficeFirniture.prototype = Object.create(Furniture.prototype);
OfficeFirniture.prototype.constructor = OfficeFirniture;

OfficeFirniture.prototype.getInfo = function () {
    return Furniture.prototype.getInfo.call(this) + " есть ли стол :" + this.table;
};
let office = new OfficeFirniture('office furniture', 150, true);
document.write(office.getInfo());


//------------------------------------------------------4 задание es5--------------------------------------------

/**
* @desc main Class User
* @param {string} name - User name
* @param {string} dateReg - User dateReg
*/
var now = new Date().toLocaleString(); // просто переменная которую я подставляю вместо значени где дата регистрации.

function User(name, dateReg) {
    this.dateReg = dateReg || now;
    this.name = name || "Васька";
}

User.prototype.getInfo = function () {
    return "<br>имя: " + this.name + " <br>дата регистрации: " + this.dateReg;
};

/**
* @desc The function inherits the name and date and adds the admin property
* which will be issued to Tru if we enter the admin instance
* @param {string} name -  Admin name
* @param {string} dateReg -  Admin dateReg
* @param {boolean} superAdmin -  Admin superAdmin
*/
function Admin(name, dateReg, superAdmin) {
    User.call(this, name, dateReg); //унаследовали свойства юзера
    this._superAdmin = superAdmin;
    superAdmin === "Admin" ? this._superAdmin = true : this._superAdmin = false;

}
Admin.prototype.getInfo = function () {
    return User.prototype.getInfo.call(this) + "<br>Является ли админом?: " + this._superAdmin;
};

var admin = new Admin('Петька', now, "Admin");
document.write(admin.getInfo());

/**
* @desc The function inherits date and name and admin status and adds the date while guest status is active
* @param {string} name -   Guest name
* @param {string} dateReg -   Guest dateReg
* @param {boolean} superAdmin -   Guest  superAdmin
* @param {number} validDate -  Guest valid
*/
function Guest(name, dateReg, superAdmin, validDate) {
    Admin.call(this, name, dateReg, superAdmin); //унаследовал свойства с админа в том числе и те которіе унаследовал сам админ ,цепочка наследования
    superAdmin === "Admin" ? this._superAdmin = true : this._superAdmin = false;
    var date = new Date();
    date.setDate(date.getDate() + validDate) //можем сами дату задавать до какого
    this.validDate = date.toLocaleString();
}

Guest.prototype.getInfo = function () {
    return "<hr>" + Admin.prototype.getInfo.call(this) + "<br>срок действи до " +
        this.validDate + "<hr>";
};


var guest = new Guest('Гость', now, "guest", 7); //задали что мы гость,дату нынешнюю ,что не админ,и число дней до когда будет действовать статус
document.write(guest.getInfo());

