import { createClient } from 'contentful';
const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY,
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

  const getProductsByCategory = async slug => {
    try {
      const entries = await client.getEntries({
        content_type: 'product',
        select: 'fields',
        'fields.category': slug,
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
      return sanitizeEntry;
    } catch (error) {
      console.error(error);
    }
  };

  const getCampaigns = async slug => {
    try {
      const entries = await client.getEntries({
        content_type: 'campaign',
        select: 'fields',
      });
      const sanitizeEntries = entries.items.map(item => {
        const id = item.sys.id;
        return {
          id,
          ...item.fields,
        };
      });

      //const sanitizeEntries = entry.items[0];
      return sanitizeEntries;
    } catch (error) {
      console.error(error);
    }
  };

  const getCategoryList = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'categories',
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

  return {
    getProducts,
    getProduct,
    getCampaigns,
    getProductsByCategory,
    getCategoryList,
  };
};

export default useContentful;
