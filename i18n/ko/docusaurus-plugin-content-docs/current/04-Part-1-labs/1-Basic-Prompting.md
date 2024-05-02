<head>
  <body className="navigation-with-keyboard ko" />
</head>

# 기본 프롬프트

:::note 일러두기
이 페이지는 기계 번역을 통해 한국어로 번역했습니다. 어색한 표현이 있을 수 있으니 양해 바랍니다.
:::

:::tip 프롬프트 엔지니어링이란 무엇인가요?
프롬프트 엔지니어링은 자연어 처리(NLP)의 개념으로, 입력에 **작업에 대한 설명을 포함**하여 **모델이 원하는 결과**를 출력하도록 **프롬프트**하는 것을 포함합니다.
:::

몇 가지 프롬프트부터 시작하여 채팅 인터페이스를 사용하여 응답을 관찰해 보겠습니다.

다음은 몇 가지 예시이지만, 자신만의 프롬프트를 만들어서 어떤 일이 일어나는지 확인해 보세요!

```text title="사용자 프롬프트에 입력:"
호주의 수도는 어디인가요?
```

```text title="사용자 프롬프트에 입력:"
바나나 빵 레시피와 그 재료를 위한 쇼핑목록
```

```text title="사용자 프롬프트에 입력:"
2001년 최고의 영화 10편은 무엇인가요?
목록으로 나열해 주세요.
영화 제목, 박스오피스 수익, 제작사를 나열합니다.
목록에서 1위부터 10위까지 영화 순위를 매겨주세요.
```

```text title="사용자 프롬프트에 입력:"
n번째 소수를 계산하는 파이썬 함수를 작성합니다.
```

## 새로운 콘텐츠 생성하기

학습 데이터에서 유사한 콘텐츠의 빈도를 기반으로 출력이 생성되더라도 생성형 AI 모델은 이전에 존재하지 않았던 새로운 콘텐츠를 생성할 수 있습니다.

다음과 같은 프롬프트를 사용해 보세요:

```text title="사용자 프롬프트에 입력:"
"파이썬"이라는 단어로 삼행시를 만들어 주세요.
```

삼행시는 어땠나요? 마음에 들지 않았다면 언제든지 채팅 세션에 새 삼행시를 생성해달라고 요청할 수 있습니다.

다음으로 사용 가능한 매개변수를 확인해 보겠습니다: 채팅 인터페이스의 오른쪽 열에 있는 temperature(온도) 필드를 사용하여 온도를 0으로 설정합니다. 프롬프트를 다시 시도하면 어떤 메시지가 표시되나요?

온도 매개변수는 모델이 얼마나 "창의적"으로 표현될 수 있는지를 제어합니다. "온도"의 값이 낮으면 모델이 가장 높은 가중치를 가진 완성도로 응답할 가능성이 매우 높으므로 응답의 가변성이 제한됩니다. '온도'의 값이 높을수록 가중치가 낮은 완성이 생성될 가능성이 높아져 보다 창의적인(그러나 정확도는 떨어지지만) 응답이 가능합니다.

다음은 다른 온도 값으로 시도해 볼 수 있는 또 다른 프롬프트입니다:

```text title="사용자 프롬프트에 입력:"
독특하고 긴 고양이 이름은 무엇이 있을까요?
```

> 참고: LLM을 다룰 때는 결과를 예측할 수 없습니다. 여기서 온도를 변경하면 예상대로 작동할 수도 있고 그렇지 않을 수도 있습니다. 또한 비교적 오래된 버전의 GPT3.5를 사용하고 있습니다. 온도 효과는 GPT4와 같은 최신 LLM에서 더 잘 나타납니다.

**계속하기 전에 온도 매개변수가 0.7로 재설정되었는지 확인하세요.**

## 유용성이 떨어지는 프롬프트

자연어 생성 AI 모델에는 여러 가지 한계가 있습니다:

- 과거의 고정된 시점에 고정된 학습 데이터에 의해 제한을 받습니다.
- 인간의 언어와 유사한 텍스트를 생성하지만 추론이나 인지가 불가능합니다.
- 이전 프롬프트에 대한 기억이 없으며(채팅이 지워진 경우), 자신의 행동을 학습하거나 변경할 수 있는 기능도 없습니다.

다음은 이러한 약점을 보여주는 몇 가지 예시 프롬프트입니다:

```text title="사용자 프롬프트에 입력:"
엘리자베스 2세 여왕은 언제 돌아가셨나요?
```

이 경우 모델은 2021년 6월까지만 최신인 학습 데이터에 의해 제한됩니다.

```text title="사용자 프롬프트에 입력:"
98765의 제곱근은 무엇인가요?
```

