import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}: {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>

      <Text>Course: {course}</Text>

      <Text>Units: {units}</Text>

      {isFullLoad && (
        <Text style={styles.fullLoad}>Full Load</Text>
      )}
    </View>
  );
}

function StudentRoster() {
  const students = [
    {
      id: "s1",
      name: "Ana Cruz",
      course: "IT313",
      units: 21,
      isFullLoad: true,
    },
    {
      id: "s2",
      name: "Bea Santos",
      course: "IT313",
      units: 15,
      isFullLoad: false,
    },
    {
      id: "s3",
      name: "Cid Ramos",
      course: "IT313",
      units: 18,
      isFullLoad: true,
    },
    {
      id: "s4",
      name: "Dex Alonzo",
      course: "IT313",
      units: 12,
      isFullLoad: false,
    },
  ];

  const [studentList, setStudentList] = useState(students);

  const reverseRoster = () => {
    setStudentList((currentStudents) =>
      [...currentStudents].reverse()
    );
  };

  return (
    <ScrollView>
      <Text style={styles.count}>
        Students: {studentList.length}
      </Text>

      <Button
        title="Reverse Roster"
        onPress={reverseRoster}
      />

      {studentList.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}
    </ScrollView>
  );
}

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Student Roster
      </Text>

      <StudentRoster />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d699ce",
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4B3F72",
    textAlign: "center",
    marginBottom: 8,
  },

  count: {
    fontSize: 16,
    fontWeight: "600",
    color: "#77718C",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    marginBottom: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5DFF5",

    shadowColor: "#4B3F72",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  name: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#4B3F72",
    marginBottom: 7,
  },

  fullLoad: {
    marginTop: 8,
    color: "#6C5CE7",
    fontWeight: "bold",
    fontSize: 14,
  },
});