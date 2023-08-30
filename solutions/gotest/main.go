package main

import "fmt"

type Person struct {
	Name, JobTitle string
	Age            int
}

func (person Person) Introduction() {
	fmt.Println("Hello! My name is", person.Name)
}

func (person *Person) Birthday() {
	person.Age++
	fmt.Println("Happy birthday", person.Name, "!")
	fmt.Println(person.Name, "is now", person.Age, "years old.")

}

func main() {
	// person := Person{
	// 	Name:     "Mike",
	// 	JobTitle: "Software Engineer",
	// 	Age:      25,
	// }

	// person.Introduction()
	// person.Birthday()
	// fmt.Println(person.Age)

	car := Car{
		Speed: 10,
	}

	tank := Tank{
		Speed: 5,
	}

	car.Move()
	tank.Move()

	var v Vehicle
	v = car
	v.Move()

	v = tank
	v.Move()

	var x Vehicle = Tank{Speed: 1}
	x.Move()

	y := Tank{Speed: 1}
	y.Move()
	fmt.Println(y.Speed)
}

type Car struct {
	Speed int
}

type Tank struct {
	Speed int
}

type Vehicle interface {
	Move()
}

func (v Car) Move() {
	fmt.Println("moving", v.Speed)
}

func (v Tank) Move() {
	fmt.Println("moving", v.Speed)
}
