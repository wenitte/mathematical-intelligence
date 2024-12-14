theorem NoOrderingOnComplex() {
  assert(
    ∀O: TotalOrdering(ℂ) ⇒ ¬Compatible(O, ℂ)
  )
} ↔

proof NoOrderingOnComplex() {
  setVar(⪯: TotalOrdering(ℂ)) →
  assume(Compatible(⪯, ℂ)) →
  
  lemma ZeroPreceqNegOne() {
    assert(0 ⪯ i ∨ i ⪯ 0) →
    
    case(0 ⪯ i) {
      assert(∀x,y ∈ ℂ: (0 ⪯ x ∧ 0 ⪯ y) ⇒ 0 ⪯ x × y) →
      substitute(x = i, y = i) →
      assert(0 ⪯ i × i) →
      assert(0 ⪯ -1)
    } →
    
    case(i ⪯ 0) {
      assert(∀x,y,z ∈ ℂ: x ⪯ y ⇒ (x + z) ⪯ (y + z)) →
      substitute(x = i, y = 0, z = -i) →
      assert(0 ⪯ -i) →
      assert(∀x,y ∈ ℂ: (0 ⪯ x ∧ 0 ⪯ y) ⇒ 0 ⪯ x × y) →
      substitute(x = -i, y = -i) →
      assert(0 ⪯ (-i) × (-i)) →
      assert(0 ⪯ -1)
    } →
    
    conclude(0 ⪯ -1)
  } →
  
  apply(ZeroPreceqNegOne()) →
  assert(∀x,y ∈ ℂ: (0 ⪯ x ∧ 0 ⪯ y) ⇒ 0 ⪯ x × y) →
  substitute(x = -1, y = -1) →
  assert(0 ⪯ 1) →
  
  assert(∀x,y,z ∈ ℂ: x ⪯ y ⇒ (x + z) ⪯ (y + z)) →
  substitute(x = 0, y = 1, z = -1) →
  assert(-1 ⪯ 0) →
  
  assert(∀a,b ∈ ℂ: (a ⪯ b ∧ b ⪯ a) ⇒ a = b) →
  substitute(a = -1, b = 0) →
  assert(-1 = 0) →
  
  contradiction() →
  conclude(¬∃O: TotalOrdering(ℂ) ∧ Compatible(O, ℂ))
}