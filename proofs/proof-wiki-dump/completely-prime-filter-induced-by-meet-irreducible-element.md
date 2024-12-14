theorem CompletelPrimeFilter_MeetIrreducible() {
  let(L: Frame) →
  let(b ∈ L: MeetIrreducible) →
  define(p := {a ∈ L: a ⋢ b}) →
  assert(
    IsCompletelyPrimeFilter(p, L)
  )
} ↔

proof CompletelPrimeFilter_MeetIrreducible() {
  setContext(L: Frame, b: MeetIrreducible) →
  
  lemma RequiredConditions() {
    assert(
      IsCompletelyPrimeFilter(p) ↔
      (∀A ⊆ L: (⋁A ∈ p ↔ ∃a ∈ A: a ∈ p)) ∧
      (∀A ⊆ L, |A| < ∞: (⋀A ∈ p ↔ ∀a ∈ A: a ∈ p))
    )
  } →

  lemma EquivalentConditions() {
    assert(
      IsCompletelyPrimeFilter(p) ↔
      (∀A ⊆ L: (⋁A ⋢ b ↔ ∃a ∈ A: a ⋢ b)) ∧
      (∀A ⊆ L, |A| < ∞: (⋀A ⋢ b ↔ ∀a ∈ A: a ⋢ b))
    )
  } →

  proof Condition1() {
    apply(SupremumPrecedesElement_Contrapositive) →
    assert(∀A ⊆ L: (⋁A ⋢ b ↔ ∃a ∈ A: a ⋢ b))
  } →

  proof Condition2() {
    let(A ⊆ L, |A| < ∞) →
    
    branch Forward() {
      assume(⋀A ⋢ b) →
      assert(∀a ∈ A: ⋀A ⪯ a) by InfimumDef →
      assert(∀a ∈ A: a ⋢ b) by OrderingTransitivity
    } →

    branch Backward() {
      assume(⋀A ⪯ b) →
      apply(PrimeElement_MeetIrreducible) →
      assert(IsPrimeElement(b)) →
      apply(PrimeElement_MeetSemilattice) →
      assert(∃a ∈ A: a ⪯ b)
    } →

    assert(⋀A ⋢ b ↔ ∀a ∈ A: a ⋢ b)
  } →

  conclude(IsCompletelyPrimeFilter(p, L))
}