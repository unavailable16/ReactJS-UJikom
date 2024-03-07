export default class Project {
  nama = "";
  image = "";
  cu = 0;
  bf = "";
  core = 0;
  tu = 0;
  tc = "";
  vr = "";
  bw = "";
  pc = "";

  constructor(initializer) {
    this.id = initializer.id;
    this.nama = initializer.nama;
    this.image = initializer.image;
    this.cu = initializer.cu;
    this.bf = initializer.bf;
    this.core = initializer.core;
    this.tu = initializer.tu;
    this.tc = initializer.tc;
    this.vr = initializer.vr;
    this.bw = initializer.bw;
    this.pc = initializer.pc;
  }
}
