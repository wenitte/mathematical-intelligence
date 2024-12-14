theorem LocallyConvex_Convergence_Characterization() {
  input(
    F ∈ {ℝ, ℂ},
    (X, P) := locally_convex_space(F),
    τ := standard_topology(X),
    x ∈ X,
    {xₙ}_{n∈ℕ} := sequence_in(X)
  )
  assert(
    (xₙ →[τ] x) ↔ (∀p∈P: p(xₙ-x) →[ℝ] 0)
  )
} ↔

proof LocallyConvex_Convergence_Characterization() {
  proof_necessity() {
    assume(xₙ →[τ] x) →
    setVar(p ∈ P) →
    setVar(ε > 0) →
    goal(∃N∈ℕ: ∀n≥N: p(xₙ-x) < ε) →
    
    by_topology_convergence(
      ∀U∈τ[x∈U → ∃N∈ℕ: ∀n≥N: xₙ∈U]
    ) →
    
    let(U := {y∈X: p(y-x) < ε}) →
    assert(U ∈ τ) →
    
    obtain(N∈ℕ: ∀n≥N: xₙ∈U) →
    assert(∀n≥N: p(xₙ-x) < ε) →
    conclude(p(xₙ-x) →[ℝ] 0)
  } ∧

  proof_sufficiency() {
    assume(∀p∈P: p(xₙ-x) →[ℝ] 0) →
    setVar(U ∈ τ, x∈U) →
    
    lemma open_set_characterization() {
      obtain(ε>0, {p₁,...,pₘ}⊆P:
        {y∈X: ∀k∈{1,...,m}: pₖ(y-x)<ε} ⊆ U
      )
    } →
    
    apply(open_set_characterization()) →
    
    foreach(k∈{1,...,m}) {
      obtain(Nₖ∈ℕ: ∀n≥Nₖ: pₖ(xₙ-x)<ε)
    } →
    
    let(N := max{N₁,...,Nₘ}) →
    assert(∀n≥N: ∀k∈{1,...,m}: pₖ(xₙ-x)<ε) →
    conclude(∀n≥N: xₙ∈U) →
    conclude(xₙ →[τ] x)
  }
}