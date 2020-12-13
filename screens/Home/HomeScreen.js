import React from 'react';
import { Text, View, FlatList, StatusBar, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import moment from 'moment'
import styles from './styles'

//Demo Data
const posts = [
    {
        id: "1",
        name: "Joe McKay",
        text: "oquqweqwe",
        timestamp: 1569109273726,
        avatar: require("../../assets/favicon.png"),
        image: require("../../assets/favicon.png")
    },
    {
        id: "2",
        name: "Karyn McKay",
        text: "vnbnvmnbm",
        timestamp: 1569109273726,
        avatar: require("../../assets/favicon.png"),
        image: require("../../assets/favicon.png")
    },
    {
        id: "3",
        name: "Emer McKay",
        text: "gdfhdggfjhf",
        timestamp: 1569109273726,
        avatar: require("../../assets/favicon.png"),
        image: require("../../assets/favicon.png")
    }
]



export default function HomeScreen() {
    renderPost = ({ post }) => {
        return (
            <View style={styles.feedItem}>
                <Image source={post.avatar} style={styles.avatar} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View>
                            <Text style={styles.name}>{post.name}</Text>
                            <Text style={styles.timestamp}>{moment(post.timestamp).fromNow()}</Text>
                        </View>

                        <Ionicons name="ios-more" size={24} color="#73788B" />
                    </View>

                    <Text style={styles.post}>{post.text}</Text>

                    <Image source={post.image} style={styles.postImage} resizeMode="cover" />

                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name="ios-heart-empty" size={24} color="#73788B" style={{ marginRight: 16 }} />
                        <Ionicons name="ios-chatboxes" size={24} color="#73788B" />
                    </View>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Feed</Text>
            </View>
            <FlatList
                style={styles.feed}
                data={posts}
                renderItem={renderPost}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}></FlatList>

        </SafeAreaView>
    )
}

