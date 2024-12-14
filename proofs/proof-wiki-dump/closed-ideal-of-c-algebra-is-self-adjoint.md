theorem Closed_Ideal_CStar_Algebra_Is_SelfAdjoint() {
  let(A: CStar_Algebra, I: Ideal(A)) →
  assert(
    closed(I) ∧
    ∀x ∈ I ⇒ x* ∈ I
  )
}

proof Closed_Ideal_CStar_Algebra_Is_SelfAdjoint() {
  // Proof 1
  let(A: CStar_Algebra, I: Ideal(A)) →
  assert(I ∩ I* = self_adjoint_ideal(A)) →
  assert(closed(I*)) →
  assert(closed(I ∩ I*)) →
  assert(I ∩ I* = CStar_Algebra()) →
  
  let(Λ: directed_set, {eλ}λ∈Λ: net(I ∩ I*)) →
  assert(∀x ∈ I ∩ I* ⇒ lim({x·eλ}λ∈Λ) = x) →
  
  setVar(x: I) →
  assert(∀λ ∈ Λ ⇒ 
    ‖x* - x*eλ‖² = ‖(x - eλx)(x* - x*eλ)‖
    = ‖xx* - eλxx* - xx*eλ - eλxx*eλ‖
    ≤ ‖xx* - eλxx*‖ + ‖(xx* - eλxx*)eλ‖
    ≤ 2‖xx* - xx*eλ‖
  ) →
  
  assert(xx* ∈ I ∩ I*) →
  assert(∀ε > 0 ∃b ∈ Λ ∀λ ≥ b ⇒
    ‖xx* - xx*eλ‖ < ε²/2 ∧
    ‖x* - x*eλ‖ < ε
  ) →
  
  assert(lim({x*eλ}λ∈Λ) = x*) →
  assert(∀λ ∈ Λ ⇒ x*eλ ∈ I) →
  assert(closed(I) ⇒ x* ∈ I)
}

// Proof 2 omitted for length, but would follow similar structure