theorem Not_Necessarily_Totally_Bounded() {
  assert(
    ∀M = (A,d): MetricSpace ∧ isBounded(M) ⟹
    ¬(∀M ⟹ isTotallyBounded(M))
  )
} ↔

proof Not_Necessarily_Totally_Bounded() {
  setVar(d: DiscreteMetric) →
  setVar(I = (0,1): OpenInterval) →
  
  assert(
    ∀x ∈ I ∧ ∀r > 1 →
    Br(x) = I
  ) →
  
  assert(isBounded((I,d))) →
  
  setVar(ε: ℝ>0) →
  assert(ε < 1) →
  
  setVar(x ∈ I) →
  assert(
    Bε(x) = {x}
  ) →
  
  lemma No_Finite_Net() {
    assert(
      ∀S ⊆ I ∧ isFinite(S) ⟹
      ∃p ∈ I: ∀s ∈ S: d(p,s) ≥ ε
    )
  } →
  
  apply(No_Finite_Net()) →
  
  assert(
    ¬isTotallyBounded((I,d))
  )
}