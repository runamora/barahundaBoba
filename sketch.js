//barahunda boba 0.2
//autor: xavier barriga abril

let audio01, audio02, audio03, audio04, audio05, audio06, audio07, audio08, audio09, audio10, audio11;
let voz01, voz02, voz03, voz04, voz05, voz06, voz07;
let t = 0;
let voces = 0.001;
let txt='"Todos constituíamos una gran familia enajenada,\nrodeada de vapores y espejismos. CDA"\n';
let audioNum=11;
let vozNum=7;
let iSlider;

function setup() {
      createCanvas(windowWidth,windowHeight);
	background(50);
      noStroke();
      
      //MICROFONO
      mic = new p5.AudioIn();
      mic.start();
      //AUDIOS
      audio01 = loadSound('assets/quito01.ogg');
      audio02 = loadSound('assets/quito02.ogg');
      audio03 = loadSound('assets/quito03.ogg');
      audio04 = loadSound('assets/quito04.ogg');
      audio05 = loadSound('assets/quito05.ogg');
      audio06 = loadSound('assets/quito06.ogg');
      audio07 = loadSound('assets/quito07.ogg');
      audio08 = loadSound('assets/quito08.ogg');
      audio09 = loadSound('assets/quito09.ogg');
      audio10 = loadSound('assets/quito10.ogg');
      audio11 = loadSound('assets/quito11.ogg');
      //VOCES
      voz01 = loadSound('assets/wapp01.ogg');
      voz02 = loadSound('assets/wapp02.ogg');
      voz03 = loadSound('assets/wapp03.ogg');
      voz04 = loadSound('assets/wapp04.ogg');
      voz05 = loadSound('assets/wapp05.ogg');
      voz06 = loadSound('assets/wapp06.ogg');
      voz07 = loadSound('assets/wapp07.ogg');
      
      //SLIDER
      iSlider = createSlider(0, 2, 1);
  	iSlider.position(width-110, height-40);
      iSlider.style('width', '80px');
}

function draw() {
      background(0);
      
      //ELLIPSE
      fill(255);
      v = mic.getLevel();
      ellipse(width/2, height/2, t, t);
      t = map(v, 0, 0.2, 0, 200);
      
      //REGISTRO
      var lines = txt.split(/\r|\r\n|\n/);      
      var count = lines.length;
      
      fill(0,255,0);
      let h = hour();
      let m = minute();
      let s = second();
      text(txt, 10, height+15-(count*15));
      	
      x = random(1);
      const info = iSlider.value();
      if (info == 0){
      	audioRandom(x,h,m,s);
      } else if (info == 2)  {
    		vozRandom(x,h,m,s);
      } else {
            z = random(0,1);
            if (z<0.5){
            audioRandom(x,h,m,s);
            } else {
            vozRandom(x,h,m,s);
            }
      }
}

function audioRandom(x,h,m,s){
      if (x < voces) {
            y = random(0, audioNum);
            if (y > 0 && y < 1) {
                  audio01.play();
			txt=txt + 'audio01 '+h+':'+m+':'+s+'\n';
            } else if (y > 1 && y < 2) {
                  audio02.play();
			txt=txt + 'audio02 '+h+':'+m+':'+s+'\n';
            } else if (y > 2 && y < 3) {
                  audio03.play();
			txt=txt + 'audio03 '+h+':'+m+':'+s+'\n';
            } else if (y > 3 && y < 4) {
                  audio04.play();
			txt=txt + 'audio04 '+h+':'+m+':'+s+'\n';
            } else if (y > 4 && y < 5) {
                  audio05.play();
			txt=txt + 'audio05 '+h+':'+m+':'+s+'\n';
            } else if (y > 5 && y < 6) {
                  audio06.play();
			txt=txt + 'audio06 '+h+':'+m+':'+s+'\n';
            } else if (y > 6 && y < 7) {
                  audio07.play();
			txt=txt + 'audio07 '+h+':'+m+':'+s+'\n';
            } else if (y > 7 && y < 8) {
                  audio08.play();
			txt=txt + 'audio08 '+h+':'+m+':'+s+'\n';
            } else if (y > 8 && y < 9) {
                  audio09.play();
                  txt=txt + 'audio09 '+h+':'+m+':'+s+'\n';
            } else if (y > 9 && y < 10) {
                  audio10.play();
                  txt=txt + 'audio10 '+h+':'+m+':'+s+'\n';
            }else if (y > 10 && y < 11) {
                  audio11.play();
                  txt=txt + 'audio11 '+h+':'+m+':'+s+'\n';
            }
      }
}

function vozRandom(x,h,m,s){
      if (x < voces) {
            y = random(0, vozNum);
            if (y > 0 && y < 1) {
                  voz01.play();
			txt=txt + 'voz01 '+h+':'+m+':'+s+'\n';
            } else if (y > 1 && y < 2) {
                  voz02.play();
			txt=txt + 'voz02 '+h+':'+m+':'+s+'\n';
            } else if (y > 2 && y < 3) {
                  voz03.play();
			txt=txt + 'voz03 '+h+':'+m+':'+s+'\n';
            } else if (y > 3 && y < 4) {
                  voz04.play();
			txt=txt + 'voz04 '+h+':'+m+':'+s+'\n';
            } else if (y > 4 && y < 5) {
                  voz05.play();
			txt=txt + 'voz05 '+h+':'+m+':'+s+'\n';
            } else if (y > 5 && y < 6) {
                  voz06.play();
			txt=txt + 'voz06 '+h+':'+m+':'+s+'\n';
            } else if (y > 6 && y < 7) {
                  voz07.play();
			txt=txt + 'voz07 '+h+':'+m+':'+s+'\n';
            } 
      }
}

function mouseMoved() {
      getAudioContext().resume();
}

function mousePressed(){
      //voz07.play();
}