theorem ArensForSpace_Not_Connected() {
  let T = (S, τ) be ArensForSpace
  assert(
    T is_not_connected
  )
} ↔

proof ArensForSpace_Not_Connected() {
  setVar(p ∈ S: p ≠ (0,0)) →
  apply(theorem_ClopenPoints_ArensForSpace()) →
  assert({p} is_open ∧ {p} is_closed in T) →
  by_definition(closed_set) →
  assert(S\{p} is_open ∧ S\{p} is_closed in T) →
  assert(
    ∃ separation_of_T: {p} | S\{p}
  ) →
  by_definition(connected_space) →
  assert(T is_not_connected)
}

lemma theorem_ClopenPoints_ArensForSpace() {
  assert(
    ∀p ∈ S: p ≠ (0,0) → 
    {p} is_clopen in T
  )
}