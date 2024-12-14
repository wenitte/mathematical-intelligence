theorem CompletePrimeFilterMI() {
  let(L: Frame) →
  let(⊤: MaxElement(L)) →
  let(p: CompletePrimeFilter(L)) →
  def(bp := ⋁{a ∈ L: a ∉ p}) →
  def(pb := {a ∈ L: a ⋢ b}) →
  assert(
    MeetIrreducible(bp) ∧ bp ≠ ⊤ ∧
    CompletePrimeFilter(pb) →
    pbp = p
  )
} ↔

proof CompletePrimeFilterMI() {
  let(L: Frame) →
  let(p: CompletePrimeFilter(L)) →
  
  assert(pbp = {a ∈ L: a ⋢ bp}) →
  apply(DefOf_bp) →
  assert(pbp = {a ∈ L: a ⋢ ⋁{a' ∈ L: a' ∉ p}}) →
  apply(SetDifference) →
  assert(pbp = {a ∈ L: a ⋢ ⋁(L ∖ p)}) →
  
  lemma CompletePrimeProperty() {
    assert(∀x ∈ L: (x ∈ p ↔ x ⋢ ⋁(L ∖ p)))
  } →
  
  apply(CompletePrimeProperty()) →
  assert(pbp = {a ∈ L: a ∈ p}) →
  apply(SetEquality) →
  assert(pbp = p)
}