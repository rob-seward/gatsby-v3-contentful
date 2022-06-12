import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import {MenuWrapper, MenuItem, SubMenuItemWrapper} from './style';

export default function Menu() {
    const result = useStaticQuery(graphql`
  fragment menuItemData on ContentfulMenuItem {
    label
    id
    page {
      slug
    }
  }
  
  query MenuQuery {
    contentfulMenu {
      menuItems {
        ...menuItemData
        subMenuItem {
         ...menuItemData
        }
      }
    }
  }
  `);

    return (
        <MenuWrapper>
              {result.contentfulMenu.menuItems.map((menuItem) => (
               <MenuItem key={menuItem.id}>

                   {!menuItem.subMenuItem ? (


                  <Link to={`/${menuItem.page.slug}`}>{menuItem.label}</Link> )


                  :  ( 


                  <SubMenuItemWrapper>
                      <div>{menuItem.label}</div>
                      <div>
                        {menuItem.subMenuItem?.map((subMenItem) => (
                    <div key={subMenItem.id}>
                        <Link to={`/${subMenItem.page.slug}`}>{subMenItem.label}</Link>
                        </div>
                    ))} 
                    </div>
                  </SubMenuItemWrapper> 
                  )}
                </MenuItem>
              ))}
            </MenuWrapper>
    )
}