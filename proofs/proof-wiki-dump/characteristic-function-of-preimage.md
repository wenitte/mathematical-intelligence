theorem CharacteristicFunctionPreimage() {
  assert(
    ∀X,Y(Sets(X,Y) ∧ ∃f:X→Y ∧ A⊆Y) ⇒ 
    (χ_{f^{-1}[A]} = χ_A ∘ f)
  )
} ↔

proof CharacteristicFunctionPreimage() {
  setVar(X: Set, Y: Set, f: X→Y, A: Set) →
  assert(A ⊆ Y) →
  
  lemma ForwardCase() {
    assert(∀x ∈ f^{-1}[A] ⇒ ((χ_A ∘ f)(x) = 1)) →
    setVar(x: X) →
    assert(x ∈ f^{-1}[A]) →
    assert(f(x) ∈ A) →
    assert((χ_A ∘ f)(x) = χ_A(f(x))) →
    assert(χ_A(f(x)) = 1)
  } →

  lemma ComplementCase() {
    assert(∀x ∈ X∖f^{-1}[A] ⇒ ((χ_A ∘ f)(x) = 0)) →
    setVar(x: X) →
    assert(x ∈ X∖f^{-1}[A]) →
    assert(f(x) ∈ Y∖A) →
    assert((χ_A ∘ f)(x) = χ_A(f(x))) →
    assert(χ_A(f(x)) = 0)
  } →

  apply(ForwardCase()) →
  apply(ComplementCase()) →
  assert(χ_{f^{-1}[A]} = χ_A ∘ f)
}