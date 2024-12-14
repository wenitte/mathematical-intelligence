theorem Closure_Weak_Star_Topology_Annihilators() {
  let(X: BanachSpace) ∧
  let(X*: NormedDualSpace(X)) ∧
  let(w*: WeakStarTopology(X*)) ∧
  let(N: LinearSubspace(X*)) →
  assert(
    cl[w*](N) = (N⊥)⊥
  )
}

proof Closure_Weak_Star_Topology_Annihilators() {
  lemma Subset_Initial() {
    apply(Linear_Subspace_Subset_Double_Annihilator) →
    assert(N ⊆ (N⊥)⊥)
  } →
  
  lemma Closure_Preserves_Subset() {
    apply(Set_Closure_Preserves_Inclusion) →
    assert(cl[w*](N) ⊆ cl[w*]((N⊥)⊥))
  } →
  
  lemma Annihilator_Closed() {
    apply(Annihilator_Subspace_Banach_Weak_Star_Closed) ∧
    apply(Set_Closed_Iff_Equals_Closure) →
    assert(cl[w*](N) ⊆ (N⊥)⊥)
  } →
  
  lemma Reverse_Inclusion() {
    apply(Set_Complement_Inverts_Subsets) →
    assert(
      (∀f ∈ X* \ cl[w*](N)) → (f ∈ X* \ (N⊥)⊥)
    ) →
    
    setVar(f: X* \ cl[w*](N)) →
    apply(Existence_Non_Zero_Continuous_Linear_Functional) →
    assert(∃Φ ∈ (X*, w*)* : 
      Φ ≠ 0 ∧
      (∀g ∈ cl[w*](N): Φ(g) = 0) ∧
      Φ(f) ≠ 0
    ) →
    
    apply(Characterization_Continuity_Linear_Functional_Weak_Star) →
    assert(∃x ∈ X: Φ = x∧) →
    
    assert(∀g ∈ N: g(x) = 0) →
    assert(x ∈ N⊥) →
    assert(f(x) ≠ 0) →
    assert(f ∉ (N⊥)⊥) →
    
    conclude(X* \ cl[w*](N) ⊆ X* \ (N⊥)⊥) →
    conclude((N⊥)⊥ ⊆ cl[w*](N))
  } →
  
  conclude(cl[w*](N) = (N⊥)⊥)
}