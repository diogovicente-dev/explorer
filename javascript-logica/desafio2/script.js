const students = [
  {
    name: "Diogo",
    firstGrade: 10,
    secondGrade: 8.8
  },
  {
    name: "Luiz",
    firstGrade: 7.5,
    secondGrade: 6.5
  },
  {
    name: "Vicente",
    firstGrade: 5,
    secondGrade: 5.8
  },
  {
    name: "Cancini",
    firstGrade: 6.5,
    secondGrade: 8.2
  }
]

const calculateAverage = function (student) {
  let average = (student.firstGrade + student.secondGrade) / 2
  return average
}

for (let i = 0; i < students.length; i++) {
  let studentAvegare = calculateAverage(students[i])
  if (studentAvegare >= 7) {
    alert(
      `A média do(a) aluno(a) ${students[i].name} é: ${studentAvegare}
      Parabéns ${students[i].name}! Você foi aprovado no concurso!
      `
    )
  } else {
    alert(
      `A média do(a) aluno(a) ${students[i].name} é: ${studentAvegare}
      Não foi desta vez ${students[i].name}! Tente Novamente!
      `
    )
  }
}
