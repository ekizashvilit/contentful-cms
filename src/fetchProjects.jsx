import { createClient } from 'contentful';

const client = createClient({
  space: 'po1ace2v4rwz',
  environment: 'master',
  accessToken: '9HtgaZzzwe0lWKEHbLPUhaate9Uu_7Pt3-uxo9qmjKQ',
});

client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response));
