theorem Bell_Number_Sum() {
  assert(
    ∀n ∈ ℤ_{>0} ⇒ B_n = ∑_{k=1}^n {n \brace k}
    where {n \brace k} denotes Stirling number of second kind
  )
} ↔

proof Bell_Number_Sum() {
  setVar(n: ℤ_{>0}) →
  
  lemma Bell_Sum_Full() {
    assert(
      B_n = ∑_{k=0}^n {n \brace k}
    )
  } →
  
  lemma Stirling_Zero() {
    assert(
      ∀n ∈ ℤ_{>0} ⇒ {n \brace 0} = 0
    )
  } →
  
  apply(Bell_Sum_Full()) ∧ apply(Stirling_Zero()) →
  
  assert(
    B_n = ∑_{k=0}^n {n \brace k} = ∑_{k=1}^n {n \brace k} + {n \brace 0} = ∑_{k=1}^n {n \brace k} + 0
  ) →
  
  assert(
    B_n = ∑_{k=1}^n {n \brace k}
  )
}