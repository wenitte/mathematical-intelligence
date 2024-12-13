theorem CardanoFormula() {
  assert(
    ∀(a,b,c,d ∈ ℝ) ∧ (a ≠ 0) ⇒ [
      (ax³ + bx² + cx + d = 0) ↔ 
      (x₁ = S + T - b/(3a)) ∧
      (x₂ = -(S + T)/2 - b/(3a) + (i√3/2)(S - T)) ∧
      (x₃ = -(S + T)/2 - b/(3a) - (i√3/2)(S - T))
    ]
  )
  where {
    S = ∛(R + √(Q³ + R²))
    T = ∛(R - √(Q³ + R²))
    Q = (3ac - b²)/(9a²)
    R = (9abc - 27a²d - 2b³)/(54a³)
  }
}

proof CardanoFormula() {
  setVar(x: ℝ) →
  
  lemma TschirnhausTransformation() {
    assert(x → x + b/(3a)) →
    assert(ax³ + bx² + cx + d = 0) →
    assert((x + b/(3a))³ + 3Q(x + b/(3a)) - 2R = 0)
  } →
  
  lemma SubstitutionLemma() {
    setVar(y: ℝ) →
    assert(y = x + b/(3a)) →
    assert(y = u + v) →
    assert(uv = -Q) →
    assert((u + v)³ + 3Q(u + v) - 2R = 0) →
    assert(u³ + v³ - 2R = 0)
  } →
  
  lemma ResolventEquation() {
    assert(u⁶ - 2Ru³ - Q³ = 0) →
    assert(u³ = R ± √(Q³ + R²))
  } →
  
  apply(TschirnhausTransformation()) →
  apply(SubstitutionLemma()) →
  apply(ResolventEquation()) →
  
  assert(S = ∛(R + √(Q³ + R²))) →
  assert(T = ∛(R - √(Q³ + R²))) →
  
  conclude(
    (x₁ = S + T - b/(3a)) ∧
    (x₂ = -(S + T)/2 - b/(3a) + (i√3/2)(S - T)) ∧
    (x₃ = -(S + T)/2 - b/(3a) - (i√3/2)(S - T))
  )
}