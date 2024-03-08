import React from 'react';
import {View, Text, TextInput, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';

//função principal

export default function App(){
  return(
     <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/Happy_Bunch_Avatar.png')} />
      <Text style={styles.title}>Payment info</Text>

      <Text style={styles.label}>Full Name</Text>
      <TextInput style={styles.inputLong} placeholder='Full Name' />

        <Text style={styles.label}>Credit Card Number</Text>

        <View style={styles.containerInputCredit}>
          <View style={styles.creditInput}> 
          <TextInput 
           placeholder='1234 1234 1234 1234' 
           maxLength={16}
           inputMode='numeric'
          />
         </View>
        <View style={styles.containerIcon}>
          <Feather name="credit-card" size={20} color='#000' />
        </View>
      </View>

      
      <View style={styles.containerRow}>
        <View style={styles.containerLeft}>
          <Text style={styles.label}>Exp Date</Text>
          <TextInput 
            style={styles.inputLong} 
            placeholder='MM/YY' 
            maxLength={5}
            inputMode='numeric'
            />
        </View>

        <View style={styles.containerRigth}>
          <Text style={styles.label}>CVV</Text>
          <View style={styles.containerCVV}> 
          <TextInput 
            style={{width:'80%'}}
            placeholder='...' 
            secureTextEntry={true} 
            maxLength={3}
            inputMode='decimal'
          />
          <View style={styles.containerIconCVV}>
          <Feather name="info" size={20} color='#000' />
           </View>
          </View>
        </View>

      </View>

      <Text style={styles.label}>Zip Code</Text>
      <TextInput 
        style={styles.inputLong} 
        placeholder='90210' 
        maxLength={5}
        inputMode='numeric'
        />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.labelButton}>Confirm Payment</Text>
      </TouchableOpacity>

      <Text style={styles.textVerify}>You verify that this info is correct</Text>

    </View>
  );
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    padding: 30,
  },

  image:{
    marginTop: 16,
    width:104,
    height:65,
    alignSelf: 'center',
  },

  title:{
    color:'#030102',
    fontSize:20,
    fontWeight: 700,
    alignSelf: 'center',
    paddingBottom:24,
  },

  label:{
    fontSize:16,
  },

  inputLong:{
    backgroundColor:'#E2E6EE',
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginTop:10,
    marginBottom:24,
    borderRadius: 10,
  },

  containerRow:{
    flexDirection:"row",
    justifyContent:'space-between'
  },

  containerLeft:{
    width:"48%",
  },

  containerRigth:{
    width:"48%",
  },

  button:{
    backgroundColor:'#288FB4',
    paddingVertical:10,
    alignItems: 'center',
    borderRadius:10,
    marginBottom:8,
  },

  labelButton:{
    color:'#fff',
    fontSize:14,
  },

  textVerify:{
    alignSelf:'center'
  },

 
  containerInputCredit:{
    flexDirection:'row',
    backgroundColor:'#E2E6EE',
    height:60,
    borderRadius:10,
    paddingTop:20,
    paddingBottom:20,
    paddingRight:8,
    paddingLeft:20
  },

  creditInput:{
    width:'85%'
  },

  containerIcon:{
    width:'10%',
  },

  containerCVV:{
    flexDirection:'row',
    backgroundColor:'#E2E6EE',
    height:48,
    borderRadius:10,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 10,
  },

  containerIconCVV:{
    marginRight: 0,
    width: '20%',
    marginTop: 2,
  }
});