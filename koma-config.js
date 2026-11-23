// 人間コマ対戦の せってい(index.html と 同じ フォルダに 置く)
// index.html を 新しい ものに 置きかえても、この ファイルの 内容は そのまま 使われます。
window.KOMA_CONFIG = {
  senderUrl: '',   // 空の ままで OK(スマホが ひらく アドレス。ふつうは 自動)
  peer: null,      // 空の ままで OK(通信の こまかい せってい)

  // れんしゅう用の しゃしん(12まい まで)。
  // しゃしんを practice フォルダに 入れて、下の 行の 先頭の // を 消し、名前と ファイル名を 書きかえる。
  practice: [
    // { label: 'せんせい', src: 'practice/sensei.jpg' },
    // { label: '大の字',   src: 'practice/dainoji.jpg' },
  ]
};
