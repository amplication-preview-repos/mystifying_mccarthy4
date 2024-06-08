import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DataList } from "./data/DataList";
import { DataCreate } from "./data/DataCreate";
import { DataEdit } from "./data/DataEdit";
import { DataShow } from "./data/DataShow";
import { DbcList } from "./dbc/DbcList";
import { DbcCreate } from "./dbc/DbcCreate";
import { DbcEdit } from "./dbc/DbcEdit";
import { DbcShow } from "./dbc/DbcShow";
import { VehicleList } from "./vehicle/VehicleList";
import { VehicleCreate } from "./vehicle/VehicleCreate";
import { VehicleEdit } from "./vehicle/VehicleEdit";
import { VehicleShow } from "./vehicle/VehicleShow";
import { RecordList } from "./record/RecordList";
import { RecordCreate } from "./record/RecordCreate";
import { RecordEdit } from "./record/RecordEdit";
import { RecordShow } from "./record/RecordShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { VehicleSecretList } from "./vehicleSecret/VehicleSecretList";
import { VehicleSecretCreate } from "./vehicleSecret/VehicleSecretCreate";
import { VehicleSecretEdit } from "./vehicleSecret/VehicleSecretEdit";
import { VehicleSecretShow } from "./vehicleSecret/VehicleSecretShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"VehicleBlackboxServer"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Data"
          list={DataList}
          edit={DataEdit}
          create={DataCreate}
          show={DataShow}
        />
        <Resource
          name="Dbc"
          list={DbcList}
          edit={DbcEdit}
          create={DbcCreate}
          show={DbcShow}
        />
        <Resource
          name="Vehicle"
          list={VehicleList}
          edit={VehicleEdit}
          create={VehicleCreate}
          show={VehicleShow}
        />
        <Resource
          name="Record"
          list={RecordList}
          edit={RecordEdit}
          create={RecordCreate}
          show={RecordShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="VehicleSecret"
          list={VehicleSecretList}
          edit={VehicleSecretEdit}
          create={VehicleSecretCreate}
          show={VehicleSecretShow}
        />
      </Admin>
    </div>
  );
};

export default App;
