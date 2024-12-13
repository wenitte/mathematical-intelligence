theorem Bottom_In_Compact_Closure() {
  let(L: OrderedSet) →
  assert(L = (S, ⪯)) ∧
  assert(IsBoundedBelow(L)) ∧
  let(x ∈ S) ∧
  let(⊥: SmallestElement(L)) →
  assert(⊥ ∈ x^compact)
} ↔

proof Bottom_In_Compact_Closure() {
  lemma Bottom_Is_Compact() {
    assert(IsCompact(⊥))
  } →
  
  lemma Bottom_Definition() {
    assert(∀y ∈ S → ⊥ ⪯ y) →
    assert(⊥ ⪯ x)
  } →
  
  lemma Compact_Closure_Definition() {
    assert(∀e ∈ S → (IsCompact(e) ∧ e ⪯ x) ↔ e ∈ x^compact)
  } →
  
  apply(Bottom_Is_Compact()) ∧
  apply(Bottom_Definition()) ∧
  apply(Compact_Closure_Definition()) →
  assert(⊥ ∈ x^compact)
}