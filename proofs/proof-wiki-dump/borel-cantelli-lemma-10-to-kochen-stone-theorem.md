theorem Borel_Cantelli_Extended() {
  let(An: sequence[events]) →
  let(∑P(An) = ∞) →
  assert(
    liminf[k→∞]((∑[1≤m,n≤k] P(An ∩ Am))/(∑[n=1→k] P(An))²) < ∞ 
    ⇒ P(An occurs infinitely often) > 0
  )
}

proof Borel_Cantelli_Extended() {
  fixVar(ℓ,k: ℕ, ℓ<k) →
  let(X = ∑[n=ℓ→k] 1_{An}) →
  
  assert(E[X] = ∑[n=ℓ→k] P(An)) ∧
  assert(E[X²] = ∑[ℓ≤m,n≤k] P(An ∩ Am)) →
  
  lemma Paley_Zygmund(θ=0) {
    assert(
      P(⋃[n=ℓ→k] An) = P(X>0) ≥ 
      (∑[n=ℓ→k] P(An))²/(∑[ℓ≤m,n≤k] P(An ∩ Am))
    )
  } →
  
  assert(
    P(⋃[n=ℓ→k] An) ≥ 
    (∑[n=1→k] P(An) - ∑[n=1→ℓ-1] P(An))²/
    (∑[1≤m,n≤k] P(An ∩ Am) - ∑[1≤m,n<ℓ] P(An ∩ Am))
  ) →
  
  let(c = liminf[k→∞]((∑[1≤m,n≤k] P(An ∩ Am))/(∑[n=1→k] P(An))²) < ∞) →
  
  assert(
    ∀k'≥k: (∑[1≤m,n≤k'] P(An ∩ Am))/(∑[n=1→k'] P(An))² ≈ c
  ) →
  
  assert(
    P(An occurs infinitely often) = 
    lim[ℓ→∞] lim[k→∞] P(⋃[n=ℓ→k] An) ≥ 1/c > 0
  )
}