import {View, Text, Image} from 'react-native';
import React from 'react';
import style from './styles';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH, faHeart} from '@fortawesome/free-solid-svg-icons';
import {faBookmark, faMessage} from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

export const UserPosts = props => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimensions={48}
          />
          <View style={style.userTextContainer}>
            <Text style={style.username}>
              {props.firstName} {props.lastName}
            </Text>
            <Text style={style.location}>{props.location}</Text>
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} size={24} color={'#79869F'} />
      </View>
      <View style={style.postImage}>
        <Image source={props.image} />
      </View>
      <View style={{flexDirection: 'row', marginLeft: 10}}>
        <View style={{flexDirection: 'row'}}>
          <FontAwesomeIcon icon={faHeart} color={'#79869F'} />
          <Text style={{marginLeft: 3, color: '#79869F'}}>{props.likes}</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 27}}>
          <FontAwesomeIcon icon={faMessage} color={'#79869F'} />
          <Text style={{marginLeft: 3, color: '#79869F'}}>
            {props.comments}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 27}}>
          <FontAwesomeIcon icon={faBookmark} color={'#79869F'} />
          <Text style={{marginLeft: 3, color: '#79869F'}}>
            {props.bookmarks}
          </Text>
        </View>
      </View>
    </View>
  );
};

UserPosts.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};
export default UserPosts;
