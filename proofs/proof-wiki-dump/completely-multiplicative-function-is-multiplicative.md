theorem Completely_Multiplicative_Is_Multiplicative() {
  assert(
    ∀f: ℤ → ℤ ∧ 
    IsCompletelyMultiplicative(f) → 
    IsMultiplicative(f)
  )
} ↔

proof Completely_Multiplicative_Is_Multiplicative() {
  setDef(CompletelyMultiplicative) {
    assert(∀m,n ∈ ℤ: f(mn) = f(m)f(n))
  } →
  setVar(m,n: ℤ) →
  assert(∀m,n ∈ ℤ: f(mn) = f(m)f(n)) →
  assert(∀m,n ∈ ℤ: m ⊥ n → f(mn) = f(m)f(n)) {
    by(TrueImpliedByAll)
  } →
  setDef(Multiplicative) {
    assert(∀m,n ∈ ℤ: m ⊥ n → f(mn) = f(m)f(n))
  } →
  conclude(IsMultiplicative(f))
}