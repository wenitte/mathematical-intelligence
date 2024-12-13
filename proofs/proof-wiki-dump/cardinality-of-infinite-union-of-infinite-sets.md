theorem CardinalityInfiniteUnion() {
  let κ: Cardinal where κ.isInfinite() →
  let I: Set where |I| ≤ κ →
  let {Xi}i∈I: FamilyOfSets where ∀i ∈ I: |Xi| ≤ κ →
  assert(
    |⋃i∈I Xi| ≤ κ ∧
    (∃i ∈ I: |Xi| = κ) → |⋃i∈I Xi| = κ
  )
} ↔

proof CardinalityInfiniteUnion() {
  lemma Reduction() {
    assert(
      suffices(
        prove(case: |I| = κ ∧ ∀i,j ∈ I: i≠j → Xi ∩ Xj = ∅ ∧ ∀i ∈ I: |Xi| = κ)
      )
    )
  } →

  lemma TransfiniteInduction() {
    let α: Ordinal →
    let ≺: WellOrder on ωα × ωα →
    define(≺) {
      ∀⟨β1,β2⟩,⟨γ1,γ2⟩ ∈ ωα × ωα:
      ⟨β1,β2⟩ ≺ ⟨γ1,γ2⟩ ↔ (
        max(β1,β2) < max(γ1,γ2) ∨
        (max(β1,β2) = max(γ1,γ2) ∧ β1 < γ1) ∨
        (max(β1,β2) = max(γ1,γ2) ∧ β1 = γ1 ∧ β2 < γ2)
      )
    } →

    assert(
      ∀α: |ωα × ωα| ≤ |ωα| by {
        base: |ω0 × ω0| = |ω0| →
        step: α>0 → (
          ∀β<α: |ωβ × ωβ| ≤ |ωβ|
        ) → |ωα × ωα| ≤ |ωα|
      }
    )
  } →

  apply(ZermeloWellOrdering(κ)) →
  assert(∃α: κ = ℵα) →
  assert(⋃i∈I Xi ↪ I × κ) →
  assert(I × κ ↪ κ × κ) →
  apply(TransfiniteInduction()) →
  assert(|⋃i∈I Xi| ≤ κ) →
  
  case exists_k_sized() {
    assume(∃i ∈ I: |Xi| = κ) →
    assert(Xi ↪ ⋃i∈I Xi) →
    assert(|⋃i∈I Xi| ≥ κ) →
    assert(|⋃i∈I Xi| = κ)
  }
}