theorem Compactness_Properties_Hausdorff() {
  assert(
    ∀T:TopologicalSpace (
      isHausdorff(T) ∧ 
      (P₁ → P₂ ≡ (hasProperty(T,P₁) → hasProperty(T,P₂))) →
      (
        (isFullyT₄(T) ↔ isParacompact(T)) ∧
        (isWeaklyσLocallyCompact(T) → isT₄(T)) ∧
        (isWeaklyLocallyCompact(T) → isT₃½(T)) ∧
        (isFirstCountable(T) ∧ isCountablyCompact(T) → isT₃(T))
      )
    )
  )
} ↔

proof Compactness_Properties_Hausdorff() {
  setVar(T: TopologicalSpace) →
  
  lemma Separation_Hierarchy() {
    assert(
      isHausdorff(T) → isT₁(T) ∧
      isT₁(T) → isT₀(T)
    )
  } →
  
  lemma Space_Definitions() {
    assert(
      isFullyT₄(T) ↔ isFullyNormal(T) ∧
      isT₄(T) ↔ isNormal(T) ∧
      isT₃½(T) ↔ isTychonoff(T) ∧
      isT₃(T) ↔ isRegular(T)
    )
  } →

  lemma Paracompact_Equivalence() {
    assert(isFullyT₄(T) ↔ isParacompact(T))
  } →
  
  lemma T₄_Implications() {
    assert(
      isParacompact(T) → isT₄(T) ∧
      isT₄(T) → isT₃½(T)
    )
  } →

  lemma Countable_Properties() {
    assert(
      (isFirstCountable(T) ∧ isCountablyCompact(T)) →
      isSequentiallyCompact(T) →
      isT₃(T)
    )
  } →

  lemma Local_Compactness() {
    assert(
      isWeaklyσLocallyCompact(T) → isWeaklyLocallyCompact(T) ∧
      isWeaklyσLocallyCompact(T) → isT₄(T)
    )
  } →

  apply(
    Separation_Hierarchy(),
    Space_Definitions(),
    Paracompact_Equivalence(),
    T₄_Implications(),
    Countable_Properties(),
    Local_Compactness()
  ) →
  
  assert(conclusion)
}