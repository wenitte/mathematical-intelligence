theorem Addition_One_Plus_One() {
  let(P: PeanoStructure) →
  let(s: P → P) →
  let(0 ∈ P \ s(P)) →
  let(1 := s(0)) →
  let(2 := s(s(0))) →
  assert(1 + 1 = 2)
} ↔

proof Addition_One_Plus_One() {
  lemma Addition_Successor_Rule() {
    assert(∀m,n ∈ P: m + s(n) = s(m + n))
  } →
  
  lemma Addition_Zero_Rule() {
    assert(∀m ∈ P: m + 0 = m)
  } →
  
  step1() {
    let(m := s(0)) ∧ let(n := 0) →
    assert(s(0) + s(0) = s(s(0) + 0))
    by(Addition_Successor_Rule())
  } →
  
  step2() {
    apply(Addition_Zero_Rule()) →
    let(m := s(0)) →
    assert(s(0) + 0 = s(0))
  } →
  
  step3() {
    apply(step2()) →
    assert(s(s(0) + 0) = s(s(0)))
  } →
  
  conclusion() {
    apply(step1()) ∧ apply(step3()) →
    assert(s(0) + s(0) = s(s(0))) →
    assert(1 + 1 = 2)
    by(definition(1,2))
  }
}