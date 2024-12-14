theorem Cauchy_Sequences_Form_Ring() {
  assert(
    ∀R: NormedDivisionRing ∧
    ∀RN: SequenceRing(R) ∧
    CC ⊂ RN ∧
    CC := {s ∈ RN | isCauchy(s)} →
    isSubring(CC, RN) ∧
    hasUnity(CC, ⟨1,1,1,...⟩)
  )
} ↔

proof Cauchy_Sequences_Form_Ring() {
  apply(SubringTest) →
  
  lemma NonEmpty() {
    apply(ConstantRule_Cauchy) →
    assert(⟨1,1,1,...⟩ ∈ CC) →
    assert(CC ≠ ∅)
  } →

  lemma DifferenceClosed() {
    setVar(x: Sequence, y: Sequence) →
    assume(x ∈ CC ∧ y ∈ CC) →
    assert(x + (-y) = ⟨xₙ - yₙ⟩) by(pointwiseAddition) →
    apply(DifferenceRule_NormedDivisionRing) →
    assert(isCauchy(⟨xₙ - yₙ⟩)) →
    assert(x + (-y) ∈ CC)
  } →

  lemma ProductClosed() {
    setVar(x: Sequence, y: Sequence) →
    assume(x ∈ CC ∧ y ∈ CC) →
    assert(x ∘ y = ⟨xₙ ∘ yₙ⟩) by(pointwiseProduct) →
    apply(ProductRule_NormedDivisionRing) →
    assert(isCauchy(⟨xₙ ∘ yₙ⟩)) →
    assert(x ∘ y ∈ CC)
  } →

  apply(NonEmpty) →
  apply(DifferenceClosed) →
  apply(ProductClosed) →
  conclude(isSubring(CC, RN) ∧ hasUnity(CC, ⟨1,1,1,...⟩))
}

corollary Cauchy_Sequences_Form_Commutative_Ring() {
  assert(
    ∀F: ValuedField ∧
    ∀FN: SequenceRing(F) ∧
    CC ⊂ FN ∧
    CC := {s ∈ FN | isCauchy(s)} →
    isCommutativeSubring(CC, FN) ∧
    hasUnity(CC, ⟨1,1,1,...⟩)
  )
} by(Cauchy_Sequences_Form_Ring)