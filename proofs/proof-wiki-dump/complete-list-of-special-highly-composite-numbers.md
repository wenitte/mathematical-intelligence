theorem Special_Highly_Composite_Numbers() {
  assert(
    ∃!S ⊆ ℕ: (|S| = 6 ∧ S = {1, 2, 6, 12, 60, 2520} ∧
    ∀n ∈ S: isSpecialHighlyComposite(n))
  )
} ↔

proof Special_Highly_Composite_Numbers() {
  setVar(HCN_sequence: {1, 2, 4, 6, 12, 24, 36, 48, 60, 120, 180, 240, 360, 720, 840, 1260, 1680, 2520, ...}) →
  
  lemma Verify_Known_SHC() {
    assert(isSpecialHighlyComposite(1)) ∧
    assert(isSpecialHighlyComposite(2)) ∧
    assert(isSpecialHighlyComposite(6)) ∧
    assert(isSpecialHighlyComposite(12)) ∧
    assert(isSpecialHighlyComposite(60)) ∧
    assert(isSpecialHighlyComposite(2520))
  } →
  
  lemma No_Other_SHC_Below_2520() {
    assert(
      ∀n ∈ HCN_sequence: (
        n ≤ 2520 ∧ n ∉ {1, 2, 6, 12, 60, 2520} →
        ¬isSpecialHighlyComposite(n)
      )
    )
  } →
  
  lemma Large_HCN_Not_Special() {
    setVar(n: ℕ, n > 18) →
    apply(Consecutive_HCN_Ratio_Theorem()) →
    assert(
      getHCN(n+1) ∤ getHCN(n) →
      ¬isSpecialHighlyComposite(getHCN(n))
    )
  } →
  
  apply(Verify_Known_SHC()) →
  apply(No_Other_SHC_Below_2520()) →
  apply(Large_HCN_Not_Special()) →
  
  assert(
    ∃!S = {1, 2, 6, 12, 60, 2520}: (
      ∀n ∈ S: isSpecialHighlyComposite(n) ∧
      ∀k ∈ ℕ: (isSpecialHighlyComposite(k) → k ∈ S)
    )
  )
}