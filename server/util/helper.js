// others methods
                //     async function generateData() {
                //        // let products = [];

                //        // for (let i = 0; i < 10; i++) {
                //             let productId = faker.random.uuid();
                //             let name = faker.random.word(2);
                //             let description = faker.random.words(6);
                //             let serviceId = faker.random.uuid();
                //             let serviceName = faker.random.word();
                //             let serviceType = faker.random.word();

                //             // products.push({
                //             //     "productId": productId,
                //             //     "name": name,
                //             //     "description": description,
                //             //     "service": {
                //             //         "serviceId": serviceId,
                //             //         "serviceName": serviceName,
                //             //         "serviceType": serviceType
                //             //     }
                //             // });

                //             return {
                //                 "productId": productId,
                //                 "name": name,
                //                 "description": description,
                //                 "service": {
                //                     "serviceId": serviceId,
                //                     "serviceName": serviceName,
                //                     "serviceType": serviceType
                //                 }

                //         }
                //        // return products;

                //    // }





                export default class Login extends React.Component{
                    state = {
                        email: '',
                        password: '',
                    }
                
                    onChange = (event) =>{
                        this.setState({
                            [event.target.name]: event.target.value,
                        });
                    }
                
                    onSubmit = () => {
                        console.log(this.state);
                    }
                
                    render(){
                        return(
                            <div>
                                <Input name='email'onChange={event => this.onChange(event)} value={this.state.email}/>
                                <br/>
                                <Input name='password'onChange={event => this.onChange(event)} value={this.state.password}/>
                                <br/>
                                <Button onClck={() => this.onSubmit()}type="primary">Login</Button>
                            </div>
                        );
                    }
                }                