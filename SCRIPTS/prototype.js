function ed(name){
    this.name =name;
    console.log(this)
    return {'name':'hi'};//here if u return primitives it will not work only if u return objects that retuned object overrides the inplicit return value of the constructor
}
ed.prototype.name="hi";
//ed();
const bc = new ed('idnwd');
console.log(bc);
