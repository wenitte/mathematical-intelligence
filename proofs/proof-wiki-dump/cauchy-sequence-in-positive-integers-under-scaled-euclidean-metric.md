theorem Cauchy_Sequence_Positive_Integers() {
  let(ℤ_{>0}: {x ∈ ℤ | x > 0}) →
  let(δ: ℤ_{>0} × ℤ_{>0} → ℝ) →
  assert(
    ∀x,y ∈ ℤ_{>0}: δ(x,y) = |x-y|/(xy)
  ) ∧
  assert(
    ∀n ∈ ℕ: x_n = n
  ) →
  assert(
    {x_n} is_Cauchy_sequence_in(ℤ_{>0}, δ)
  )
} ↔

proof Cauchy_Sequence_Positive_Integers() {
  setVar(x_m, x_n ∈ {x_n}) →
  assert(
    δ(x_m, x_n) = |x_m - x_n|/(x_m x_n)
  ) →
  apply(algebra) →
  assert(
    δ(x_m, x_n) = |1/x_m - 1/x_n|
  ) →
  apply(sequence_definition) →
  assert(
    δ(x_m, x_n) = |1/m - 1/n|
  ) →
  
  lemma Archimedes_Application() {
    setVar(ε ∈ ℝ_{>0}) →
    assert(
      ∃N ∈ ℕ: N > 1/ε
    ) →
    assert(
      ε > 1/N
    )
  } →
  
  apply(Archimedes_Application()) →
  assert(
    ∀m,n ∈ ℕ: m,n > N →
    δ(x_m, x_n) = |1/m - 1/n| <
    max{1/m, 1/n} <
    1/N <
    ε
  ) →
  conclude(
    {x_n} is_Cauchy_sequence_in(ℤ_{>0}, δ)
  )
}