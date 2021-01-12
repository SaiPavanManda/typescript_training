import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Header from './components/header';
import About from './components/about';
import Users from './components/users';
import Home from './components/home';
import Topics from './components/topics';

function App(): JSX.Element {
  let history = useHistory();
  let  isDone: boolean = false;
  let  name: string = 'sai';
  let num: number = 20;
  let nubersArray: number[] = [1, 2, 3];
  //Tuple
  let x: [string, number] = [name, num];
  enum Color {
    Red = 1,
    Green = 2,
    Blue = 4,
  }
  let c: string = Color[4];
  let noType: any;

  function testForAny():any {
   return noType;
  }

  function noReturn(): void {
    console.log("This function has no return value");
  }

  let someValue: unknown = "this is a string";

  let strLength: number = (someValue as string).length;

  const typeChange = () => {}

  interface UserName {
    firstName: string;
    lastName?: string;
  }

  interface UserNameFunc {
    (firstName: string, lastName: string): string;
  }

  let getUserName: UserNameFunc;

  getUserName = function (firstName: string, lastName = "Manda") {
  return `${firstName} ${lastName}`;
};

  function getUserNameFunc(): UserName {
    return {firstName:"Sai Pavan", city:"eluru"} as UserName;
  }


  function identity<T>(arg: T): T {
    return arg;
  }

  let output = identity<string>("myString");

  // Variables use const whereas properties use readonly
  return (
    <Router>
      <Header></Header>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics" render={({match}) => match ?  <Topics />: <div>No match{console.log(match)}</div>} />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
