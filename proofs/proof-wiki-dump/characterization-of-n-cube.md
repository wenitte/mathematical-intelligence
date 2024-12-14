theorem NCube_Characterization() {
  assert(
    ∀n ∈ ℕ, ∀R ∈ ℝ⁺, ∀x,y ∈ ℝⁿ ⇒ 
    let(Q := {x,y ∈ ℝⁿ: sup_{x,y} max_i |y_i - x_i| ≤ R}) ⇒
    isNCube(Q)
  )
} ↔

proof NCube_Characterization() {
  setVar(n: ℕ, R: ℝ⁺, x,y ∈ ℝⁿ) →
  
  let(r := y - x) →
  let(r_j := y_j - x_j, ∀j ∈ [1..n]) →

  assert(
    Q = {r: sup_r max_i |r_i| ≤ R}
  ) →

  assert(
    Q = {r: sup_r max{|r_1|, |r_2|, ..., |r_n|} ≤ R}
  ) →

  let(ℓ := max{|r_1|, |r_2|, ..., |r_n|}) →
  
  assert(
    Q = {r: sup_ℓ (r_1 ∈ [-ℓ,ℓ] ∧ r_2 ∈ [-ℓ,ℓ] ∧ ... ∧ r_n ∈ [-ℓ,ℓ] ∧ ℓ ≤ R)}
  ) →

  assert(
    Q = ∏ᵢ₌₁ⁿ [-R,R]
  ) →

  conclude(isNCube(Q))
}