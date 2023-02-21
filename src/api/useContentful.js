//require('dotenv').config();
import { createClient } from 'contentful';
const useContentful = () => {
  const client = createClient({
    space: 'poz3a9a6aokc',
    accessToken: 'bJ2jt9efuWw6oPLhlphI8Uub-SKffJ0n1kF_6_1TYZw',
    host: 'cdn.contentful.com',
  });

  const getProducts = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'product',
        select: 'fields',
      });
      const sanitizeEntries = entries.items.map(item => {
        const id = item.sys.id;
        return {
          id,
          ...item.fields,
        };
      });
      return sanitizeEntries;
    } catch (error) {
      console.error(error);
    }
  };

  const getProduct = async slug => {
    try {
      const entry = await client.getEntries({
        content_type: 'product',
        select: 'fields',
        limit: 1,
        'fields.slug': slug,
      });
      const sanitizeEntry = entry.items.map(item => {
        const id = item.sys.id;
        return {
          id,
          ...item.fields,
        };
      });

      //const sanitizeEntries = entry.items[0];
      return sanitizeEntry;
    } catch (error) {
      console.error(error);
    }
  };

  return { getProducts, getProduct };
};

export default useContentful;
