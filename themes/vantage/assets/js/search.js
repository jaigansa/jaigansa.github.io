import Fuse from 'fuse.js';

const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const searchResultsList = document.getElementById('search-results-list');

let fuse = null;
let isLoaded = false;

const SECTION_ICONS = {
  journal: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v4m-2 10a2 2 0 002-2v-4a2 2 0 00-2-2m0 8l4-4m0 0l-4-4m4 4H12"></path></svg>',
  works: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>',
  default: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>'
};

async function initSearch() {
  if (isLoaded) return;
  try {
    const response = await fetch('/index.json');
    const data = await response.json();
    
    fuse = new Fuse(data, {
      keys: [
        { name: 'title', weight: 0.7 },
        { name: 'content', weight: 0.3 }
      ],
      threshold: 0.3,
      includeMatches: true,
      minMatchCharLength: 2
    });
    isLoaded = true;
  } catch (error) {
    console.error('Failed to initialize search:', error);
  }
}

if (searchInput) {
  // Global shortcut
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === 'Escape') {
      searchResults.classList.add('hidden');
      searchInput.blur();
    }
  });

  searchInput.addEventListener('focus', initSearch);

  searchInput.addEventListener('input', async (e) => {
    const query = e.target.value;
    
    if (!query) {
      searchResults.classList.add('hidden');
      return;
    }

    if (!isLoaded) await initSearch();

    if (fuse) {
      const results = fuse.search(query);
      displayResults(results);
    }
  });

  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
      searchResults.classList.add('hidden');
    }
  });
}

function displayResults(results) {
  if (results.length === 0) {
    searchResultsList.innerHTML = `
      <div class="p-8 text-center">
        <div class="text-slate-300 dark:text-slate-700 mb-3 flex justify-center">
          <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <p class="text-sm font-medium text-slate-500">No matches found for your query</p>
      </div>
    `;
  } else {
    searchResultsList.innerHTML = results
      .slice(0, 10)
      .map(result => {
        const section = result.item.section || 'default';
        const icon = SECTION_ICONS[section] || SECTION_ICONS.default;
        const content = result.item.content || '';
        const snippet = content.substring(0, 85);
        
        return `
          <a href="${result.item.permalink}" class="group flex items-start gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200">
            <div class="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-twitter group-hover:text-white transition-colors">
              ${icon}
            </div>
            <div class="flex-grow min-w-0">
              <div class="flex items-center justify-between gap-2 mb-0.5">
                <div class="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-twitter transition-colors">
                  ${result.item.title}
                </div>
                <span class="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-twitter/10 group-hover:text-twitter transition-colors">
                  ${section}
                </span>
              </div>
              <div class="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 leading-relaxed">
                ${snippet}${content.length > 85 ? '...' : ''}
              </div>
            </div>
          </a>
        `;
      })
      .join('');
  }
  searchResults.classList.remove('hidden');
}