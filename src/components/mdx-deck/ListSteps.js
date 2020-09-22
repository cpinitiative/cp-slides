import React from 'react'
import useSteps from "../../../gatsby-theme-mdx-deck/src/hooks/use-steps";

export const ListSteps = props => {
  const listItems = React.Children.toArray(props.children.props.children)
  const step = useSteps(listItems.length)
  console.log(listItems, step);
  const newEl = React.cloneElement(props.children, {
    children: listItems.map((child, i) =>
      React.cloneElement(child, {
        style: {
          visibility: i < step ? 'visible' : 'hidden',
        },
      })
    )
  });

  return newEl;
}

export default ListSteps