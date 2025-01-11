export {
    ArticleDetails,
} from './ui/ArticleDetails/ArticleDetails';

export {
    getArticleDetailsData,
} from './model/selectors/articleDetails';

export {
    ArticleViewSelector,
} from './ui/ArticleViewSelector/ArticleViewSelector';
export {
    ArticleSortSelector,
} from './ui/ArticleSortSelector/ArticleSortSelector';

export type { Article } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export { ArticleView, ArticleType, ArticleSortField } from 'entities/Article/model/consts';
