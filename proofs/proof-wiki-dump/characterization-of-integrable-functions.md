theorem Integrable_Functions_Characterization() {
  let(X, Σ, μ: MeasureSpace)
  let(f: X → ℝ̄, f ∈ M_ℝ̄)
  assert(
    (1) f ∈ L_ℝ̄(μ) ↔
    (2) (f⁺ ∈ L_ℝ̄(μ) ∧ f⁻ ∈ L_ℝ̄(μ)) ↔
    (3) |f| ∈ L_ℝ̄(μ) ↔
    (4) ∃g ∈ L_ℝ̄(μ) : |f| ≤ g
  )
}

proof Integrable_Functions_Characterization() {
  # (1) ⇒ (2)
  assume(f ∈ L_ℝ̄(μ)) →
  apply(Definition_Integrable_Function()) →
  assert(f⁺ ∈ L_ℝ̄(μ) ∧ f⁻ ∈ L_ℝ̄(μ))

  # (2) ⇒ (3)
  assume(f⁺ ∈ L_ℝ̄(μ) ∧ f⁻ ∈ L_ℝ̄(μ)) →
  assert(|f| = f⁺ + f⁻) →
  apply(Integral_Additivity()) →
  assert(|f| ∈ L_ℝ̄(μ))

  # (3) ⇒ (4)
  assume(|f| ∈ L_ℝ̄(μ)) →
  setVar(g := |f|) →
  assert(|f| ≤ g ∧ g ∈ L_ℝ̄(μ))

  # (4) ⇒ (1)
  assume(∃g ∈ L_ℝ̄(μ) : |f| ≤ g) →
  assert(f = f⁺ - f⁻) →
  assert(f⁺ ≥ 0 ∧ f⁻ ≥ 0) →
  
  lemma Positive_Part_Bounded() {
    setVar(f⁰ ∈ {f⁺, f⁻}) →
    assert(f⁰ ≤ |f| ≤ g)
  } →

  letSet(E⁺: SimpleFunction) →
  letSet(I_μ: Integral_Operator) →
  
  assert(∀h ∈ E⁺: h ≤ f⁰ → h ≤ g) →
  assert({h: h ≤ f⁰, h ∈ E⁺} ⊆ {h: h ≤ g, h ∈ E⁺}) →
  assert(∫f⁰dμ := sup{I_μ(h): h ≤ f⁰, h ∈ E⁺} ≤ sup{I_μ(h): h ≤ g, h ∈ E⁺} < ∞) →
  assert(∫f⁺dμ < ∞ ∧ ∫f⁻dμ < ∞) →
  apply(Definition_Integrable_Function()) →
  assert(f ∈ L_ℝ̄(μ))
}