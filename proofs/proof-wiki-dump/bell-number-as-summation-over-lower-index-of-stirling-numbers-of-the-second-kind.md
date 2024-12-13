theorem Bell_Number_Sum_Stirling() {
  assert(
    ∀n ∈ ℤ_≥0: B_n = ∑_{k=0}^n {n \brace k}
  )
} ↔

proof Bell_Number_Sum_Stirling() {
  define(B_n := "number of partitions of set with cardinality n") →
  
  case n > 0 {
    lemma Partition_Components() {
      assert(
        "{n \brace k} = number of partitions with k components"
      )
    } →
    apply(Partition_Components()) →
    assert(B_n = ∑_{k=1}^n {n \brace k}) →
    assert(∀n ∈ ℤ_{>0}: {n \brace 0} = 0) →
    conclude(B_n = ∑_{k=0}^n {n \brace k})
  } ∧

  case n = 0 {
    assert(S = ∅) →
    assert("∅ has exactly one partition {∅}") →
    assert({0 \brace 0} = 1) →
    assert(B_0 = ∑_{k=0}^0 {0 \brace k} = {0 \brace 0} = 1)
  }
} →

corollary Bell_Number_Sum_Stirling_Simplified() {
  assert(
    ∀n ∈ ℤ_{>0}: B_n = ∑_{k=1}^n {n \brace k}
  )
}