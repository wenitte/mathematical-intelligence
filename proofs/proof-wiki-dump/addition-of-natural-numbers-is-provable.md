theorem Addition_Natural_Numbers() {
  let(ℕ: NaturalNumbers) →
  assert(
    ∀x,y ∈ ℕ ⇒ ([x] + [y] = [x + y])
    where([a] := s^a(0))
  )
} ↔

proof Addition_Natural_Numbers() {
  lemma Unary_Representation() {
    assert([a] = s(...s(0)) with a applications)
  } →
  
  induction(y) {
    base_case(y = 0) {
      setVar(y = 0) →
      assert([y] = 0) →
      assert(∀a: a + 0 = a) by(Axiom_M3) →
      assert([x] + 0 = [x]) by(UniversalInstantiation) →
      assert([x + 0] = [x]) by(SubstitutionEquality)
    } →

    inductive_step() {
      assume(∃proof([x] + [y] = [x + y])) →
      assert(∀a,b: a = b ⇒ s(a) = s(b)) by(SubstitutionEquality) →
      assert(∀a,b: a + s(b) = s(a + b)) by(Axiom_M4) →
      assert([x] + s([y]) = s([x] + [y])) by(UniversalInstantiation) →
      assert(s([x] + [y]) = s([x + y])) by(InductiveHypothesis) →
      assert([x] + s([y]) = s([x + y])) by(TransitivityEquality) →
      
      lemma Successor_Representation() {
        assert(s([y]) = [s(y)]) ∧
        assert(s([x + y]) = [s(x + y)])
      } →
      
      assert(x + s(y) = s(x + y)) by(AdditionDefinition) →
      assert([s(x + y)] = [x + s(y)]) →
      conclude([x] + [s(y)] = [x + s(y)])
    }
  } →
  
  assert(∀y ∈ ℕ: ∃proof([x] + [y] = [x + y])) by(MathInduction) →
  conclude(∀x,y ∈ ℕ: ∃proof([x] + [y] = [x + y]))
}