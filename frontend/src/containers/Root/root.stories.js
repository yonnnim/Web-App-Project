import React from "react"
import { createStore, applyMiddleware } from "redux"
import rootReducer from "../../reducers"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"
import { types } from "../../actions"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router"
import Root from "./index"
import { put, take } from "redux-saga/effects"
import { delay } from "redux-saga"
import { storiesOf } from "@storybook/react"
import { storyReduxLogger } from "../../storybook-utils/withRedux"

const paymentsMock = require("../../mocks/payments.json")

function getPaymentsSaga(mockType) {
  console.log(mockType)
  return function*() {
    while (true) {
      yield take("GET_PAYMENTS")
      yield put({ type: types.PAYMENTS_HISTORY_START })
      yield delay(500)
      yield put({
        type: types.PAYMENTS_HISTORY_UPDATE,
        payload: {
          fetchedAll: false,
          list: paymentsMock.slice(0, mockType),
        },
      })
      yield put({
        type: types.PAYMENTS_HISTORY_FINISH,
      })
      console.log(store.getState())
    }
  }
}

const sagaMiddleware = createSagaMiddleware()

storiesOf("Containers/Home").add("Home", () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, storyReduxLogger)),
  )

  sagaMiddleware.run(getPaymentsSaga(2))

  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]} initialIndex={0}>
        <Root />
      </MemoryRouter>
    </Provider>
  )
})

storiesOf("Containers/Payment").add("Payments", () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, storyReduxLogger)),
  )

  sagaMiddleware.run(getPaymentsSaga(2))

  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/payments"]} initialIndex={0}>
        <Root />
      </MemoryRouter>
    </Provider>
  )
})

storiesOf("Containers/Buy Leads").add("Leads - buy", () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, storyReduxLogger)),
  )

  sagaMiddleware.run(getPaymentsSaga(2))

  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/leads/buy"]} initialIndex={0}>
        <Root />
      </MemoryRouter>
    </Provider>
  )
})

storiesOf("Containers/Sell Leads").add("Leads - sell", () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, storyReduxLogger)),
  )

  sagaMiddleware.run(getPaymentsSaga(2))

  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/leads/sell"]} initialIndex={0}>
        <Root />
      </MemoryRouter>
    </Provider>
  )
})

storiesOf("Containers/My Leads").add("Leads - my", () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, storyReduxLogger)),
  )

  sagaMiddleware.run(getPaymentsSaga(2))

  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/leads/my"]} initialIndex={0}>
        <Root />
      </MemoryRouter>
    </Provider>
  )
})

storiesOf("Containers/New Leads").add("Leads - new", () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, storyReduxLogger)),
  )

  sagaMiddleware.run(getPaymentsSaga(2))

  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/leads/new"]} initialIndex={0}>
        <Root />
      </MemoryRouter>
    </Provider>
  )
})

storiesOf("Containers/CSV Upload").add("Leads - csv upload", () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, storyReduxLogger)),
  )

  sagaMiddleware.run(getPaymentsSaga(2))

  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/leads/csv-upload"]} initialIndex={0}>
        <Root />
      </MemoryRouter>
    </Provider>
  )
})

storiesOf("Containers/Dispute").add("Leads - dispute - lead 1", () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, storyReduxLogger)),
  )

  sagaMiddleware.run(getPaymentsSaga(2))

  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/leads/1/dispute"]} initialIndex={0}>
        <Root />
      </MemoryRouter>
    </Provider>
  )
})

storiesOf("Containers/complete registration").add(
  "Users - complete registration",
  () => {
    const store = createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(sagaMiddleware, storyReduxLogger)),
    )

    sagaMiddleware.run(getPaymentsSaga(2))

    return (
      <Provider store={store}>
        <MemoryRouter
          initialEntries={["/users/complete-registration"]}
          initialIndex={0}
        >
          <Root />
        </MemoryRouter>
      </Provider>
    )
  },
)

storiesOf("Containers/Email Confirmation").add(
  "Users - email confirmation",
  () => {
    const store = createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(sagaMiddleware, storyReduxLogger)),
    )

    sagaMiddleware.run(getPaymentsSaga(2))

    return (
      <Provider store={store}>
        <MemoryRouter
          initialEntries={["/users/email-confirmation"]}
          initialIndex={0}
        >
          <Root />
        </MemoryRouter>
      </Provider>
    )
  },
)

storiesOf("Containers/Notifcations Table").add("Users - notification", () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, storyReduxLogger)),
  )

  sagaMiddleware.run(getPaymentsSaga(2))

  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/users/notifications"]} initialIndex={0}>
        <Root />
      </MemoryRouter>
    </Provider>
  )
})

storiesOf("Containers/Withdraw").add("Users - withdrawal", () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, storyReduxLogger)),
  )

  sagaMiddleware.run(getPaymentsSaga(2))

  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/users/withdrawal"]} initialIndex={0}>
        <Root />
      </MemoryRouter>
    </Provider>
  )
})

storiesOf("Containers/Admin/Leads").add("Admin - leads", () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, storyReduxLogger)),
  )

  sagaMiddleware.run(getPaymentsSaga(2))

  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/admin/leads"]} initialIndex={0}>
        <Root />
      </MemoryRouter>
    </Provider>
  )
})

storiesOf("Containers/Admin/Transactions").add("Admin - transactions", () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, storyReduxLogger)),
  )

  sagaMiddleware.run(getPaymentsSaga(2))

  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={["/admin/transactions"]} initialIndex={0}>
        <Root />
      </MemoryRouter>
    </Provider>
  )
})
