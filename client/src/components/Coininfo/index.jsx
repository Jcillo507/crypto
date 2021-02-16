import React from "react";
import CoinDetail from "../CoinDetail";
import CoinMetric from "../CoinMetric"
import { CoinNews, CoinDetails, CoinMetrics } from "../../services/newsAPI";
import { addCoin, getFaves, deleteCoin } from "../../services/apiService";
import { titleShort, contentShort } from "../Helpers";

class CoinInfo extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.props.location.state.data;
    this.userId = this.props.location.state.userId;
    this.state = {
      news: [],
      details: [],
      metrics: [],
      userId: this.userId,
      faves: { coins: [] },
      liked: false,
    };
  }

  newsCall = async () => {
    try {
      const news = await CoinNews(this.data.symbol);
      this.setState({
        news: news.data,
      });
    } catch (error) {
      throw error;
    }
  };

  detailsCall = async () => {
    try {
      const details = await CoinDetails(this.data.symbol);
      this.setState({
        details: details.data,
      });
    } catch (error) {
      throw error;
    }
  };
  metricsCall = async()=>{
    try {
      const metrics = await CoinMetrics(this.data.symbol)
      this.setState({
        metrics: metrics.data
      })
    } catch (e) {
      throw e
    }
  }
  handleFavorite = async (e) => {
    e.preventDefault();
    const id = this.props.user.id;
    const restObj = {
      name: this.data.name,
    };
    try {
      const createdCoin = await addCoin(id, restObj);
      this.setState({ liked: true });
      return createdCoin;
    } catch (error) {
      console.error(error);
    }
  };
  handleUnfavorite = async (e) => {
    e.preventDefault();
    const id = this.props.user.id;
    console.log(this.data);
    const restObj = {
      name: this.data.name,
    };
    this.setState({ liked: false });
    try {
      const deleteFavorite = await deleteCoin(id, restObj);
      return deleteFavorite;
    } catch (error) {
      throw error;
    }
  };

  showFaves = async () => {
    try {
      const faves = await getFaves(this.props.user.id);
      this.setState({ faves: faves });
      const like = () => {
        return this.state.faves.coins.filter(
          (coin) => coin.name === this.data.name
        );
      };
      const likedArray = Array.from(like());
      if (likedArray.length > 0) {
        this.setState({ liked: true });
      }
    } catch (error) {
      throw error;
    }
  };

  componentDidMount = async () => {
    await this.newsCall();
    await this.detailsCall();
    await this.metricsCall()
    await this.showFaves();
  };

  render() {
    const { market_data } = this.props.location.state.data;
    const { news } = this.state;
    const { details } = this.state;
    const { metrics } = this.state;
    const newsDisplay = news.map((news) => {
      return (
        <div key={news.id} className="hover-ctr">
          <div href={news.url}>
            <div className="info-news-ctr" key={news._id}>
              <h3>{titleShort(news.title)}</h3>
              <div>{contentShort(news.content, news.url)}</div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="info-ctr">
        <h1 className="coin-name">{this.data.name}</h1>
        <div className="flex-ctr">
          <div className="data-ctr">
            <h2>Market Data</h2>
            <p className="info-datapts">
              Current price: ${market_data.current_price.usd}
            </p>
            <img className="coin-logo" src={this.data.image.large} />
            <p className="info-datapts">
              Market Cap Rank : {market_data.market_cap_rank}
            </p>
            <p className="info-datapts">
              Circulating Supply:{market_data.circulating_supply}
            </p>
            <p className="info-datapts">24h High: {market_data.high_24h.usd}</p>
            <p className="info-datapts">24h Low: {market_data.low_24h.usd}</p>
            <p className="info-datapts">
              Market Cap Change 24H: {market_data.market_cap_change_24h}
            </p>
            <p className="info-datapts">
              Market Cap % Change 24h:{" "}
              {market_data.market_cap_change_percentage_24h}
            </p>
            <p className="info-datapts">
              Price Change 24H: {market_data.price_change_24h}
            </p>
            <p className="info-datapts">
              Price Change 24H: {market_data.price_change_percentage_24h}%
            </p>
            <p className="info-datapts">
              Price Change 7d: {market_data.price_change_percentage_7d}%
            </p>
            <p className="info-datapts">
              Price Change 14d: {market_data.price_change_percentage_14d}%
            </p>
            <p className="info-datapts">
              Price Change 30d: {market_data.price_change_percentage_30d}%
            </p>
            <p className="info-datapts">
              Price Change 60d: {market_data.price_change_percentage_60d}%
            </p>
            <p className="info-datapts">
              Price Change 200d: {market_data.price_change_percentage_200d}%
            </p>
            <p className="info-datapts">
              Price Change 1y: {market_data.price_change_percentage_1y}%
            </p>
            {this.state.liked ? (
              <button
                className="info-button unfollow"
                onClick={this.handleUnfavorite}
              >
                Unfollow
              </button>
            ) : (
              <button
                className="info-button follow"
                onClick={this.handleFavorite}
              >
                Follow
              </button>
            )}
          </div>
          <div className="news-base-ctr full-scroll">
            <h2 className="info-bx-header">News</h2>
            {newsDisplay}
          </div>
            <CoinDetail details={details} />
            <CoinMetric metrics={metrics}/>
        </div>
      </div>
    );
  }
}

export default CoinInfo;
