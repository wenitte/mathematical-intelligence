theorem MinimalElement() {
  assert(
    ∀B[Class(B) ∧ ¬Empty(B) → ∃m ∈ B(∀b ∈ B → ¬(b ∈ m))]
  )
} ↔

proof MinimalElement() {
  setVar(B: Class, x: Element(B)) →
  let(x': TransitiveClosure(x)) →
  let(L: x' ∩ B) →
  assert(x ∈ L) →
  assert(Set(x') → Set(L)) by AxiomOfSubset() →
  
  lemma HasMinimal() {
    assert(Set(L) ∧ ¬Empty(L) → ∃m[m ∈ L ∧ ∀y ∈ L(¬(y ∈ m))])
  } by AxiomOfFoundation() →
  
  apply(HasMinimal()) →
  setVar(m: MinimalElement(L)) →
  assert(m ∈ B) by IntersectionDef() →
  
  proof byContradiction() {
    assume(∃b ∈ B(b ∈ m)) →
    setVar(b: Element(B)) →
    assert(m ∈ x' ∧ Transitive(x') → b ∈ x') →
    assert(b ∈ x' ∧ b ∈ B → b ∈ L) →
    assert(b ∈ L ∧ b ∈ m) contradicts MinimalityOf(m, L)
  } →
  
  conclude(m is StrictlyMinimalElement(B))
}