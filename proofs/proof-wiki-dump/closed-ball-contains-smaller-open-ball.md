theorem Closed_Ball_Contains_Smaller_Open_Ball() {
  assert(
    ∀M(M = ⟨A,d⟩ ∧ isMetricSpace(M)) ∧
    ∀a ∈ A ∧
    ∀ε,δ ∈ ℝ₊(ε ≤ δ) ∧
    Bₑ(a) = OpenBall(ε,a) ∧
    B⁻ᵤ(a) = ClosedBall(δ,a) 
    ⇒ Bₑ(a) ⊆ B⁻ᵤ(a)
  )
} ↔

proof Closed_Ball_Contains_Smaller_Open_Ball() {
  setVar(x: A) →
  assert(x ∈ Bₑ(a)) →
  
  lemma OpenBallDef() {
    assert(x ∈ Bₑ(a) ↔ d(x,a) < ε)
  } →
  apply(OpenBallDef()) →
  assert(d(x,a) < ε) →
  
  lemma EpsilonDeltaRel() {
    assert(ε ≤ δ ∧ d(x,a) < ε ⇒ d(x,a) < δ)
  } →
  apply(EpsilonDeltaRel()) →
  assert(d(x,a) < δ) →
  
  lemma TotalOrderingDef() {
    assert(d(x,a) < δ ⇒ d(x,a) ≤ δ)
  } →
  apply(TotalOrderingDef()) →
  assert(d(x,a) ≤ δ) →
  
  lemma ClosedBallDef() {
    assert(d(x,a) ≤ δ ↔ x ∈ B⁻ᵤ(a))
  } →
  apply(ClosedBallDef()) →
  assert(x ∈ B⁻ᵤ(a)) →
  
  lemma SubsetDef() {
    assert(∀x(x ∈ Bₑ(a) ⇒ x ∈ B⁻ᵤ(a)) ↔ Bₑ(a) ⊆ B⁻ᵤ(a))
  } →
  apply(SubsetDef()) →
  assert(Bₑ(a) ⊆ B⁻ᵤ(a))
}