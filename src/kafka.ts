import { Transport } from '@nestjs/microservices';

export const kafka = {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: ['localhost:9092'], //default localhost apache host port is 9092
    },
  },
};
