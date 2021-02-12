import React from 'react'

import { titleShort, contentShort } from '../Helpers'

import { MarketNews } from '../../services/newsAPI'

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
      const data = await MarketNews()
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