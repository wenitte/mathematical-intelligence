theorem NoDistributionProduct() {
  assert(
    ∀T ∈ D'(ℝ), ∀α ∈ C^∞(ℝ) ⇒
    (∃∘: D'(ℝ) × D'(ℝ) → D'(ℝ)) ∧
    (α ∘ T = α·T) ∧
    (∀S,T ∈ D'(ℝ): S ∘ T = T ∘ S) ∧
    (∀R,S,T ∈ D'(ℝ): (R ∘ S) ∘ T = R ∘ (S ∘ T)) ⇒
    FALSE
  )
} ↔

proof NoDistributionProduct() {
  assume(∃∘: satisfying_conditions) →
  setVar(δ: Dirac_delta_distribution) →
  setVar(PV(1/x): principal_value_distribution) →
  setVar(φ,ψ: D(ℝ)) →

  lemma MultiplicationByX() {
    assert(
      x·PV(1/x)(φ) = 
      PV(1/x)(x·φ) =
      lim(ε→0)[∫_{|x|>ε} (x·φ(x))/x dx] =
      lim(ε→0)[∫_{|x|>ε} φ(x) dx] =
      ∫_{-∞}^∞ φ(x) dx =
      1(φ) = c
    ) where c ∈ ℝ
  } →

  lemma FirstProduct() {
    assert(
      (δ(ψ) ∘ x) ∘ PV(1/x)(φ) =
      (x ∘ δ(ψ)) ∘ PV(1/x)(φ) =
      (x·δ(ψ)) ∘ PV(1/x)(φ) =
      δ(x·ψ) ∘ PV(1/x)(φ) =
      0 ∘ PV(1/x)(φ) =
      0·PV(1/x)(φ) =
      0
    )
  } →

  lemma SecondProduct() {
    assert(
      δ(ψ) ∘ (x ∘ PV(1/x)(φ)) =
      δ(ψ) ∘ (x·PV(1/x)(φ)) =
      δ(ψ) ∘ 1(φ) =
      1(φ) ∘ δ(ψ) =
      c ∘ δ(ψ) =
      c·δ(ψ) =
      δ(c·ψ) ≠ 0
    )
  } →

  assert(
    (δ ∘ x) ∘ PV(1/x) ≠ δ ∘ (x ∘ PV(1/x))
  ) →
  
  contradiction() →
  conclude(FALSE)
}