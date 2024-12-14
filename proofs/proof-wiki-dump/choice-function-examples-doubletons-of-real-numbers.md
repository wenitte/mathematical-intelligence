theorem Choice_Function_Doubletons() {
  assert(
    ∀ℱ[∀X ∈ ℱ ∃a,b ∈ ℝ(X = {a,b})] ⇒
    ∃f[f is a choice function on ℱ]
  )
} ↔

proof Choice_Function_Doubletons() {
  setVar(ℱ: Set) →
  assume(∀X ∈ ℱ ∃a,b ∈ ℝ(X = {a,b})) →
  define(f: ℱ → ⋃ℱ) →
  assert(
    ∀X ∈ ℱ[
      f(X) = min(a,b) where X = {a,b}
    ]
  ) →
  lemma Function_Well_Defined() {
    assert(
      ∀X ∈ ℱ[
        f(X) is uniquely determined ∧
        f(X) ∈ ℝ
      ]
    )
  } →
  lemma Choice_Function_Properties() {
    assert(
      ∀X ∈ ℱ[
        f(X) ∈ X
      ]
    )
  } →
  apply(Function_Well_Defined()) →
  apply(Choice_Function_Properties()) →
  conclude(f is a choice function on ℱ)
}