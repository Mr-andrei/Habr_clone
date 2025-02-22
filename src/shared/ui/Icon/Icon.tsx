import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    isInverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        isInverted,
        ...otherProps
    } = props;

    return (
        <Svg
            className={classNames(isInverted ? cls.inverted : cls.Icon, {}, [className])}
            {...otherProps}
        />
    );
});
