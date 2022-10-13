import React from 'react'

function Button({children}) {
  return (
    <button className="bg-transparent dark:text-white dark:border-slate-100 dark:hover:bg-white dark:hover:text-black hover:bg-blue-dark text-blue-card  py-2 px-4 border border-blue-card hover:bg-blue-card hover:text-white mr-3 rounded-3xl">{children}</button>
  )
}

export default Button