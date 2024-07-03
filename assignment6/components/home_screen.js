import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, ScrollView, ImageBackground } from 'react-native';

const items = [
    {
      id: '1',
      image: require('../assets/dress1.png'), // Replace with your image path
      title: 'Office Wear',
      description: 'reversible angora cardigan',
      price: '$120',
    },
    {
      id: '2',
      image: require('../assets/dress2.png'), // Replace with your image path
      title: 'Black',
      description: 'reversible angora cardigan',
      price: '$120',
    },
    {
      id: '3',
      image: require('../assets/dress3.png'), // Replace with your image path
      title: 'Black',
      description: 'reversible angora cardigan',
      price: '$120',  
    },
    {
        id: '4',
        image: require('../assets/dress4.png'), // Replace with your image path
        title: 'Black',
        description: 'reversible angora cardigan',
        price: '$120',  
      },
      {
        id: '5',
        image: require('../assets/dress5.png'), // Replace with your image path
        title: 'Black',
        description: 'reversible angora cardigan',
        price: '$120',  
      },
      {
        id: '6',
        image: require('../assets/dress6.png'), // Replace with your image path
        title: 'Black',
        description: 'reversible angora cardigan',
        price: '$120',  
      },
      {
        id: '7',
        image: require('../assets/dress7.png'), // Replace with your image path
        title: 'Black',
        description: 'reversible angora cardigan',
        price: '$120',  
      }
  ];

const Home = () => {
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
            <Image
              source={require('../assets/add_circle.png')} // Replace with your icon path
              style={styles.icon}
            />
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      );

    return(
      <View style={styles.main}>
        
        <View style={styles.head}>
            <Image source={require('../assets/Menu.png')}/>
            <Image style={styles.logo} source={require('../assets/Logo.png')}/>
            <Image style={styles.search} source={require('../assets/Search.png')}/>
            <Image source={require('../assets/shoppingBag.png')}/>
        </View>
         
        <View style={styles.storyhead}>
           <Text style={styles.story}>OUR STORY</Text>
            <Image style={styles.listview} source={require('../assets/Listview.png')}/>
            <Image source={require('../assets/Filter.png')}/>
        </View>


        <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatList}
      />
    </View>

      </View>
    );
}

const styles = StyleSheet.create({
main:{
backgroundColor: '#fff',
paddingLeft: 10,
paddingRight: 10,
paddingBottom: 800
},
head:{
    flexDirection: 'row',
    justifyContent:'space-between'
},
search:{
    marginLeft: 70
},
logo:{
    marginLeft: 100  
},
storyhead:{
    marginTop: 25,
    flexDirection: 'row',
    justifyContent:'space-between'
},
listview:{
    marginLeft: 140,
},
story:{
    fontFamily: 'didot',
    letterSpacing: 2,
    fontSize: 20,
},
scrollview:{
    marginTop: 20,
    paddingBottom:700
},
card:{
    backgroundColor:'black',
    height: 300,
    width:200
},
flatList: {
    justifyContent: 'center',
  },
   container: {
   //flex: 1,
    backgroundColor: '#fff',
    height:700
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    position: 'relative',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  icon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginRight:130
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginRight:130
  },
  price: {
    fontSize: 16,
    color: 'orange',
    marginTop: 5,
  },

})
export default Home;