import Navbar from "../components/Navbar/Navbar";

const Faq = () => {
  return (
    <div className="faq-about">
      <Navbar />
      <section className="faq-about">
        <article className="faq-about">
          <h1>What is Crypto Analytics?</h1>
          <p>
            Crypto Analytics is a reliable source of cryptocurrency data. We
            track and provide market data for the top 100 cryptoassets. We also
            provide real-time price for <span>Bitcoin</span>,
            <span> Ethereum</span>, <span>BNB</span>, <span>Cardano</span>, and
            <span> Solana</span>.
          </p>
        </article>
        <article className="faq-about">
          <h1>Do I need an account to access the data?</h1>
          <p>No. You don't need an account to use CryptoAnalytics.</p>
        </article>
        <article className="faq-about">
          <h1>Where do you get your data from?</h1>
          <p>
            The market information for the top 100 cryptoassets are provided
            by&nbsp;
            <a href="https://coingecko.com">CoinGecko</a>. Real-time price is
            sourced from&nbsp;<a href="https://binance.us">Binance.US</a> and
            crypto fear and greed index is obtained from&nbsp;
            <a href="https://alternative.me/">Alternative</a>.
          </p>
        </article>
        <article className="faq-about">
          <h1>Is Crypto Analytics free? </h1>
          <p>Yes. Crypto Analytics is completely free.</p>
        </article>
      </section>
    </div>
  );
};

export default Faq;
