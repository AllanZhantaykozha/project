interface itemDtoCreate {
  name: string;
  description: string;
  price?: number;
  imageUrl: string[];
  type: Type;
}

interface itemDtoUpdate {
  name?: string;
  description?: string;
  price?: number;
  imageUrl?: string[];
  type?: Type;
}

enum Type {
  PROJECT = 'PROJECT',
  IC = 'IC',
}
