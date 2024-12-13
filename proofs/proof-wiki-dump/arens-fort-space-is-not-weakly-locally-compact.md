theorem ArensFort_Not_Weakly_Locally_Compact() {
  let T = (S, τ) // Arens-Fort space
  assert(
    ¬(T is_weakly_locally_compact)
  )
} ↔

proof ArensFort_Not_Weakly_Locally_Compact() {
  lemma Origin_Neighborhood() {
    assert(
      ∀N ∈ neighborhoods((0,0)) ⇒ ¬(N is_compact)
    )
  } →
  setVar(p: point = (0,0)) →
  assert(p ∈ S) →
  assert(
    ¬(∃N ∈ neighborhoods(p): N is_compact)
  ) →
  apply(Definition_Weakly_Locally_Compact) {
    premise(
      T is_weakly_locally_compact ↔ 
      ∀x ∈ S ⇒ ∃N ∈ neighborhoods(x): N is_compact
    )
  } →
  assert(¬(T is_weakly_locally_compact))
}