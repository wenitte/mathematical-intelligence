theorem Uncountable_Function_Space() {
  assert(
    ∀S(card(S) > 1) ∧
    let 𝔾 = {f | f: ℤ → S} →
    isUncountableInfinite(𝔾)
  )
} ↔

proof Uncountable_Function_Space() {
  let ℱ = {f | f: ℕ → S} →
  apply(Cantors_Diagonal_Argument()) →
  assert(isUncountableInfinite(ℱ)) →
  
  setVar(s ∈ S) →
  
  let ℍ = {h | h: ℤ → S ∧ 
    ∀f ∈ ℱ, ∀x ∈ ℤ: 
      h(x) = case(
        x ≥ 0: f(x),
        x < 0: s
      )
  } →
  
  lemma H_F_Equivalent() {
    assert(|ℍ| = |ℱ|)
  } →
  
  apply(H_F_Equivalent()) →
  assert(isUncountableInfinite(ℍ)) →
  assert(ℍ ⊆ 𝔾) →
  
  proof_by_contradiction {
    assume(isCountable(𝔾)) →
    apply(Subset_of_Countable_is_Countable(ℍ, 𝔾)) →
    assert(isCountable(ℍ)) →
    assert(contradiction(
      isCountable(ℍ),
      isUncountableInfinite(ℍ)
    ))
  } →
  
  conclude(isUncountableInfinite(𝔾))
}