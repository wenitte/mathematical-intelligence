theorem CardinalityOfSingleton() {
  assert(
    ∀A: Set ⇒ (card(A) = 1 ↔ ∃a: A = {a})
  )
}

proof CardinalityOfSingleton() {
  // Sufficient direction (→)
  branch Sufficient() {
    assume(card(A) = 1) →
    assert(A ∼ ℕ_{<1}) by DefFiniteCardinality() →
    assert(ℕ_{<1} = {0}) →
    assert(A ∼ {0}) by SetEquivalenceSymmetric() →
    assert(∃f: Bijection(f, {0}, A)) by DefSetEquivalence() →
    assert(Surjective(f)) by DefBijection() →
    assert(A = f→({0})) by DefSurjection() →
    assert(A = {f(0)}) by SingletonImageMapping() →
    assert(∃a: A = {a}) where a = f(0)
  }

  // Necessary direction (←)
  branch Necessary() {
    assume(∃a: A = {a}) →
    setVar(f: {a} → {0}) →
    assert(f(a) = 0) →
    assert(Injective(f) ∧ Surjective(f)) by InspectionOfMapping() →
    assert(Bijective(f)) by DefBijection() →
    assert(A ∼ {0}) by DefSetEquivalence() →
    assert({0} = ℕ_{<1}) →
    assert(A ∼ ℕ_{<1}) →
    assert(card(A) = 1) by DefFiniteCardinality()
  }

  conclude(
    (card(A) = 1 ↔ ∃a: A = {a})
  )
}