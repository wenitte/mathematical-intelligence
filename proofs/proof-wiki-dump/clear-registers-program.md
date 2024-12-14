theorem URM_Clear_Registers() {
  assert(
    ∀a,b ∈ ℕ ∧ (a > 0) ⇒
    Z(a,b) = [
      Z(a),
      Z(a+1),
      Z(a+2),
      ...,
      Z(b)
    ] ∧
    ∀i ∈ [a,b]: (ri ← 0) ∧
    λ(Z(a,b)) = {
      0: a > b,
      b-a+1: a ≤ b
    }
  )
} ↔

proof URM_Clear_Registers() {
  setVar(a,b: ℕ) →
  assume(a > 0) →
  
  lemma Program_Structure() {
    assert(
      Z(a,b) = sequence(
        ∀i ∈ [a,b]: Z(i)
      )
    )
  } →

  lemma Register_Effect() {
    assert(
      ∀i ∈ [a,b]: Z(i) ⇒ (ri ← 0)
    )
  } →

  lemma Length_Calculation() {
    assert(
      a > b ⇒ λ(Z(a,b)) = 0 ∧
      a ≤ b ⇒ λ(Z(a,b)) = b-a+1
    )
  } →

  apply(Program_Structure()) →
  apply(Register_Effect()) →
  apply(Length_Calculation()) →
  assert(conclusion)
}