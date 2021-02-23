import React from "react";
import CoinDetail from "../CoinDetail";
import CoinMetric from "../CoinMetric";
import CoinNewsView from "../CoinNewsView";
import { CoinNews, CoinDetails, CoinMetrics } from "../../services/newsAPI";
import { addCoin, getFaves, deleteCoin } from "../../services/apiService";

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
  metricsCall = async () => {
    try {
      const metrics = await CoinMetrics(this.data.symbol);
      this.setState({
        metrics: metrics.data,
      });
    } catch (e) {
      throw e;
    }
  };
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
    await this.metricsCall();
    await this.showFaves();
  };

  render() {
    const { market_data } = this.props.location.state.data;
    const { news } = this.state;
    const { details } = this.state;
    const { metrics } = this.state;

    return (
      <div className="coinInfo">
        <div className="coinInfo__header">
          <span className="coinInfo__header--left">
            <img
              className="coinInfo__header--image"
              src={this.data.image.large}
            />
            <h1 className="coinInfo__header--title">{this.data.name}</h1>
          </span>
          {this.state.liked ? (
            <button
              className="CoinInfo__header--button"
              onClick={this.handleUnfavorite}
            >
              Unfollow
            </button>
          ) : (
            <button
              className="CoinInfo__header--button"
              onClick={this.handleFavorite}
            >
              Follow
            </button>
          )}
        </div>
        <main className="coinInfo__wrapper">
          <CoinMetric metrics={metrics} />
          <section className="coinInfo__ctr">
          <CoinDetail details={details} />
          <CoinNewsView news={news} />
          </section>
        </main>
      </div>
    );
  }
}

export default CoinInfo;
