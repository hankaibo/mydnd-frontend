import React, { useState } from 'react';
import { Button, Card, Col, Collapse, Descriptions, List, Row, Space, Typography } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import Eraser from '@/components/Eraser';
import IconFont from '@/components/IconFont';
import styles from './index.less';

const { Panel } = Collapse;
const { Text, Link, Title, Paragraph } = Typography;

const Home = () => {
  const [logList] = useState([
    {
      version: 'v1.0.0',
      datetime: '2021-01-01',
      content: ['Amy系统正式发布'],
    },
  ]);
  const [backendList] = useState(['SpringBoot', 'Apache Shire', 'JWT', 'MyBatis']);
  const [frontendList] = useState(['React', 'Ant Design', 'Umi', 'Less']);
  return (
    <div className={styles.container}>
      <h2>Hello! 这是一个可视化拖拽学习项目，目前还在开发中。😂</h2>
      <p>但是有一些拖拽的学习示例，如果您感兴趣，可以点进去看一下哟！</p>
      <ol>
        <li>
          <Link to="/game/chess">国际象棋</Link>
        </li>
      </ol>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={16} xl={16}>
          <Card title={<Title level={3}>Amy后台管理框架</Title>}>
            <Typography>
              <Paragraph>
                初入行时，祖师爷“高司令”赏饭吃，一直想写套后台管理系统报答。怎奈学艺不精，丢了祖师爷的脸，此为心结。
                后来转投布兰登大师门下，与后台同事配合工作，想趁工作不忙时提前把后台管理的工作先弄起来，谁知半年过去了，同事都没有提供一个接口，然后我就亲自下场了。
                这便有了它。
              </Paragraph>
              <Paragraph>
                <Text strong>当前版本：{logList[logList.length - 1].version}</Text>
              </Paragraph>
              <Paragraph>
                <Button danger>
                  <IconFont type="icon-rmb" />
                  免费开源
                </Button>
              </Paragraph>
              <Paragraph>
                <Button icon={<GithubOutlined />}>
                  <span>
                    <Link href="https://github.com/hankaibo/amy-java/" target="_blank">
                      后台源码
                    </Link>
                  </span>
                </Button>
                <Button icon={<GithubOutlined />}>
                  <span>
                    <Link href="https://github.com/hankaibo/amy-react/" target="_blank">
                      前端源码
                    </Link>
                  </span>
                </Button>
              </Paragraph>
            </Typography>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <Card title={<Title level={3}>技术选型</Title>}>
            <Space>
              <List
                size="small"
                header={<Text strong>前端技术</Text>}
                dataSource={frontendList}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <List
                size="small"
                header={<Text strong>后台技术</Text>}
                dataSource={backendList}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Space>
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={12} xl={8}>
          <Card title="联系信息">
            <Descriptions column={1} size="small">
              <Descriptions.Item
                label={
                  <>
                    <GithubOutlined style={{ fontSize: '12px', marginRight: '8px' }} />
                    <Text>前端bug</Text>
                  </>
                }
              >
                <Link href="https://github.com/hankaibo/amy-react/issues" target="_blank">
                  https://github.com/hankaibo/amy-react/issues
                </Link>
              </Descriptions.Item>
              <Descriptions.Item
                label={
                  <>
                    <GithubOutlined style={{ fontSize: '12px', marginRight: '8px' }} />
                    <Text>后台bug</Text>
                  </>
                }
              >
                <Link href="https://github.com/hankaibo/amy-java/issues" target="_blank">
                  https://github.com/hankaibo/amy-java/issues
                </Link>
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={8}>
          <Card title="更新日志">
            <Collapse ghost>
              {logList.map((item) => (
                <Panel
                  header={
                    <Text>
                      {item.version} - {item.datetime}
                    </Text>
                  }
                  key={item.datetime}
                >
                  <List
                    size="small"
                    dataSource={item.content}
                    renderItem={(it, idx) => (
                      <List.Item>
                        {idx + 1}. {it}
                      </List.Item>
                    )}
                  />
                </Panel>
              ))}
            </Collapse>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={8}>
          <Card title="捐赠支持">
            <Space>
              {/* eslint-disable-next-line global-require */}
              <Eraser width={190} height={251} qrSrc={require('@/assets/alipay-qr-code.jpg')} />
              {/* eslint-disable-next-line global-require */}
              <Eraser width={190} height={251} qrSrc={require('@/assets/wechat-qr-code.jpg')} />
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
