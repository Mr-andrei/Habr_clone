export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',

    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/article',
    [AppRoutes.ARTICLE_CREATE]: '/article-create',
    [AppRoutes.ARTICLE_EDIT]: '/article-edit',
    [AppRoutes.ADMIN_PANEL]: '/admin-panel',
    [AppRoutes.ADMIN_PANEL]: '/admin-panel',
    [AppRoutes.FORBIDDEN]: '/forbidden',
    [AppRoutes.NOT_FOUND]: '*',
};
