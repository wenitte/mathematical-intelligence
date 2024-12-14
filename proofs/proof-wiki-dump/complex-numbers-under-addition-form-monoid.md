theorem ComplexAdditionMonoid() {
  assert(
    (ℂ,+) is_monoid ↔
    (closure(ℂ,+) ∧ associative(ℂ,+) ∧ ∃e ∈ ℂ[identity(e,ℂ,+)])
  )
}

proof ComplexAdditionMonoid() {
  lemma Closure() {
    assert(
      ∀a,b ∈ ℂ → a + b ∈ ℂ
    )
  } →

  lemma Associativity() {
    assert(
      ∀a,b,c ∈ ℂ → (a + b) + c = a + (b + c)
    )
  } →

  lemma Identity() {
    setVar(x,y: ℝ) →
    setVar(z: ℂ, z = x + yi) →
    assert(
      ∃e[e = 0 + 0i ∧
        e + z = z ∧ z + e = z]
    ) →
    prove(
      (x + yi) + (0 + 0i) = (x + 0) + i(y + 0) = x + yi
    ) →
    prove(
      (0 + 0i) + (x + yi) = x + yi
    )
  } →

  apply(Closure()) ∧
  apply(Associativity()) ∧
  apply(Identity()) →
  
  conclude(
    (ℂ,+) is_monoid
  )
}