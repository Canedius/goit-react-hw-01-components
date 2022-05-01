import Profile from './Profile/Profile.js'
import Statistics from './Statistics/Statistics.js'
import FriendList from './FriendList/FriendList.js'
import TransactionHistory from './Transactions/TransactionHistory.js'
import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'



export const App = () => {
  return <div>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics title="Upload stats" stats={data} />
<FriendList friends={friends} />
<TransactionHistory items={transactions} />
  </div>;
};
