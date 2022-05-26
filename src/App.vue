<template>
  <global-header
    :title="'yuetong3yu.dev'"
    :isLogin="true"
    :userName="'yuetong'"
  />
  <column-list :list="columnList" />
</template>

<script lang="ts">
import './App.css'

import ColumnList from './components/ColumnList/index.vue'
import type { ColumnProps } from './components/ColumnList/index.vue'
import GlobalHeader from './components/GlobalHeader/index.vue'

const mockData: ColumnProps[] = [
  {
    id: String(Math.random()),
    title: 'Column 1',
    description: 'Description 1',
    avatar: 'https://picsum.photos/200/200',
  },
  {
    id: String(Math.random()),
    title: 'Column 2',
    description: 'Description 2',
    avatar: 'https://picsum.photos/200/200',
  },
  {
    id: String(Math.random()),
    title: 'Column 3',
    description: 'Description 3',
    avatar: 'https://picsum.photos/200/200',
  },
  {
    id: String(Math.random()),
    title: 'Column 4',
    description: 'Description 4',
    avatar: 'https://picsum.photos/200/200',
  },
]

export default {
  components: {
    ColumnList,
    GlobalHeader,
  },
  setup() {
    return {
      columnList: mockData,
    }
  },
}
</script>
