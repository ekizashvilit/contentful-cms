import { createClient } from 'contentful';
import { useEffect, useState } from 'react';

const client = createClient({
  space: 'po1ace2v4rwz',
  environment: 'master',
  accessToken: `${import.meta.env.VITE_API_KEY}`,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const projects = response.items.map((project) => {
        const { url, title, image } = project.fields;
        const id = project.sys.id;
        const img = image?.fields?.file?.url;

        return { url, title, id, img };
      });

      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
