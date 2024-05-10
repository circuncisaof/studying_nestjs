import { Pharmaceuticals } from '../entity/pharmaceuticals.entities';

export class ReturnPhamaceuticals {
  pharmaceuticals: string;

  constructor(phama: Pharmaceuticals) {
    this.pharmaceuticals = phama.pharmaceuticals;
  }
}
