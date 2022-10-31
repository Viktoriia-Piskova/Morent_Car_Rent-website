export function displayFilters (filters, container) {
        for (let filter of filters) {
        container.innerHTML += `
        <div class="form-check filter-item">
            <input 
                class="form-check-input" 
                type="checkbox" id="${filter.toLowerCase()}">
            <label 
                for="${filter.toLowerCase()}" 
                class="form-check-label filter-name">${filter} 
                <span class="filter-count">(10)</span>
            </label>
        </div>
        `}
    }

