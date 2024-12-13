theorem Normal_Vectors_Lemma_1() {
  assert(
    ∀C: SimpleClosedContour(ℂ) ∧
    ∀γ: [a,b] → ℂ ∧
    ∀t ∈ (a,b) ∧
    isDifferentiable(γ,t) ∧
    ∃r₀,R₀ ∈ ℝ₊ ⇒
    (∀s ∈ (t-R₀,t+R₀) ∧ ∀ε ∈ (0,r₀) ⇒
      γ(s) + εiγ'(s) ∉ Img(C) ∧
      γ(s) - εiγ'(s) ∉ Img(C)) ⇒
    ∃r,R ∈ ℝ₊: (r ≤ r₀ ∧ R ≤ R₀ ∧
      V_{r,R} = {γ(s) + εiγ'(s): s ∈ (t-R,t+R), ε ∈ (-r,r)} is open in ℂ)
  )
} ↔

proof Normal_Vectors_Lemma_1() {
  assume(γ' is continuously differentiable) →
  setVar(x,y: (a,b) → ℝ) →
  assert(γ(t) = x(t) + iy(t)) →
  
  define(f: (t-R₀,t+R₀)×(-r₀,r₀) → ℝ²) →
  assert(f(s,ε) = (x(s)-εy'(s), y(s)+εx'(s))) →
  
  setVar(J_f: Jacobian(f)) →
  assert(J_f = [
    [x'(s)-εy''(s), -y'(s)],
    [y'(s)+εx''(s), x'(s)]
  ]) →
  
  assert(det(J_f)(t,0) = x'(t)² + y'(t)²) →
  assert(γ'(t) ≠ 0 ⇒ det(J_f)(t,0) ≠ 0) →
  
  apply(InverseFunctionTheorem) →
  assert(∃U⊆(t-R₀,t+R₀)×(-r₀,r₀), ∃V⊆ℝ²: 
    f|_{U×V} is bijective ∧ f⁻¹ is continuous) →
    
  apply(NormEquivalence(ℝ²)) →
  assert(∃r>0: B_r(t) = (t-r,t+r)×(-r,r) ⊆ U) →
  
  apply(OpenBijectionTheorem) →
  assert(f(B_r(t)) is open in ℝ²) →
  
  apply(ComplexPlaneHomeomorphism) →
  assert(V_{r,r} = φ(f(B_r(t))) is open in ℂ)
}