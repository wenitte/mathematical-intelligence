theorem QuotientMapping() {
  assert(
    ∀S,T: Set ∧
    ∀R: EquivalenceRelation(S) ∧
    ∀f: (S → T) ∧
    let qR = QuotientMapping(S,R) →
    (∃φ: (S/R → T): φ ∘ qR = f) ↔
    (∀x,y ∈ S: (x,y) ∈ R → f(x) = f(y))
  )
}

proof QuotientMapping() {
  setVar(S: Set, T: Set, R: EquivalenceRelation(S), f: S → T) →
  
  lemma CompositeMapping() {
    assert(
      (∃φ: S/R → T: φ ∘ qR = f) ↔
      (∀x,y ∈ S: qR(x) = qR(y) → f(x) = f(y))
    )
  } →
  
  lemma QuotientMappingDef() {
    assert(
      ∀x,y ∈ S:
      qR(x) = qR(y) ↔ (x,y) ∈ R
    )
  } →
  
  apply(CompositeMapping()) →
  apply(QuotientMappingDef()) →
  
  assert(
    (∃φ: S/R → T: φ ∘ qR = f) ↔
    (∀x,y ∈ S: (x,y) ∈ R → f(x) = f(y))
  )
}

theorem QuotientMappingUnique() {
  assert(
    ∀S,T: Set ∧
    ∀R: EquivalenceRelation(S) ∧
    ∀f: (S → T) ∧
    ∀φ: (S/R → T): φ ∘ qR = f →
    IsUnique(φ)
  )
}

theorem QuotientMappingInjective() {
  assert(
    ∀S,T: Set ∧
    ∀R: EquivalenceRelation(S) ∧
    ∀f: (S → T) ∧
    ∀φ: (S/R → T): φ ∘ qR = f →
    (IsInjective(φ) ↔ 
     ∀x,y ∈ S: (x,y) ∈ R ↔ f(x) = f(y))
  )
}

theorem QuotientMappingSurjective() {
  assert(
    ∀S,T: Set ∧
    ∀R: EquivalenceRelation(S) ∧
    ∀f: (S → T) ∧
    ∀φ: (S/R → T): φ ∘ qR = f →
    (IsSurjective(φ) ↔ IsSurjective(f))
  )
}