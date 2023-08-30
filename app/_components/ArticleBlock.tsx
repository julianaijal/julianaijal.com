// https://www.perssondennis.com/articles/errors-received-when-migrating-nextjs-13-to-new-app-folder#user-content-server-components-are-not-the-same-as-client-components
// Added in seperate component to prevent the parent layout.tsx component to have a 'use client' directive
'use client'
import useWindowDimensions from '../hooks/useWindowDimensions';
import { ArticleList, ArticleSlider } from './';
const ArticleBlock = () => {
  const { width } = useWindowDimensions();
  const breakpoint = 768;
  return <>{width! < breakpoint ? <ArticleSlider /> : <ArticleList />}</>;
};

export default ArticleBlock;
