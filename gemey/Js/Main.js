
$(document).ready(function () {
    
    //------------ BaseComponent Class
    function BaseComponent(_x, _y, _classUniqu, _lifeTime, _type, _radius, _direction) {
        this.Position = { "X": _x, "Y": _y };
        this.ClassUniqu = _classUniqu;        //ClassUniqu will represented in css as (<div class="classType_indexOfArrary">)
        this.LifeTime = _lifeTime;
        this.Type = _type; // (player,Enemy,Health) reserved
        this.Radious = _radius;
        this.Direction = _direction;    //1:clockwise   -1:anticlockwise    0:sleep
        this.Create = function (_classType, _classUniqu) {
            //append to container new div  
            //css:classType(myship-sleepEnemy-movalbeEnemy-sleepHealth-movableHealth) depend on caller Object
            //classUniqu this.position in css
        }
        this.Destory = function (_classUniqu) {
            //delet object from memroy 
            delete this;
            //remove div element by classUniqu
        }
    }

    //--------------------------- MyShip Class
    function MyShip(_x, _y, _classUniqu, _id, _lifeTime, _type, _direction) {
        this.Position.X = _x;
        this.Position.Y = _y;
        this.ClassUniqu = "myship";   //constant class in css
        this.LifeTime = _lifeTime;
        this.Type = "player"; //reserved
        this.Radious = _radius;
        this.Direction = _direction;
        this.DetectCollistion = function () {
            console.log("my ship just hit Object");
        }
    } MyShip.prototype = new BaseComponent;

    //--------------------------- Enemy Classes
    //-------------Sleep Enemy Class
    function SleepEnemy(_x, _y, _index, _lifeTime, _radius, _direction) {
        this.Position.X = _x;
        this.Position.Y = _y;
        this.ClassUniqu = "sleepEnemy" + _index;
        this.LifeTime = _lifeTime;
        this.Type = "Enemy";//reserved
        this.Radious = _radius;
        this.Direction = 0;
        this.Rotat = function () {
            // I thing rotation will be done by css to all sleep enemies ex: class="sleepEnemy"
        }
    } SleepEnemy.prototype = new BaseComponent;
    //-------------Movable Enemy Class
    function MovableEnemy(_x, _y, _index, _lifeTime, _radius, _direction) {
        this.Position.X = _x;
        this.Position.Y = _y;
        this.ClassUniqu = "movableEnemy" + _index;
        this.LifeTime = _lifeTime;
        this.Type = "Enemy";//reserved
        this.Radious = _radius;
        this.Direction = _direction;
        this.Move = function () {
            //will move in virsual circle randomly
        }
    } MovableEnemy.prototype = new BaseComponent;
    //-------------Tracker Enemy Class
    function TrackerEnemy(_x, _y, _index, _lifeTime, _radius, _direction) {
        this.Position.X = _x;
        this.Position.Y = _y;
        this.ClassUniqu = "trackerEnemy" + _index;
        this.LifeTime = _lifeTime;
        this.Type = "Enemy";//reserved
        this.Radious = _radius;
        this.Direction = _direction;
        this.TrackShipPlayer = function () {
            //will track ship player in constant speed
        }
    } TrackerEnemy.prototype = new BaseComponent;

    //--------------------------- Health Classes
    //-------------Sleep Health Class
    function SleepHealth(_x, _y, _index, _lifeTime, _radius, _direction) {
        this.Position.X = _x;
        this.Position.Y = _y;
        this.ClassUniqu = "sleepHealth" + _index;
        this.LifeTime = _lifeTime;
        this.Type = "Health";//reserved
        this.Radious = _radius;
        this.Direction = 0;
        this.Rotat = function () {
            // I thing rotation will be done by css to all sleep Health ex: class="sleepHealth"
        }
    } SleepHealth.prototype = new BaseComponent;
    //-------------Movable Health Class
    function MovableHealth(_x, _y, _index, _lifeTime, _radius, _direction) {
        this.Position.X = _x;
        this.Position.Y = _y;
        this.ClassUniqu = "movableHealth" + _index;
        this.LifeTime = _lifeTime;
        this.Type = "Health";//reserved
        this.Radious = _radius;
        this.Direction = _direction;
        this.Move = function () {
            //will move in spiral move to center same way of myShip object
        }
    } MovableHealth.prototype = new BaseComponent;
    //-------------Triangle Health Class
    function TriangleHealth(_x, _y, _index, _lifeTime, _radius, _direction) {
        this.Position.X = _x;
        this.Position.Y = _y;
        this.ClassUniqu = "triangleHealth" + _index;
        this.LifeTime = _lifeTime;
        this.Type = "Health";//reserved
        this.Radious = _radius;
        this.Direction = _direction;
        this.Move = function () {
            //will move in virsual circle randomly.
        }
    } TriangleHealth.prototype = new BaseComponent;

    //--------------------------- Container Object
    
    var container = { radius: 323, };
    

});