##This is an example of client side navigation not working with middleware and page with serverSideProps

Link to `/test` works in developement (`yarn dev`)

If you build and start `yarn build` `yarn start` the link will not work (props for the `/test` page will be `{}`).

Works on `next@12.2` not working on `next@13.4` or `next@canary` 