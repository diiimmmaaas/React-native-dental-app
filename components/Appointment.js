import {View} from "react-native";
import styled from "styled-components/native";

import GrayText from "./GrayText";

const Appointment = ({item: {user, diagnosis, active, time, navigation}}) => {
    return (
        <GroupItem onPress={() => navigation.navigate("Patient")}>
            <Avatar
                source={{uri: user.avatar}}/>
            <View style={{flex: 1}}>
                <FullName>{user.fullname}</FullName>
                <GrayText>{diagnosis}</GrayText>
            </View>
            <GroupDate active={active}>{time}</GroupDate>
        </GroupItem>
    );
};

const GroupDate = styled.Text`
  background: ${props => props.active ? "#2A86FF" : "#E9F5FF"};
  color: ${props => props.active ? "#FFF" : "#4294ff"};
  border-radius: 18px;
  font-weight: 600;
  font-size: 14px;
  width: 70px;
  height: 32px;
  text-align: center;
  line-height: 30px;
`;

const FullName = styled.Text`
  font-weight: 600;
  font-size: 16px;
`;

const Avatar = styled.Image`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

const GroupItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3
`;

export default Appointment;
