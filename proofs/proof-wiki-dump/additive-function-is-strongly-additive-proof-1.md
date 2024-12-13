theorem Additive_Is_Strongly_Additive() {
  assert(
    ∀f: 𝒮 → ℝ̄, ∀A,B ∈ 𝒮 ⇒
    (f is additive) →
    f(A ∪ B) + f(A ∩ B) = f(A) + f(B)
  )
}

proof Additive_Is_Strongly_Additive() {
  setVar(f: 𝒮 → ℝ̄, A,B ∈ 𝒮) →
  
  lemma Set_Partition() {
    assert(
      A = (A\B) ∪ (A∩B) ∧
      B = (B\A) ∪ (A∩B) ∧
      (A\B) ∩ (A∩B) = ∅ ∧
      (B\A) ∩ (A∩B) = ∅
    )
  } →
  
  lemma Disjoint_Differences() {
    assert((A\B) ∩ (B\A) = ∅)
  } →
  
  apply(Set_Partition()) →
  apply(f is additive) →
  assert(f(A) = f(A\B) + f(A∩B)) →
  assert(f(B) = f(B\A) + f(A∩B)) →
  
  assert(f(A) + f(B) = f(A\B) + 2f(A∩B) + f(B\A)) →
  
  apply(Disjoint_Differences()) →
  apply(f is additive) →
  assert(
    f(A\B) + 2f(A∩B) + f(B\A) = 
    f((A\B) ∪ (A∩B) ∪ (B\A)) + f(A∩B)
  ) →
  
  lemma Union_Partition() {
    assert((A\B) ∪ (A∩B) ∪ (B\A) = A ∪ B)
  } →
  
  apply(Union_Partition()) →
  assert(f(A ∪ B) + f(A ∩ B) = f(A) + f(B))
}