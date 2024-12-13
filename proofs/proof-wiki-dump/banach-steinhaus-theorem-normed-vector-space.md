theorem Banach_Steinhaus() {
  let(X: BanachSpace, Y: NormedVectorSpace) →
  let(T_α: BoundedLinearTransformation[X → Y], α ∈ A) →
  assert(
    ∀x ∈ X ⇒ sup{∥T_α(x)∥_Y : α ∈ A} < ∞ 
    →
    sup{∥T_α∥ : α ∈ A} < ∞
  )
}

proof Banach_Steinhaus() {
  setVar(n: ℕ) →
  define F_n := {x ∈ X : ∥T_α(x)∥ ≤ n ∀α ∈ A} →
  assert(F_n = ⋂{T_α⁻¹(B̄_Y(0,n)) : α ∈ A}) →

  lemma Closed_Sets() {
    assert(B̄_Y(0,n) is closed) ∧
    assert(T_α⁻¹(B̄_Y(0,n)) is closed ∀α ∈ A) →
    assert(F_n is closed ∀n ∈ ℕ)
  } →

  assert(X = ⋃_{n=1}^∞ F_n) →
  
  lemma Baire_Category() {
    assert(X is Baire space) →
    assert(X is non-meager) →
    assert(∃n: F_n is not nowhere dense)
  } →

  setVar(n₀: such F_n₀) →
  assert(∃U ⊆ X open: U ⊆ F_n₀) →
  setVar(y ∈ U, r > 0: B_X(y,r) ⊆ F_n₀) →

  lemma Norm_Bound() {
    ∀α ∈ A, ∀x ≠ 0 →
    assert(∥rx/(2∥x∥)∥ = r/2 < r) →
    assert(y + rx/(2∥x∥) ∈ B_X(y,r)) →
    assert(∥T_α(y + rx/(2∥x∥))∥ ≤ n₀) →
    assert(∥T_α(x)∥ ≤ (4n₀/r)∥x∥)
  } →

  conclude(sup{∥T_α∥ : α ∈ A} ≤ 4n₀/r < ∞)
}