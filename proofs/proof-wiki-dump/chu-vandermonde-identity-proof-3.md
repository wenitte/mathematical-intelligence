theorem Chu_Vandermonde_Identity() {
  assert(
    ∀r,s,n ∈ ℕ ⇒ 
    ∑(k=0 to n) [binom(r,k) * binom(s,n-k)] = binom(r+s,n)
  )
} ↔

proof Chu_Vandermonde_Identity() {
  setVar(r,s,n: ℕ) →
  lemma Combinatorial_Interpretation() {
    assert(
      binom(r+s,n) = |{select n from (r men ∪ s women)}| ∧
      binom(r,k) = |{select k from r men}| ∧
      binom(s,n-k) = |{select (n-k) from s women}|
    )
  } →
  apply(Combinatorial_Interpretation()) →
  assert(
    ∀k ∈ [0,n]: binom(r,k) * binom(s,n-k) = 
    |{select k men and (n-k) women}|
  ) →
  assert(
    ∑(k=0 to n) [binom(r,k) * binom(s,n-k)] = 
    |{⋃(k=0 to n) {select k men and (n-k) women}}|
  ) →
  assert(
    |{⋃(k=0 to n) {select k men and (n-k) women}}| = 
    |{select n from (r men ∪ s women)}|
  ) →
  conclude(
    ∑(k=0 to n) [binom(r,k) * binom(s,n-k)] = binom(r+s,n)
  )
}