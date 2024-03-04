/** 
 * DS Cubed needs your help to create a program to match new students in pairs based on their hobbies.
 * You are given an array of student objects, the goal is to match students who share the most common hobbies and similar age.
 * The committee has decided that common hobbies are more important than age similarity,
 * so you are to give hobbies a weighting of 80%, and age similarity 20%.
 * Write a function which accepts an array of student objects, and returns an array of arrays representing pairs. For example:
 * [['Jack', 'Taylor'], ['Rachel', 'Nathan']]
 * 
 * For simplicity, you are to prioritise the top matches. For example:
 * Given 4 students: Jack, Taylor, Michael, Emily, there are 4 possible combinations:
 *    Jack -> Taylor = 100% (excellent match)
 *    Michael -> Emily = 0% (terrible match)
 * OR
 *    Jack -> Michael = 60% (good match)
 *    Taylor -> Emily = 40% (decent match)
 * 
 * Your algorithm should match return [['Jack', 'Taylor], ['Michael', 'Emily]], and not [['Jack', 'Michael'], ['Taylor', 'Emily']]
 * 
 * Assumptions:
 *  1. There are an even number of students
 *  2. Some student pairs may not have any common hobbies
 *  3. Each student contains a unique list of hobbies
 *  4. You can choose any combination when there are multiple viable combinations, 
 *  4. Two hobbies are considered entirely different if the strings are different:
 *      ("data science" is NOT similar to "computer science") 
 */


// Given two arrays, return a new array with the common elements
function getCommonItems (arr1, arr2) {
  return arr1.filter(item => arr2.includes(item))
}

function assignPairs (students) {
  // Store pairs in the array below
  // e.g. [['Jack', 'Taylor'], ['Rachel', 'Nathan']]
  const pairs = [];

  /* Add your code here: */

  /* ------------------- */

  return pairs;
}

const students = [
	{
		"name": "Alice",
		"age": 18,
		"hobbies": [
			"Cooking",
			"Writing",
			"Collecting stamps",
			"Bird watching",
			"Board games",
			"Yoga",
			"Meditation"
		]
	},
	{
		"name": "Bob",
		"age": 20,
		"hobbies": [
			"Painting",
			"Hiking",
			"Playing an instrument",
			"Dancing",
			"Singing",
			"Crafting"
		]
	},
	{
		"name": "Charlie",
		"age": 18,
		"hobbies": [
			"Photography",
			"Hiking",
			"Playing an instrument",
			"Fishing",
			"Cycling",
			"Yoga",
			"Meditation",
			"Crafting"
		]
	},
	{
		"name": "David",
		"age": 23,
		"hobbies": [
			"Reading",
			"Cooking",
			"Hiking",
			"Writing",
			"Fishing",
			"Cycling",
			"Singing",
			"Meditation",
			"Crafting"
		]
	},
	{
		"name": "Emily",
		"age": 22,
		"hobbies": [
			"Cooking",
			"Playing an instrument",
			"Traveling",
			"Fishing",
			"Singing",
			"Yoga"
		]
	},
	{
		"name": "Frank",
		"age": 22,
		"hobbies": [
			"Painting",
			"Playing an instrument",
			"Collecting stamps",
			"Bird watching",
			"Singing"
		]
	},
	{
		"name": "Grace",
		"age": 20,
		"hobbies": [
			"Reading",
			"Painting",
			"Cooking",
			"Writing",
			"Dancing",
			"Meditation"
		]
	},
	{
		"name": "Henry",
		"age": 23,
		"hobbies": [
			"Painting",
			"Photography",
			"Writing",
			"Playing an instrument",
			"Traveling",
			"Fishing",
			"Meditation",
			"Crafting"
		]
	},
	{
		"name": "Ivy",
		"age": 21,
		"hobbies": [
			"Writing",
			"Fishing",
			"Video gaming",
			"Yoga",
			"Meditation"
		]
	},
	{
		"name": "Jack",
		"age": 21,
		"hobbies": [
			"Cooking",
			"Hiking",
			"Writing",
			"Fishing"
		]
	},
	{
		"name": "Katherine",
		"age": 20,
		"hobbies": [
			"Cooking",
			"Hiking",
			"Playing an instrument",
			"Cycling",
			"Video gaming",
			"Singing"
		]
	},
	{
		"name": "Liam",
		"age": 22,
		"hobbies": [
			"Photography",
			"Hiking",
			"Playing an instrument",
			"Dancing",
			"Fishing",
			"Collecting stamps",
			"Meditation"
		]
	},
	{
		"name": "Mia",
		"age": 23,
		"hobbies": [
			"Painting",
			"Photography",
			"Bird watching",
			"Video gaming"
		]
	},
	{
		"name": "Nathan",
		"age": 18,
		"hobbies": [
			"Reading",
			"Photography",
			"Cooking",
			"Hiking",
			"Dancing",
			"Board games",
			"Video gaming",
			"Singing",
			"Yoga"
		]
	},
	{
		"name": "Olivia",
		"age": 18,
		"hobbies": [
			"Playing an instrument",
			"Cycling",
			"Collecting stamps",
			"Bird watching",
			"Yoga",
			"Crafting"
		]
	},
	{
		"name": "Peter",
		"age": 23,
		"hobbies": [
			"Cooking",
			"Cycling",
			"Bird watching",
			"Meditation"
		]
	},
	{
		"name": "Quinn",
		"age": 19,
		"hobbies": [
			"Reading",
			"Painting",
			"Dancing"
		]
	},
	{
		"name": "Rachel",
		"age": 18,
		"hobbies": [
			"Painting",
			"Cycling",
			"Collecting stamps",
			"Board games",
			"Video gaming",
			"Yoga",
			"Meditation"
		]
	},
	{
		"name": "Samuel",
		"age": 19,
		"hobbies": [
			"Painting",
			"Hiking",
			"Playing an instrument",
			"Cycling",
			"Video gaming",
			"Yoga"
		]
	},
	{
		"name": "Taylor",
		"age": 23,
		"hobbies": [
			"Reading",
			"Cooking",
			"Dancing",
			"Traveling",
			"Bird watching",
			"Yoga",
			"Crafting"
		]
	}
];

// Run function
console.log(assignPairs(students));