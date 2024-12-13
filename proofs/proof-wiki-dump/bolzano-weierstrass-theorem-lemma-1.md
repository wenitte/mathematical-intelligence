theorem Bolzano_Weierstrass_Lemma_1() {
  assert(
    ∀S ⊆ ℝ, (S ≠ ∅ ∧ ∃sup(S)) ∧ sup(S) ∉ S ⇒ 
    sup(S) is_limit_point_of S
  )
} ↔

proof Bolzano_Weierstrass_Lemma_1() {
  setVar(S: Set(ℝ)) →
  assume(¬(sup(S) is_limit_point_of S)) →
  
  lemma Epsilon_Exists() {
    assert(∃ε ∈ ℝ>0: Bε(sup(S)) ∖ {sup(S)} ∩ S = ∅)
  } →
  
  apply(Epsilon_Exists()) →
  setVar(ε: ℝ>0) →
  
  assert(Bε(sup(S)) ∩ S = ∅) →
  assert((sup(S) - ε, sup(S) + ε) ∩ S = ∅) →
  assert((sup(S) - ε, sup(S)) ∩ S = ∅) →
  
  lemma Upper_Bound_Exists() {
    assert(∃r ∈ ℝ: sup(S) - ε < r < sup(S)) →
    setVar(r: ℝ) →
    
    lemma Show_Upper_Bound() {
      assert(∀s ∈ S: s < sup(S)) →
      assume(∃s ∈ S: sup(S) - ε < s < sup(S)) →
      assert(s ∈ (sup(S) - ε, sup(S))) →
      assert(contradiction with (sup(S) - ε, sup(S)) ∩ S = ∅) →
      assert(∀s ∈ S: s ≤ sup(S) - ε)
    } →
    
    apply(Show_Upper_Bound()) →
    assert(∀s ∈ S: s ≤ sup(S) - ε < r < sup(S))
  } →
  
  apply(Upper_Bound_Exists()) →
  assert(contradiction with r being smaller upper bound than sup(S)) →
  assert(¬¬(sup(S) is_limit_point_of S)) →
  assert(sup(S) is_limit_point_of S)
}