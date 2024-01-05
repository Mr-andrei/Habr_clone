import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema';

export interface ArticlesDetailsPageSchema {
    articleDetailsComments: ArticleDetailsCommentsSchema;
    recommendationArticles: ArticleDetailsRecommendationsSchema;

}
