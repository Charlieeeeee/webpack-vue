<template>
  <div class="container">
    <div v-for="(item,index) in dataList" :key="item._class">
      <c-title>{{item.title}}</c-title>
      <c-content>{{item.content}}</c-content>
      <div :class="`row-center ${item._class}`">
        <div class="outer out">
          <div class="inner in"></div>
        </div>
      </div>
      <hr v-if="dataList.length !== (index + 1)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "verticalCenter",
  mounted() {
    console.log(this.$route);
  },
  data: () => ({
    dataList: [
      {
        title: "方式一、",
        content: "使用 vertical-align: middle",
        _class: "way-one",
      },
      {
        title: "方式二、",
        content: "绝对定位, 用transform往回挪50%",
        _class: "way-two",
      },
      {
        title: "方式三、",
        content: "绝对定位, 上下左右0, margin: auto",
        _class: "way-three",
      },
      {
        title: "方式四、",
        content: "flex定位",
        _class: "way-four",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.container {
  .row-center {
    display: flex;
    justify-content: center;
  }
  .outer {
    background-color: blue;
    width: 200px;
    height: 200px;
  }
  .inner {
    background-color: yellow;
    width: 50%;
    height: 50%;
  }
  .way-one {
    .out {
      text-align: center;

      &:after {
        content: "";
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }
      .in {
        vertical-align: middle;
        display: inline-block;
      }
    }
  }

  .way-two {
    .out {
      position: relative;

      .in {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
      }
    }
  }

  .way-three {
    .out {
      position: relative;

      .in {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }

  .way-four {
    .out {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>