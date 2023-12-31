
import './App.css';
import { comments } from "./commentData";
import { Card } from './Card';


function App() {
  const activities = comments.map((comment,index) => {
    return <Card key={index} commentObject={comment} />
  })
  return (
    <div className="App">
      {activities}
    </div>
  );
}

export default App;