이 모델은 수학 문제에 대한 답을 생성하지만 정답이라는 보장은 없습니다. 여기서 정답(3디피까지)은 314.269입니다. 채팅을 지운 다음 같은 프롬프트를 다시 제출하여 같은 답이 나오는지 확인해 보세요. (기본 GPT 모델에서 수학 문제에 대한 정답을 얻는다면 이는 질문과 답변이 학습 데이터에 잘 표현되어 있기 때문일 뿐입니다.)

하지만 모델에 98765의 제곱근을 계산하는 파이썬 코드를 작성하도록 요청하면 아마 잘 해낼 수 있을 것입니다. (해보세요!).

```text title="사용자 프롬프트에 입력:"
98765의 제곱근을 계산하는 파이썬 코드를 작성합니다.
```

다음으로 모델에게 퍼즐을 풀도록 요청합니다:

```text title="사용자 프롬프트에 입력:"
길동씨는 제 삼촌입니다. 길동씨에게는 철수와 영희라는 두 자녀가 있습니다. 철수의 유일한 이모는 예진씨입니다. 제 어머니의 이름은 무엇인가요?
```

간단한 퍼즐이지만 GPT-3.5 모델은 사람 간의 관계를 추론할 수 없어 풀지 못할 수도 있습니다. (GPT-4와 같은 고급 모델은 정답을 맞출 가능성이 더 높지만 여전히 정답을 보장하지는 않습니다.)

> 참고: 채팅을 지우지 않고 질문을 몇 번 반복하면 모델이 정답을 찾을 수 있습니다!

## 생성형 AI 모델은 작업을 수행할 수 없습니다.

채팅 상자의 내용을 지웁니다. 다음 텍스트를 입력합니다:

```text title="사용자 프롬프트에 입력:"
https://finance.yahoo.com/trending-tickers 에 상장된 주식 중 시가총액이 가장 큰 5개 종목은 무엇인가요?
```

모델이 그럴듯한 답변으로 응답하지만, 자세히 살펴보면 실제로는 현재 시가총액 상위 5개 종목이 아닙니다. 기본 AI 모델은 작업을 수행할 수 없기 때문에 실제로 웹 페이지를 방문하여 주식 목록을 읽을 수 없습니다. 대신, 그럴듯한 답을 생성합니다.

## Completions를 통해 만들어진 내용은 사실이 아닙니다.

프롬프트 상자의 내용을 지웁니다. 다음 텍스트를 입력한 다음 생성을 클릭합니다.

```text title="사용자 프롬프트에 입력:"
시인 Harold Bloomsbury에 대한 짧은 부고 기사를 작성합니다. 참고 문헌을 포함합니다.
```

웹 검색에 따르면 Harold Bloomsbury라는 시인(또는 실제로 어떤 사람)은 존재하지 않습니다. 따라서 이 모델은 부고 기사 형식의 텍스트를 생성하지만 사실에 근거하지 않습니다. 요청된 참고 문헌조차도 그럴듯해 보이지만 실제가 아닙니다.

지금까지 살펴본 바와 같이 자연어 생성 AI 모델은 프롬프트에 대해 예상치 못한 또는 원치 않는 응답을 생성할 수 있습니다. 이는 다음과 같은 여러 가지 요인으로 인해 발생할 수 있습니다:

- 학습 데이터의 불충분한 정보
- 프롬프트의 컨텍스트가 불충분한 경우
- 모델 자체의 기능 부족
- 프롬프트를 제공하는 사용자의 악의적인 의도("탈옥")

## 정보 추출

아래 예는 프롬프트와 데이터를 결합하여 자연어 명령을 사용하여 정보를 추출하는 방법을 보여줍니다. 이 경우 이메일에서 이름, 회사, 위치 및 전화번호를 추출합니다. 프롬프트와 소스 데이터를 수정하여 다른 정보를 추출할 수 있습니다.

```
아래 텍스트에서 사람 이름, 회사 이름, 위치 및 전화번호를 추출합니다.

안녕하세요. 제 이름은 로버트 스미스입니다. 델라웨어주 콘토소 보험에서 전화했습니다. 제 동료가 당사의 종합 복리후생 정책에 대해 알고 싶으시다고 말씀해 주셨습니다. 시간이 되면 (555) 346-9322로 전화해 주시면 혜택에 대해 자세히 살펴볼 수 있을까요?
```

## 구조화된 데이터 추출

이 예에서는 가상의 과일에 대한 자유 형식의 내러티브를 제공하고, 언급된 모든 과일과 그 속성의 표를 생성하도록 모델에 요청합니다.

이 예에서는 원하는 출력 형식인 헤더 행과 몇 가지 예제를 사용하여 모델을 솎아냈습니다.

```
최근에 발견된 구크룩스 행성에서 발견된 과일이 많이 있습니다. 그곳에는 보라색이고 사탕 맛이 나는 네오스키즐이 자라고 있습니다. 회청색 과일이며 레몬과 약간 비슷하고 매우 시큼한 로헤클도 있습니다. 푸닛은 밝은 초록색이며 단맛보다는 고소한 맛이 더 강해요. 네온 핑크색에 솜사탕 맛이 나는 루프노바도 많이 있습니다. 마지막으로 글로울이라는 과일이 있는데, 산성과 부식성인 매우 시고 쓴맛이 나며 옅은 오렌지색을 띠는 과일입니다.

구크룩스의 과일을 요약한 표를 다음과 같이 마크다운 테이블에 작성하세요.
```

