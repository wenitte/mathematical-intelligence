theorem Completion_Of_Valued_Field() {
  assert(
    ∀k,‖·‖(ValField(k,‖·‖) → 
      ∃k',‖·‖'(
        Completion(k',‖·‖',k,‖·‖) ∧
        ValField(k',‖·‖') ∧
        ∀c(Completion(c,_,k,‖·‖) → IsometricIsomorphic(c,k',‖·‖'))
      )
    )
  )
}

proof Completion_Of_Valued_Field() {
  setVar(k,‖·‖: ValField) →
  apply(Completion_Of_Normed_Division_Ring(k,‖·‖)) →
  assert(∃k',‖·‖'(Completion(k',‖·‖',k,‖·‖))) →
  
  apply(Normed_Division_Ring_Field_Completion(k',‖·‖')) →
  assert(ValField(k',‖·‖')) →
  
  apply(Normed_Division_Ring_Completions_Isometric(k,‖·‖)) →
  assert(∀c(Completion(c,_,k,‖·‖) → IsometricIsomorphic(c,k',‖·‖')))
}

lemma Examples() {
  assert(
    Completion(ℝ,|·|,ℚ,|·|) ∧
    Completion(ℚp,‖·‖p,ℚ,‖·‖p) ∧
    ∀n(ValNorm(n,ℚ) → (n = |·| ∨ ∃p(Prime(p) ∧ n = ‖·‖p)))
  )
}