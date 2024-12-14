theorem Chasles_Relation() {
  assert(
    ∀p,q,r ∈ E (AffineSpc(E) → (
      vec(p,q) = vec(p,r) + vec(r,q)
    ))
  )
}

proof Chasles_Relation() {
  setVar(E: AffineSpc) →
  setVar(p,q,r: E) →
  
  assert(vec(p,r) + vec(r,q) = (r - p) + (q - r)) by def(VectorInAffineSpace) →
  
  assert((r - p) + (q - r) = (r + (q - r)) - p) by axiom(AffineSpace_A3) →
  
  assert((r + (q - r)) - p = q - p) by axiom(AffineSpace_A1) →
  
  assert(q - p = vec(p,q)) by def(VectorInAffineSpace) →
  
  conclude(vec(p,q) = vec(p,r) + vec(r,q))
}