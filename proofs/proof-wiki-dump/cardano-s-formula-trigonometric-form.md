theorem Cardano_Trigonometric_Form() {
  assert(
    ∀a,b,c,d ∈ ℝ ∧ a ≠ 0 ∧
    Q = (3ac - b²)/(9a²) ∧
    R = (9abc - 27a²d - 2b³)/(54a³) ∧
    D = Q³ + R² < 0 ⇒
    ∃x₁,x₂,x₃ ∈ ℝ : [
      x₁ = 2√(-Q)cos(θ/3) - b/(3a) ∧
      x₂ = 2√(-Q)cos(θ/3 + 2π/3) - b/(3a) ∧
      x₃ = 2√(-Q)cos(θ/3 + 4π/3) - b/(3a) ∧
      cos(θ) = R/√(-Q³)
    ]
  )
} ↔

proof Cardano_Trigonometric_Form() {
  setVar(a,b,c,d: ℝ) →
  lemma Cardano_Standard_Form() {
    assert(
      x₁ = S + T - b/(3a) ∧
      x₂ = -(S + T)/2 - b/(3a) + (i√3/2)(S - T) ∧
      x₃ = -(S + T)/2 - b/(3a) - (i√3/2)(S - T)
    ) where {
      S = ∛(R + √(Q³ + R²)) ∧
      T = ∛(R - √(Q³ + R²))
    }
  } →
  
  assert(D < 0 ⇒ S³ = R + i√|Q³ + R²|) →
  
  lemma Polar_Form() {
    assert(
      S³ = r(cos(θ) + isin(θ)) where {
        r = √(R² + (√(Q³ + R²))²) = √(-Q³) ∧
        tan(θ) = √|Q³ + R²|/R ∧
        cos(θ) = R/√(-Q³)
      }
    )
  } →
  
  apply(Polar_Form()) →
  assert(
    ∃θ : cos(θ) = R/√(-Q³) ⇒ [
      x₁ = 2√(-Q)cos(θ/3) - b/(3a) ∧
      x₂ = 2√(-Q)cos(θ/3 + 2π/3) - b/(3a) ∧
      x₃ = 2√(-Q)cos(θ/3 + 4π/3) - b/(3a)
    ]
  )
}