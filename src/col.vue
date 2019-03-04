<template>
  <div class="col" :class="colClasess" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
let validator = value => {
  let valid = true,
    keys = Object.keys(value);
  //验证只能有span and offset属性
  keys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "StepHenCol",
  props: {
    span: { type: [Number, String] },
    offset: { type: [Number, String], default: 0 },
    phone: { type: Object, validator },
    ipad: { type: Object, validator },
    narrowPc: { type: Object, validator },
    pc: { type: Object, validator },
    widePc: { type: Object, validator }
  },
  computed: {
    colStyle() {
      let { gutter } = this;
      return {
        paddingLeft: gutter / 2 + "px",
        paddingRight: gutter / 2 + "px"
      };
    },
    colClasess() {
      let {
        span,
        offset,
        phone,
        ipad,
        narrowPc,
        pc,
        widePc,
        createdClasess
      } = this;
      return [
        ...createdClasess({ span, offset }),
        ...createdClasess(ipad, "ipad-"),
        ...createdClasess(narrowPc, "narrow-pc-"),
        ...createdClasess(pc, "pc-"),
        ...createdClasess(widePc, "wide-pc-")
        // span && `col-${span}`,
        // offset && `offset-${offset}`,
        // phone && `col-phone-${phone.span}`,
        // ipad && `col-ipad-${ipad.span}`,
        // narrowPc && `col-narrow-pc-${narrowPc.span}`,
        // pc && `col-pc-${pc.span}`,
        // widePc && `col-wide-pc-${widePc.span}`
      ];
    }
  },
  methods: {
    createdClasess(obj, str = "") {
      if (!obj) {
        return [];
      }
      let array = [];
      if (obj.span) {
        array.push(`col-${str}${obj.span}`);
      }
      if (obj.offset) {
        array.push(`offset-${str}${obj.offset}`);
      }
      return array;
    }
  },
  data() {
    return {
      gutter: 0
    };
  }
};
</script>
<style lang="scss" scoped>
.col {
  //phone
  //前缀
  $class-prefix: col-;
  @for $n from 1 through 24 {
    // scss插值语法 #{} 对比 js插值语法 ￥{};
    &.#{$class-prefix}#{$n} {
      width: $n/24 * 100%;
    }
  }
  //前缀
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: $n/24 * 100%;
    }
  }
  //ipad
  @media (min-width: 577px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: $n/24 * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: $n/24 * 100%;
      }
    }
  }
  //narrow-pc
  @media (min-width: 769px) {
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: $n/24 * 100%;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: $n/24 * 100%;
      }
    }
  }
  //pc
  @media (min-width: 993px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: $n/24 * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: $n/24 * 100%;
      }
    }
  }
  //wide-pc
  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: $n/24 * 100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: $n/24 * 100%;
      }
    }
  }
}
</style>
