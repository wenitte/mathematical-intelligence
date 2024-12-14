theorem Closed_Ideal_Is_SelfAdjoint() {
  let(A: C*_algebra, *, ||·||) →
  let(I: closed_ideal(A)) →
  assert(
    ∀x ∈ I ⇒ x* ∈ I
  )
} ↔

proof Closed_Ideal_Is_SelfAdjoint() {
  lemma L1() {
    assert(I ∩ I* is_selfadjoint_ideal(A))
  } →
  lemma L2() {
    assert(I* is_closed)
  } →
  apply(L1, L2) →
  assert(I ∩ I* is_closed) →
  
  lemma L3() {
    assert(I ∩ I* is_C*algebra)
  } →
  
  lemma ApproxIdentity() {
    assert(∃(Λ,⪯): directed_set ∧ ∃{eλ}λ∈Λ ∈ I ∩ I* : 
      ∀x ∈ I ∩ I* ⇒ lim{x·eλ}λ∈Λ = x)
  } →
  
  setVar(x: I) →
  setVar(λ: Λ) →
  
  assert(||x* - x*eλ||² = ||(x - eλx)(x* - x*eλ)||) →
  assert(= ||xx* - eλxx* - xx*eλ - eλxx*eλ||) →
  assert(≤ ||xx* - eλxx*|| + ||(xx* - eλxx*)eλ||) →
  assert(≤ ||xx* - eλxx*|| + ||xx* - eλxx*||) →
  assert(= 2||xx* - xx*eλ||) →
  
  assert(xx* ∈ I ∩ I*) →
  
  setVar(ε > 0) →
  assert(∃b ∈ Λ : λ ⪰ b ⇒ ||xx* - xx*eλ|| < ε²/2) →
  assert(⇒ ||x* - x*eλ|| < ε) →
  
  assert(∀λ ∈ Λ : x*eλ ∈ I) →
  assert(I is_closed ⇒ x* ∈ I) →
  assert(∀x ∈ I ⇒ x* ∈ I)
}