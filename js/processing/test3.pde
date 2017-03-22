class Bug {
  float x;
  float y;
  
  float t;
  float speed;
   
  Bug(float tx, float ty, float tspeed) {
    x = tx;
    y = ty;
    t = 0;
    speed = tspeed;
  }

  void live() {
    float sz = map(sin(t), -1, 1, 10, 20);
    rect(x, y, sz, sz);
    t = t + speed;
  }  
}



Bug[] orecuho = new Bug[300];

void setup() {
  size(1000, 800);
  smooth();
  noStroke();
  fill(0, 20);
  for(int i=0; i<orecuho.length; i++) {
    float x = width/2 + sin(i/0.5) * i;
    float y = height/2 + sin(i/2.0) * i;
    orecuho[i] = new Bug(x, y, 0.05 + (i/5000.0) );
  }
}
void draw() {
  background(0, 0);
  
  for(int i=0; i<orecuho.length; i++) {
    orecuho[i].live();
  }
}



