theorem ComplementStrictTotalOrdering() {
  assert(
    ∀S,≺ (StrictTotalOrdering(S,≺) → WeakTotalOrdering(Complement(≺)))
  )
} ↔

proof ComplementStrictTotalOrdering() {
  setVar(S: Set, ≺: Relation) →
  assume(StrictTotalOrdering(S,≺)) →
  let(⊀ = Complement(≺)) →
  
  lemma Reflexivity() {
    assert(∀x ∈ S: x ⊀ x) →
    apply(ComplementReflexive()) →
    conclude(Reflexive(⊀))
  } →

  lemma Transitivity() {
    setVar(a,b,c: S) →
    assume(a ⊀ b ∧ b ⊀ c) →
    suppose(a ≺ c) →
    apply(TrichotomyLaw(≺)) →
    assert(b ⊀ c → (b = c ∨ c ≺ b)) →
    case(b = c) {
      conclude(a ≺ b)
    } →
    case(c ≺ b) {
      apply(TransitivityOf(≺)) →
      conclude(a ≺ b)
    } →
    assert(Contradiction(a ≺ b, a ⊀ b)) →
    conclude(∀a,b,c ∈ S: (a ⊀ b ∧ b ⊀ c → a ⊀ c))
  } →

  lemma Antisymmetry() {
    setVar(a,b: S) →
    assume(a ⊀ b ∧ b ⊀ a) →
    apply(TrichotomyLaw(≺)) →
    assert(a ⊀ b → (a = b ∨ b ≺ a)) →
    assert(b ⊀ a → (b = a ∨ a ≺ b)) →
    assert(AsymmetricOf(≺)) →
    conclude(a = b)
  } →

  lemma Connected() {
    apply(TrichotomyLaw(≺)) →
    conclude(∀x,y ∈ S: x ⊀ y ∨ y ⊀ x)
  } →

  conclude(WeakTotalOrdering(⊀))
}