theorem Integer_Interval_Cardinality() {
  assert(
    ∀a,b ∈ ℤ ⇒ 
    let I = [a..b] ⇒
    (I is finite) ∧
    (|I| = {
      b - a + 1 if b ≥ a - 1
      0 if b ≤ a - 1
    })
  )
} ↔

proof Integer_Interval_Cardinality() {
  setVar(a,b: ℤ) →
  let I = [a..b] →
  
  case(b < a) {
    assert(I = ∅) →
    apply(Empty_Set_is_Finite) →
    apply(Empty_Set_Cardinality) →
    assert(|I| = 0)
  } →
  
  case(b ≥ a) {
    lemma Translation_Bijection() {
      assert(∃f: [a..b] → [0..(b-a)] where f is bijective)
    } →
    apply(Translation_Bijection()) →
    assert(|I| = |[0..(b-a)]|) →
    assert(|I| = b - a + 1)
  } →
  
  combineCase(b < a, b ≥ a) →
  assert(
    |I| = {
      b - a + 1 if b ≥ a - 1
      0 if b ≤ a - 1
    }
  )
}