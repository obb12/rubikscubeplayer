import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const Cube = require('cubejs');

// Create a new solved cube instance
String.prototype.replaceAt=function(index, char) {
    var a = this.split("");
    a[index] = char;
    return a.join("");
}
class App extends Component {
  constructor(props) {
   super(props);
   this.state = {cube: new Cube()};
   Cube.initSolver()

 }
scramble(){

  this.setState({ cube: new Cube(Cube.random()) })

}
reset(){

  this.setState({ cube: new Cube() })

}
 move(d){
   var x = this.state.cube.move(d).asString()
   this.setState({ cube: new Cube(Cube.fromString(x)) })

 }
 solve (){
   var y = this;
   //this.state.cube.solve())
    this.setState({ message: this.state.cube.solve() })



    //this.setState({ message: this.state.cube.solve() })

 }
 change (i,e){
   var x = this.state.cube.asString()
   //x[i] = e.target.value
   var y = x
   var str = y.split('');
   console.log()
str[i] = e.target.value;
str = str.join('');
   console.log(str)
   e.target.value = ''
   this.setState({ cube: new Cube(Cube.fromString(str)) })

 }
  render() {
    return (
      <div className=" App">
      <div className="flex-container">

      <div className="row">
Up
                    <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(0, e)} className={this.state.cube.asString().charAt(0)}/></div>
                    <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(1, e)}className={this.state.cube.asString().charAt(1)}/></div>
                    <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(2, e)} className={this.state.cube.asString().charAt(2)}/></div>
                    <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(3, e)} className={this.state.cube.asString().charAt(3)}/></div>
                    <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(4, e)}className={this.state.cube.asString().charAt(4)}/></div>
                    <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(5, e)}className={this.state.cube.asString().charAt(5)}/></div>
                    <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(6, e)}className={this.state.cube.asString().charAt(6)}/></div>
                    <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(7, e)}className={this.state.cube.asString().charAt(7)} /></div>
                    <div className="cell " ><input type="text" maxLength="1" onChange={(e) => this.change(8, e)}className={this.state.cube.asString().charAt(8)}/></div>

                    </div>
                    <div className="row">
                    Left
                                  <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(9, e)} className={this.state.cube.asString().charAt(9)}/></div>
                                  <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(10, e)}className={this.state.cube.asString().charAt(10)}/></div>
                                  <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(11, e)}className={this.state.cube.asString().charAt(11)}/></div>
                                  <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(12, e)} className={this.state.cube.asString().charAt(12)}/></div>
                                  <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(13, e)} className={this.state.cube.asString().charAt(13)}/></div>
                                  <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(14, e)}className={this.state.cube.asString().charAt(14)}/></div>
                                  <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(15, e)}className={this.state.cube.asString().charAt(15)}/></div>
                                  <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(16, e)}className={this.state.cube.asString().charAt(16)}/></div>
                                  <div className="cell " ><input type="text" maxLength="1" onChange={(e) => this.change(17, e)}className={this.state.cube.asString().charAt(17)}/></div>

                                  </div>
      <div className="row">
      Front
                    <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(18, e)}className={this.state.cube.asString().charAt(18)}/></div>
                    <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(19, e)}className={this.state.cube.asString().charAt(19)}/></div>
                    <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(20, e)}className={this.state.cube.asString().charAt(20)}/></div>
                    <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(21, e)}className={this.state.cube.asString().charAt(21)}/></div>
                    <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(22, e)}className={this.state.cube.asString().charAt(22)}/></div>
                    <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(23, e)}className={this.state.cube.asString().charAt(23)}/></div>
                    <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(24, e)}className={this.state.cube.asString().charAt(24)}/></div>
                    <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(25, e)}className={this.state.cube.asString().charAt(25)}/></div>
                    <div className="cell " ><input type="text" maxLength="1" onChange={(e) => this.change(26, e)}className={this.state.cube.asString().charAt(26)}/></div>

                    </div>

                    <div className="row left">
                    Right
                                  <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(27, e)}className={this.state.cube.asString().charAt(27)}/></div>
                                  <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(28, e)}className={this.state.cube.asString().charAt(28)}/></div>
                                  <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(29, e)}className={this.state.cube.asString().charAt(29)}/></div>
                                  <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(30, e)}className={this.state.cube.asString().charAt(30)}/></div>
                                  <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(31, e)}className={this.state.cube.asString().charAt(31)}/></div>
                                  <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(32, e)}className={this.state.cube.asString().charAt(32)}/></div>
                                  <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(33, e)}className={this.state.cube.asString().charAt(33)}/></div>
                                  <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(34, e)}className={this.state.cube.asString().charAt(34)}/></div>
                                  <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(35, e)}className={this.state.cube.asString().charAt(35)}/></div>

                                  </div>
                                  <div className="row center">
                                  Back
                                                <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(36, e)}className={this.state.cube.asString().charAt(36)}/></div>
                                                <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(37, e)}className={this.state.cube.asString().charAt(37)}/></div>
                                                <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(38, e)}className={this.state.cube.asString().charAt(38)}/></div>
                                                <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(39, e)}className={this.state.cube.asString().charAt(39)}/></div>
                                                <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(40, e)}className={this.state.cube.asString().charAt(40)}/></div>
                                                <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(41, e)}className={this.state.cube.asString().charAt(41)}/></div>
                                                <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(42, e)}className={this.state.cube.asString().charAt(42)}/></div>
                                                <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(43, e)}className={this.state.cube.asString().charAt(43)}/></div>
                                                <div className="cell "><input type="text" maxLength="1" onChange={(e) => this.change(44, e)}className={this.state.cube.asString().charAt(44)}/></div>

                                                </div>
                                                <div className="row right">
                                                Down
                                                              <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(45, e)}className={this.state.cube.asString().charAt(45)}/></div>
                                                              <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(46, e)}className={this.state.cube.asString().charAt(46)}/></div>
                                                              <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(47, e)}className={this.state.cube.asString().charAt(47)}/></div>
                                                              <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(48, e)}className={this.state.cube.asString().charAt(48)}/></div>
                                                              <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(49, e)}className={this.state.cube.asString().charAt(49)}/></div>
                                                              <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(50, e)}className={this.state.cube.asString().charAt(50)}/></div>
                                                              <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(51, e)}className={this.state.cube.asString().charAt(51)}/></div>
                                                              <div className="cell"><input type="text" maxLength="1" onChange={(e) => this.change(52, e)}className={this.state.cube.asString().charAt(52)}/></div>
                                                              <div className="cell "><input type="text" maxLength="1" onChange={(e) => this.change(53, e)}className={this.state.cube.asString().charAt(53)}/></div>

                                                              </div>
                                                              </div>
                                                              <div>
                                                              {this.state.message}
                                                              <button onClick={this.solve.bind(this)}>Solve</button>
                                                              <button onClick={this.scramble.bind(this)}>Scramble</button>
                                                              <button onClick={this.reset.bind(this)}>Reset</button>

                                                              <button  onClick={(e) => this.move("R", e)}>R</button>
                                                              <button  onClick={(e) => this.move("R2", e)}>R2</button>
                                                              <button  onClick={(e) => this.move("L", e)}>L</button>
                                                              <button  onClick={(e) => this.move("L2", e)}>L2</button>
                                                              <button  onClick={(e) => this.move("B", e)}>B</button>
                                                              <button  onClick={(e) => this.move("B2", e)}>B2</button>
                                                              <button  onClick={(e) => this.move("U", e)}>U</button>
                                                              <button  onClick={(e) => this.move("U2", e)}>U2</button>
                                                              <button  onClick={(e) => this.move("D", e)}>D</button>
                                                              <button  onClick={(e) => this.move("D2", e)}>D2</button>
                                                              <button  onClick={(e) => this.move("F", e)}>F</button>
                                                              <button  onClick={(e) => this.move("F2", e)}>F2</button>
    </div>  </div>
    );
  }
}

export default App;
