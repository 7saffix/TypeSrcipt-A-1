{
  let formatString = (input: string, toUpper?: boolean): string => {
    if (toUpper == false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  };

  console.log(formatString("Hello", false));
  console.log(formatString("Hello"));
  console.log(formatString("Hello", false));
  console.log(formatString("Hello", true));

  type TItem = { title: string; rating: number }[];

  let filterByRating = (items: TItem): TItem => {
    let filterItem = items.filter((item) => item.rating >= 4);
    return filterItem;
  };

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];
  console.log(filterByRating(books));

  let concatenateArrays = <T>(...arr: T[][]): T[] => {
    let newArr: T[] = [];
    return newArr.concat(...arr);
  };
  console.log(concatenateArrays([1, 2, 3], [4, 5]));
  console.log(concatenateArrays(["1", "2", "3"], ["4", "5"]));

  class Vehicle {
    constructor(private make: string, public year: number) {}
    getInfo() {
      return `Make:${this.make},Year:${this.year}`;
    }
  }
  class Car extends Vehicle {
    constructor(private model: string, make: string, year: number) {
      super(make, year);
    }
    getModel() {
      return `Model:${this.model}`;
    }
  }
  const myCar = new Car("Toyota", "Corolla", 2020);
  console.log(myCar.getInfo());
  console.log(myCar.getModel());

  let processValue = (value: string | number): number => {
    if (typeof value == "string") {
      return value.length;
    } else {
      return value * 2;
    }
  };
  console.log(processValue("hello")); // Output: 5
  console.log(processValue(10)); // Output: 20

  interface Product {
    name: string;
    price: number;
  }
  let getMostExpensiveProduct = (Products: Product[]): Product | null => {
    if (Products.length <= 0) {
      return null;
    } else {
      let expensiveProduct = Products[0];
      for (let i = 0; i < Products.length; i++) {
        if (Products[i].price > expensiveProduct.price) {
          expensiveProduct = Products[i];
        }
      }
      return expensiveProduct;
    }
  };
  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];
  console.log(getMostExpensiveProduct(products));

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  let getDayType = (day: Day): string => {
    if (day === Day.Sunday || day === Day.Saturday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  };
  console.log(getDayType(Day.Monday)); // Output: "Weekday"
  console.log(getDayType(Day.Sunday)); // Output: "Weekend"

  const squareAsync = async (n: number): Promise<number> => {
    return new Promise((resolve, reject) => {
      if (n <= 0) {
        reject("Error!negative number not allow");
      } else {
        setTimeout(() => {
          resolve(n * n);
        }, 1000);
      }
    });
  };
  squareAsync(4).then(console.log);
  squareAsync(-3).catch(console.error);
}
