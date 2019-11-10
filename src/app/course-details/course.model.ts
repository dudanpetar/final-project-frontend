export class Course {
public name;
public description;
public imagePath;
public price;
public id;

  constructor(id: number, name: string, description: string, imagePath: string,  price: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.price = price;
  }
}
