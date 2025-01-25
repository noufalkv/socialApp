/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from './components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelopeOpen} from '@fortawesome/free-regular-svg-icons';
import globalStyle from './assets/globalStyles';
import UserStory from './components/UserStory/UserStory';

const App = () => {
  const userStories = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'White',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Olivier',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nata',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nicolas',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nino',
      id: 7,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nana',
      id: 8,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Adam',
      id: 9,
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const paginate = (pageSize, database, currentPage) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const data = database.slice(startIndex, endIndex);
    return data;
  };
  useEffect(() => {
    setIsLoading(true);
    const getInitialData = paginate(userStoriesPageSize, userStories, 1);
    setUserStoriesRenderedData(getInitialData);
    setIsLoading(false);
  }, []);
  return (
    <SafeAreaView>
      <View style={globalStyle.headerContainer}>
        <Title title={"Let's Talk"} />
        <TouchableOpacity>
          <View style={globalStyle.messageContainer}>
            <View style={globalStyle.messageNumber}>
              <Text style={globalStyle.messageNumberTxt}>2</Text>
            </View>

            <FontAwesomeIcon icon={faEnvelopeOpen} color="#CACDDE" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyle.userStoryContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoading) {
              return;
            }
            setIsLoading(true);
            const contentToAppend = paginate(
              userStoriesPageSize,
              userStories,
              userStoriesCurrentPage + 1,
            );

            if (contentToAppend.length > 0) {
              setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
              setUserStoriesRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoading(false);
            // paginate(userStoriesPageSize, userStories, 1);
          }}
          ItemSeparatorComponent={() => <View style={{paddingHorizontal: 6}} />}
          data={userStoriesRenderedData}
          renderItem={({item}) => (
            <UserStory
              key={'User' + item.id}
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
