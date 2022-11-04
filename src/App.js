import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
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
    'name': '이재석',
    'birthday': '981026',
    'gender': '남자',
    'job': '개발자' 
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',  
    'name': '심청이',
    'birthday': '945021',
    'gender': '여자',
    'job': '회사원' 
  },
]

function App() {
  return (
    <div>
      {
        customers.map(cust => {
          return (
            <Customer 
              // map을 이용할때 구분할 수 있는 키값을 주어야한다.
              key = {cust.id}
              id = {cust.id}
              image = {cust.image}
              name = {cust.name}
              birthday = {cust.birthday}
              gender = {cust.gender}
              job = {cust.job}
            />
          )
        })
      }
    </div>
  );
}

export default App;
