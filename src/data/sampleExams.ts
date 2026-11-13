import { ExamAnalysisData } from '../types/exam';

export const sampleExams: ExamAnalysisData[] = [
  {
    id: 'sample-2026-03-g3-29',
    metadata: {
      titleTag: '2026년 3월 서울특별시 교육청 학력평가',
      questionNumber: '29번',
      questionType: '어법',
      targetGrade: '고3',
      pageNumber: 38,
      source: 'EXAM4YOU',
    },
    titleEn: 'The Conservative Nature of Inheritance and the Genetic Constraints on Adaptation',
    titleKo: '(유전의 보수적 본성과 적응에 대한 유전적 제약)',
    summary:
      '유전의 보수적 본성으로 인해 유기체는 환경과 무관하게 유사하면서 변이성이 있는 자손을 과잉 생산하지만, 자손은 자신이 처한 조건을 예측하거나 그에 맞게 스스로를 변화시킬 수 없으며, 어느 정도의 유연성을 발휘할 수 있다 해도 유전의 제약에 비하면 사소한 수준이며, 결국 모든 생명체가 어디에서나 살 수 있는 것은 아니다.',
    flowCheck: [
      {
        title: '도입 (1~2)',
        desc: '유전이 보수적이기 때문에 유기체는 상황의 성질과 무관하게 유사하면서도 변이성이 있는 자손을 많이 생산하며, 이는 자원이 부양할 수 있는 수준을 초과하는 과잉 생산으로 이어짐',
      },
      {
        title: '전개 (3~4)',
        desc: '생존의 필요성은 필수 자원을 사용하는 능력이 그것을 사용할 기회를 보완해야 함을 시사하지만, 필요한 것들과 기회는 완벽히 일치하지 않음',
      },
      {
        title: '반전 (5~6)',
        desc: '유전은 환경을 이용할 능력을 만들어 내지만 환경을 개의치 않는 방식으로 작동하므로, 자손은 스스로 처한 상황의 성질을 예측할 수 없으며 더군다나 그 변화에 맞춰 스스로를 바꾸는 것도 불가능함',
      },
      {
        title: '결말 (7~8)',
        desc: '유기체가 인접한 환경에 반응하여 형태와 기능에서 어느 정도의 유연성을 나타낼 수 있지만, 이 적응은 유전의 제약과 비교하면 사소하여 결과적으로 모든 생명체가 어디에서나 살 수 있는 것은 아님',
      },
    ],
    flowDiagram: {
      topBox: '유전의 본성은 보수적이며 환경에 무관심함',
      arrowText: '↓',
      bottomBox: '자손은 유전적 제약으로 인해 환경 적응에 뚜렷한 한계를 지님',
    },
    sentences: [
      {
        num: 1,
        badge: '빈칸 추론',
        originalText:
          'Darwin understood that since inheritance is conservative, it is in the nature of the organism to impose itself on the surroundings, producing many highly similar but variable offspring regardless of the nature of the conditions.',
        tokens: [
          { text: 'Darwin', role: 'S' },
          { text: 'understood', role: 'V' },
          { text: 'that', clauseTag: '[O(명사절)]', badgeNum: 1 },
          { text: 'since', clauseTag: '<이유 부사절>' },
          { text: 'inheritance', role: 'S2', gloss: '‘유전’' },
          { text: 'is', role: 'V2' },
          { text: 'conservative,', role: 'C2', gloss: '‘보수적인’' },
          { text: 'it', role: 'S1(가주어)', badgeNum: 2 },
          { text: 'is', role: 'V1' },
          { text: 'in the nature', gloss: '‘본성’' },
          { text: 'of the organism', gloss: '‘유기체’' },
          { text: 'to impose itself', clauseTag: '<진주어(to부정사구)>', role: 'O2', gloss: 'impose A on B ‘A를 B에 강요하다’', badgeNum: 2 },
          { text: 'on the surroundings,', gloss: '‘환경’' },
          { text: 'producing', clauseTag: '<분사구문>', role: 'O3', badgeNum: 3, highlight: 'red' },
          { text: 'many', gloss: '‘매우’' },
          { text: 'highly similar', gloss: '‘유사한’' },
          { text: 'but variable', gloss: '‘변이성이 있는’' },
          { text: 'offspring', gloss: '*offspring: 자손' },
          { text: 'regardless of', clauseTag: '[부사구]', gloss: '‘~와 상관없이’' },
          { text: 'the nature', gloss: '‘성질’' },
          { text: 'of the conditions.', gloss: '‘상황’' },
        ],
        translation:
          '다윈은 유전이 보수적이기 때문에, 유기체의 본성은 자신을 주변 환경에 강요하는 것에 있고, 상황의 성질과 무관하게 매우 유사하면서도 변이성이 있는 많은 자손을 생산한다는 점을 이해했다.',
        grammarPoints: [
          {
            pointNum: 1,
            title: '명사절 접속사 that',
            explanation:
              '동사 understood의 목적어 역할을 하는 명사절을 이루며, 뒤에는 완전한 절이 이어져 있다. 명사절 내부에 접속사 since가 이끄는 부사절이 포함되어 ‘부사절, + 주절’의 형태를 이루고 있다.',
          },
          {
            pointNum: 2,
            title: '가주어-진주어 구문',
            explanation:
              '동사 understood의 목적어 역할을 하는 명사절에서 it은 가주어이고, to impose itself on the surroundings는 명사적 용법의 to부정사구로 쓰인 진주어이다.',
          },
          {
            pointNum: 3,
            title: '분사구문',
            explanation:
              'producing 이하는 완전한 절에 접속사 없이 쉼표로 연결되어 앞 내용(유기체의 본성이 자신을 주변 환경에 강요하는 것에 있는 것)의 결과를 나타내는 분사구문이다. 의미상 주어인 the organism이 ‘~을 만들어 내는’ 주체이므로 능동을 나타내는 현재분사 producing이 쓰였다.',
            structure: '→= ~, and it produces[is producing] many highly similar but variable offspring ~',
          },
        ],
        deepMeaning:
          '스스로를 주변 환경에 강요하는 것은 유기체의 본성에 속한다. = 유기체 자신의 유전적 특성을 그대로 유지한 채, (그것을 환경에 맞추기보다 오히려) 환경에 적용하려는 것이 유기체의 본성이다.',
      },
      {
        num: 2,
        badge: '서술형 대비',
        originalText:
          'He further recognized that these fundamental aspects of the nature of the organism imply reproductive overrun, with organisms routinely producing more offspring than there are resources to support them.',
        tokens: [
          { text: 'He', role: 'S' },
          { text: 'further', gloss: '‘또한’' },
          { text: 'recognized', role: 'V', gloss: '‘~을 인식했다’' },
          { text: 'that', clauseTag: '[O(명사절)]', badgeNum: 1 },
          { text: 'these fundamental', gloss: '‘근본적인’' },
          { text: 'aspects', role: 'S1(복수)', gloss: '‘측면들’' },
          { text: 'of the nature of the organism', gloss: '‘유기체의 본성’' },
          { text: 'imply', role: 'V1(복수)', gloss: '‘~을 수반한다’', highlight: 'red' },
          { text: 'reproductive overrun,', role: 'O1', gloss: '‘과잉 번식’' },
          { text: 'with organisms', clauseTag: '<with가 사용된 분사구문>', badgeNum: 2 },
          { text: 'routinely producing', role: 'O2', gloss: '‘통상적으로 생산하면서’' },
          { text: 'more offspring than', gloss: '비교급-than' },
          { text: 'there are', role: 'V3', badgeNum: 3 },
          { text: 'resources', role: 'S3', gloss: '‘자원들’' },
          { text: 'to support them.', clauseTag: '[형용사적 to부정사구]', role: 'O4', badgeNum: 4, gloss: '‘그들을 부양할’' },
        ],
        translation:
          '그는 또한 유기체의 본성에 관한 이러한 근본적인 측면이 과잉 생산을 수반하며, 유기체들이 (그들의) 자손을 부양할 자원이 있는 것보다 더 많은 자손을 통상적으로 생산한다는 점을 인식했다.',
        grammarPoints: [
          {
            pointNum: 1,
            title: '명사절 접속사 that',
            explanation:
              '동사 recognized의 목적어 역할을 하는 명사절을 이루어, 뒤에는 완전한 절이 이어지며, 생략도 가능하다.',
          },
          {
            pointNum: 2,
            title: 'with + (대)명사의 목적격 + 현재분사',
            explanation:
              '전치사 with의 목적어인 명사 organisms가 ‘~을 생산하는’ 주체이므로 능동 관계를 나타내는 현재분사 producing이 쓰였다.',
            structure: '→= ~, as organisms routinely produce[are producing] more offspring ~',
          },
          {
            pointNum: 3,
            title: '도치 & 수일치',
            explanation:
              '유도부사 there이 절 앞에 쓰여 주어와 동사가 도치된 형태로, 뒤의 주어 역할의 복수명사 resources에 수일치한 복수동사 are이 쓰였다.',
          },
          {
            pointNum: 4,
            title: '형용사적 용법의 to부정사구',
            explanation:
              'to support them은 앞의 명사 resources를 수식하는 형용사적 용법의 to부정사구로 ‘그들을 부양할 (자원들)’의 의미를 나타낸다.',
          },
        ],
      },
      {
        num: 3,
        badge: null,
        originalText:
          'The need to survive implies that the capacity for using necessary resources must complement the opportunity to use them.',
        tokens: [
          { text: 'The need', role: 'S' },
          { text: 'to survive', clauseTag: '<형용사적 용법의 to부정사>', gloss: '‘생존할 필요성’', badgeNum: 1 },
          { text: 'implies', role: 'V', gloss: '‘~을 시사한다’' },
          { text: 'that', clauseTag: '<O(명사절)>', badgeNum: 2 },
          { text: 'the capacity', role: 'S1', gloss: '‘능력’' },
          { text: 'for using', badgeNum: 3, gloss: '‘동명사구’' },
          { text: 'necessary resources', role: 'O2', gloss: '‘필수 자원들’' },
          { text: 'must complement', role: 'V1', gloss: '‘~을 보완하다’' },
          { text: 'the opportunity', role: 'O1', gloss: '‘기회’' },
          { text: 'to use them.', clauseTag: '[형용사적 용법의 to부정사구]', role: 'O2', badgeNum: 4 },
        ],
        translation:
          '생존의 필요성은 필수적인 자원을 사용하는 능력이 그것을 사용할 기회를 보완해야 한다는 것을 시사한다.',
        grammarPoints: [
          {
            pointNum: 1,
            title: '형용사적 용법의 to부정사',
            explanation: 'to survive는 앞의 명사구 The need를 수식하는 형용사적 용법으로 쓰여 ‘생존할 (필요성)’의 의미를 지닌다.',
          },
          {
            pointNum: 2,
            title: '명사절 접속사 that',
            explanation: '동사 implies의 목적어 역할을 하는 명사절을 이루며, 뒤에는 완전한 절을 이끈다. 생략도 가능하다.',
          },
        ],
        deepMeaning:
          '생존하려면 필요한 자원을 사용할 수 있는 능력도 있어야 하지만, 실제로 그 자원을 사용할 수 있는 기회가 서로 맞아야 한다[함께 갖춰져야 한다].',
      },
      {
        num: 4,
        badge: null,
        originalText: 'But needs and opportunity do not perfectly match.',
        tokens: [
          { text: 'But', gloss: '‘그러나’' },
          { text: 'needs and opportunity', role: 'S', gloss: '‘필요와 기회’' },
          { text: 'do not perfectly match.', role: 'V', gloss: '‘완벽히 일치하지 않는다’' },
        ],
        translation: '그러나 필요한 것들과 기회는 완벽히 일치하지는 않는다.',
        grammarPoints: [],
      },
      {
        num: 5,
        badge: '❤ 주제문',
        originalText:
          'Inheritance produces the capacities for exploiting the surroundings, but in a way that is indifferent to the surroundings.',
        tokens: [
          { text: 'Inheritance', role: 'S', gloss: '‘유전’' },
          { text: 'produces', role: 'V' },
          { text: 'the capacities', role: 'O', gloss: '‘능력들’' },
          { text: 'for exploiting the surroundings,', badgeNum: 1, gloss: '**exploit: 이용하다' },
          { text: 'but in a way', badgeNum: 2, gloss: '‘방식으로’' },
          { text: 'that is indifferent', clauseTag: '<관계사절>', role: 'V2 C2', badgeNum: 3, gloss: '‘~에 무관심한’' },
          { text: 'to the surroundings.', gloss: '‘환경들’' },
        ],
        translation: '유전은 주변 환경을 이용하는 능력을 만들어 내지만, 주변 환경을 개의치 않는 방식으로 그렇게 한다.',
        grammarPoints: [
          {
            pointNum: 1,
            title: '동명사구',
            explanation: '전치사 for의 목적어로 동명사구 exploiting the surroundings가 쓰였다.',
          },
          {
            pointNum: 2,
            title: '생략 구문',
            explanation: 'but 뒤에는 앞의 동사구 produces the capacities for exploiting the surroundings가 반복되므로 생략된 구조이다.',
            structure: '→= ~, but (it) produces the capacities for exploiting the surroundings in a way ~',
          },
          {
            pointNum: 3,
            title: '주격 관계대명사 that',
            explanation:
              '주어가 없는 불완전한 절(is indifferent to the surroundings)을 이끌어 앞의 명사구 a way를 선행사로 하는 관계사절을 이루고 있으며, which로 바꿔 쓸 수 있다.',
          },
        ],
      },
      {
        num: 6,
        badge: '빈칸 추론',
        originalText:
          'Offspring cannot anticipate the nature of the conditions in which they find themselves, much less alter themselves in ways that are suitable to any changes in those conditions.',
        tokens: [
          { text: 'Offspring', role: 'S', gloss: '‘후손’' },
          { text: 'cannot anticipate', role: 'V', gloss: '‘예측할 수 없다’' },
          { text: 'the nature of the conditions', role: 'O' },
          { text: 'in which', clauseTag: '<관계사절>', badgeNum: 1, highlight: 'red', gloss: '=where(관·부)' },
          { text: 'they find themselves,', role: 'S1 V1 O1', badgeNum: 2 },
          { text: 'much less', gloss: '‘~은커녕 (더더욱) 아니다’' },
          { text: 'alter themselves', role: 'O2', badgeNum: 2, gloss: '‘자신들을 바꾸다’' },
          { text: 'in ways that are suitable', clauseTag: '<관계사절>', role: 'V3 C3', badgeNum: 3, gloss: '‘적합한 방식으로’' },
          { text: 'to any changes in those conditions.', gloss: '‘어떤 변화에도’' },
        ],
        translation:
          '자손은 자신들이 처하게 되는 상황의 성질을 예측할 수 없으며, 더군다나 그러한 상황 속 어떤 변화에도 적합한 방식으로 자신들을 바꾸는 것도 할 수 없다.',
        grammarPoints: [
          {
            pointNum: 1,
            title: '전치사 + 관계대명사 in which',
            explanation:
              '앞의 명사구 the conditions를 선행사로 꾸미는 관계사절을 전치사 in과 목적격 관계대명사 which가 결합하여 이끌며, 뒤에 완전한 절(they find themselves)이 이어졌다. 장소의 관계부사 where로 바꿀 수도 있다.',
            structure: '→= ~ the conditions where they find themselves, ~',
          },
          {
            pointNum: 2,
            title: '재귀대명사',
            explanation: '동사 find와 alter의 목적어가 주어 they, Offspring과 동일하므로, 재귀대명사 themselves가 각각 쓰였다.',
          },
          {
            pointNum: 3,
            title: '주격 관계대명사 that & 수일치',
            explanation:
              '주어가 없는 불완전한 절을 이끌어 명사 ways를 선행사로 수식하는 관계사절을 이루며, 선행사 복수명사 ways에 수일치하여 복수동사 are가 쓰였다.',
          },
        ],
      },
      {
        num: 7,
        badge: null,
        originalText:
          'While it is true that organisms can express some amount of flexibility in their form and function in response to their immediate surroundings, these adjustments are minor compared to the constraints of inheritance.',
        tokens: [
          { text: 'While', clauseTag: '[양보 부사절]', gloss: '‘~이지만’' },
          { text: 'it', role: 'S1(가주어)', badgeNum: 1 },
          { text: 'is true', role: 'V1 C1' },
          { text: 'that organisms can express', clauseTag: '<진주어(명사절)>', role: 'S2 V2', badgeNum: 1 },
          { text: 'some amount of flexibility', role: 'O2', gloss: '‘어느 정도의 유연성’' },
          { text: 'in their form and function', clauseTag: '[부사구]', gloss: '‘형태와 기능에서’' },
          { text: 'in response to', gloss: '‘~에 반응하여’' },
          { text: 'their immediate surroundings,', gloss: '‘인접한 환경’' },
          { text: 'these adjustments', role: 'S', gloss: '‘이러한 적응들은’' },
          { text: 'are minor', role: 'V C', gloss: '‘사소하다’', highlight: 'red' },
          { text: 'compared to', clauseTag: '<분사구문>', badgeNum: 2, gloss: '‘~와 비교하면’' },
          { text: 'the constraints of inheritance.', gloss: '‘유전의 제약들’' },
        ],
        translation:
          '유기체가 자신과 인접한 주변 환경에 반응하여 자신의 형태와 기능에서 어느 정도의 유연성을 나타낼 수 있다는 것은 사실이지만, 이 적응은 유전의 제약과 비교하면 사소하다.',
        grammarPoints: [
          {
            pointNum: 1,
            title: '가주어-진주어 구문',
            explanation: 'it은 가주어이고, 접속사 that이 이끄는 명사절이 진주어로 쓰였다.',
          },
          {
            pointNum: 2,
            title: '분사구문 compared to',
            explanation:
              'compared to 이하는 주절을 부연 설명하는 분사구문으로 주절의 주어 these adjustments가 ‘비교되는’ 대상이므로 수동을 나타내는 과거분사 compared가 쓰였다.',
          },
        ],
        deepMeaning:
          '유기체는 자신의 주변 환경에 따라서 어느 정도 적응할 수는 있지만, 유전이 정해 놓은 범위를 크게 넘어서지는 못한다.',
      },
      {
        num: 8,
        badge: null,
        originalText: 'As a result, not every living thing can live everywhere.',
        tokens: [
          { text: 'As a result,', gloss: '‘결과적으로’' },
          { text: 'not every living thing', role: 'S', badgeNum: 1, gloss: '‘모든 생명체가 ~한 것은 아니다’' },
          { text: 'can live everywhere.', role: 'V', gloss: '‘모든 곳에서 살 수 있다’' },
        ],
        translation: '그 결과, 모든 생명체가 어디에서나 살 수 있는 것은 아니다.',
        grammarPoints: [
          {
            pointNum: 1,
            title: '부분부정 (not every)',
            explanation:
              '부정어와 전체를 나타내는 표현(all, every, both, always, necessarily 등)이 결합하여 ‘모두 ~한 것은 아니다’를 뜻한다. 여기서는 not every가 결합하여 ‘모든 것이 다 살 수 있는 것은 아니다’를 뜻한다.',
          },
        ],
      },
    ],
    sidebar: {
      checkQuizzes: [
        {
          checkNum: 1,
          title: 'what vs. that / which vs. it / 대명사 vs. 재귀대명사 / 동사 vs. 준동사',
          question:
            'Darwin understood (what / that) since inheritance is conservative, (which / it) is in the nature of the organism to impose (it / itself) on the surroundings, (produce / producing) many highly similar but variable offspring regardless of the nature of the conditions.',
          answer: 'that / it / itself / producing',
          explanation: 'understood의 목적어 명사절 that, 가주어 it, 의미상 주어와 일치하는 재귀대명사 itself, 연속 동작/결과의 능동 분사구문 producing.',
        },
        {
          checkNum: 2,
          title: 'what vs. that / 수일치 / 동사 vs. 준동사 / 수일치',
          question:
            'He further recognized (what / that) these fundamental aspects of the nature of the organism (imply / implies) reproductive overrun, with organisms routinely (produce / producing) more offspring than there (is / are) resources to support them.',
          answer: 'that / imply / producing / are',
          explanation: '접속사 that, 주어 aspects(복수)에 따른 imply, with+명사+현재분사 producing, 유도부사 뒤 복수주어 resources에 맞춘 are.',
        },
        {
          checkNum: 3,
          title: 'what vs. that / 명사구 vs. 동명사 / 대명사의 수',
          question:
            'The need to survive implies (what / that) the capacity for (the use / using) necessary resources must complement the opportunity to use (it / them).',
          answer: 'that / using / them',
          explanation: 'implies의 목적어절 that, 전치사 for 뒤 동명사 using + 목적어, necessary resources(복수)를 받는 them.',
        },
        {
          checkNum: 4,
          title: '형용사 vs. 부사',
          question: 'But needs and opportunity do not (perfect / perfectly) match.',
          answer: 'perfectly',
          explanation: '일반동사 match를 수식하므로 부사 perfectly가 적절.',
        },
        {
          checkNum: 5,
          title: 'in which vs. what / that vs. how / 수일치',
          question:
            'Offspring cannot anticipate the nature of the conditions (in which / what) they find themselves, much less alter themselves in ways (that / how) (is / are) suitable to any changes in those conditions.',
          answer: 'in which / that / are',
          explanation: '선행사 conditions 뒤 완전한 절이 이어지므로 in which, 선행사 ways를 수식하는 주격 관대 that, 복수 선행사 ways에 수일치한 are.',
        },
        {
          checkNum: 6,
          title: 'what vs. that / 능동태 vs. 수동태 / 현재분사 vs. 과거분사',
          question:
            'While it is true (what / that) organisms can (express / be expressed) some amount of flexibility in their form and function in response to their immediate surroundings, these adjustments are minor (comparing / compared) to the constraints of inheritance.',
          answer: 'that / express / compared',
          explanation: '가주어 it의 진주어절 that, 목적어 flexibility를 취하므로 능동 express, 주절 주어가 비교 대상이 되므로 수동 분사구문 compared to.',
        },
      ],
      grammarPlusCards: [
        {
          cardNum: 1,
          title: '가주어-진주어 구문',
          content: '가주어 it은 진주어로 명사적 용법의 to부정사(구), that, what, how 등이 이끄는 명사절, if/whether 명사절 등이 올 수 있다.',
          examples: [
            { en: 'It will suit me best for you to arrive at ten o’clock.', ko: '네가 10시에 도착하면 나에겐 딱 알맞을 거야. (to부정사구)' },
            { en: 'It’s probable that we’ll be a little late.', ko: '우리가 좀 늦을지도 모르겠다. (that절)' },
            { en: 'It doesn’t interest me what you think.', ko: '네가 무엇을 생각하는지는 난 관심 없다. (의문사절)' },
          ],
        },
        {
          cardNum: 2,
          title: '부대상황을 나타내는 with 분사구문',
          content: '‘with + 명사(구) + 수식어’는 ‘~가 …하면서, …한 채로’의 의미로 동시에 일어나는 상황을 나타낸다. 능동이면 현재분사, 수동이면 과거분사를 쓴다.',
          formulaTable: [
            { col1: 'with + 명사 + 현재분사(-ing)', col2: '<능동> ~가 …하면서' },
            { col1: 'with + 명사 + 과거분사(p.p.)', col2: '<수동> ~가 …된 채로' },
            { col1: 'with + 명사 + 형용사/부사/전치사구', col2: '(being 생략) 상태 묘사' },
          ],
          examples: [
            { en: 'with smoke pouring from the exhaust', ko: '매연이 배기관에서 쏟아지면서 (현재분사)' },
            { en: 'with half the work still unfinished', ko: '그 일의 절반이 여전히 끝나지 않은 채로 (과거분사)' },
            { en: 'with one eye open', ko: '한쪽 눈을 뜬 채로 (형용사)' },
          ],
        },
        {
          cardNum: 3,
          title: '부분부정 (Partial Negation)',
          content: 'all, every, both, always, necessarily 등 전체나 완전함을 나타내는 말 앞에 부정어 not이 쓰이면 ‘모두[반드시] ~인 것은 아닌’이라는 부분부정을 나타낸다.',
          formulaTable: [
            { col1: '완전 긍정', col2: 'They know everything. (모든 것을 안다.)' },
            { col1: '부분 부정', col2: 'They don’t know everything. (모든 것을 다 아는 건 아니다.)' },
            { col1: '완전 부정', col2: 'They know nothing. (아무것도 모른다.)' },
          ],
          examples: [
            { en: 'Not every living thing can live everywhere.', ko: '모든 생명체가 어디에서나 살 수 있는 것은 아니다.' },
          ],
        },
      ],
      vocabEntries: [
        {
          word: 'offspring',
          pos: 'n.',
          meaning: '후손 [단·복수 동형, an offspring, offsprings 가능]',
          synonyms: '[가산] descendant, [불가산] posterity, [복수 취급] progeny, young',
        },
        {
          word: 'imply',
          pos: 'v.',
          meaning: '1. ~을 수반하다, 전제로 하다 2. ~을 시사하다, 의미하다 3. ~을 넌지시 나타내다',
        },
        {
          word: 'complement',
          pos: 'v.',
          meaning: '~을 보완하다, ~와 잘 어울리다',
          synonyms: 'cf) compliment n. 칭찬, 찬사 / v. 칭찬하다',
        },
        {
          word: 'exploit',
          pos: 'v.',
          meaning: '1. (자원·환경을) 이용하다, 활용하다 2. 착취하다',
        },
      ],
    },
    originalQuestion: {
      questionText: '29. 다음 글의 밑줄 친 부분 중, 어법상 틀린 것은?',
      fullPassageWithUnderlines:
        'Darwin understood that since inheritance is conservative, it is in the nature of the organism to impose itself on the surroundings, ①producing many highly similar but variable offspring regardless of the nature of the conditions. He further recognized that these fundamental aspects of the nature of the organism ②imply reproductive overrun, with organisms routinely producing more offspring than there are resources to support them. The need to survive implies that the capacity for using necessary resources must complement the opportunity to use ③them. But needs and opportunity do not perfectly match. Inheritance produces the capacities for exploiting the surroundings, but in a way that is indifferent to the surroundings. Offspring cannot anticipate the nature of the conditions ④which they find themselves, much less alter themselves in ways that are suitable to any changes in those conditions. While it is true that organisms can express some amount of flexibility in their form and function in response to their immediate surroundings, these adjustments are ⑤minor compared to the constraints of inheritance. As a result, not every living thing can live everywhere.\n*offspring: 자손 **exploit: 이용하다',
      choices: [
        '① producing',
        '② imply',
        '③ them',
        '④ which',
        '⑤ minor',
      ],
      answer: '④ which → in which',
      explanation:
        '관계대명사 which 뒤에 they find themselves(주어+동사+목적어)의 완전한 절이 이어지므로, 장소의 관계부사 where 또는 ‘전치사+관계대명사’ in which로 고쳐야 어법상 올바르다.',
      wrongAnswerAnalysis: [
        { choiceNum: '①', title: 'producing (분사구문)', explanation: '완전한 절 뒤에 쉼표로 연결되어 앞 절의 결과를 나타내는 능동 분사구문으로 적절함.', rate: '14.2%' },
        { choiceNum: '②', title: 'imply (수일치)', explanation: '주어부의 핵심어 aspects가 복수이므로 복수동사 imply는 적절함.', rate: '9.8%' },
        { choiceNum: '③', title: 'them (대명사의 수)', explanation: '가리키는 대상이 앞의 복수명사 necessary resources이므로 복수형 them은 적절함.', rate: '12.1%' },
        { choiceNum: '④', title: 'which (정답)', explanation: 'which 뒤에 완전한 3형식 절(they find themselves)이 오므로 in which 또는 where로 수정해야 함.', rate: '44.8%' },
        { choiceNum: '⑤', title: 'minor (형용사 보어)', explanation: '주어 these adjustments와 be동사 are 뒤 보어 자리에 형용사 minor는 적절함.', rate: '19.1%' },
      ],
    },
    vocabularyList: [
      { word: 'inheritance', meaning: '유전' },
      { word: 'conservative', meaning: '보수적인' },
      { word: 'nature', meaning: '본성, 성질' },
      { word: 'organism', meaning: '유기체' },
      { word: 'impose', meaning: '~을 강요하다' },
      { word: 'surroundings', meaning: '주변 환경' },
      { word: 'variable', meaning: '변이성이 있는' },
      { word: 'regardless of', meaning: '~와 상관없이' },
      { word: 'fundamental', meaning: '근본적인' },
      { word: 'aspect', meaning: '측면' },
      { word: 'reproductive', meaning: '생식의, 번식의' },
      { word: 'overrun', meaning: '초과' },
      { word: 'routinely', meaning: '일상적으로' },
      { word: 'complement', meaning: '~을 보완하다' },
      { word: 'indifferent to', meaning: '~에 무심한' },
      { word: 'anticipate', meaning: '~을 예상하다' },
      { word: 'much less', meaning: '~은커녕, ~은 고사하고' },
      { word: 'alter', meaning: '~을 바꾸다' },
      { word: 'suitable to', meaning: '~에 적합한' },
      { word: 'flexibility', meaning: '유연성' },
      { word: 'adjustment', meaning: '적응' },
      { word: 'minor', meaning: '사소한' },
      { word: 'constraint', meaning: '제약' },
    ],
    predictedQuestionTypes: [
      '어법',
      '빈칸 추론',
      '서술형 대비',
      '주제·제목·요지·주장',
      '어휘',
      '순서',
      '문장 넣기',
    ],
  },
  {
    id: 'sample-2026-03-g3-30',
    metadata: {
      titleTag: '2026년 3월 서울특별시 교육청 학력평가',
      questionNumber: '30번',
      questionType: '어휘',
      targetGrade: '고3',
      pageNumber: 43,
      source: 'EXAM4YOU',
    },
    titleEn: 'Naming and Categorization: The Loss of Individual Differences',
    titleKo: '(명명과 범주화: 개별적 차이점들의 소실)',
    summary:
      '고유 명사가 아닌 대상을 범주화하고 이름을 붙이는 행위는 실용적 목적을 위해 개별 대상들의 구체적인 차이를 무시하게 만들지만, 실제로 자세히 들여다보면 각각의 대상은 고유한 특성과 이력을 지닌 존재이며, 특히 전문적인 시각이나 무한한 인식의 관점에서는 그 개별적 차이가 중요하게 다루어질 수 있다.',
    flowCheck: [
      {
        title: '도입 (1~3)',
        desc: '고유 명사가 아닌 무언가를 개념화하고 범주화하고 명명할 때마다 그 대상의 상세한 사항 간의 차이를 무시하게 되며, 잔디에 있는 데이지와 클로버 꽃을 예로 들면 보통 명사가 차이를 생략함',
      },
      {
        title: '전개 (4~7)',
        desc: '‘꽃’은 여러 색의 종류를, ‘잔디’는 다양한 풀과 풀이 아닌 식물을 한 범주로 묶어 버리는데, 확대해 보면 두 데이지도 정확히 같지 않지만 힐끗 보면 균일한 카펫으로 보임',
      },
      {
        title: '마무리 (8~11)',
        desc: '실용적인 목적에서는 차이를 무시할 수 있지만, 스포츠 경기장 관리인처럼 무시할 수 없는 경우도 있으며, 무한한 정신에게는 각각의 풀잎이 고유한 역사와 이름을 지님',
      },
    ],
    flowDiagram: {
      topBox: '사물을 범주화하고 이름을 붙이면 개별적 차이를 생략하게 됨',
      arrowText: '↓',
      bottomBox: '깊은 관점에서는 각 존재가 고유한 역사와 이름을 지닌 개별적 존재로 인식됨',
    },
    sentences: [
      {
        num: 1,
        badge: '❤ 주제문',
        originalText:
          'Every time you conceptualize, categorize, and put a name on something that is not a proper name, you abstract away from its particularities.',
        tokens: [
          { text: 'Every time', clauseTag: '<시간 부사절>', gloss: '‘~할 때마다’' },
          { text: 'you', role: 'S1' },
          { text: 'conceptualize,', role: 'V1❶', gloss: '‘~을 개념화하다’' },
          { text: 'categorize,', role: 'V1❷', gloss: '‘~을 분류하다’' },
          { text: 'and put a name on', role: 'V1❸', gloss: '‘~을 명명하다’' },
          { text: 'something', role: 'O1' },
          { text: 'that is not a proper name,', clauseTag: '[관계사절]', role: 'V2 C2', gloss: '‘고유 명사’' },
          { text: 'you', role: 'S' },
          { text: 'abstract away from', role: 'V', gloss: '‘~을 배제하다/무시하다’', highlight: 'red' },
          { text: 'its particularities.', role: 'O', gloss: '‘상세한 사항들’' },
        ],
        translation:
          '고유 명사가 아닌 무언가를 개념화하고, 범주화하고, 명명할 때마다, 여러분은 그 대상의 상세한 사항 간의 차이를 무시한다.',
        grammarPoints: [
          {
            pointNum: 1,
            title: '주격 관계대명사 that & 수일치',
            explanation:
              '주어가 없는 불완전한 절(is not a proper name)을 이끌어 부정대명사 something을 선행사로 수식하는 관계사절을 이루고 있으며, 부정대명사 선행사에 수일치하여 단수동사 is가 쓰였다.',
          },
        ],
        deepMeaning:
          '우리가 어떤 것을 하나의 개념으로 묶어 이름을 붙이면, 그 대상들 간의 개별적인 차이들을 고려 대상에서 제외하거나 배제하게 된다.',
      },
      {
        num: 2,
        badge: null,
        originalText: 'Picture daisies and clover flowers in a lawn.',
        tokens: [
          { text: 'Picture', role: 'V(명령문)', gloss: '‘~을 상상하라’' },
          { text: 'daisies and clover flowers', role: 'O' },
          { text: 'in a lawn.', clauseTag: '[부사구]', gloss: '‘잔디밭에’' },
        ],
        translation: '잔디에 있는 데이지와 클로버 꽃을 떠올려 보라.',
        grammarPoints: [],
      },
      {
        num: 3,
        badge: null,
        originalText: 'Those four ordinary nouns leave out their differences.',
        tokens: [
          { text: 'Those four ordinary nouns', role: 'S', gloss: '‘그 네 개의 보통 명사들’' },
          { text: 'leave out', role: 'V', gloss: '‘~을 생략하다’' },
          { text: 'their differences.', role: 'O', gloss: '‘차이점들’', highlight: 'red' },
        ],
        translation: '그 네 개의 보통 명사는 그것들의 차이를 생략한다.',
        grammarPoints: [
          {
            pointNum: 1,
            title: '구동사의 목적어 위치',
            explanation:
              '‘타동사+부사’ 구조인 leave ~ out(~을 생략하다)에서 명사구 their differences가 부사 out 뒤에 쓰였다.',
          },
        ],
      },
      {
        num: 4,
        badge: null,
        originalText:
          '“Flower” co-categorizes the white and yellow types with the beige ones, and all the many other sorts to be found elsewhere.',
        tokens: [
          { text: '“Flower”', role: 'S' },
          { text: 'co-categorizes', role: 'V', gloss: '‘함께 분류하다’' },
          { text: 'the white and yellow types', role: 'O' },
          { text: 'with the beige ones,', gloss: '‘ones = types’' },
          { text: 'and all the many other sorts', gloss: '‘종류들’' },
          { text: 'to be found elsewhere.', clauseTag: '[형용사적 to부정사구]', gloss: '‘수동형 (to be p.p.)’' },
        ],
        translation:
          '‘꽃’이라는 말은 흰색과 노란색 종류를 베이지색 종류, 그리고 다른 곳에서 발견되는 모든 수많은 다른 종류와 함께 하나의 범주로 묶어 버린다.',
        grammarPoints: [
          {
            pointNum: 1,
            title: '수동형 to부정사 (to be found)',
            explanation: '모든 다른 종류들이 ‘발견되는’ 대상이므로 수동형 to be found가 쓰였다.',
          },
        ],
      },
    ],
    sidebar: {
      checkQuizzes: [
        {
          checkNum: 1,
          title: '병렬연결 / 수일치',
          question:
            'Every time you conceptualize, (categorize / categorizing), and put a name on something that (are / is) not a proper name, you abstract away from its particularities.',
          answer: 'categorize / is',
          explanation: '동사원형 conceptualize, categorize, put 병렬연결. something 단수 선행사에 수일치하여 is.',
        },
        {
          checkNum: 2,
          title: '동명사 vs. 동사원형',
          question: '(Picturing / Picture) daisies and clover flowers in a lawn.',
          answer: 'Picture',
          explanation: '주어가 없는 명령문이므로 동사원형 Picture가 적절.',
        },
        {
          checkNum: 3,
          title: '부정대명사의 수',
          question:
            '“Flower” co-categorizes the white and yellow types with the beige (one / ones), and all the many other sorts to be found elsewhere.',
          answer: 'ones',
          explanation: '앞의 복수명사 types를 대신하므로 복수형 ones가 적절.',
        },
      ],
      grammarPlusCards: [
        {
          cardNum: 1,
          title: 'to부정사의 형용사적 용법',
          content: 'to부정사는 명사(구)를 뒤에서 수식하며 ‘주어-동사’, ‘동사-목적어’, ‘동격’의 관계를 짓는다.',
          examples: [
            { en: 'a friend to help me', ko: '나를 도와줄 친구 [주어-동사]' },
            { en: 'something to eat', ko: '먹을 것 [동사-목적어]' },
            { en: 'a chair to sit on', ko: '앉을 의자 [전치사의 목적어]' },
          ],
        },
      ],
      vocabEntries: [
        { word: 'conceptualize', pos: 'v.', meaning: '~을 개념화하다' },
        { word: 'abstract away from', pos: 'phr.', meaning: '~을 배제하다, 고려 대상에서 제외하다' },
        { word: 'particularity', pos: 'n.', meaning: '세부적 사항, 특성' },
        { word: 'co-categorize', pos: 'v.', meaning: '함께 범주화하다, 한 묶음으로 분류하다' },
      ],
    },
    originalQuestion: {
      questionText: '30. 다음 글의 밑줄 친 부분 중, 문맥상 낱말의 쓰임이 적절하지 않은 것은?',
      fullPassageWithUnderlines:
        'Every time you conceptualize, categorize, and put a name on something that is not a proper name, you abstract away from its particularities. Picture daisies and clover flowers in a lawn. Those four ordinary nouns leave out their ①differences. “Flower” co-categorizes the white and yellow types with the beige ones, and all the many other sorts to be found elsewhere. “Lawn” ②acknowledges the varieties of grass and all the nongrassy plants that are there. Zoom in, and you will find individuality and uniqueness everywhere. No two daisies, no two clovers, are exactly ③alike, and yet they present to a quick glance a carpet patterned uniformly enough. For most practical purposes, the differences can be ④ignored — making a daisy chain, sunbathing, and the like. Not so, however, for the groundskeeper of a sports stadium, where the constituent grasses and their stages of growth really do matter. And to an infinite mind, with infinite memory, each blade of grass, with its own distinct life history, need not be ⑤co-categorized with all its fellows. Each could have its own name, as you yourself do.\n*infinite: 무한한 **blade: (식물의) 잎',
      choices: [
        '① differences',
        '② acknowledges → neglects',
        '③ alike',
        '④ ignored',
        '⑤ co-categorized',
      ],
      answer: '② acknowledges → neglects',
      explanation:
        '보통 명사로 대상을 개념화하면 개별적 차이가 지워진다는 흐름이므로, “Lawn”이라는 단어 역시 풀과 식물들의 다양성을 인정(acknowledges)하는 것이 아니라 무시(neglects/ignores)한다는 흐름이 되어야 한다.',
    },
    vocabularyList: [
      { word: 'conceptualize', meaning: '~을 개념화하다' },
      { word: 'categorize', meaning: '~을 분류하다' },
      { word: 'proper name', meaning: '고유 명사' },
      { word: 'abstract away from', meaning: '~을 배제하다' },
      { word: 'particularity', meaning: '세부 사항' },
      { word: 'leave out', meaning: '~을 생략하다' },
      { word: 'co-categorize', meaning: '함께 분류하다' },
      { word: 'individuality', meaning: '개성, 독자성' },
      { word: 'uniqueness', meaning: '유일함, 독특함' },
      { word: 'uniformly', meaning: '균일하게' },
      { word: 'groundskeeper', meaning: '경기장 관리인' },
      { word: 'constituent', meaning: '구성하는' },
    ],
    predictedQuestionTypes: ['어휘', '빈칸 추론', '어법', '문장 넣기', '순서', '주제·제목·요지·주장'],
  },
  {
    id: 'sample-2025-10-g2-20',
    metadata: {
      titleTag: '2025년 10월 경기도 교육청 학력평가',
      questionNumber: '20번',
      questionType: '주장',
      targetGrade: '고2',
      pageNumber: 8,
      source: 'EXAM4YOU',
    },
    titleEn: 'Maintaining Professional Boundaries in Healthcare Relationships',
    titleKo: '(의료 관계에 있어 직업적 경계선 유지하기)',
    summary:
      '의료 종사자는 환자와의 관계에서 개인적인 친분이 아닌 현실적이고 전문적인 자기 경계를 지켜 환자가 편하게 건강 관련 정보를 공유할 수 있도록 해야 하며, 환자를 존중하고 항상 환자에게 초점을 두는 태도를 유지해야 한다.',
    flowCheck: [
      {
        title: '도입 (1~3)',
        desc: '의료 현장에서 환자와의 견고한 직업적 관계를 형성하기 위해 현실적인 자기 경계를 설정하고, 항상 환자에게 초점을 맞추는 것이 중요함',
      },
      {
        title: '전개 (4~6)',
        desc: '자주 만나는 환자를 친구처럼 대하면 부적절한 개인 정보가 공유될 수 있고, 환자가 중요한 건강 정보를 솔직히 말하기 어려워질 수 있음',
      },
      {
        title: '마무리 (7~9)',
        desc: '자기 경계를 직업적 경계로 생각하고, 환자를 존중하며 친절하게 대하되, 관계의 초점을 항상 환자에게 두고 직업적인 태도를 유지해야 함',
      },
    ],
    flowDiagram: {
      topBox: '환자와의 견고한 직업적 관계 발전 및 보호를 위해 자기 경계를 설정해야 함',
      arrowText: '↓',
      bottomBox: '환자를 존중하고 환자 중심의 태도를 유지하되, 직업적 관계를 유지해야 함',
    },
    sentences: [
      {
        num: 1,
        badge: null,
        originalText:
          'When you are working in healthcare, it is important to develop a solid professional relationship with your patients.',
        tokens: [
          { text: 'When', clauseTag: '<시간 부사절>' },
          { text: 'you are working in healthcare,', role: 'S1 V1' },
          { text: 'it', role: 'S(가주어)' },
          { text: 'is important', role: 'V C', gloss: '‘중요한’' },
          { text: 'to develop', clauseTag: '<진주어(to부정사구)>', role: 'O1', gloss: '‘발전시키는 것’' },
          { text: 'a solid professional relationship', gloss: '‘견고한 직업적 관계’' },
          { text: 'with your patients.', gloss: '‘환자들과’' },
        ],
        translation: '여러분이 의료 분야에서 일할 때, 여러분의 환자들과 견고한 직업적인 관계를 발전시키는 것이 중요하다.',
        grammarPoints: [
          {
            pointNum: 1,
            title: '가주어-진주어 구문',
            explanation: 'it은 가주어이며, to develop 이하의 to부정사구가 진주어이다.',
          },
        ],
      },
      {
        num: 2,
        badge: '서술형 대비',
        originalText: 'By establishing realistic self-boundaries, you can protect that relationship.',
        tokens: [
          { text: 'By establishing', clauseTag: '<전치사구> [동명사구]', gloss: 'by+동명사 ‘~함으로써’' },
          { text: 'realistic self-boundaries,', gloss: '‘현실적인 자기 경계들’' },
          { text: 'you', role: 'S' },
          { text: 'can protect', role: 'V', gloss: '‘보호할 수 있다’' },
          { text: 'that relationship.', role: 'O', gloss: '‘그 관계를’' },
        ],
        translation: '현실적인 자기 경계를 설정함으로써, 여러분은 그 관계를 보호할 수 있다.',
        grammarPoints: [],
      },
      {
        num: 3,
        badge: '❤ 주제문',
        originalText: 'You need to treat patients with respect and keep the relationship professional.',
        tokens: [
          { text: 'You', role: 'S' },
          { text: 'need to treat', role: 'V O(to+동·원❶)', gloss: '‘대우하다’' },
          { text: 'patients', role: 'O1' },
          { text: 'with respect', clauseTag: '<부사구>', gloss: '‘존중심을 갖고’' },
          { text: 'and keep', role: '(+동·원❷)', gloss: '‘유지하다’' },
          { text: 'the relationship', role: 'O1' },
          { text: 'professional.', role: 'O·C1', gloss: '5형식 keep+목적어+목적격보어(형용사)' },
        ],
        translation: '여러분이 환자들을 존중으로 대하고 그 관계를 직업적으로 유지할 필요가 있다.',
        grammarPoints: [
          {
            pointNum: 1,
            title: '5형식 keep + 목적어 + 형용사 보어',
            explanation:
              '5형식 동사 keep이 목적어로 the relationship, 목적격보어로 형용사 professional을 가지며 ‘…을 ~하게 유지하다’로 해석한다.',
          },
        ],
      },
    ],
    sidebar: {
      checkQuizzes: [
        {
          checkNum: 1,
          title: 'to부정사 vs. 동사원형',
          question: 'When you are working in healthcare, it is important (to develop / develop) a solid professional relationship with your patients.',
          answer: 'to develop',
          explanation: '가주어 it에 상응하는 진주어 to부정사구가 와야 함.',
        },
        {
          checkNum: 2,
          title: '형용사 vs. 부사',
          question: 'You need to treat patients with respect and keep the relationship (professional / professionally).',
          answer: 'professional',
          explanation: '5형식 동사 keep의 목적격보어 자리에는 형용사 professional이 적절.',
        },
      ],
      grammarPlusCards: [
        {
          cardNum: 1,
          title: '가주어-진주어 구문',
          content: '가주어 it은 진주어로 to부정사구, that절, 의문사절 등을 취한다.',
          examples: [
            { en: 'It is important to keep the focus on the patient.', ko: '환자에게 초점을 두는 것이 중요하다.' },
          ],
        },
      ],
      vocabEntries: [
        { word: 'healthcare', pos: 'n.', meaning: '의료 서비스, 보건' },
        { word: 'self-boundary', pos: 'n.', meaning: '자기 경계, 개인적 한계선' },
        { word: 'professional', pos: 'a.', meaning: '직업적인, 전문적인' },
      ],
    },
    vocabularyList: [
      { word: 'healthcare', meaning: '의료 서비스' },
      { word: 'develop', meaning: '발전시키다' },
      { word: 'solid', meaning: '견고한' },
      { word: 'professional', meaning: '직업적인, 전문적인' },
      { word: 'boundary', meaning: '경계선' },
      { word: 'respect', meaning: '존중' },
    ],
    predictedQuestionTypes: ['주제·제목·요지·주장', '서술형', '어법', '빈칸'],
  },
];
