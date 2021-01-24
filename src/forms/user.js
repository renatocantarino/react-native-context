import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Icon, Button, Avatar } from 'react-native-elements';


export default ({ route, navigation }) => {

    const [user, setUser] = useState(route.params ? route.params : {})
    //console.warn(Object.keys(props.route.params)); //investigar os paramteros que chegam
    return (
        <View style={style.form}>
            <Avatar
               containerStyle={{marginLeft:115 , marginTop: 20 , marginBottom: 15}}
                rounded
                size="xlarge"
                source={{
                    uri:
                        user.avatarUrl,
                }}
            />

            <Input
                placeholder='Nome'
                onChangeText={name => setUser({ ...user, name })}
                value={user.name}
                leftIcon={
                    <Icon
                        name='people'
                        size={24}
                        color='black'
                    />
                }
            />

            <Input
                placeholder='Email'
                onChangeText={email => setUser({ ...user, email })}
                value={user.email}

                leftIcon={
                    <Icon
                        name='email'
                        size={24}
                        color='black'
                    />
                }
            />

            <Button
                title="Salvar"
                type="outline"
                onPress={() => alert('press')}
            />


        </View>
    )
}


const style = StyleSheet.create({
    form: {
        padding: 12
    },
    avt:
    {
        alignContent: 'center'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
    }
})