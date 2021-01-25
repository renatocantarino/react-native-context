import React, { useContext } from 'react'
import { FlatList, Alert, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import UsersContext from '../context/UserContext'

export default props => {

    const { state , dispatch } = useContext(UsersContext);


    function navegateUser(user) {
        props.navigation.navigate('User', user)
    }

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }


    function getUserItem({ item: user }) {
        return (
            <ListItem bottomDivider onPress={() => navegateUser(user)} onLongPress={() => confirmUserDeletion(user)}  >
                <Avatar source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        )
    }



    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem} />
        </View>
    )

}
