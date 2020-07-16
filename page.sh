pageName=$1

mkdir ./src/pages/${pageName}

mkdir ./src/pages/${pageName}/components

echo "<template>
  <div class=\"$pageName-page\">

  </div>
</template>

<script>
export default {
    name:\"$pageName\"
}
</script>

<style scoped lang=\"scss\">
.$pageName-page{

}
</style>" > ./src/pages/${pageName}/${pageName}.vue
