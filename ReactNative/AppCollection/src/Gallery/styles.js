/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container: {
        flex: 1
      },
      avatar: {
        width: 80, height: 80
      },
      list: {
        flex: 1,
        padding: 8
      },
      item: {
        marginTop: 8,
        padding: 4,
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        backgroundColor: 'white'
      },
      wrapContent: {
        flex: 1
      },
      price: {
        marginTop: 4,
        fontWeight: 'bold',
        color: 'blue'
      },
      itemImage:{
        width: 200,
        height: 200,
        
      }
})
export default styles;