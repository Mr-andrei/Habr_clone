import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    isInverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, isInverted } = props;

    return (
        <Svg className={classNames(isInverted ? cls.inverted : cls.Icon, {}, [className])} />
    );
});
