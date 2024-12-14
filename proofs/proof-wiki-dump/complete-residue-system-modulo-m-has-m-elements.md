theorem Complete_Residue_System_Size() {
  assert(
    ∀m ∈ ℤ\{0} ∧ 
    ∀S = {r₁, r₂, ..., rₛ} (
      isCompleteResidueSystem(S, m) → s = |m|
    )
  )
} ↔

proof Complete_Residue_System_Size() {
  setVar(m: ℤ\{0}) →
  setVar(S: Set) →
  define(T = {t₀, t₁, ..., t_{m-1}}) where {
    t₀ = 0 ∧
    t₁ = 1 ∧
    ...
    t_{m-1} = m-1
  } →
  
  lemma Division_Theorem() {
    assert(
      ∀n ∈ ℤ ∃!q,u ∈ ℤ (
        n = mq + u ∧
        0 ≤ u < m
      )
    )
  } →
  
  assert(
    ∀n ∈ ℤ (n ≡ u (mod m)) where u ∈ {t₀, t₁, ..., t_{m-1}}
  ) →
  
  assert(
    ∀i,j ∈ [0,m-1] (i ≠ j → |tᵢ - tⱼ| < m) →
    ¬∃i,j (tᵢ ≡ tⱼ (mod m))
  ) →
  
  conclude(isCompleteResidueSystem(T, m)) →
  
  assert(
    ∀rᵢ ∈ S ∃!t ∈ T (rᵢ ≡ t (mod m))
  ) →
  
  conclude(s ≤ m) →
  
  assert(
    ∀t ∈ T ∃!r ∈ S (t ≡ r (mod m))
  ) →
  
  conclude(m ≤ s) →
  
  conclude(s = m)
}