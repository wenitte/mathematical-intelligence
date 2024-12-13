theorem BrokenChordTheorem() {
  assert(
    ∀circle ∈ Plane,
    ∀A,C,M,B ∈ circle,
    arc(A,M) = arc(M,C) ∧
    B ∈ minorArc(A,M) ∧
    ∃D[D ∈ Plane ∧ MD ⊥ BC] →
    AB + BD = DC
  )
}

proof BrokenChordTheorem() {
  setVar(circle: Plane) →
  setVar(A,C,M,B: circle) →
  construct(D: MD ⊥ BC) →
  construct(E: BD = DE) →
  construct(H: arc(M,H) = arc(B,M)) →
  
  lemma PerpBisector() {
    assert(MD is_perpendicular_bisector_of BE) →
    assert(△MDB ≅ △MDE)
  } →

  setVar(α = ∠MBC) →
  setVar(β = ∠MCB) →
  setVar(γ = ∠CMH) →
  
  assert(∠MBC = ∠MEB = α) by(congruence) →
  assert(arc(A,M) = arc(A,B) + arc(B,M)) by(construction) →
  assert(arc(M,C) = arc(M,H) + arc(H,C)) by(construction) →
  assert(arc(A,B) = arc(H,C)) by(subtraction) →
  
  lemma EqualArcs() {
    assert(arc(A,B) = arc(H,C) → AB = HC) by(Euclid_III_29)
  } →
  
  assert(arc(H,C) subtends γ) →
  assert(∠MCH = β) by(InscribedAngleTheorem) →
  assert(arc(M,H,C) subtends α) →
  assert(α = β + γ) →
  assert(α = ∠CME + β) by(ExternalAngleTheorem) →
  assert(∠CME = γ = ∠CMH) by(subtraction) →
  
  lemma TriangleCongruence() {
    assert(MC is_shared ∧
           ∠MCH = ∠MCB = β ∧
           ∠CME = ∠CMH) →
    assert(△MCE ≅ △MCH) by(ASACongruence)
  } →
  
  assert(HC = EC) by(TriangleCongruence) →
  assert(AB = HC) by(EqualArcs) →
  assert(AB = EC) by(transitivity) →
  assert(AB + BD = DE + EC) by(CommonNotion2) →
  assert(AB + BD = CD) by(addition)
}