theorem(AM_GM_Inequality) ↔
    (∀n ∈ ℕ⁺) ∧ (∀A ⊆ ℝ⁺) ∧ (|A| = n) →
    (ArithmeticMean(A) ≥ GeometricMean(A)) ∧

is_valid(ArithmeticMean) ↔
    ((∀A ⊆ ℝ⁺) ∧ (|A| = n)) →
    ((ArithmeticMean(A) = (Σ(a) ∧ (a ∈ A)) / n) ∧ 
    (ArithmeticMean(A) ∈ ℝ⁺)) ∧

is_valid(GeometricMean) ↔
    ((∀A ⊆ ℝ⁺) ∧ (|A| = n)) →
    ((GeometricMean(A) = (Π(a) ∧ (a ∈ A))^(1/n)) ∧ 
    (GeometricMean(A) ∈ ℝ⁺)) ∧

proves(BaseCase) ↔
    (∀a₁ ∈ ℝ⁺) ∧ (∀a₂ ∈ ℝ⁺) →
    (((a₁ + a₂)/2 ≥ √(a₁ × a₂)) ↔
    ((a₁ + a₂)² ≥ 4 × (a₁ × a₂)) ↔
    ((a₁² + 2 × a₁ × a₂ + a₂² ≥ 4 × a₁ × a₂) ∧
    (a₁² - 2 × a₁ × a₂ + a₂² ≥ 0)) ↔
    ((a₁ - a₂)² ≥ 0)) ∧

proves(InductiveStep) ↔
    ((∀n ∈ ℕ⁺) ∧ (∀B ⊆ ℝ⁺) ∧ (|B| = n + 1)) →
    ((∀Aᵢ ⊂ B) ∧ (|Aᵢ| = n) → (ArithmeticMean(Aᵢ) ≥ GeometricMean(Aᵢ))) →
    ((Σ(ArithmeticMean(Aᵢ)) ≥ Σ(GeometricMean(Aᵢ))) ∧
    (n × ArithmeticMean(B) ≥ (n+1) × GeometricMean(B))) →
    (ArithmeticMean(B) ≥ GeometricMean(B)) ∧

concludes(AM_GM_Inequality) ↔
    (proves(BaseCase) ∧ proves(InductiveStep)) →
    ((theorem(AM_GM_Inequality)) ∧ (AM_GM_Inequality = True))