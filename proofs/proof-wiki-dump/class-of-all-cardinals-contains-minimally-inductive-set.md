theorem Cardinals_Contains_MinInductive() {
  assert(
    let ℕ := {x | x is_cardinal_number} ∧
    let ω := minimal_inductive_set() →
    ω ⊆ ℕ
  )
} ↔

proof Cardinals_Contains_MinInductive() {
  setVar(n ∈ ω) →
  
  lemma Cardinal_Of_Finite_Ordinal() {
    assert(n = card(n))
  } →

  lemma Cardinal_Of_Cardinal_Equal() {
    assert(card(n) ∈ ℕ)
  } →
  
  apply(Cardinal_Of_Finite_Ordinal()) →
  apply(Cardinal_Of_Cardinal_Equal()) →
  assert(n ∈ ℕ) →
  conclude(∀n ∈ ω ⇒ n ∈ ℕ) →
  conclude(ω ⊆ ℕ)
}