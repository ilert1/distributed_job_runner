import { PulsarClient } from '@jobber/pulsar';
import { AbstractJob } from '../../abstract.job';
import { Job } from '../../decorators/job.decorator';
import { FibonacciData } from './fibonacci-data.interface';

@Job({
  name: 'Fibonacci',
  description: 'Generate Fibonacci numbers and save them to the database',
})
export class FibonacciJob extends AbstractJob<FibonacciData> {
  constructor(pulsarClient: PulsarClient) {
    super(pulsarClient);
  }
}
