theorem L1_Space_Separable() {
  assert(
    ℓ¹ ∈ SeparableSpace
  )
} ↔

proof L1_Space_Separable() {
  setDef(D := {(qᵢ)ᵢ∈ℕ | ∃n∈ℕ: ∀i>n: qᵢ=0 ∧ ∀i≤n: qᵢ∈ℚ}) →
  
  lemma D_Countable() {
    assert(ℚ ∈ CountablyInfinite) ∧
    assert(FiniteSet ∈ Countable) ∧
    assert(D = ⋃_{n∈ℕ} {finite sequences of length n}) →
    apply(Countable_Union_Of_Countable) →
    assert(D ∈ Countable)
  } →

  setVar(x := (xₙ)ₙ∈ℕ ∈ ℓ¹) →
  assert(∑_{n=1}^∞ |xₙ| < ∞) →
  
  setDef(sₙ := ∑_{i=0}^n |xᵢ|) →
  setDef(s := ∑_{i=0}^∞ |xᵢ|) →
  
  assert(∀ε'∈ℝ₊ ∃N∈ℕ ∀n>N: |sₙ - s| < ε') →
  assert(|sₙ - s| = |∑_{i=0}^n |xᵢ| - ∑_{i=0}^∞ |xᵢ|| = ∑_{i=n+1}^∞ |xᵢ|) →
  
  setVar(ε' := ε/2) →
  setVar(N∈ℕ: ∑_{n=N+1}^∞ |xₙ| < ε/2) →
  
  lemma Q_Dense_In_R() {
    assert(∀x∈ℝ ∃ε∈ℝ₊ ∃q∈ℚ: |x-q| < ε)
  } →
  
  assert(∃(qᵢ)ᵢ≤N∈ℚ: ∑_{n=1}^N |xₙ-qₙ| < ε/2) →
  setVar(x' := (q₁,...,qₙ,0,0,...) ∈ D) →
  
  assert(‖x-x'‖ = ∑_{n=1}^N |xₙ-qₙ| + ∑_{n=N+1}^∞ |xₙ| < ε) →
  conclude(ℓ¹ ∈ SeparableSpace)
}