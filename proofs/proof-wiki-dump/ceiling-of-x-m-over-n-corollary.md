theorem Ceiling_X_Plus_M_Over_N_Corollary() {
  assume(n ∈ ℤ ∧ n > 0) →
  assume(x ∈ ℝ) →
  assert(
    ⌈x/n⌉ = ⌈⌈x⌉/n⌉
  )
}

proof Ceiling_X_Plus_M_Over_N_Corollary() {
  lemma Main_Theorem() {
    assert(
      ∀x ∈ ℝ, ∀m ∈ ℤ, ∀n ∈ ℤ₊ →
      ⌈(x + m)/n⌉ = ⌈(⌈x⌉ + m)/n⌉
    )
  } →
  
  setVar(m: ℤ = 0) →
  apply(Main_Theorem()) →
  substitute(m = 0) →
  assert(
    ⌈(x + 0)/n⌉ = ⌈(⌈x⌉ + 0)/n⌉
  ) →
  simplify() →
  assert(
    ⌈x/n⌉ = ⌈⌈x⌉/n⌉
  )
}