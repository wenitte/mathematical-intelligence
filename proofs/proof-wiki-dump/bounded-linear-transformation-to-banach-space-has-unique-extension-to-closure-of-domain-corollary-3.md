theorem Linear_Isometry_Extension() {
  assert(
    ∀F ∈ {ℝ,ℂ} ∧
    ∀X[normedVectorSpace(X,F)] ∧
    ∀D_T0[linearSubspace(D_T0,X)] ∧
    ∀Y[banachSpace(Y,F)] ∧
    ∀T0[linearIsometry(T0: D_T0 → Y)] ⇒
    ∃!T[linearIsometry(T: D_T → Y) ∧ D_T = closure(D_T0) ∧ extends(T,T0)]
  )
} ↔

proof Linear_Isometry_Extension() {
  apply(Bounded_Linear_Extension_Theorem()) →
  assert(∃!T[boundedLinear(T: D_T → Y) ∧ D_T = closure(D_T0) ∧ extends(T,T0)]) →
  
  setVar(x ∈ closure(D_T0)) →
  setVar(sequence(x_n ∈ D_T0, n ∈ ℕ)) →
  assert(lim(n→∞, x_n) = x) →
  
  assert(T(x) = lim(n→∞, T0(x_n))) →
  
  lemma Isometry_Preservation() {
    assert(∀n ∈ ℕ[‖T0(x_n)‖_Y = ‖x_n‖_X]) →
    apply(Norm_Continuity()) →
    assert(lim(n→∞, ‖T0(x_n)‖_Y) = lim(n→∞, ‖x_n‖_X)) →
    assert(‖T(x)‖_Y = ‖x‖_X)
  } →
  
  apply(Isometry_Preservation()) →
  conclude(linearIsometry(T))
}