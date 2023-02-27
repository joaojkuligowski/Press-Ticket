import Setting from "../../models/Setting";
import axios from "axios";


async function AllWebhookService(wook: { name: any; string: any; }){
  const wookname = [wook.name];
  const wookstring = [wook.string];
  const getHook = await Setting.findOne({ where: { key: 'webhookurl' } });
  const getHookAut = await Setting.findOne({ where: { key: 'webhooktoken' } });

  const retorno = {
    wook: wookname,
    date: new Date(),
    retorno: wookstring
  }

axios({
  method: 'POST',
  url: getHook.value, 
  data: JSON.stringify(retorno), 
  headers:{'Content-Type': 'application/json; charset=utf-8', 'Authorization': getHookAut.value}
}) 
.then((res) => {
  console.log(`statusCode: ${res.status}`)
  console.log(res)
})
.catch((error) => {
  console.error(error)
})
return wook;
};

export default AllWebhookService;