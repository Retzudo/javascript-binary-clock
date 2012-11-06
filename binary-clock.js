function BinaryClock(size, image_url, targetContainerId) {
  this.s = size;
  this.url = image_url;
  this.container = targetContainerId;
  this.start = start;
  this.init = init;
}

function update(bc) {
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

  document.getElementById(bc.container).childNodes.item(0).style.backgroundPosition = dA*(-bc.s)+"px 0px";
  document.getElementById(bc.container).childNodes.item(1).style.backgroundPosition = dB*(-bc.s)+"px 0px";
  document.getElementById(bc.container).childNodes.item(2).style.backgroundPosition = dC*(-bc.s)+"px 0px";
  document.getElementById(bc.container).childNodes.item(3).style.backgroundPosition = dD*(-bc.s)+"px 0px";
  document.getElementById(bc.container).childNodes.item(4).style.backgroundPosition = dE*(-bc.s)+"px 0px";
  document.getElementById(bc.container).childNodes.item(5).style.backgroundPosition = dF*(-bc.s)+"px 0px";
};

function start() {
    this.init();
    window.setInterval(update, 500, this);
};

function init() {
  var html = 
    '<div id="a" style="width: '+this.s+'px; height: '+this.s*4+'px; background: url(\''+this.url+'\'); display: inline-block; background-repeat: no-repeat;"></div>' +
    '<div id="b" style="width: '+this.s+'px; height: '+this.s*4+'px; background: url(\''+this.url+'\'); display: inline-block; background-repeat: no-repeat;"></div>' +
    '<div id="c" style="width: '+this.s+'px; height: '+this.s*4+'px; background: url(\''+this.url+'\'); display: inline-block; background-repeat: no-repeat;"></div>' +
    '<div id="d" style="width: '+this.s+'px; height: '+this.s*4+'px; background: url(\''+this.url+'\'); display: inline-block; background-repeat: no-repeat;"></div>' +
    '<div id="e" style="width: '+this.s+'px; height: '+this.s*4+'px; background: url(\''+this.url+'\'); display: inline-block; background-repeat: no-repeat;"></div>' +
    '<div id="f" style="width: '+this.s+'px; height: '+this.s*4+'px; background: url(\''+this.url+'\'); display: inline-block; background-repeat: no-repeat;"></div>';
  
  document.getElementById(this.container).innerHTML = html;
}