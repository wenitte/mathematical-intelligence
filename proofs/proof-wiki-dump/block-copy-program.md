theorem Block_Copy_Program() {
  assert(
    ∀k,m,n ∈ ℕ ∧
    k ≥ 1 ∧
    |m - n| ≥ k ⇒
    (
      ∀i ∈ [1..k]: Command(i) = C(m + i - 1, n + i - 1) ∧
      λ(C(m,n,k)) = k ∧
      ∀i ∈ [0..k-1]: R[n+i] = R[m+i]
    )
  )
} ↔

proof Block_Copy_Program() {
  setVar(k,m,n: ℕ) →
  assume(k ≥ 1 ∧ |m - n| ≥ k) →
  lemma Program_Structure() {
    assert(
      ∀i ∈ [1..k]: Line(i) = C(m + i - 1, n + i - 1) ∧
      Program_Length = k
    )
  } →
  lemma Register_Effect() {
    assert(
      ∀i ∈ [0..k-1]: 
        Execute(C(m + i, n + i)) ⇒ R[n+i] := R[m+i]
    )
  } →
  apply(Program_Structure()) →
  apply(Register_Effect()) →
  assert(conclusion)
}