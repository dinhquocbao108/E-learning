import { Button, Form, Input, Select } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const { Option } = Select;
const validateMessages = {
  // eslint-disable-next-line no-template-curly-in-string
  required: "${label} không được để trống!",
  types: {
    // eslint-disable-next-line no-template-curly-in-string
    email: "${label} email không hợp lệ!",
    // eslint-disable-next-line no-template-curly-in-string
    number: "${label} is not a valid number!",
  },
  number: {
    // eslint-disable-next-line no-template-curly-in-string
    range: "${label} must be between ${min} and ${max}",
  },
};
const onFinish = (values) => {
  console.log(values);
};

function RegisterForm(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name="hoTen"
            label="Họ và tên"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="taiKhoan"
            label="Tài Khoản"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="matKhau"
            label="Mật khẩu"
            rules={[
              {
                required: true,
              },
              {
                pattern:
                  "(?=^.{8,}$)((?=.*)|(?=.*+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$",
                message:
                  "mật khẩu phải ít nhất 8 kí tự (ít nhất 1 chữ hoa, 1 chữ thường và 1 số)",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
              },
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            label="Số điện thoại"
            rules={[
              {
                required: true,
              },
              { min: 11, message: "Số điện thoại không hợp lệ" },
              { max: 11, message: "Số điện thoại không hợp lệ" },
              {
                pattern: new RegExp(/^[0-9]+$/),
                message: "số điện thoại phải là số",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="maNhom"
            label="Mã nhóm"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Option value="GP00">GP00</Option>
              <Option value="GP01">GP01</Option>
              <Option value="GP02">GP02</Option>
              <Option value="GP03">GP03</Option>
              <Option value="GP04">GP04</Option>
              <Option value="GP05">GP05</Option>
              <Option value="GP06">GP06</Option>
              <Option value="GP07">GP07</Option>
              <Option value="GP08">GP08</Option>
              <Option value="GP09">GP09</Option>
              <Option value="GP10">GP10</Option>
            </Select>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 8,
            }}
          >
            <Button type="primary" htmlType="submit">
              Đăng kí
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default RegisterForm;
