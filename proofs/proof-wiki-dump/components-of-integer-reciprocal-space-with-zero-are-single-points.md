theorem Components_Integer_Reciprocal_Space() {
  let A: ℝ
  assert(
    A = {0} ∪ {1/n : n ∈ ℤ₊} ∧
    τ_d = EuclideanTopology(A) ∧
    ∀x ∈ A ⇒ Component(x,A) = {x}
  )
} ↔

proof Components_Integer_Reciprocal_Space() {
  lemma TotalSeparation() {
    assert(TotallySeparated(A, τ_d))
  } →
  
  lemma TotalDisconnection() {
    apply(TotalSeparation()) →
    apply(TotallySeparated_implies_TotallyDisconnected()) →
    assert(TotallyDisconnected(A, τ_d))
  } →
  
  setVar(x: A) →
  apply(TotalDisconnection()) →
  apply(TotallyDisconnected_Definition()) →
  assert(Component(x,A) = {x}) →
  assert(∀x ∈ A ⇒ Component(x,A) = {x})
}