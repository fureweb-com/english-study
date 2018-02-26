# English Study

1. 답답노트 Online
- 매일 자신이 학습해야할 단어에 대해 검색(영어사전 API 확인 필요)후 단어장에 추가할 수 있도록 하며, 해당 내용에 대해 시험을 볼 수 있도록 한다.

2. 시험
- 답답노트에 등록한 단어들에 대해 자신이 암기하고 있는지 테스트한다.

3. 스케쥴 관리(출석사항 및 오늘의 학습내용 요약)

4. 파일 제공(각종 저장용)

# 영어사전 API
- glosbe.com 사용

'번역' 이라는 한글을 영어 단어로 요청하는 경우, curl에서 다음과 같이 사용.
(request header가 단순 curl agent인 경우 웹페이지를 응답하고있음. 가짜 헤더라도 작성해 줘야함.)
curl 'https://glosbe.com/gapi/translate?from=kor&dest=eng&format=json&pretty=false&phrase=%EB%B2%88%EC%97%AD' -H 'accept-encoding: gzip, deflate, br' -H 'accept-language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7' -H 'upgrade-insecure-requests: 1' -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36' -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8' -H 'authority: glosbe.com' -H 'cookie: __utmc=200117880; __utmz=200117880.1514868222.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); __utmt=1; __utma=200117880.1029487767.1514868222.1514868222.1514868222.1; locale=ko; ld=%7B%22d%22%3A%5B%22en%3Ako%22%2C%22ko%3Aen%22%5D%7D; glosbeScreen=1583x929; __utmb=200117880.14.10.1514868222' --compressed

핵심은 위 curl 뒤 URL에 들어갈 queryString에 대한 부분
- from : 시작언어
- dest : 대상언어
- format : json or xml
- pretty : boolean
- phrase : 번역할 단어

이하 헤더 정보는 크롬에서 보낸 정보 그대로 덤프한 내용으로, 요청 보낼 시 사용할 것

