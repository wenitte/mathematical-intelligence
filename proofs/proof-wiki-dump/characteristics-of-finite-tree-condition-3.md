theorem Tree_Path_Uniqueness() {
  assert(
    ∀T: Graph(T ∧ finite(T) ∧ simple(T)) ⇒
    (isTree(T) ↔ ∀v₁,v₂ ∈ vertices(T) ⇒ ∃!p ∈ paths(T): connects(p,v₁,v₂))
  )
} ↔

proof Tree_Path_Uniqueness() {
  reference(Path_In_Tree_Is_Unique) →
  assert(
    Path_In_Tree_Is_Unique ⇒ Tree_Path_Uniqueness
  ) →
  conclude()
}