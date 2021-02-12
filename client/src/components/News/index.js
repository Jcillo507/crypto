import React from 'react'

import { CoinNews } from '../../services/newsAPI'

class News extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }
  componentDidMount = async () => {
    await this.newsCall()
  }
  newsCall = async () => {
    try {
      const data = await CoinNews()
      console.log(data)
      this.setState({
        data: data.data
      })
    } catch (error) {
      throw error
    }
  }
  render() {
    const { data } = this.state
    const titleShort = (title) => {
      if (title.includes('Messari')) {
        const result = title.substring(35)
        if (result.length === 0) {
          return "Cryptocurrency Brief"
        }
        else {
          return result
        }
      } else {
        return title
      }
    }
    const contentShort = (content, url) => {
      if (content.length >200) {
        return(
          <div>
          {content.substring(0,200)}{"... "} <a href={url}>Read More</a>
          </div>
        )
      }
    }
    const display = data.map(article => {
      return (
        <div key={article._id} className="news-ctr">
          <a href={article.url} className='news-title'><h3>{titleShort(article.title)}</h3></a>
          <p className="news-desc">
            {contentShort(
            article.content, article.url)}</p>

        </div>
      )
    })
    return (
      <div className='news-bs-ctr'>
        {
          this.state.data ?
            display :
            "loading"
        }
      </div>)
  }
}

export default News