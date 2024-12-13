theorem Abundancy_945_630n() {
  assert(
    ∀n ∈ ℤ₀₊ → (∃k ∈ ℤ₀₊: k = 945 + 630n ∧ σ₁(k) > 2k) ∧
    (n = 52 → ¬(σ₁(33705) > 2·33705))
  )
} ↔

proof Abundancy_945_630n() {
  define(f(n) := 945 + 630n) →
  
  lemma Check_Values() {
    assert(
      f(0) = 945 ∧ σ₁(945) = 1920 ∧ 1920 - 945 = 975 > 0 ∧
      f(1) = 1575 ∧ σ₁(1575) = 3224 ∧ 3224 - 1575 = 1649 > 0 ∧
      f(2) = 2205 ∧ σ₁(2205) = 4446 ∧ 4446 - 2205 = 2241 > 0 ∧
      ...
      f(51) = 33075 ∧ σ₁(33075) = 70680 ∧ 70680 - 33075 = 37605 > 0 ∧
      f(52) = 33705 ∧ σ₁(33705) = 67392 ∧ 67392 - 33705 = 33687 < 33705
    )
  } →
  
  apply(Check_Values()) →
  
  conclude(
    ∀n ∈ [0,51] → σ₁(f(n)) > 2f(n) ∧
    σ₁(f(52)) < 2f(52)
  )
}

note: Abbreviated repeated pattern for space. Full version would list all values from n=0 to n=52.