import { createIconFromCategory } from '../createIconFromCategory';
import { createElement } from '../utils/createElement';
import { categoryList } from '../utils/tableData';
import { createTableBodyRowButtonList } from './createTableBodyRowButtonList';

export const createTableBodyRow = (data) => {
  const { name, created, category, content, dates } = data;

  const tableHeaderButtons = createElement(
    'th',
    {
      class:
        'tableHeaderTitle px-4 py-2 w-1/12 rounded-r bg-blue-100 text-gray-400',
    },
    createTableBodyRowButtonList()
  );
  const tableRowDates = createElement(
    'td',
    {
      class: 'tableRowDates px-4 py-2 bg-blue-100 text-gray-400',
    },
    createElement(
      'p',
      { class: 'nameText w-10/12 truncate', title: dates },
      dates
    )
  );
  const tableRowContent = createElement(
    'td',
    {
      class: 'tableRowContent px-4 py-2 bg-blue-100 text-gray-400',
    },
    createElement(
      'p',
      { class: 'nameText w-10/12 truncate', title: content },
      content
    )
  );
  const tableRowCategory = createElement(
    'td',
    {
      class: 'tableRowCategory px-4 py-2 bg-blue-100 text-gray-400',
    },
    createElement(
      'p',
      { class: 'nameText w-10/12 truncate', title: category },
      category
    )
  );

  const tableRowCreated = createElement(
    'td',
    {
      class: 'tableRowCreated px-4 py-2 bg-blue-100 text-gray-400',
    },
    createElement(
      'p',
      { class: 'nameText w-10/12 truncate', title: created },
      created
    )
  );

  const tableRowName = createElement(
    'td',
    {
      class:
        'tableRowName w-full px-4 py-2 flex items-center gap-2 rounded-l bg-blue-100 text-gray-900',
    },
    [
      createIconFromCategory(category, categoryList),
      createElement(
        'p',
        { class: 'nameText w-8/12 shrink-0 truncate', title: name },
        name
      ),
    ]
  );

  const row = createElement(
    'tr',
    {
      class: 'tableBodyRow w-full',
    },
    [
      tableRowName,
      tableRowCreated,
      tableRowCategory,
      tableRowContent,
      tableRowDates,
      tableHeaderButtons,
    ]
  );
  return row;
};