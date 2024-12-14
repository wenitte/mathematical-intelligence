theorem URM_Function_Composition() {
  assert(
    ∀f,g: ℕ → ℕ, 
    (URM_Computable(f) ∧ URM_Computable(g)) →
    URM_Computable(f ∘ g)
  )
} ↔

proof URM_Function_Composition() {
  setVar(f,g: ℕ → ℕ) →
  assume(URM_Computable(f) ∧ URM_Computable(g)) →
  
  letVar(P: URM_Program, compute(f)) →
  letVar(Q: URM_Program, compute(g)) →
  letVar(s: ℕ, λ(Q)) →
  letVar(u: ℕ, ρ(Q)) →
  
  lemma Program_Concatenation() {
    assert(
      ∃R: URM_Program,
      R = Q * Z(2,u) * P ∧
      (∀n∈ℕ, R(n) = f(g(n))) ∧
      λ(R) = λ(Q) + (u-1)λ(P)
    )
  } →
  
  constructProgram(R) {
    step1: execute(Q) →
    step2: clearRegisters(2,u) →
    step3: execute(modifiedP) →
    where(
      modifiedP = relocateJumps(P, s+u-1)
    )
  } →
  
  apply(Program_Concatenation()) →
  assert(
    ∃R: URM_Program, compute(f ∘ g)
  ) →
  conclude(URM_Computable(f ∘ g))
}

lemma Program_Concatenation_Construction() {
  assert(
    ∀P,Q: URM_Program,
    let s = λ(Q), u = ρ(Q) in
    Q * P = concat(
      modifyJumps(Q, s+1),
      Z(2,u),
      relocateJumps(P, s+u-1)
    )
  )
}