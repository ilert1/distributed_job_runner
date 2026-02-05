import { Job } from '../decorators/job.decorator';
import { AbstractJob } from './abstract.job';

@Job({
  name: 'Fibonacci',
  description: 'Generate Fibonacci numbers and save them to the database',
})
export class FibonacciJob extends AbstractJob {}
