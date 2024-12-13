theorem Addition_Natural_Numbers_Provable() {
  assert(
    ∀y ∈ ℕ ⇒ (∀x ∈ ℕ ⇒ x + [y] = s^y(x))
  )
  where([y] ≝ s^y(0))
} ↔

proof Addition_Natural_Numbers_Provable() {
  apply(InductionPrinciple(y)) →

  lemma Base_Case() {
    setVar(y = 0) →
    assert([y] = 0) →
    assert(∀x: x + 0 = x) by(Axiom_M3)
  } →

  lemma Inductive_Step() {
    setVar(y: ℕ) →
    assume(∀x: x + [y] = s^y(x)) →
    
    lemma Formal_Proof_Tableau() {
      setVar(x₀: ℕ) →
      assert(x₀ + [y] = s^y(x₀)) by(Universal_Instantiation) →
      assert(∀a,b: a + s(b) = s(a + b)) by(Axiom_M4) →
      assert(x₀ + s([y]) = s(x₀ + [y])) by(Universal_Instantiation) →
      assert(∀a,b: a = b → s(a) = s(b)) by(Equality_Substitution) →
      assert(s(x₀ + [y]) = s(s^y(x₀))) by(Modus_Ponens) →
      assert(x₀ + s([y]) = s(s^y(x₀))) by(Equality_Transitive) →
      assert(∀x: x + s([y]) = s^{s(y)}(x)) by(Universal_Generalization)
    } →
    
    assert(∀x: x + [s(y)] = s^{s(y)}(x))
  } →

  apply(Mathematical_Induction) →
  conclude(∀y ∈ ℕ ⇒ (∀x: x + [y] = s^y(x)))
}