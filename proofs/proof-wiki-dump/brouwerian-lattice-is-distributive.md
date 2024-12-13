theorem Brouwerian_Lattice_Is_Distributive() {
  assert(
    ∀L(BrouwerianLattice(L) → DistributiveLattice(L))
  )
} ↔

proof Brouwerian_Lattice_Is_Distributive() {
  setVar(S: Lattice) →
  setVar(x,y,z: Elements(S)) →
  
  lemma Brouwerian_Property() {
    assert(
      ∀x∈S, ∀f:S→S(
        (∀s∈S: f(s) = x ∧ s) → LowerAdjoint(f)
      )
    )
  } →
  
  define(f: S→S, 
    ∀s∈S: f(s) = x ∧ s
  ) →
  
  apply(Brouwerian_Property()) →
  assert(LowerAdjoint(f)) →
  
  lemma Lower_Adjoint_Preserves_Suprema() {
    assert(
      LowerAdjoint(f) → PreservesSuprema(f)
    )
  } →
  
  apply(Lower_Adjoint_Preserves_Suprema()) →
  assert(PreservesSuprema(f)) →
  
  assert(
    f(sup({y,z})) = sup(f→({y,z}))
  ) →
  
  chain_equation() {
    x ∧ (y ∨ z) 
    = f(y ∨ z)                    // by def of f
    = f(sup({y,z}))              // by def of join
    = sup(f→({y,z}))             // by suprema preservation
    = sup({f(y), f(z)})          // by image definition
    = sup({x ∧ y, x ∧ z})        // by def of f
    = (x ∧ y) ∨ (x ∧ z)          // by def of join
  } →
  
  assert(
    ∀x,y,z∈S: x ∧ (y ∨ z) = (x ∧ y) ∨ (x ∧ z)
  ) →
  
  conclude(DistributiveLattice(S))
}