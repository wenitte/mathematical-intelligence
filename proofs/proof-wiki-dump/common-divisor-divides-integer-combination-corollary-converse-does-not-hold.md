theorem CommonDivisor_NonImplication() {
  assert(
    ∀a,b,c ∈ ℤ ⇒
    (c|(a+b)) ↛ (c|a ∧ c|b)
  )
}

proof CommonDivisor_NonImplication() {
  counterExample() {
    setVar(a: 2) ∧
    setVar(b: 4) ∧
    setVar(c: 3) →
    
    assert(3|(2+4)) ∧
    assert(2+4 = 6) ∧
    assert(6 = 3·2) →
    
    assert(3∤2) ∧
    assert(3∤4) →
    
    conclude(
      ∃a,b,c ∈ ℤ: (c|(a+b)) ∧ ¬(c|a ∧ c|b)
    )
  }
}