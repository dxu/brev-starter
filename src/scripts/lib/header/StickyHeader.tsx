import React, { PropsWithChildren, forwardRef } from "react";
import { cx, css, ClassNamesArg } from "@emotion/css/macro";
import sassVariables from "styles/modules/variables.module.scss";
import { until } from "styles/mediaQueries";

export const HEADER_FULL_HEIGHT = 80;
export const HEADER_SMALL_HEIGHT = 44;

type Props = PropsWithChildren<{ className?: ClassNamesArg }>;

const StickyHeader = forwardRef<HTMLElement, Props>(
  ({ children, className }, ref) => {
    const modifiedChildren = React.Children.map(children, (child, idx) => {
      // Checking isValidElement is the safe way and avoids a typescript
      // error too.
      if (React.isValidElement(child)) {
        if (idx === 0) {
          return React.cloneElement(child, {
            className: cx(styles.firstHeaderItem),
          });
        } else if (idx === React.Children.count(children) - 1) {
          return React.cloneElement(child, {
            className: styles.lastHeaderItem,
          });
        }
      }
      return child;
    });
    return (
      <header
        ref={ref}
        className={cx(
          "navbar is-fixed-top",
          styles.view,
          styles.viewTablet,
          className
        )}
      >
        {modifiedChildren}
      </header>
    );
  }
);

const styles = {
  view: css`
    display: flex;
    height: ${HEADER_FULL_HEIGHT}px;
    box-shadow: rgb(0 0 0 / 8%) 0px 1px 12px !important;

    padding: 0 ${sassVariables.desktopGap};
  `,
  viewTablet: until(
    "tablet",
    css`
      padding: 0 32px;
      height: ${HEADER_SMALL_HEIGHT}px;
    `
  ),
  firstHeaderItem: css`
    padding-right: 12px;
  `,
  lastHeaderItem: css`
    padding-right: 0px;
  `,
};

export default StickyHeader;