다음 텍스트를 추가하여 프롬프트를 확장해 보세요:

```
또한 구크룩스의 과일을 요약한 JSON 배열을 만들어 주세요:
```

이제 모델이 과일과 그 속성의 JSON 배열을 반환합니다.

## 텍스트 분류

이 예제에서는 헤드라인과 카테고리의 한 가지 예를 제공하고 모델에 두 번째 예를 분류하도록 요청합니다. 이것은 "원샷 학습"의 예로, 하나의 예제만 있으면 모델이 일반화하여 새로운 예제를 분류할 수 있습니다.

```
다음 뉴스 헤드라인을 다음 카테고리 중 하나로 분류하세요: 비즈니스, 기술, 정치, 스포츠, 엔터테인먼트

헤드라인 1: 도나 스테펜슨이 새로운 종류의 완벽함을 요리하고 있습니다. 인터넷에서 가장 사랑받는 요리 전문가가 화제의 새 책과 새로운 관점을 제시합니다.
카테고리: 엔터테인먼트

헤드라인 2: 대형 소매업체, 100개 이상의 매장 폐쇄 계획 발표

카테고리:
```

헤드라인 2를 다른 텍스트로 바꾸고 완성을 다시 생성해 보세요. 적절한 카테고리가 생성되나요? 

```
뉴욕 젯츠가 또 패했습니다!
```

```
오바마, 재선 출마 발표
```

```
장외 거래에서 Microsoft 주가 상승
```

```
20nm 공정은 더 높은 밀도와 더 나은 전력 가치를 제공합니다.
```

## 텍스트 요약

텍스트 요약은 ChatGPT의 잘 알려진 기능으로, 큰 텍스트의 짧은 요약을 생성합니다. "너무 길어서 읽지 못했습니다"라는 문구를 추가하면 아래 글의 요약본을 볼 수 있습니다. 여러분의 비즈니스에서 이 기능이 어디에 유용할까요?

```
Microsoft는 학습과 이해에 대한 보다 총체적이고 인간 중심적인 접근 방식을 취함으로써 기존 기술을 뛰어넘어 AI를 발전시키기 위한 노력을 계속해 왔습니다. 저는 Azure AI 인지 서비스의 최고 기술 책임자로서 뛰어난 과학자 및 엔지니어로 구성된 팀과 협력하여 이 과제를 현실화하기 위해 노력하고 있습니다. 제 역할에서 저는 인간 인지의 세 가지 속성인 단일 언어 텍스트(X), 오디오 또는 시각적 감각 신호(Y), 다국어(Z) 간의 관계를 바라보는 독특한 관점을 즐깁니다. 이 세 가지가 교차하는 지점에는 그림 1에서 볼 수 있듯이 인간을 더 잘 말하고, 듣고, 보고, 이해할 수 있는 더 강력한 AI를 만들기 위한 공동 표현인 XYZ 코드라는 마법이 있습니다. 

저희는 XYZ-code를 통해 여러 양식과 언어를 아우르는 교차 도메인 전이 학습이라는 장기적인 비전을 달성할 수 있을 것으로 믿습니다. 목표는 오늘날 인간이 하는 방식과 마찬가지로 광범위한 다운스트림 AI 작업을 지원하기 위해 표현을 공동으로 학습할 수 있는 사전 훈련된 모델을 보유하는 것입니다. 지난 5년 동안 대화형 음성 인식, 기계 번역, 대화형 질문 답변, 기계 독해, 이미지 캡션 등의 벤치마크에서 인간 수준의 성능을 달성했습니다. 이 다섯 가지 혁신은 인간이 학습하고 이해하는 방식에 더 가까운 다중 감각 및 다국어 학습을 달성하여 AI 역량을 비약적으로 발전시키겠다는 야심찬 포부를 향한 강력한 신호를 제공했습니다. 다운스트림 AI 작업에서 외부 지식 소스를 기반으로 한다면 공동 XYZ 코드가 이러한 열망의 기본 요소라고 생각합니다.
```

프롬프트 엔지니어링은 복잡하고 빠르게 진화하는 분야입니다. Microsoft Learn의 [이 문서](https://learn.microsoft.com/azure/cognitive-services/openai/concepts/advanced-prompt-engineering)에서 최신 지침을 제공합니다.

다음 실습에서는 원하는 응답을 생성하도록 모델을 조종하는 방법을 배워 보겠습니다.

:::info 숙제
도시 한가운데서 길을 잃은 캥거루에 대한 운율을 생성하는 프롬프트를 만들어 봅니다.
:::