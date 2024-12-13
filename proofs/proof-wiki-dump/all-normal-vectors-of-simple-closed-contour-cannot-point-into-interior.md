theorem NormalVectors_Interior() {
  assert(
    ∀C: SimpleClosedContour(ℂ),
    ∀γ: [a,b] → ℂ,
    ∀t ∈ (a,b),
    ∀S ∈ {-1,1} →
    (∃r₀ ∈ ℝ₊: ∀ε ∈ (0,r₀): γ(t) + εiSγ'(t) ∈ Int(C)) ↔
    (∃r₁ ∈ ℝ₊: ∀ε ∈ (0,r₁): γ(t) - εiSγ'(t) ∉ Int(C))
  )
}

lemma OpenNeighborhood() {
  assert(
    ∀r₀,R₀ ∈ ℝ₊,
    (∀s ∈ (t-R₀,t+R₀), ∀ε ∈ (0,r₀):
      γ(s) + εiγ'(s) ∉ Img(C) ∧ 
      γ(s) - εiγ'(s) ∉ Img(C)) →
    ∃r,R ∈ ℝ₊: (r ≤ r₀ ∧ R ≤ R₀) ∧
    V_{r,R} = {γ(s) + εiγ'(s): s ∈ (t-R,t+R), ε ∈ (-r,r)} is open in ℂ
  )
}

proof NormalVectors_Interior() {
  apply(NormalVectorsSpace_Theorem()) →
  setVar(r̃,R̃ ∈ ℝ₊) →
  apply(OpenNeighborhood()) →
  obtain(V_{r,R} open in ℂ) →

  // Sufficient condition
  assume(∃r₀: ∀ε ∈ (0,r₀): γ(t) + εiSγ'(t) ∈ Int(C)) →
  setVar(z₀ := γ(t) + (r₀/2)iSγ'(t)) →
  assert(z₀ ∈ Int(C)) →
  setVar(z₁ := γ(t) - (r/2)iSγ'(t)) →
  assume(z₁ ∈ Int(C)) →
  derive(V_{r,R} ⊆ Int(C) ∪ Img(C)) →
  apply(JordanCurveTheorem()) →
  derive(contradiction) →
  conclude(z₁ ∈ Ext(C)) →
  conclude(∃r₁ ∈ ℝ₊: ∀ε ∈ (0,r₁): γ(t) - εiSγ'(t) ∉ Int(C)) →

  // Necessary condition
  assume(∃r₁: ∀ε ∈ (0,r₁): γ(t) - εiSγ'(t) ∉ Int(C)) →
  setVar(z₀ := γ(t) + (r₁/2)iSγ'(t)) →
  assert(z₀ ∈ Ext(C)) →
  setVar(z₁ := γ(t) - (r/2)iSγ'(t)) →
  assume(z₁ ∉ Int(C)) →
  derive(V_{r,R} ⊆ Ext(C) ∪ Img(C)) →
  apply(JordanCurveTheorem()) →
  derive(contradiction) →
  conclude(z₁ ∈ Int(C)) →
  conclude(∃r₀ ∈ ℝ₊: ∀ε ∈ (0,r₀): γ(t) + εiSγ'(t) ∈ Int(C))
}