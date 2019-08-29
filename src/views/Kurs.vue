<template>
  <div>
      <table class="table">
        <tbody>
            <tr v-for="(artikelx, index) in artikel" :key="index">
                <td>{{ ++index }}</td>
                <!-- <td><router-link class="nav-link" :to="'/web/' + artikelx.id">{{ artikelx.title }}</router-link></td> -->
                <td>{{ artikelx.THANG }}</td>
                <td>{{ artikelx.MATA_UANG }}</td>
                <td>{{ artikelx.KURS }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios"

export default {
    async mounted(){
        const response = await axios.get('https://spanint.kemenkeu.go.id/spanint/data/DataWebService/KursUSD')
        this.artikel = Object.values(response.data).sort((a,b) => a.THANG - b.THANG)
        //console.log(this.artikel)
    },
    data() {
        return {
            artikel: [
                
            ]
        }
    }
};
</script>