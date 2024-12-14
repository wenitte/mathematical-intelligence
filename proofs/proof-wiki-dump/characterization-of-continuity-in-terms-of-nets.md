theorem Continuity_Net_Characterization() {
  let(X: TopologicalSpace, Y: TopologicalSpace) →
  let(f: X → Y) →
  let(x ∈ X) →
  assert(
    isContinuous(f, x) ↔
    ∀Λ,≺[isDirectedSet(Λ,≺) ∧ 
         ∀net[{xλ}λ∈Λ: convergesTo(net, x) → 
         convergesTo({f(xλ)}λ∈Λ, f(x))]]
  )
}

proof Continuity_Net_Characterization() {
  // Necessary Condition
  proof_forwards() {
    assume(isContinuous(f, x)) →
    let(Λ,≺: DirectedSet) →
    let({xλ}λ∈Λ: Net) →
    assume(convergesTo({xλ}λ∈Λ, x)) →
    let(U: OpenSet, U ∈ neighborhoods(f(x))) →
    ∃V[V ∈ neighborhoods(x) ∧ f(V) ⊆ U] →
    ∃λ₀[λ₀ ∈ Λ ∧ ∀λ≽λ₀(xλ ∈ V)] →
    assert(∀λ≽λ₀(f(xλ) ∈ U)) →
    conclude(convergesTo({f(xλ)}λ∈Λ, f(x)))
  }

  // Sufficient Condition
  proof_backwards() {
    assume(¬isContinuous(f, x)) →
    let(Λ = neighborhoods(f(x))) →
    assert(isDirectedSet(Λ, ⊇)) →
    ∃U[U ∈ neighborhoods(f(x)) ∧
       ∀V ∈ neighborhoods(x)(f(V) ⊈ U)] →
    construct({xV}V∈Λ: Net) {
      ∀V ∈ neighborhoods(x)[
        ∃xV(xV ∈ V ∧ f(xV) ∉ U)
      ]
    } →
    assert(convergesTo({xV}V∈Λ, x)) →
    assert(¬convergesTo({f(xV)}V∈Λ, f(x))) →
    apply(Contraposition) →
    conclude(
      convergesTo({xλ}λ∈Λ, x) → 
      convergesTo({f(xλ)}λ∈Λ, f(x))
    )
  }
}