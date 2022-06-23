import 'normalize.css';
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import userInfo from './JsonFiles/user.json';
import statData from './JsonFiles/data.json';
import friendsList from './JsonFiles/friends.json';
import transactionsData from './JsonFiles/transactions.json';
import { MainContainer } from './App.styled';

export const App = () => {
  return (
    <MainContainer>
      <Profile user={userInfo} />
      <Statistics data={statData} />
      <FriendsList friends={friendsList} />
      <TransactionHistory history={transactionsData} />
    </MainContainer>
  );
};
