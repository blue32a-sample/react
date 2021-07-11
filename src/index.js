import ReactDOM from 'react-dom';

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function formatDate(date) {
  return date;
}

function App() {
  const sara = {
    user: 'Sara',
    avatarUrl: 'https://placehold.jp/3d4070/ffffff/100x100.png?text=Sara'
  };
  const cahal = {
    user: 'Cahal',
    avatarUrl: 'https://placehold.jp/169e44/ffffff/100x100.png?text=Cahal'
  };
  const edite = {
    user: 'Edite',
    avatarUrl: 'https://placehold.jp/e38854/ffffff/100x100.png?text=Edite'
  };

  return (
    <div>
      <Comment
        text="Hello Sara!"
        date="2021-07-11"
        author={sara}
      />
      <Comment
        text="Hello Cahal!"
        date="2021-07-12"
        author={cahal}
      />
      <Comment
        text="Hello Edite!"
        date="2021-07-13"
        author={edite}
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
