import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    useInitialEffect,
} from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import {
    getArticleCommentsIsLoading,
} from '../../model/selectors/comments';
import {
    getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice';

interface ArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments = memo(({ className, id }: ArticleDetailsCommentsProps) => {
    const { t } = useTranslation();
    const isLoading = useSelector(getArticleCommentsIsLoading);
    const comments = useSelector(getArticleComments.selectAll);

    const dispatch = useAppDispatch();
    const createCommentHandler = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    return (
        <div
            className={classNames('', {}, [className])}
        >
            <Text title={t('Comments')} />
            <AddCommentForm onSendComment={createCommentHandler} />
            <CommentList
                isLoading={isLoading}
                comments={comments}
            />
        </div>
    );
});
