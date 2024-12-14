theorem URM_Concatenation_Associative() {
  assert(
    ∀P,Q,R ∈ URM_Programs ⇒
    P * (Q * R) = (P * Q) * R
  )
} ↔

proof URM_Concatenation_Associative() {
  setVar(P,Q,R: URM_Programs) →
  setVar(t: ℕ = λ(P)) →
  setVar(s: ℕ = λ(Q)) →
  
  lemma Program_Structure() {
    assert(
      P.hasAppended(Z(2,ρ(P))) ∧
      Q.hasAppended(Z(2,ρ(Q))) ∧
      P.exitJumpsModified() ∧
      Q.exitJumpsModified()
    )
  } →

  lemma Jump_Modifications_R() {
    assert(
      ∀J(m,n,q) ∈ R.jumps ⇒
      (Q * R).contains(J(m,n,q+s)) ∧
      (P * (Q * R)).contains(J(m,n,q+s+t)) ∧
      ((P * Q) * R).contains(J(m,n,q+(s+t)))
    )
  } →

  lemma Jump_Modifications_Q() {
    assert(
      ∀J(m,n,q) ∈ Q.jumps ⇒
      (q > s ⇒ 
        (Q * R).contains(J(m,n,s+1)) ∧
        (P * (Q * R)).contains(J(m,n,s+t+1)) ∧
        ((P * Q) * R).contains(J(m,n,s+t+1))
      )
    )
  } →

  assert(
    Jump_Modifications_R() ∧
    Jump_Modifications_Q() ∧
    (∀instr ∈ P.instructions ∪ Q.instructions ∪ R.instructions ⇒
      instr.type ≠ Jump ⇒
      instr.identical_in(P * (Q * R), (P * Q) * R))
  ) →

  conclude(P * (Q * R) = (P * Q) * R)
}