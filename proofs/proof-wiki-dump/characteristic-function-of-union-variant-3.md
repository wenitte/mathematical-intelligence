theorem CharacteristicFunction_Union() {
  assert(
    ∀A,B ⊆ S ⇒ 
    χ_{A∪B} = max{χ_A, χ_B}
  )
} ↔

proof CharacteristicFunction_Union() {
  setVar(A,B: P(S)) →
  setVar(s: S) →
  
  // Forward direction
  assume(χ_{A∪B}(s) = 0) →
  assert(s ∉ A∪B) →
  assert(s ∉ A ∧ s ∉ B) →
  assert(χ_A(s) = 0 ∧ χ_B(s) = 0) →
  assert(max{χ_A(s), χ_B(s)} = 0) →

  // Reverse direction
  assume(max{χ_A(s), χ_B(s)} = 0) →
  lemma CharFunc_Binary() {
    assert(∀x ⊆ S ⇒ range(χ_x) = {0,1})
  } →
  apply(CharFunc_Binary()) →
  assert(χ_A(s) = 0 ∧ χ_B(s) = 0) →
  assert(s ∉ A ∧ s ∉ B) →
  assert(s ∉ A∪B) →
  assert(χ_{A∪B}(s) = 0) →

  // Conclusion
  assert(χ_{A∪B}(s) = 0 ↔ max{χ_A(s), χ_B(s)} = 0) →
  lemma CharFunc_ZeroFiber() {
    assert(∀f,g: S→{0,1} ⇒ 
           (∀x: f(x)=0 ↔ g(x)=0) ⇒ f=g)
  } →
  apply(CharFunc_ZeroFiber()) →
  assert(χ_{A∪B} = max{χ_A, χ_B})
}