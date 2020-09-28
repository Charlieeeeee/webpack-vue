<template>
  <div class="title-container">
      <h3 class="title-h3">
          <span class="title-box">
              <slot></slot>
          </span>
      </h3>
  </div>
</template>

<style scoped lang="scss">
.title-container{
    .title-h3{
        padding: 0px;
        color: black;
        font-size: 17px;
        font-weight: bold;
        position: relative;
        margin-top: 20px;
        margin-bottom: 20px;

        .title-box{
            border-bottom: 2px solid RGBA(79, 177, 249, .65);
            color: #2b2b2b;
            padding-bottom: 2px;
        }
    }
}
</style>