theorem Polygon_Boundary_Contour() {
  assert(
    ∀P ⊆ ℂ [P is polygon] ∧
    let ∂P be boundary(P) →
    ∃C [C is simple closed contour] ∧ 
    Img(C) = ∂P
  )
} ↔

proof Polygon_Boundary_Contour() {
  setVar(n: ℕ, "number of polygon sides") →
  setVar(A₁,...,Aₙ: ℂ, "vertices of P") →
  
  lemma Complex_Metric() {
    assert(ℂ ≅ ℝ²)  // homeomorphic
  } →
  
  apply(Complex_Metric()) →
  assert(∂P ⊆ ℝ²) →
  
  lemma Jordan_Curve() {
    assert(
      ∃γ: [0,1] → ℝ² [γ is Jordan curve] ∧
      Img(γ) = ∂P ∧
      γ = concatenate(γ₁,...,γₙ) ∧
      ∀k∈{1,...,n}: γₖ(t) = (1-t)Aₖ + tAₖ₊₁
    )
  } →
  
  apply(Jordan_Curve()) →
  assert(
    ∀k∈{1,...,n}: γₖ: [aₖ₋₁,aₖ] → ℝ² ∧
    {a₀,...,aₙ} subdivides [0,1]
  ) →
  
  assert(
    ∀k∈{1,...,n}: d/dt(γₖ(t)) = Aₖ₊₁ - Aₖ ≠ 0 ∧
    γₖ'(t) = x(d/dt(γₖ(t))) + iy(d/dt(γₖ(t)))
  ) →
  
  assert(
    ∀k∈{1,...,n}: γₖ'(t) ≠ 0 ∧
    γₖ = γ|[aₖ₋₁,aₖ] is smooth path
  ) →
  
  lemma Path_Contour() {
    assert(
      ∀γ [γ is smooth path] →
      ∃C [C is simple closed contour] ∧
      Img(C) = Img(γ)
    )
  } →
  
  apply(Path_Contour()) →
  assert(∃C [C is simple closed contour] ∧ Img(C) = ∂P)
}