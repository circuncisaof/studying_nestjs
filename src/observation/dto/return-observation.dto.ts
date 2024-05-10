import { Observation } from '../entity/observation.entities';

export class ReturnObservations {
  observation: string;

  constructor(obs: Observation) {
    this.observation = obs.observation;
  }
}
