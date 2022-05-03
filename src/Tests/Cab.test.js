import { render as rtlRender, screen } from '@testing-library/react';
import Cab from '../Model/Cab';
import { Provider } from 'react-redux';
import store from '../redux/store'
import InsertCab from '../components/Cab/InsertCab';
import UpdateCab from '../components/Cab/UpdateCab';
import ViewAllCabs from '../components/Cab/ViewAllCabs';
import ViewCabsofType from '../components/Cab/ViewCabsofType';


const render = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>

)

test('Insert Cab', () => {
  render(<InsertCab/>)
  const linkElement = screen.getByText("Add New Cab");
  expect(linkElement).toBeInTheDocument();
});

test('Insert Cab 2', () => {
  render(<InsertCab/>)
  const linkElement = screen.getByPlaceholderText("carType");
  expect(linkElement).toBeInTheDocument();
});

test('Update Cab', () => {
  render(<UpdateCab/>)
  const linkElement = screen.getByText("Update Cab");
  expect(linkElement).toBeInTheDocument();
});

test('Update Cab 2', () => {
  render(<UpdateCab/>)
  const linkElement = screen.getByPlaceholderText("carType");
  expect(linkElement).toBeInTheDocument();
});

test('View All Cabs', () => {
  render(<ViewAllCabs/>)
  const linkElement = screen.getByText("List of All Cabs");
  expect(linkElement).toBeInTheDocument();
});

test('View All Cabs 2', () => {
  render(<ViewAllCabs/>)
  const linkElement = screen.getByPlaceholderText("carType");
  expect(linkElement).toBeInTheDocument();
});

test('View Cabs of Type', () => {
  render(<ViewCabsofType/>)
  const linkElement = screen.getByText("Edit");
  expect(linkElement).toBeInTheDocument();
});

test('View Cabs of Type 2', () => {
  render(<ViewCabsofType/>)
  const linkElement = screen.getByPlaceholderText("Get Cabs");
  expect(linkElement).toBeInTheDocument();
});
