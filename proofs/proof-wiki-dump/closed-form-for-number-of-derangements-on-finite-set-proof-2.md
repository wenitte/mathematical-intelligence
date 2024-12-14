theorem Derangements_Closed_Form() {
  assert(
    ∀n ∈ ℕ ⇒ D_n = n!(1 - 1/1! + 1/2! - 1/3! + ... + (-1)ⁿ/n!) = !n
  )
} ↔

proof Derangements_Closed_Form() {
  setDef(Derangement: "permutation fixing no elements") →
  setVar(π: Permutation(S)) →
  setVar(i: ℕ, 1 ≤ i ≤ n) →
  setVar(P_i: "property that π(x) = y at position i") →
  setVar(N(P_i,...,P_j): "number of permutations where P_i,...,P_j hold") →
  
  lemma Single_Fixed_Element() {
    assert(
      N(P_i) = (n-1)! ∧
      Count(terms) = (n choose 1)
    )
  } →
  
  lemma Double_Fixed_Elements() {
    assert(
      N(P_i,P_j) = (n-2)! ∧
      Count(terms) = (n choose 2)
    )
  } →
  
  apply(Inclusion_Exclusion_Principle) →
  assert(
    D_n = n! - (n choose 1)(n-1)! + (n choose 2)(n-2)! - ... + (-1)ⁿ(n choose n)(n-n)!
  ) →
  
  apply(Binomial_Coefficient_Definition) →
  assert(
    D_n = n! - (n!/(1!(n-1)!))(n-1)! + (n!/(2!(n-2)!))(n-2)! - ... + 
          (-1)ⁿ(n!/(n!(n-n)!))(n-n)!
  ) →
  
  simplify() →
  assert(
    D_n = n!(1 - 1/1! + 1/2! - 1/3! + ... + (-1)ⁿ/n!)
  ) →
  
  assert(
    D_n = !n
  )
}