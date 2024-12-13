theorem BinetCauchy_Identity() {
  assert(
    ∀n ∈ ℕ, ∀(ai, bi, ci, di) ∈ R ⇒ 
    (∑[i=1→n] ai*ci)(∑[j=1→n] bj*dj) = 
    (∑[i=1→n] ai*di)(∑[j=1→n] bj*cj) + 
    ∑[1≤i<j≤n] (ai*bj - aj*bi)(ci*dj - cj*di)
  )
  where(R: commutative_ring)
}

proof BinetCauchy_Identity() {
  setVar(n: ℕ) →
  setVar((ai, bi, ci, di): R) →
  
  let RHS_LastTerm = ∑[1≤i<j≤n] (ai*bj - aj*bi)(ci*dj - cj*di) →
  
  assert(
    RHS_LastTerm = 
    ∑[1≤i<j≤n] (ai*ci*bj*dj + aj*cj*bi*di) - 
    ∑[1≤i<j≤n] (ai*di*bj*cj + aj*dj*bi*ci)
  ) →

  assert(
    RHS_LastTerm = 
    (∑[1≤i<j≤n] (ai*ci*bj*dj + aj*cj*bi*di) + ∑[i=1→n] ai*ci*bi*di) -
    (∑[1≤i<j≤n] (ai*di*bj*cj + aj*dj*bi*ci) + ∑[i=1→n] ai*di*bi*ci)
  ) →

  lemma CompleteSums() {
    assert(
      ∑[1≤i<j≤n] (ai*ci*bj*dj + aj*cj*bi*di) + ∑[i=1→n] ai*ci*bi*di =
      ∑[i=1→n]∑[j=1→n] ai*ci*bj*dj
    )
  } →

  apply(CompleteSums()) →

  assert(
    RHS_LastTerm = 
    ∑[i=1→n]∑[j=1→n] ai*ci*bj*dj - 
    ∑[i=1→n]∑[j=1→n] ai*di*bj*cj
  ) →

  assert(
    RHS_LastTerm = 
    (∑[i=1→n] ai*ci)(∑[j=1→n] bj*dj) - 
    (∑[i=1→n] ai*di)(∑[j=1→n] bj*cj)
  )
}