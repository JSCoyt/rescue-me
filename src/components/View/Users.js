import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { forwardRef } from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import MaterialTable from "material-table";
import axios from 'axios';
// import firebase from "../../utils/firebase";
const styles = {
  paper: {
    maxWidth: 936,
    margin: "auto",
    overflow: "hidden"
  },
  searchBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
  },
  block: {
    display: "block"
  },
  contentWrapper: {
    margin: "40px 16px"
  }
};

const columns = [
  //{ title: "Genero", field: "genero", lookup: { "Femenino": "Femenino", "Masculino": "Masculino" }},
  // {
  //   title: "avatar",
  //   field: "avatar",
  //   editable: "never",
  //   render: rowData => (
  //     // eslint-disable-next-line jsx-a11y/alt-text
  //     <img src={rowData.avatar} style={{ width: 40, borderRadius: "50%" }} />
  //   )
  // },
  { title: "idUsuario", field: "idUsuario" },
  { title: "Nombre", field: "nombre" },
  { title: "Apellido", field: "apellido" },
  { title: "Correo", field: "correo" },
  { title: "Tipo", field: "tipo" },
  { title: "Estado", field: "estado" },
  { title: "Fecha", field: "fechaA" }
];

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUsers: []
    };
  }

  componentWillMount(){
    this.getUsers();
  }

  getUsers(){
    axios.get('http://localhost:3000/api/usuarios')
    .then(response => {
      console.log(response.data);
      this.setState({dataUsers: response.data},() => {
        // console.log(this.state);
      })
    })
    .catch(err => console.log(err));
  }

  postUsers(newData){
    axios.request({
      method: 'post',
      url: 'http://localhost:3000/api/usuarios',
      data: this.onRowAdd(this.newData)
    }).then(response =>{
      this.setState({dataUsers: response.newData},() =>{

      })
    })
    .catch(err => console.log(err));
  }

  updateUsers(newData){
    axios.put({
      method: 'put',
      url: 'http://localhost:3000/api/usuarios',
      data: this.onRowUpdate(this.newData)
    }).then(response =>{
      this.setState({ dataUsers: response.newData},()=>{

      })
    })
    .catch(err => console.log(err));
  }

  deleteUsers(oldData){
    axios.delete({
      url:  'http://localhost:3000/api/usuarios',
      data: this.onRowDelete(this.oldData)
    }).then(response => {
      this.setState({ dataUsers: response.oldData}, ()=>{

      })
    })
    .catch(err => console.log(err));
  }


  render() {
    return (
      <Paper style={styles.paper}>
        <MaterialTable
          onRowClick={(evt, selectedRow) => this.setState({ selectedRow })}
          options={{
            exportButton: true,
            grouping: true,
            rowStyle: rowData => ({
              backgroundColor:
                this.state.selectedRow &&
                this.state.selectedRow.tableData.id === rowData.tableData.id
                  ? "#EEE"
                  : "#FFF"
            })
          }}
          icons={tableIcons}
          title="Usuarios Activos"
          columns={columns}
          data={this.state.dataUsers}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {}, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  // eslint-disable-next-line no-lone-blocks
                  {
                  }
                  resolve();
                }, 1000);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {}, 600);
              })
          }}
        />
        <div style={styles.contentWrapper}>
          <Typography color="textSecondary" align="center">
            No existen usuarios
          </Typography>
        </div>
      </Paper>
    );
  }
}
