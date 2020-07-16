import Home from '../screens/Home';
import Trending from '../screens/Trending';
import Subscriptions from '../screens/Subscriptions';
import Activity from '../screens/Activity';
import Library from '../screens/Library';

const MainNavigator = {
  home: { name: 'home', screen: Home },
  trending: { name: 'trending', screen: Trending },
  subscriptions: {
    name: 'subscriptions',
    screen: Subscriptions,
  },
  activity: {
    name: 'activity',
    screen: Activity,
  },
  library: {
    name: 'library',
    screen: Library,
  },
};

export default MainNavigator;
