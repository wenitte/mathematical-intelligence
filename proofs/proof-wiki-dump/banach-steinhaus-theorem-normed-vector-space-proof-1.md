theorem Banach_Steinhaus() {
  let(X: BanachSpace, Y: NormedVectorSpace) →
  let(T_α: BoundedLinearMap[X → Y], α ∈ A) →
  assert(
    (∀x ∈ X: sup{‖T_α x‖_Y : α ∈ A} < ∞) →
    (sup{‖T_α‖ : α ∈ A} < ∞)
  )
} ↔

proof Banach_Steinhaus() {
  define(F_n := {x ∈ X : ‖T_α x‖ ≤ n ∀α ∈ A}) →
  assert(F_n = ⋂{T_α⁻¹(B̄_Y(0,n)) : α ∈ A}) →
  
  lemma Closed_Properties() {
    assert(B̄_Y(0,n) is closed) ∧
    assert(T_α⁻¹(B̄_Y(0,n)) is closed) ∧
    assert(F_n is closed)
  } →

  assert(⋃{F_n : n ∈ ℕ} ⊆ X) →
  assert(∀x ∈ X: ∃N ∈ ℕ: ‖T_α x‖_Y ≤ N) →
  assert(X = ⋃{F_n : n ∈ ℕ}) →
  
  lemma Baire_Category() {
    assert(X is Baire space) →
    assert(X is non-meager) →
    assert(∃n ∈ ℕ: F_n is not nowhere dense)
  } →

  fix(n₀ ∈ ℕ: F_n₀ is not nowhere dense) →
  assert(∃U ⊆ X: U is open ∧ U ⊆ F_n₀) →
  
  fix(y ∈ U, r > 0: B_X(y,r) ⊆ F_n₀) →
  setVar(α ∈ A, x ∈ X\{0}) →
  
  assert(‖rx/(2‖x‖_X)‖_X = r/2 < r) →
  assert(y + rx/(2‖x‖_X) ∈ B_X(y,r)) →
  assert(‖T_α(y + rx/(2‖x‖_X))‖_Y ≤ n₀) →
  
  apply(Triangle_Inequality) →
  assert(|‖T_α y‖_Y - (r/(2‖x‖_X))‖T_α x‖_Y| ≤ n₀) →
  assert((r/(2‖x‖_X))‖T_α x‖_Y ≤ 2n₀) →
  assert(‖T_α x‖_Y ≤ (4n₀/r)‖x‖_X) →
  
  conclude(
    ∀α ∈ A: ‖T_α‖ ≤ 4n₀/r →
    sup{‖T_α‖ : α ∈ A} < ∞
  )
}