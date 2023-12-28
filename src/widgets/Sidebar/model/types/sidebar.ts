import React from 'react';

export interface SidebarItemType {
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    path: string;
    text: string;
}
