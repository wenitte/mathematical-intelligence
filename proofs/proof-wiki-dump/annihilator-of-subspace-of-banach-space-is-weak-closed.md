theorem Annihilator_Subspace_Closed() {
  let(X: BanachSpace) ∧
  let(M: VectorSubspace(X)) ∧
  let(X*: NormedDualSpace(X)) ∧
  let(w*: WeakStarTopology(X*)) ∧
  let(M⊥: Annihilator(M)) →
  assert(isClosed(M⊥, (X*, w*)))
} ↔

proof Annihilator_Subspace_Closed_1() {
  lemma Closure_Equality() {
    assert(isClosed(S) ↔ S = cl_w*(S))
  } →
  
  assert(M⊥ ⊆ cl_w*(M⊥)) →
  
  let(f ∈ cl_w*(M⊥)) →
  
  lemma Net_Convergence() {
    assert(∃(Λ: DirectedSet) ∧ ∃(f_λ: Net(Λ → M⊥)) →
    converges(f_λ, f, (X*, w*)))
  } →
  
  assert(∀x ∈ X → converges(f_λ(x), f(x), 𝔽)) →
  assert(∀λ ∈ Λ, ∀x ∈ M → f_λ(x) = 0) →
  
  lemma Hausdorff_Property() {
    assert(isHausdorff(𝔽) →
    (converges(net, a) ∧ converges(net, b)) → a = b)
  } →
  
  apply(Hausdorff_Property()) →
  assert(∀x ∈ M → f(x) = 0) →
  assert(f ∈ M⊥) →
  
  assert(cl_w*(M⊥) ⊆ M⊥) →
  assert(M⊥ = cl_w*(M⊥)) →
  apply(Closure_Equality()) →
  assert(isClosed(M⊥, (X*, w*)))
}

proof Annihilator_Subspace_Closed_2() {
  lemma Kernel_Intersection() {
    assert(M⊥ = ⋂_{x∈M} ker(x^))
  } →
  
  lemma Functional_Continuity() {
    assert(∀x ∈ X → isContinuous(x^, (X*, w*), 𝔽))
  } →
  
  lemma Kernel_Closed() {
    assert(isContinuous(f) → isClosed(ker(f)))
  } →
  
  apply(Kernel_Intersection()) →
  apply(Functional_Continuity()) →
  apply(Kernel_Closed()) →
  assert(∀x ∈ M → isClosed(ker(x^), (X*, w*))) →
  assert(isClosed(⋂_{x∈M} ker(x^), (X*, w*))) →
  assert(isClosed(M⊥, (X*, w*)))
}