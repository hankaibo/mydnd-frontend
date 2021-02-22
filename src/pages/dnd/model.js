const ANT_BUTTON = 'ANT_BUTTON';
const ANT_ICON = 'ANT_ICON';
const ANT_GRID = 'ANT_GRID';
const ANT_LAYOUT = 'ANT_lAYOUT';
const ANT_AFFIX = 'ANT_AFFIX';
const ANT_BREADCRUMB = 'ANT_BREADCRUMB';
const ANT_DROPDOWN = 'ANT_DROPDOWN';
const ANT_MENU = 'ANT_MENU';
const ANT_PAGINATION = 'ANT_PAGINATION';
const ANT_STEPS = 'ANT_STEPS';
const ANT_AUTO_COMPLETE = 'ANT_AUTO_COMPLETE';
const ANT_CASCADER = 'ANT_CASCADER';
const ANT_CHECKBOX = 'ANT_CHECKBOX';
const ANT_DATE_PICKER = 'ANT_DATE_PICKER';
const ANT_FORM = 'ANT_FORM';
const ANT_INPUT = 'ANT_INPUT';
const ANT_INPUT_NUMBER = 'ANT_INPUT_NUMBER';
const ANT_MENTION = 'ANT_MENTION';
const ANT_RATE = 'ANT_RATE';
const ANT_RADIO = 'ANT_RADIO';
const ANT_SELECT = 'ANT_SELECT';
const ANT_SLIDER = 'ANT_SLIDER';
const ANT_SWITCH = 'ANT_SWITCH';
const ANT_TREE_SELECT = 'ANT_TREE_SELECT';
const ANT_TIME_PICKER = 'ANT_TIME_PICKER';
const ANT_TRANSFER = 'ANT_TRANSFER';
const ANT_UPLOAD = 'ANT_UPLOAD';
const ANT_AVATAR = 'ANT_AVATAR';
const ANT_BADGE = 'ANT_BADEG';
const ANT_CALENDAR = 'ANT_CALENDAR';
const ANT_CARD = 'ANT_CARD';
const ANT_CAROUSEL = 'ANT_CAROUSEL';
const ANT_COLLAPSE = 'ANT_COLLAPSE';
const ANT_LIST = 'ANT_LIST';
const ANT_POPOVER = 'ANT_POPOVER';
const ANT_TOOLTIP = 'ANT_TOOLTIP';
const ANT_TABLE = 'ANT_TABLE';
const ANT_TABS = 'ANT_TABS';
const ANT_TAG = 'ANT_TAG';
const ANT_TIMELINE = 'ANT_TIMELINE';
const ANT_TREE = 'ANT_TREE';
const ANT_ALERT = 'ANT_ALERT';
const ANT_MODAL = 'ANT_MODAL';
const ANT_MESSAGE = 'ANT_MESSAGE';
const ANT_NOTIFICATION = 'ANT_NOTIFICATION';
const ANT_PROGRESS = 'ANT_PROGRESS';
const ANT_POPCONFIRM = 'ANT_POPCONFIRM';
const ANT_SPIN = 'ANT_SPIN';
const ANT_ANCHOR = 'ANT_ANCHOR';
const ANT_BACKTOP = 'ANT_BACKTOP';
const ANT_DIVIDER = 'ANT_DIVIDER';
const ANT_LOCALEPROVIDER = 'ANT_LOCALEPROVIDER';

