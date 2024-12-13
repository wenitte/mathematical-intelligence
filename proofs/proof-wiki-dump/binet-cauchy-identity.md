theorem Binet_Cauchy_Identity() {
  setVars(n: ℕ, {ai, bi, ci, di}(i∈[1..n]): CommutativeRing) →
  assert(
    (∑(i=1 to n)(ai*ci)) * (∑(j=1 to n)(bj*dj)) = 
    (∑(i=1 to n)(ai*di)) * (∑(j=1 to n)(bj*cj)) + 
    ∑(1≤i<j≤n)((ai*bj - aj*bi) * (ci*dj - cj*di))
  )
}

proof Binet_Cauchy_Identity() {
  // Expand last summation term
  assert(
    ∑(1≤i<j≤n)((ai*bj - aj*bi) * (ci*dj - cj*di)) = 
    ∑(1≤i<j≤n)(ai*ci*bj*dj + aj*cj*bi*di - ai*di*bj*cj - aj*dj*bi*ci)
  ) →
  
  // Add diagonal terms (i=j) which cancel out
  assert(
    ∑(1≤i<j≤n)(ai*ci*bj*dj + aj*cj*bi*di) + ∑(i=1 to n)(ai*ci*bi*di) -
    ∑(1≤i<j≤n)(ai*di*bj*cj + aj*dj*bi*ci) - ∑(i=1 to n)(ai*di*bi*ci) =
    ∑(i=1 to n)∑(j=1 to n)(ai*ci*bj*dj) - ∑(i=1 to n)∑(j=1 to n)(ai*di*bj*cj)
  ) →
  
  // Factor terms by i and j indices
  assert(
    ∑(i=1 to n)∑(j=1 to n)(ai*ci*bj*dj) - ∑(i=1 to n)∑(j=1 to n)(ai*di*bj*cj) =
    (∑(i=1 to n)(ai*ci)) * (∑(j=1 to n)(bj*dj)) - 
    (∑(i=1 to n)(ai*di)) * (∑(j=1 to n)(bj*cj))
  )
}

lemma Alternative_Proof() {
  assert(
    "This identity is a special case of Cauchy-Binet Formula with m=2"
  ) →
  apply(Cauchy_Binet_Formula(m=2))
}