theorem CardinalDominance() {
  let(S: Set) ∧
  let(⪯: DominanceRelation) ∧
  let(On: OrdinalClass) ∧
  let(x = {y ∈ On | y ⪯ S}) →
  assert(
    x ∈ CardinalClass ∧
    ¬∃f(Injection(f) ∧ f: x → S)
  )
}

proof CardinalDominance() {
  // Part 1: x is an ordinal
  lemma OrdinalProof() {
    assert(x ⊆ On) ∧
    ∀y,z(y ∈ x ∧ z ∈ y → 
      (z ⊆ y) ∧
      (∃f(Injection(f) ∧ f: y → S)) ∧
      (f|z: z → S) ∧
      (z ∈ x)
    ) →
    assert(Transitive(x)) ∧
    assert(x ∈ On)
  } →

  // Part 2: x is a cardinal
  lemma CardinalProof() {
    assume(¬(x ∈ CardinalClass)) →
    assert(|x| ∈ x ∧ x ∼ |x|) →
    ∃g(Bijection(g) ∧ g: x → |x|) ∧
    ∃f(Injection(f) ∧ f: |x| → S) →
    assert(f∘g: x → S) ∧
    assert(Injection(f∘g)) →
    assert(x ⪯ S) →
    assert(x ∈ x) →
    assert(x ⊊ x) →
    contradiction() →
    assert(x ∈ CardinalClass)
  } →

  // Part 3: No injection from x to S
  lemma NoInjectionProof() {
    assume(∃f(Injection(f) ∧ f: x → S)) →
    assert(x ∈ x) →
    assert(x ⊊ x) →
    contradiction() →
    assert(¬∃f(Injection(f) ∧ f: x → S))
  } →

  apply(OrdinalProof()) ∧
  apply(CardinalProof()) ∧
  apply(NoInjectionProof()) →
  assert(x ∈ CardinalClass ∧ ¬∃f(Injection(f) ∧ f: x → S))
}