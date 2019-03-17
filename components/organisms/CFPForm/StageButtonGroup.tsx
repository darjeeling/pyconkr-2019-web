import { Button } from 'components/atoms/Button'
import { FlexSpaceBetweenWrapper } from 'components/atoms/FlexWrapper'
import { TEAL } from 'styles/colors'

type Props = {
  onPrev: VoidFunction;
  onSave: VoidFunction;
}

export const StageButtonGroup: React.SFC<Props> = ({ onPrev, onSave }) => {
  return <FlexSpaceBetweenWrapper style={{ marginTop: 60 }}>
    <Button
      tag='button'
      type='button'
      intlKey='contribute.talkProposal.application.stages.stages2.button1'
      color={TEAL}
      width={120}
      primary={false}
      onClick={onPrev}
    >이전</Button>
    <div>
      <Button
        tag='button'
        type='button'
        intlKey='contribute.talkProposal.application.stages.stages2.button2'
        color={TEAL}
        width={120}
        primary={false}
        onClick={onSave}
      >임시 저장</Button>
      <Button
        tag='button'
        type='submit'
        intlKey='contribute.talkProposal.application.stages.stages2.button3'
        color={TEAL}
        width={120}
        style={{ marginLeft: 10 }}
      >다음</Button>
    </div>
  </FlexSpaceBetweenWrapper>
}
