theorem CharacteristicDivisionRing() {
  assert(
    ∀D: DivisionRing ⇒ (
      (Char(D) = 0) ∨ 
      (∃p: ℕ | isPrime(p) ∧ Char(D) = p)
    )
  )
}

proof CharacteristicDivisionRing() {
  setVar(D: DivisionRing) →
  assert(∀x,y ∈ D | (x ≠ 0 ∧ y ≠ 0) ⇒ (x ∘ y ≠ 0)) →
  
  branch {
    case finite:
      assert(isFinite(D)) →
      lemma FiniteRingNoZeroDivisors() {
        assert(
          isFinite(D) ∧ 
          (∀x,y ∈ D | (x ≠ 0 ∧ y ≠ 0) ⇒ (x ∘ y ≠ 0)) ⇒
          isPrime(Char(D))
        )
      } →
      apply(FiniteRingNoZeroDivisors())

    case infinite:
      assert(¬isFinite(D)) →
      assert(∀x,y ∈ D | x ≠ 0 ≠ y ⇒ x + y ≠ 0) →
      assert(Char(D) = 0)
  }
}