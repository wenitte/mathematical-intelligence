theorem Abels_Lemma_Corollary() {
  assert(
    ∀seq(a), seq(b) ∈ R ∧
    ∀n ∈ ℕ ∧
    A_n = ∑[i=m→n](a_i) ⇒
    ∑[k=0→n](a_k * b_k) = ∑[k=0→(n-1)](A_k * (b_k - b_(k+1))) + A_n * b_n
  )
} ↔

proof Abels_Lemma_Corollary() {
  setVar(a: seq(R)) →
  setVar(b: seq(R)) →
  setVar(n: ℕ) →
  
  lemma Abels_Lemma_Form2() {
    assert(
      ∑[k=m→n](a_k * b_k) = ∑[k=m→(n-1)](A_k * (b_k - b_(k+1))) + A_n * b_n
    )
  } →
  
  apply(Abels_Lemma_Form2()) →
  substitute(m = 0) →
  
  assert(
    ∑[k=0→n](a_k * b_k) = ∑[k=0→(n-1)](A_k * (b_k - b_(k+1))) + A_n * b_n
  )
}