const COMPONENT_LIST = {
  sourceDnDComponentList: [
    {
      id: '100',
      title: '通用',
      children: [
        {
          id: '10001',
          name: 'Button 按钮',
          type: ANT_BUTTON,
          options: {
            ant: [
              {
                buttonText: {
                  title: '按钮文本',
                  value: 'default',
                },
                buttonType: {
                  title: '按钮类型',
                  children: ['primary', 'dashed', 'danger'],
                  value: null,
                },
                buttonIconLeft: {
                  title: '按钮左图标',
                  value: '',
                },
                buttonIconRight: {
                  title: '按钮右图标',
                  value: '',
                },
                buttonSize: {
                  title: '按钮尺寸',
                  children: ['large', 'default', 'small'],
                },
                buttonDisabled: {
                  title: '按钮状态',
                },
                buttonLoading: {
                  title: '加载状态',
                },
                buttonShape: {
                  title: '按钮形状',
                },
                buttonGhost: {
                  title: 'ghost按钮',
                },
                buttonIsGroup: {
                  title: '按钮组',
                  value: 1,
                },
              },
            ],
            pos: [0, 0],
          },
        },
        {
          id: '10002',
          name: 'Icon 图标',
          type: ANT_ICON,
          options: {
            ant: [
              {
                iconSpin: {
                  title: '旋转动画',
                  value: false,
                },
                iconType: {
                  title: '图标类型',
                  value: 'login',
                },
              },
            ],
            pos: [0, 0],
          },
        },
      ],
    },
    {
      id: '101',
      title: '布局',
      children: [
        {
          id: '10101',
          name: 'Grid 栅格',
          type: ANT_GRID,
          options: { pos: [0, 0] },
        },
        {
          id: '10102',
          name: 'Layout 布局',
          type: ANT_LAYOUT,
          options: { pos: [0, 0] },
        },
      ],
    },
    {
      id: '102',
      title: '导航',
      children: [
        {
          id: '10201',
          name: 'Affix 固钉',
          type: ANT_AFFIX,
          options: { pos: [0, 0] },
        },
        {
          id: '10202',
          name: 'Breadcrumb 面包屑',
          type: ANT_BREADCRUMB,
          options: { pos: [0, 0] },
        },
        {
          id: '10203',
          name: 'Dropdown 下拉菜单',
          type: ANT_DROPDOWN,
          options: { pos: [0, 0] },
        },
        {
          id: '10204',
          name: 'Menu 导航菜单',
          type: ANT_MENU,
          options: { pos: [0, 0] },
        },
        {
          id: '10205',
          name: 'Pagination 分页',
          type: ANT_PAGINATION,
          options: { pos: [0, 0] },
        },
        {
          id: '10206',
          name: 'Steps 步骤条',
          type: ANT_STEPS,
          options: { pos: [0, 0] },
        },
      ],
    },
    {
      id: '103',
      title: '数据实体',
      children: [
        {
          id: '10301',
          name: 'AutoComplete 自动完成',
          type: ANT_AUTO_COMPLETE,
          options: { pos: [0, 0] },
        },
        {
          id: '10302',
          name: 'Cascader 级联选择',
          type: ANT_CASCADER,
          options: { pos: [0, 0] },
        },
        {
          id: '10303',
          name: 'Checkbox 多选框',
          type: ANT_CHECKBOX,
          options: { pos: [0, 0] },
        },
        {
          id: '10304',
          name: 'DatePicker 日期选择框',
          type: ANT_DATE_PICKER,
          options: { pos: [0, 0] },
        },
        {
          id: '10305',
          name: 'Form 表单',
          type: ANT_FORM,
          options: { pos: [0, 0] },
        },
        {
          id: '10306',
          name: 'Input 输入框',
          type: ANT_INPUT,
          options: { pos: [0, 0] },
        },
        {
          id: '10307',
          name: 'InputNumber 数字输入框',
          type: ANT_INPUT_NUMBER,
          options: { pos: [0, 0] },
        },
        {
          id: '10308',
          name: 'Mention 提及',
          type: ANT_MENTION,
          options: { pos: [0, 0] },
        },
        {
          id: '10309',
          name: 'Rate 评分',
          type: ANT_RATE,
          options: { pos: [0, 0] },
        },
        {
          id: '10310',
          name: 'Radio 单选框',
          type: ANT_RADIO,
          options: { pos: [0, 0] },
        },
        {
          id: '10311',
          name: 'Select 选择器',
          type: ANT_SELECT,
          options: { pos: [0, 0] },
        },
        {
          id: '10312',
          name: 'Slider 滑动输入条',
          type: ANT_SLIDER,
          options: { pos: [0, 0] },
        },
        {
          id: '10313',
          name: 'Switch 开关',
          type: ANT_SWITCH,
          options: { pos: [0, 0] },
        },
        {
          id: '10314',
          name: 'TreeSelect 树选择',
          type: ANT_TREE_SELECT,
          options: { pos: [0, 0] },
        },
        {
          id: '10315',
          name: 'TimePicker 时间选择框',
          type: ANT_TIME_PICKER,
          options: { pos: [0, 0] },
        },
        {
          id: '10316',
          name: 'Transfer 穿梭框',
          type: ANT_TRANSFER,
          options: { pos: [0, 0] },
        },
        {
          id: '10317',
          name: 'Upload 上传',
          type: ANT_UPLOAD,
          options: { pos: [0, 0] },
        },
      ],
    },
    {
      id: '104',
      title: '数据展现',
      children: [
        {
          id: '10401',
          name: 'Avatar 头像',
          type: ANT_AVATAR,
          options: { pos: [0, 0] },
        },
        {
          id: '10402',
          name: 'Badge 徽标数',
          type: ANT_BADGE,
          options: { pos: [0, 0] },
        },
        {
          id: '10403',
          name: 'Calendar 日历',
          type: ANT_CALENDAR,
          options: { pos: [0, 0] },
        },
        {
          id: '10404',
          name: 'Card 卡片',
          type: ANT_CARD,
          options: { pos: [0, 0] },
        },
        {
          id: '10405',
          name: 'Carousel 走马灯',
          type: ANT_CAROUSEL,
          options: { pos: [0, 0] },
        },
        {
          id: '10406',
          name: 'Collapse 折叠面板',
          type: ANT_COLLAPSE,
          options: { pos: [0, 0] },
        },
        {
          id: '10407',
          name: 'List 列表',
          type: ANT_LIST,
          options: { pos: [0, 0] },
        },
        {
          id: '10408',
          name: 'Popover 气泡卡片',
          type: ANT_POPOVER,
          options: { pos: [0, 0] },
        },
        {
          id: '10409',
          name: 'Tooltip 文字提示',
          type: ANT_TOOLTIP,
          options: { pos: [0, 0] },
        },
        {
          id: '10410',
          name: 'Table 表格',
          type: ANT_TABLE,
          options: { pos: [0, 0] },
        },
        {
          id: '10411',
          name: 'Tabs 标签页',
          type: ANT_TABS,
          options: { pos: [0, 0] },
        },
        {
          id: '10412',
          name: 'Tag 标签',
          type: ANT_TAG,
          options: { pos: [0, 0] },
        },
        {
          id: '10413',
          name: 'Timeline 时间轴',
          type: ANT_TIMELINE,
          options: { pos: [0, 0] },
        },
        {
          id: '10414',
          name: 'Tree 树形控件',
          type: ANT_TREE,
          options: { pos: [0, 0] },
        },
      ],
    },
    {
      id: '105',
      title: '反馈',
      children: [
        {
          id: '10501',
          name: 'Alert 警告提示',
          type: ANT_ALERT,
          options: { pos: [0, 0] },
        },
        {
          id: '10502',
          name: 'Modal 对话框',
          type: ANT_MODAL,
          options: { pos: [0, 0] },
        },
        {
          id: '10503',
          name: 'Message 全局提示',
          type: ANT_MESSAGE,
          options: { pos: [0, 0] },
        },
        {
          id: '10504',
          name: 'Notification 通知提醒框',
          type: ANT_NOTIFICATION,
          options: { pos: [0, 0] },
        },
        {
          id: '10505',
          name: 'Progress 进度条',
          type: ANT_PROGRESS,
          options: { pos: [0, 0] },
        },
        {
          id: '10506',
          name: 'Popconfirm 气泡确认框',
          type: ANT_POPCONFIRM,
          options: { pos: [0, 0] },
        },
        {
          id: '10507',
          name: 'Spin 加载中',
          type: ANT_SPIN,
          options: { pos: [0, 0] },
        },
      ],
    },
    {
      id: '106',
      title: '其它',
      children: [
        {
          id: '10601',
          name: 'Anchor 锚点',
          type: ANT_ANCHOR,
          options: { pos: [0, 0] },
        },
        {
          id: '10602',
          name: 'BackTop 回到顶部',
          type: ANT_BACKTOP,
          options: { pos: [0, 0] },
        },
        {
          id: '10603',
          name: 'Divider 分割线',
          type: ANT_DIVIDER,
          options: { pos: [0, 0] },
        },
        {
          id: '10604',
          name: 'Localeprovider 国际化',
          type: ANT_LOCALEPROVIDER,
          options: { pos: [0, 0] },
        },
      ],
    },
  ],
  targetDnDComponentList: [],
};

export default {
  namespace: 'dnd',

  state: {
    sourceDnDComponentList: COMPONENT_LIST.sourceDnDComponentList,
    targetDnDComponentList: COMPONENT_LIST.targetDnDComponentList,
  },

  effects: {
    *update({ payload, callback }, { put }) {
      yield put({
        type: 'saveTarget',
        payload: {
          ...payload,
        },
      });
      if (callback) callback();
    },
  },

  reducers: {
    saveTarget(state) {
      return {
        ...state,
        targetDnDComponentList: [
          {
            id: '10101',
            name: 'Grid 栅格',
            type: ANT_GRID,
            options: { pos: [0, 0] },
          },
        ],
      };
    },
  },
};
