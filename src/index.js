import ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const script = '<script>alert(1)</script>';

const element = (
  <div>
    <h1 className="greeting">
      Hello, {formatName(user)}!
    </h1>
    <p>{script}</p>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
