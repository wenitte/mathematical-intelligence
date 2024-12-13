theorem Additive_Is_Strongly_Additive() {
  setDef(𝕊: algebra_of_sets) →
  setDef(f: 𝕊 → ℝ̄, additive_function) →
  assert(
    ∀A,B ∈ 𝕊 ⇒ f(A ∪ B) + f(A ∩ B) = f(A) + f(B)
  )
} ↔

proof Additive_Is_Strongly_Additive() {
  lemma Disjoint_Union_1() {
    assert(A ∪ B = A ∪ (B\A)) →
    assert(A ∪ (B\A) = A ⊔ (B\A))
  } →
  
  lemma Disjoint_Union_2() {
    assert(B = (B\A) ∪ (A ∩ B)) →
    assert((B\A) ∪ (A ∩ B) = (B\A) ⊔ (A ∩ B))
  } →
  
  lemma Disjoint_Union_3() {
    assert(A ∪ B = (A ∩ B) ∪ (A ∪ B)) ∧ // since A ∩ B ⊆ A ∪ B
    assert((A ∩ B) ∪ (A ∪ B) = (A ∩ B) ∪ ((A ∪ B)\(A ∩ B))) →
    assert((A ∩ B) ∪ ((A ∪ B)\(A ∩ B)) = (A ∩ B) ⊔ ((A ∪ B)\(A ∩ B)))
  } →
  
  apply(Disjoint_Union_1()) →
  assert(f(A ∪ B) = f(A) + f(B\A)) → // Equation 1
  
  apply(Disjoint_Union_2()) →
  assert(f(B) = f(B\A) + f(A ∩ B)) → // Equation 2
  
  apply(Disjoint_Union_3()) →
  assert(f(A ∪ B) = f(A ∩ B) + f((A ∪ B)\(A ∩ B))) →
  
  // Well-definedness check
  assert(¬(f(A ∪ B) = +∞ ∧ f(A ∩ B) = -∞)) →
  assert(¬(f(A ∪ B) = -∞ ∧ f(A ∩ B) = +∞)) →
  
  // Final computation
  assert(f(A ∪ B) + f(A ∩ B) = f(A) + f(B\A) + f(A ∩ B)) → // using Equation 1
  assert(f(A ∪ B) + f(A ∩ B) = f(A) + f(B)) // using Equation 2
}