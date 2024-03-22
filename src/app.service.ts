import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World!. First successfull app to gcp1. 
    \n This line is changed in GCP editor`;
  }
}
