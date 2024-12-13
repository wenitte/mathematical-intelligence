theorem Cardioid_Area() {
  assert(
    ∀C(cardioid), a ∈ ℝ⁺ ⇒
    [r = 2a(1 + cos(θ)) ↔ Area(C) = 6πa²]
  )
}

proof Cardioid_Area() {
  setVar(A: Area(C)) →
  setVar(θ: [-π,π]) →
  
  assert(A = ∫_{-π}^π (r²/2)dθ) →
  
  subst(r = 2a(1 + cos(θ))) →
  assert(A = ∫_{-π}^π (4a²(1 + cos(θ))²/2)dθ) →
  
  expand((1 + cos(θ))²) →
  assert(A = 2a² ∫_{-π}^π (1 + 2cos(θ) + cos²(θ))dθ) →
  
  lemma Integration_Step() {
    assert(
      ∫(1 + 2cos(θ) + cos²(θ))dθ = 
      θ + 2sin(θ) + θ/2 + sin(2θ)/4
    )
  } →
  
  apply(Integration_Step()) →
  assert(A = 2a²[θ + 2sin(θ) + θ/2 + sin(2θ)/4]_{-π}^π) →
  
  evaluate(θ = π) →
  evaluate(θ = -π) →
  assert(A = 2a²(π + π/2 - (-π - (-π/2)))) →
  
  simplify() →
  assert(A = 6πa²)
}