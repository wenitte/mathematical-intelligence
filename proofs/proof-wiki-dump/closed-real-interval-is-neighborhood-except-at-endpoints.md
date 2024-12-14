theorem ClosedInterval_Neighborhood() {
  assert(
    ∀[a,b] ∈ ℝ ∧ [a,b] ⊂ ℝ ⇒
    (∀x ∈ [a,b] ∧ x ≠ a ∧ x ≠ b ⇒ [a,b] is_neighborhood_of x) ∧
    ¬([a,b] is_neighborhood_of a) ∧ 
    ¬([a,b] is_neighborhood_of b)
  )
} ↔

proof ClosedInterval_Neighborhood() {
  setVar(a,b,c: ℝ) →
  assert(a < c < b) →
  setVar(ε: ℝ) →
  assert(ε < min(b-c, c-a)) →
  assert(ε ∈ ℝ_{>0}) →
  
  lemma Interior_Point() {
    setVar(B_ε(c) = (c-ε, c+ε)) →
    assert(c + ε < b ∧ a < c - ε) →
    assert(B_ε(c) ⊆ [a,b]) →
    conclude([a,b] is_neighborhood_of c)
  } →
  
  lemma Left_Endpoint() {
    setVar(ε: ℝ_{>0}) →
    setVar(B_ε(a) = (a-ε, a+ε)) →
    assert(a - ε < a) →
    assert(B_ε(a) ⊈ [a,b]) →
    conclude(¬([a,b] is_neighborhood_of a))
  } →
  
  lemma Right_Endpoint() {
    setVar(ε: ℝ_{>0}) →
    setVar(B_ε(b) = (b-ε, b+ε)) →
    assert(b < b + ε) →
    assert(B_ε(b) ⊈ [a,b]) →
    conclude(¬([a,b] is_neighborhood_of b))
  } →
  
  apply(Interior_Point()) →
  apply(Left_Endpoint()) →
  apply(Right_Endpoint()) →
  conclude()
}