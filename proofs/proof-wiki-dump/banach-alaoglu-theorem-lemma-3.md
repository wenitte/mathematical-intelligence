theorem Banach_Alaoglu_Lemma3() {
  let X: NormedVectorSpace
  let B := closedUnitBall(X)
  let X* := dual(X)
  let B* := closedUnitBall(X*)
  let F_B := functions(B, [-1,1])
  let R := restrictionMap(B* → F_B)
  
  assert(
    R[B*] is_closed_in F_B
  )
} ↔

proof Banach_Alaoglu_Lemma3() {
  lemma CharacterizationClaim() {
    assert(
      ∀f ∈ F_B: f ∈ R[B*] ↔ (
        (∀x,y ∈ B: x+y ∈ B → f(x+y) = f(x) + f(y)) ∧
        (∀x ∈ B, α ∈ ℝ₊: αx ∈ B → f(αx) = αf(x))
      )
    )
  } →

  proof_part_1() {
    let f ∈ F_B\R[B*] →
    let I_r(u) := ((u-r, u+r) ∩ [-1,1]) →
    
    case_1() {
      assume(condition1_fails) →
      setVar(x,y ∈ B: x+y ∈ B) →
      let ε := |f(x) + f(y) - f(x+y)|/3 →
      let U_f := prx⁻¹[I_ε(f(x))] ∩ pry⁻¹[I_ε(f(y))] ∩ pr(x+y)⁻¹[I_ε(f(x+y))] →
      assert(U_f is_open ∧ f ∈ U_f ∧ U_f ⊆ F_B\R[B*])
    } ∨

    case_2() {
      assume(condition2_fails) →
      setVar(x ∈ B, α ∈ ℝ₊: αx ∈ B) →
      let ε := |f(αx) - αf(x)|/2 →
      let U_f := pr(αx)⁻¹[I_ε(f(αx))] ∩ prx⁻¹[I_ε/α(f(x))] →
      assert(U_f is_open ∧ f ∈ U_f ∧ U_f ⊆ F_B\R[B*])
    }
  } →

  proof_part_2() {
    let f ∈ R[B*] →
    setVar(ψ ∈ B*: f = R(ψ)) →
    assert(ψ satisfies_conditions(1,2)) →
    assert(f satisfies_conditions(1,2))
  } →

  proof_part_3() {
    let f ∈ F_B satisfying_conditions(1,2) →
    define(ψ: X → ℝ) {
      ψ(x) := ||x|| * f(x/||x||) for x ≠ 0
      ψ(0) := 0
    } →
    verify_linearity(ψ) →
    verify_bounded(ψ) →
    verify_restriction(ψ = f on B) →
    assert(ψ ∈ B* ∧ R(ψ) = f)
  }
}