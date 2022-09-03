import React from 'react'

function Pogination({handlePage, page}) {
  return (
    <nav aria-label="Page navigation example" style={{display: 'flex'}}>
          <ul style={{margin: '0 auto'}} class="pagination">
            <li class="page-item">
              <p  onClick={() => handlePage(page - 1)} class="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </p>
            </li>
            <li onClick={() => handlePage(1)} class="page-item"><p class="page-link" >1</p></li>
            <li  onClick={() => handlePage(2)} class="page-item"><p class="page-link" >2</p></li>
            <li class="page-item">
              <p class="page-link" onClick={() => handlePage(page + 1)} aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </p>
            </li>
          </ul>
    </nav>
  )
}

export default Pogination