import { Contact } from './contact';

export class ReturnListData {
  data: Contact[];
  totalCount: number;
}

export class Query {
  property: string;
  value: string;
}
