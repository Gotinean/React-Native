import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
import styles from './styles';

const Gallery = () => {

    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const [pageCurrent, setpageCurrent] = useState(1)
    useEffect(() => {
        setisLoading(true)
        this.getData()
        return () => {

        }
    }, [pageCurrent])

    getData = async () => {
        const apiURL = "https://picsum.photos/v2/list?page=" + pageCurrent + "&limit=20"
        fetch(apiURL).then((res) => res.json())
            .then((resJson) => {
                setData(data.concat(resJson))
                setisLoading(false)
            })
    }


    renderItem = ({ item }) => {
        return (
            <View style={styles.itemRow}>
                <Image source={{ uri: item.download_url }} style={styles.itemImage} />
                <Text style={styles.itemText}>{item.author}</Text>
            </View>
        )
    }

    renderFooter = () => {
        return (
            isLoading ?
                <View style={styles.loader}>
                    <ActivityIndicator size="large" />
                </View> : null
        )
    }
    handleLoadMore = () => {
        setpageCurrent(pageCurrent + 1)
        setisLoading(true)
    }
    return (
        <FlatList
            styles={styles.container}
            numColumns={2}
            data={data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0}
        />
    );
};

export default Gallery;
