theorem AffineTransformation_Characterization() {
  assert(
    ∀E,F: AffineSpace(K) ∧
    ∀L: (E → F) ↔
    (L is_affine_transformation ↔
      ∀p,q ∈ E, ∀λ ∈ K: 
        L(λp + (1-λ)q) = λL(p) + (1-λ)L(q))
  )
}

proof AffineTransformation_Characterization() {
  // Sufficient Condition
  lemma Sufficient() {
    setVar(L: affine_transformation) →
    setVar(L_t: tangent_map) →
    setVar(r ∈ E) →
    assert(λp + (1-λ)q = r + λ(rp) + (1-λ)(rq)) →
    assert(
      L(λp + (1-λ)q) 
      = L(r) + L_t(λp + (1-λ)q)  // Definition of affine transformation
      = L(r) + λL_t(p) + (1-λ)L_t(q)  // L_t is linear
      = λL(p) + (1-λ)L(q)  // Definition of barycenter
    )
  }

  // Necessary Condition
  lemma Necessary() {
    assume(∀p,q ∈ E, ∀λ ∈ K: 
      L(λp + (1-λ)q) = λL(p) + (1-λ)L(q)) →
    setVar(E_diff: difference_space(E)) →
    setVar(p ∈ E) →
    define(L_t(u) := L(p+u) - L(p)) →
    
    // Prove L_t preserves scalar multiplication
    assert(
      L_t(λu)
      = L(p + λu) - L(p)  // Definition of L_t
      = L((1-λ)p + λ(p+u))  // Barycenter
      = (1-λ)L(p) + λL(p+u) - L(p)  // Hypothesis
      = λ(L(p+u) - L(p))  // Simplify
      = λL_t(u)  // Definition of L_t
    ) →

    // Prove L_t preserves addition
    assert(p + u + v = 1/2(p + 2u) + 1/2(p + 2v)) →
    assert(
      L(p + u + v)
      = L(1/2(p + 2u) + 1/2(p + 2v))
      = 1/2L(p + 2u) + 1/2L(p + 2v)  // Hypothesis
      = 1/2(L_t(2u) + L(p)) + 1/2(L_t(2v) + L(p))  // Definition of L_t
      = L_t(u) + L_t(v) + L(p)  // L_t preserves scalar multiplication
    ) →
    assert(L_t(u + v) = L_t(u) + L_t(v))  // Definition of L_t
  }

  apply(Sufficient()) ∧ apply(Necessary())
}