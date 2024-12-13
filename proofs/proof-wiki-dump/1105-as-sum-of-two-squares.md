theorem Sum_Of_Two_Squares_1105() {
  assert(
    1105 = maximal_sum_representations ∧
    ∃ representations: ℕ × ℕ → ℕ [
      1105 = 33² + 4² ∧
      1105 = 32² + 9² ∧
      1105 = 31² + 12² ∧
      1105 = 24² + 23²
    ] ∧
    ∀n < 1105: count_representations(1105) > count_representations(n)
  )
} ↔

proof Sum_Of_Two_Squares_1105() {
  def Algorithm_Two_Square_Decomp(n: ℕ) {
    bound = ⌊√n⌋ →
    count_array = new Array(2(bound + 1)²) →
    ∀i ∈ [0..bound]: ∀j ∈ [0..i]: 
      count_array[i² + j²]++ →
    return max_index(count_array[0..n])
  } →

  apply(Algorithm_Two_Square_Decomp(1105)) →
  assert(result = [0, 25, 325, 1105]) →
  
  verify_decompositions() {
    1105 = 1089 + 16 = 33² + 4² →
    1105 = 1024 + 81 = 32² + 9² →
    1105 = 961 + 144 = 31² + 12² →
    1105 = 625 + 529 = 24² + 23²
  } →
  
  assert(count_decompositions(1105) = 4) →
  assert(∀n < 1105: count_decompositions(n) < 4)
}