theorem CompositeFrameHomomorphism() {
  let(L1: Frame(S1, ≤1), L2: Frame(S2, ≤2), L3: Frame(S3, ≤3)) →
  let(φ1: L1 → L2, φ2: L2 → L3) →
  assert(
    isFrameHomomorphism(φ1) ∧ isFrameHomomorphism(φ2) →
    isFrameHomomorphism(φ2 ∘ φ1)
  )
} ↔

proof CompositeFrameHomomorphism() {
  // Prove finite meet preservation
  lemma FiniteMeetPreserving() {
    let(F ⊆ S1: Finite) →
    assert(
      inf((φ2 ∘ φ1)[F]) = 
      inf(φ2[φ1[F]]) →           // Image under composition
      φ2(inf(φ1[F])) →           // φ2 preserves meets
      φ2(φ1(inf(F))) →           // φ1 preserves meets
      (φ2 ∘ φ1)(inf(F))          // Definition of composition
    ) →
    conclude(isFiniteMeetPreserving(φ2 ∘ φ1))
  } →

  // Prove arbitrary join preservation
  lemma ArbitraryJoinPreserving() {
    let(A ⊆ S1) →
    assert(
      sup((φ2 ∘ φ1)[A]) =
      sup(φ2[φ1[A]]) →           // Image under composition
      φ2(sup(φ1[A])) →           // φ2 preserves joins
      φ2(φ1(sup(A))) →           // φ1 preserves joins
      (φ2 ∘ φ1)(sup(A))          // Definition of composition
    ) →
    conclude(isArbitraryJoinPreserving(φ2 ∘ φ1))
  } →

  apply(FiniteMeetPreserving()) ∧
  apply(ArbitraryJoinPreserving()) →
  conclude(isFrameHomomorphism(φ2 ∘ φ1))
}