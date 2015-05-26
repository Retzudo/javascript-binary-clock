function BinaryClock(size, imageUrl, targetContainerId) {
    this.size = size;
    this.url = imageUrl;
    this.container = document.getElementById(targetContainerId);
    this.interval = null;

    this.start();
}

BinaryClock.prototype.update = function() {
    var time = new Date();
    var seconds = time.getSeconds();
    var minutes = time.getMinutes();
    var hours = time.getHours();

    var dA, dB, dC, dD, dE, dF;

    dA = Math.floor(hours/10);
    dB = hours - dA*10;

    dC = Math.floor(minutes/10);
    dD = minutes - dC*10;

    dE = Math.floor(seconds/10);
    dF = seconds - dE*10;

    this.container.childNodes.item(0).style.backgroundPosition = dA*(-this.size)+"px 0px";
    this.container.childNodes.item(1).style.backgroundPosition = dB*(-this.size)+"px 0px";
    this.container.childNodes.item(2).style.backgroundPosition = dC*(-this.size)+"px 0px";
    this.container.childNodes.item(3).style.backgroundPosition = dD*(-this.size)+"px 0px";
    this.container.childNodes.item(4).style.backgroundPosition = dE*(-this.size)+"px 0px";
    this.container.childNodes.item(5).style.backgroundPosition = dF*(-this.size)+"px 0px";
};

BinaryClock.prototype.init = function() {
    var html =
        '<div id="a" style="width: '+this.size+'px; height: '+this.size*4+'px; background: url(\''+this.url+'\'); display: inline-block; background-repeat: no-repeat;"></div>' +
        '<div id="b" style="width: '+this.size+'px; height: '+this.size*4+'px; background: url(\''+this.url+'\'); display: inline-block; background-repeat: no-repeat;"></div>' +
        '<div id="c" style="width: '+this.size+'px; height: '+this.size*4+'px; background: url(\''+this.url+'\'); display: inline-block; background-repeat: no-repeat;"></div>' +
        '<div id="d" style="width: '+this.size+'px; height: '+this.size*4+'px; background: url(\''+this.url+'\'); display: inline-block; background-repeat: no-repeat;"></div>' +
        '<div id="e" style="width: '+this.size+'px; height: '+this.size*4+'px; background: url(\''+this.url+'\'); display: inline-block; background-repeat: no-repeat;"></div>' +
        '<div id="f" style="width: '+this.size+'px; height: '+this.size*4+'px; background: url(\''+this.url+'\'); display: inline-block; background-repeat: no-repeat;"></div>';

    this.container.innerHTML = html;
};

BinaryClock.prototype.stop = function() {
    if (this.interval) {
        window.clearInterval(this.interval);
    }
};

BinaryClock.prototype.start = function() {
    this.init();
    this.update();
    this.interval = window.setInterval(this.update.bind(this), 1000);
};
