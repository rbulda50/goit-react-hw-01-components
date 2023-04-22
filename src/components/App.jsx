import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import { Container } from './App.styled'

import userData from '../data/user.json';
import statsData from '../data/data.json';
import friendsData from '../data/friends.json';
import transactionsData from '../data/transactions.json'


export const App = () => {
  return (
    <Container>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics
        title="Upload stats"
        statsData={statsData}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory transactions={transactionsData} />
    </Container>
  );
};
