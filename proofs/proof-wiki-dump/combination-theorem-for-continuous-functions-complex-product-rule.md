theorem Complex_Function_Product_Continuity() {
  assert(
    ∀f,g: ℂ → ℂ,
    ∀S ⊆ ℂ [S is open] ∧
    (f is continuous on S) ∧
    (g is continuous on S) ⇒
    (f·g is continuous on S)
  )
} ↔

proof Complex_Function_Product_Continuity() {
  setVar(f,g: ℂ → ℂ) →
  setVar(S ⊆ ℂ [open]) →
  
  assert(
    ∀c ∈ S:
    lim[z→c] f(z) = f(c) ∧
    lim[z→c] g(z) = g(c)
  ) →

  setVar(c ∈ S) →
  setVar(l = lim[z→c] f(z)) →
  setVar(m = lim[z→c] g(z)) →

  lemma Complex_Product_Limit_Rule() {
    assert(
      lim[z→c](f(z)·g(z)) = lim[z→c]f(z) · lim[z→c]g(z)
    )
  } →

  apply(Complex_Product_Limit_Rule()) →

  assert(
    lim[z→c](f(z)·g(z)) = l·m = f(c)·g(c)
  ) →

  conclude(
    f·g is continuous on S
  )
}