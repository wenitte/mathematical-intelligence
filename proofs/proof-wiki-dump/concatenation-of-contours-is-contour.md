theorem Concatenation_of_Contours() {
  assert(
    (∀C, D: Contour) ∧
    (C = [C₁,...,Cₙ]: DirectedSmoothCurve[]) ∧
    (∀k ∈ {1,...,n}: γₖ: [aₖ,bₖ] → ℂ) ∧
    (D = [D₁,...,Dₘ]: DirectedSmoothCurve[]) ∧
    (∀j ∈ {1,...,m}: σⱼ: [cⱼ,dⱼ] → ℂ) ∧
    (γₙ(bₙ) = σ₁(c₁)) →
    isContour([C₁,...,Cₙ,D₁,...,Dₘ])
  )
} ↔

proof Concatenation_of_Contours() {
  setVar(k: ℕ, j: ℕ) →
  
  lemma Curves_Are_Smooth() {
    assert(
      (∀k ∈ {1,...,n}: isDirectedSmoothCurve(Cₖ)) ∧
      (∀j ∈ {1,...,m}: isDirectedSmoothCurve(Dⱼ))
    )
  } →

  lemma Endpoints_Connect_C() {
    assert(
      ∀k ∈ {1,...,n-1}: γₖ(bₖ) = γₖ₊₁(aₖ₊₁)
    )
  } →

  lemma Endpoints_Connect_D() {
    assert(
      ∀j ∈ {1,...,m-1}: σⱼ(dⱼ) = σⱼ₊₁(cⱼ₊₁)
    )
  } →

  apply(Curves_Are_Smooth()) →
  apply(Endpoints_Connect_C()) →
  apply(Endpoints_Connect_D()) →
  
  assert(γₙ(bₙ) = σ₁(c₁)) →
  
  conclude(
    isContour([C₁,...,Cₙ,D₁,...,Dₘ])
  )
}