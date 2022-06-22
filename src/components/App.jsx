import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import userInfo from './user.json';
import statData from './data.json';
import friendsList from './friends.json';
import transactionsData from './transactions.json';
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
