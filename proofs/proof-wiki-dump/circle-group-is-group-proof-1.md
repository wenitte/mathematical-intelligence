theorem Circle_Group_Is_Group() {
  assert(
    struct(K, ×) is_group() ∧
    K ⊆ ℂ
  )
} ↔

proof Circle_Group_Is_Group() {
  assert(K ⊆ ℂ) →
  lemma Reduction_To_Subgroup() {
    assert(
      K ≤ (ℂ_{≠0}, ×) → K is_group()
    )
  } →
  
  assert(1 + 0i ∈ K) by Complex_Multiplication_Identity →
  assert(K ≠ ∅) →
  
  lemma Closure_Under_Multiplication() {
    setVar(z, w: K) →
    assert(|z| = 1 ∧ |w| = 1) →
    assert(|zw| = |z||w|) →
    assert(|zw| = 1) →
    assert(zw ∈ K)
  } →
  
  lemma Inverse_Closure() {
    setVar(z: K) →
    assert(|z| = 1) →
    assert(|1/z| = 1) →
    assert(z⁻¹ ∈ K)
  } →
  
  apply(Two_Step_Subgroup_Test) with {
    verify(K ≠ ∅) ∧
    verify(Closure_Under_Multiplication) ∧
    verify(Inverse_Closure)
  } →
  
  assert(K ≤ ℂ_{≠0}) →
  assert(K is_group())
}