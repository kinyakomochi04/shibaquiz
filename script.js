// 間違えた回数をカウントする変数
let incorrectCount = 0;
// 正解の文字列をここで設定
const correctAnswer = '3';
const maxAttempts = 3;

// HTMLの読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-button');
    const answerBox = document.getElementById('answer-box');
    const resultMessage = document.getElementById('result-message');
    const imageContainer = document.getElementById('image-container');

    // 送信ボタンがクリックされた時の処理
    submitButton.addEventListener('click', () => {
        const inputAnswer = answerBox.value;

        // ヒント処理
        if (inputAnswer === 'ヒント') {
            resultMessage.textContent = 'それぞれ何指をさしているかが大事';
            resultMessage.className = 'correct';
            imageContainer.innerHTML = '';
            return; // これ以降の処理は行わない
        }

        if (inputAnswer === correctAnswer) {
            // 正解時の処理
            resultMessage.textContent = '正解！おめでとう！🎉';
            resultMessage.className = 'correct';

            // 画像を表示するための<img>要素を作成
            const correctImage = document.createElement('img');
            correctImage.src = 'images/jp.png'; // imagesフォルダ内の画像を指定
            correctImage.alt = '正解の画像';
            imageContainer.innerHTML = '';
            imageContainer.appendChild(correctImage);

            // 入力欄とボタンを無効化
            answerBox.disabled = true;
            submitButton.disabled = true;
        } else {
            // 不正解時の処理
            incorrectCount++;
            if (incorrectCount >= maxAttempts) {
                // 3回間違えたら無効化
                resultMessage.textContent = `残念、3回間違えました。これ以上入力できません。`;
                resultMessage.className = 'incorrect';
                answerBox.disabled = true;
                submitButton.disabled = true;
            } else {
                // 残り回数を表示
                const remainingAttempts = maxAttempts - incorrectCount;
                resultMessage.textContent = `不正解です。残り${remainingAttempts}回挑戦できます。`;
                resultMessage.className = 'incorrect';
            }
        }
    });
});