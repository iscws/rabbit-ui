// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import { demos as dm0, frontmatter as fm0, toc as toc0, texts as txt0 } from 'C:/Users/82068/Desktop/rabbit-UI/rabbit-ui/docs/index.md?type=meta';
import { demos as dm1, frontmatter as fm1, toc as toc1, texts as txt1 } from 'C:/Users/82068/Desktop/rabbit-UI/rabbit-ui/src/alert/index.md?type=meta';
import { demos as dm2, frontmatter as fm2, toc as toc2, texts as txt2 } from 'C:/Users/82068/Desktop/rabbit-UI/rabbit-ui/src/button/index.md?type=meta';
import { demos as dm3, frontmatter as fm3, toc as toc3, texts as txt3 } from 'C:/Users/82068/Desktop/rabbit-UI/rabbit-ui/src/Drawer/index.md?type=meta';
import { demos as dm4, frontmatter as fm4, toc as toc4, texts as txt4 } from 'C:/Users/82068/Desktop/rabbit-UI/rabbit-ui/src/dropDown/index.md?type=meta';
import { demos as dm5, frontmatter as fm5, toc as toc5, texts as txt5 } from 'C:/Users/82068/Desktop/rabbit-UI/rabbit-ui/src/modal/index.md?type=meta';
import { demos as dm6, frontmatter as fm6, toc as toc6, texts as txt6 } from 'C:/Users/82068/Desktop/rabbit-UI/rabbit-ui/src/space/index.md?type=meta';
import { demos as dm7, frontmatter as fm7, toc as toc7, texts as txt7 } from 'C:/Users/82068/Desktop/rabbit-UI/rabbit-ui/src/switch/index.md?type=meta';
import { demos as dm8, frontmatter as fm8, toc as toc8, texts as txt8 } from 'C:/Users/82068/Desktop/rabbit-UI/rabbit-ui/src/tag/index.md?type=meta';

export { components } from './atoms';
export { tabs } from './tabs';

export const filesMeta = {
  'docs/index': {
    frontmatter: fm0,
    toc: toc0,
    texts: txt0,
    demos: dm0,
  },
  'components/alert/index': {
    frontmatter: fm1,
    toc: toc1,
    texts: txt1,
    demos: dm1,
  },
  'components/button/index': {
    frontmatter: fm2,
    toc: toc2,
    texts: txt2,
    demos: dm2,
  },
  'components/Drawer/index': {
    frontmatter: fm3,
    toc: toc3,
    texts: txt3,
    demos: dm3,
  },
  'components/dropDown/index': {
    frontmatter: fm4,
    toc: toc4,
    texts: txt4,
    demos: dm4,
  },
  'components/modal/index': {
    frontmatter: fm5,
    toc: toc5,
    texts: txt5,
    demos: dm5,
  },
  'components/space/index': {
    frontmatter: fm6,
    toc: toc6,
    texts: txt6,
    demos: dm6,
  },
  'components/switch/index': {
    frontmatter: fm7,
    toc: toc7,
    texts: txt7,
    demos: dm7,
  },
  'components/tag/index': {
    frontmatter: fm8,
    toc: toc8,
    texts: txt8,
    demos: dm8,
  },
}

// generate demos data in runtime, for reuse route.id to reduce bundle size
export const demos = Object.entries(filesMeta).reduce((acc, [id, meta]) => {
  // append route id to demo
  Object.values(meta.demos).forEach((demo) => {
    demo.routeId = id;
  });
  // merge demos
  Object.assign(acc, meta.demos);

  // remove demos from meta, to avoid deep clone demos in umi routes/children compatible logic
  delete meta.demos;

  return acc;
}, {});
