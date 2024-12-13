theorem Real_Cube_Function_Bijection() {
  assert(
    let f: ℝ → ℝ ∧
    ∀x ∈ ℝ[f(x) = x³] →
    isBijective(f)
  )
} ↔

proof Real_Cube_Function_Bijection() {
  lemma Odd_Power_Bijective() {
    assert(
      ∀n ∈ ℤ[
        isOdd(n) →
        ∀g: ℝ → ℝ[
          (∀x ∈ ℝ[g(x) = xⁿ]) →
          isBijective(g)
        ]
      ]
    )
  } →
  assert(3 ∈ ℤ ∧ isOdd(3)) →
  apply(Odd_Power_Bijective(), n = 3) →
  assert(isBijective(f))
}