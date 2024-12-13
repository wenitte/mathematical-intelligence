theorem Bhaskara_Permutations() {
  assert(
    let S = {rope, hook, serpent, tabor, skull, trident, bed, dagger, arrow, bow} ∧
    let H = {mace, discus, lotus, conch} ∧
    |S| = 10 ∧ |H| = 4 →
    (count_permutations(S) = 3628800 ∧ count_permutations(H) = 24)
  )
} ↔

proof Bhaskara_Permutations() {
  setVar(S: Set, H: Set) →
  
  lemma Permutation_Formula() {
    assert(
      ∀n ∈ ℕ → count_permutations(n) = n!
    )
  } →
  
  assert(|S| = 10) →
  apply(Permutation_Formula()) →
  assert(count_permutations(S) = 10!) →
  compute(10! = 3628800) →
  
  assert(|H| = 4) →
  apply(Permutation_Formula()) →
  assert(count_permutations(H) = 4!) →
  compute(4! = 24) →
  
  conclude(
    count_permutations(S) = 3628800 ∧
    count_permutations(H) = 24
  )
}