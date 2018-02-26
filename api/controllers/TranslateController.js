const axios = require('axios')

module.exports = {
  translate(req, res) {
    // 필요 파라미터
    // https://glosbe.com/gapi/translate?from=kor&dest=eng&format=json&pretty=false&phrase=%EB%B2%88%EC%97%AD
    const url = 'https://glosbe.com/gapi/translate'
    let params = Object.assign({ from: 'kor', dest: 'eng', format: 'json', pretty: false }, req.allParams())
    if (!params.phrase) return res.badRequest()

    // 응답에서 매칭된게 없던 경우(r.data 배열 내에 phrase가 등장한 적이 한번도 없던 경우) 별도 내부 사전을 통해 데이터를 조회한 뒤 결과를 내려주던지, 아니면 없음을 report하는 기능을 추가한다.
    axios.get(url, { params }).then(
      // 응답 : [{phrase - 단어, meanings - 예문}, {meanings - 예문만 있는 경우도 있음.}]
      // r.data.tuc => 번역 결과로 얻어온 응답 배열, 다른 키는 응답에서 사용될 필요가 없다.
      r => res.json(r.data.tuc),
      err => res.serverError(err)
    )
  }
}
