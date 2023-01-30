import { useState } from 'react';
import { MdCheck, MdBarChart, MdKeyboardArrowLeft } from 'react-icons/md';
import { FaAirbnb, FaRegGrinTongueSquint } from 'react-icons/fa';
import Button from './components/UI/Button';
import Card from './components/UI/Card';
import Colmn from './components/UI/Grid/Column';
import Row from './components/UI/Grid/Row';
import RadioButton from './components/UI/RadioButton/RadioButton';
import RadioButtonGroup from './components/UI/RadioButton/RadioButtonGroup';
import GlobalStyles from './GlobalStyles';
import ChartPage from './pages/ChartPage';
import MainLayout from './components/layouts/MainLayout';
import useDialogs from './components/UI/Dialog/useDialogs';
import ProgressBar from './components/UI/ProgressBar';
import DialogAlerts from './components/UI/Dialog/DialogAlerts';

const OPTIONS = [
  { id: 1, text: '리액트' },
  { id: 2, text: '뷰' },
  { id: 3, text: '앵귤러' },
  { id: 4, text: '스벨트' },
  { id: 5, text: '기타' },
];

function MyModal({ onClose, onSubmit }) {
  return (
    <DialogAlerts
      onSubmit={onSubmit}
      onClose={onClose}
      title="타이틀"
      labelClose="돌아가기"
      labelSubmit="제출하기"
    >
      모달입니다
    </DialogAlerts>
  );
}

function App() {
  const [selectedVaule, setSelectedValue] = useState(null);
  const { openDialog } = useDialogs();

  const handleClickStart = () => {
    // console.log('시작하기');
  };

  const handleChangeValue = v => {
    setSelectedValue(v);
  };

  const handleClickOpenDialog = () => {
    openDialog(MyModal, {
      onSubmit: () => {
        // console.log('비지니스 로직 처리...');
      },
    });
  };
  return (
    <MainLayout>
      <ChartPage />
      <Card>
        <ProgressBar step="4" total="20" />
      </Card>
      <Card>
        <RadioButtonGroup
          label="질문 1"
          value={selectedVaule}
          name="question-1"
          onChange={handleChangeValue}
        >
          {OPTIONS.map(option => (
            <RadioButton
              id={`radio-${option.id}`}
              block
              key={option.id}
              value={option.text}
            >
              {option.text}
            </RadioButton>
          ))}
        </RadioButtonGroup>
        <p>선택된 값 : {selectedVaule}</p>
      </Card>
      <Card>
        <Row gutter="md">
          <Colmn cols="6" md="4" lg="2">
            <Button
              variant="secondary"
              size="lg"
              block
              onClick={handleClickStart}
            >
              돌아가기
            </Button>
          </Colmn>
          <Colmn cols="6" md="8" lg="10">
            <Button
              variant="primary"
              size="lg"
              block
              startIcon={<MdBarChart />}
            >
              결과보기
            </Button>
          </Colmn>
        </Row>
      </Card>
      <Card>
        <Button variant="primary" size="lg" block>
          시작하기
        </Button>
        <Button variant="secondary" size="lg" block>
          결과보기
        </Button>
      </Card>
      <Card>
        <Row>
          <Button variant="primary" size="lg" startIcon={<MdCheck />}>
            아이콘
          </Button>
          <Button variant="secondary" size="lg" endIcon={<MdCheck />}>
            아이콘
          </Button>
          <Button variant="danger" size="lg" startIcon={<FaAirbnb />}>
            아이콘
          </Button>
          <Button
            variant="danger"
            size="lg"
            disabled
            endIcon={<FaRegGrinTongueSquint />}
          >
            아이콘
          </Button>
        </Row>
        <Row>
          <Button variant="text" size="lg" startIcon={<MdKeyboardArrowLeft />}>
            뒤로가기
          </Button>
          <Button variant="text" startIcon={<MdKeyboardArrowLeft />}>
            뒤로가기
          </Button>
          <Button variant="text" size="sm" startIcon={<MdKeyboardArrowLeft />}>
            뒤로가기
          </Button>
        </Row>
      </Card>
      <Card>
        <Row>
          <Button variant="primary" size="lg">
            Primary
          </Button>
          <Button variant="secondary" size="lg">
            Secondary
          </Button>
          <Button variant="danger" size="lg">
            Error
          </Button>
          <Button disabled="disabled" size="lg">
            Disabled
          </Button>
          <Button variant="text" size="lg">
            TEXT
          </Button>
        </Row>
        <Row>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Error</Button>
          <Button disabled="disabled">Disabled</Button>
          <Button variant="text">TEXT</Button>
        </Row>
        <Row>
          <Button variant="primary" size="sm">
            Primary
          </Button>
          <Button variant="secondary" size="sm">
            Secondary
          </Button>
          <Button variant="danger" size="sm">
            Error
          </Button>
          <Button disabled="disabled" size="sm">
            Disabled
          </Button>
          <Button variant="text" size="sm">
            TEXT
          </Button>
        </Row>
      </Card>
      <Card>
        <Button onClick={handleClickOpenDialog}>모달</Button>
      </Card>
      <GlobalStyles />
    </MainLayout>
  );
}

export default App;
