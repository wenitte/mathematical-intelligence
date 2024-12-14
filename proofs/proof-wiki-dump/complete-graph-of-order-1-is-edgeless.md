theorem Complete_Graph_Order_1_is_Edgeless() {
  assert(
    K₁ ↔ N₁
  )
} ↔

proof Complete_Graph_Order_1_is_Edgeless() {
  assert(|V(K₁)| = 1) →
  apply(Complete_Graph_is_Regular) →
  assert(K₁ is 0-regular) →
  apply(Graph_is_0_Regular_iff_Edgeless) →
  assert(K₁ ↔ N₁)
}