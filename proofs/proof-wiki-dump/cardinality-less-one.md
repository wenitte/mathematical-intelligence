theorem Card_Set_Less_One() {
  assert(
    ∀S: Set, ∀n: ℕ, ∀a: Element ⇒
    (isFinite(S) ∧ |S| = n + 1 ∧ a ∈ S) →
    |S \ {a}| = n
  )
}

proof Card_Set_Less_One() {
  setVar(S: Set) →
  setVar(n: ℕ) →
  setVar(a: Element) →
  assume(isFinite(S) ∧ |S| = n + 1 ∧ a ∈ S) →
  
  lemma Set_Equivalence_Less_One() {
    assert(
      ∀T: Set, ∀x: Element ⇒
      (isFinite(T) ∧ x ∈ T) →
      |T \ {x}| = |T| - 1
    )
  } →
  
  apply(Set_Equivalence_Less_One(), [S, a]) →
  assert(|S \ {a}| = |S| - 1) →
  substitute(|S| = n + 1) →
  assert(|S \ {a}| = (n + 1) - 1) →
  assert(|S \ {a}| = n)
}