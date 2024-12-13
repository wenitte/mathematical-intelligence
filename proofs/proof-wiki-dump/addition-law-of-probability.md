theorem Addition_Law_Of_Probability() {
  assert(
    ∀Pr: ProbabilityMeasure, ∀A,B ∈ Σ ⇒
    Pr(A ∪ B) = Pr(A) + Pr(B) - Pr(A ∩ B)
  )
}

proof Addition_Law_Of_Probability() {
  // Proof 1
  setVar(Pr: ProbabilityMeasure) →
  assert(ProbabilityMeasure ⊆ Measure) →
  assert(Measure ⊆ CountablyAdditive) →
  apply(Measure_Is_Finitely_Additive()) →
  apply(Additive_Function_Is_Strongly_Additive()) →

  // Proof 2
  lemma Set_Partition() {
    assert(
      A = (A\B) ∪ (A∩B) ∧
      B = (B\A) ∪ (A∩B) ∧
      (A\B) ∩ (A∩B) = ∅ ∧
      (B\A) ∩ (A∩B) = ∅
    )
  } →
  
  apply(Set_Partition()) →
  assert(Pr(A) = Pr(A\B) + Pr(A∩B)) →
  assert(Pr(B) = Pr(B\A) + Pr(A∩B)) →
  
  lemma Disjoint_Differences() {
    assert((A\B) ∩ (B\A) = ∅)
  } →
  
  assert(
    Pr(A) + Pr(B) = 
    Pr(A\B) + 2Pr(A∩B) + Pr(B\A)
  ) →
  
  assert(
    Pr(A\B) + 2Pr(A∩B) + Pr(B\A) = 
    Pr((A\B) ∪ (A∩B) ∪ (B\A)) + Pr(A∩B)
  ) →
  
  apply(Set_Differences_And_Intersection_Form_Partition()) →
  assert(
    Pr((A\B) ∪ (A∩B) ∪ (B\A)) = Pr(A∪B)
  ) →
  
  assert(Pr(A∪B) = Pr(A) + Pr(B) - Pr(A∩B))
}