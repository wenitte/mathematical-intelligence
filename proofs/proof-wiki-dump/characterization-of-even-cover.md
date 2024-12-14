theorem Even_Cover_Characterization() {
  assert(
    let T = ⟨S,τ⟩ be a topological space ∧
    let U be a cover of S ∧
    let τ_S×S be product topology on S×S →
    (U is even cover of T ↔ 
     ∃V(V is open neighborhood of ΔS in ⟨S×S, τ_S×S⟩ ∧
        {V(x): x∈S} is refinement of U))
  )
}

proof Even_Cover_Characterization() {
  // Necessary condition
  lemma Necessary() {
    assume(U is even cover of T) →
    assert(∃N(N is neighborhood of ΔS in ⟨S×S, τ_S×S⟩ ∧
           {N(x): x∈S} is refinement of U)) →
    assert(∃V(V is open set in ⟨S×S, τ_S×S⟩ ∧ ΔS ⊆ V ⊆ N)) →
    assert(V is open neighborhood of ΔS) →
    
    // Show refinement property
    setVar(x: S) →
    assert(⟨x,x⟩ ∈ ΔS ⊆ V) →
    assert(x ∈ V(x)) →
    assert(V(x) ⊆ N(x)) →
    assert(∃U∈U: N(x) ⊆ U) →
    assert(V(x) ⊆ U) →
    
    // Conclude for all x
    assert(∀x∈S: x∈V(x)) →
    assert(∀x∈S: ∃U∈U: V(x)⊆U) →
    assert({V(x): x∈S} is refinement of U)
  }

  // Sufficient condition
  lemma Sufficient() {
    assume(∃V(V is open neighborhood of ΔS in ⟨S×S, τ_S×S⟩ ∧
           {V(x): x∈S} is refinement of U)) →
    assert(V is neighborhood of ΔS in ⟨S×S, τ_S×S⟩) →
    assert(U is even cover of T)
  }

  apply(Necessary()) →
  apply(Sufficient()) →
  assert(conclusion)
}