import { StyleSheet, Text, View } from 'react-native';


export default function ExerciseListItem({ item }){
    return(
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>
        {item.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        <Text style={styles.subValue}>{item.muscle}</Text> | <Text style={styles.subValue}>{item.equipment} </Text>
        </Text>
    </View>
    )
  }

  

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    gap: 5,
    marginHorizontal: 3,

    //shadow
    shadowColor: "#997ec7",
    shadowOffset: {
	  width: 0,
	  height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: '500'
  },
  exerciseSubtitle: {
    color: 'dimgray',
  },
  subValue: {
    textTransform: 'capitalize',
  },
});