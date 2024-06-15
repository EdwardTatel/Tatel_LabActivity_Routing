import { Link } from 'react-router-dom'
import './App.css'

export default function Home({articles}) {

  return (
    <div className="content">
      <h2>Articles</h2>      
      {articles && articles.map(article => (
        <div key={article.id} className="card">
          <h3>{article.title}</h3>
          <p>Written by {article.author}</p>
          <Link to={`/articles/${article.id}`}>Read More...</Link>
        </div>
      ))}
    </div>
  )
}
