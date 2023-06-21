import React from 'react';
import '../Styles/Fuji.css';

class FujiPage extends React.Component {
  render() {
    return (
<div className="page">
        <h1>IfujiForm問卷系統</h1>
        <p>協助Fuji按摩椅設計問卷系統，讓員工可以回報購買心得以便做統合</p>
        <h2>使用技術：</h2>
        <p>
          - Mysql：用於建立資料庫，儲存問卷回報的資料。
        </p>
        <p>
          - Express.js：建立後端伺服器，處理前端的HTTP請求，並提供API供前端存取資料庫。
        </p>
        <p>
          - Docker：使用容器化技術，方便部署和管理問卷系統的運行環境。
        </p>
        <h2>心得過程：</h2>
        <p>
          在設計IfujiForm問卷系統的過程中，我們首先考慮到Fuji按摩椅的需求，希望員工能夠方便地回報購買心得，以便後續統合和分析。因此，我們決定開發一個問卷系統，以收集並儲存員工的購買心得。
        </p>
        <p>
          為了實現這個問卷系統，我們選擇了使用Mysql作為資料庫，這樣可以方便地儲存問卷回報的資料。同時，我們使用Express.js建立了一個後端伺服器，處理前端的HTTP請求，並提供API供前端存取資料庫。這樣，前端和後端就可以進行資料的傳輸和交互操作。
        </p>
        <p>
          為了提高系統的可靠性和可移植性，我們還使用了Docker來容器化問卷系統的運行環境。這樣可以方便地部署和管理問卷系統，並且確保在不同的環境中運行一致性。
        </p>
        <p>
          綜上所述，我們使用Mysql、Express.js和Docker等技術來開發IfujiForm問卷系統，以協助Fuji按摩椅設計。這個系統可以讓員工方便地回報購買心得，並且具有良好的可靠性和可移植性。
        </p>
        <p>
          您可以在
          <a href="https://github.com/your-username/your-project">這裡</a>
          查看專案的詳細介紹和程式碼。
        </p>
      </div>
    );
  }
}

export default FujiPage;
