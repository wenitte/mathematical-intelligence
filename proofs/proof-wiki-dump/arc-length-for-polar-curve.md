theorem ArcLengthPolarCurve() {
  assert(
    ∀a,b ∈ ℝ ∧
    ∀C[continuous(C, [a,b]) ∧ differentiable(C, (a,b))] ∧
    ∃r,θ[parametric(C) ↔ {
      x = r*cos(θ),
      y = r*sin(θ)
    }] ∧
    θ ∈ [a,b]
    ⇒
    length(C) = ∫[a→b] √(r² + (dr/dθ)²) dθ
  )
}

proof ArcLengthPolarCurve() {
  setVar(s: length(C)) →
  apply(ArcLengthParametric()) →
  assert(s = ∫[a→b] √((dx/dθ)² + (dy/dθ)²) dθ) →
  
  lemma DxDtheta() {
    assert(dx/dθ = d/dθ(r*cos(θ))) →
    apply(ProductRule()) →
    assert(dx/dθ = (dr/dθ)*cos(θ) + r*(-sin(θ)))
  } →

  lemma DyDtheta() {
    assert(dy/dθ = d/dθ(r*sin(θ))) →
    apply(ProductRule()) →
    assert(dy/dθ = (dr/dθ)*sin(θ) + r*cos(θ))
  } →

  apply(DxDtheta(), DyDtheta()) →
  assert(s = ∫[a→b] √(((dr/dθ)*cos(θ) - r*sin(θ))² + ((dr/dθ)*sin(θ) + r*cos(θ))²) dθ) →
  
  apply(SquareOfSum()) →
  assert(s = ∫[a→b] √((dr/dθ)²*cos²(θ) - 2r*(dr/dθ)*sin(θ)*cos(θ) + r²*sin²(θ) + 
                      (dr/dθ)²*sin²(θ) + 2r*(dr/dθ)*sin(θ)*cos(θ) + r²*cos²(θ)) dθ) →
  
  apply(GroupTerms()) →
  assert(s = ∫[a→b] √((dr/dθ)²*(sin²(θ) + cos²(θ)) + r²*(sin²(θ) + cos²(θ))) dθ) →
  
  apply(SinCosSumIdentity()) →
  assert(s = ∫[a→b] √(r² + (dr/dθ)²) dθ)
}