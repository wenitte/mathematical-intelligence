theorem ChiuChangExample3() {
  define(m: ℕ, "number of men")
  define(p: ℕ, "number of objects")
  assume(
    (8m = p + 3) ∧ 
    (7m = p - 4) ∧
    ∀obj ∈ objects(cost(obj) = 1)
  )
  assert(
    (m = 7) ∧ (p = 53)
  )
} ↔

proof ChiuChangExample3() {
  step1: {
    from(8m = p + 3)
    from(7m = p - 4)
    subtract(eq2, eq1) →
    assert(m = 7)
  } →
  
  step2: {
    from(m = 7)
    substitute(7m = p - 4) →
    calculate(7 * 7 = p - 4) →
    calculate(49 = p - 4) →
    assert(p = 53)
  } →

  conclude: {
    from(m = 7)
    from(p = 53)
    verify(8 * 7 = 53 + 3) ∧
    verify(7 * 7 = 53 - 4) →
    assert((m = 7) ∧ (p = 53))
  }
}