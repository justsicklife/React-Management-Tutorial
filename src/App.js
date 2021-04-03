import logo from './logo.svg';
import './App.css';
import Customer from "./components/Customer";

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday': '960305',
  'gender': '남자',
  'job': '프로그래머'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '이순신',
  'birthday': '301234',
  'gender': '남자',
  'job': '사람'
},

]

function App() {
  return (
    <div className="gray-background">
      {customers.map(c => {
        return <Customer key={c.id} {...c} />
      })}
    </div>
  );
}

export default App;
