theorem Paracompactness_Characterization_Lemma18() {
  assert(
    ∀X[Set] ∧ ∃≤[WellOrdering(X)] ∧
    let(X×X: CartesianProduct(X,X)) ∧
    let({Un}n∈ℕ: Sequence(℘(X×X))) ∧
    (∀n∈ℕ: ΔX ⊆ Un) ∧
    let(An(x) = Un(x) \ (⋃y≺x,y≠x Un+1(y))) ∧
    let(𝔸n = {An(x): x∈X}) ∧
    let(𝔸 = ⋃n∈ℕ>0 𝔸n) →
    𝔸 is_cover_of X
  )
}

proof Paracompactness_Characterization_Lemma18() {
  setVar(x: X) →
  assert(∀n∈ℕ>0: ΔX ⊆ Un) →
  assert(∀n∈ℕ>0: x ∈ Un(x)) →
  
  lemma Min_Element_Exists() {
    let(y = min{z∈X: x ∈ ⋃n∈ℕ Un(z)}) →
    assert(y exists_by WellOrdering(X))
  } →
  
  apply(Min_Element_Exists()) →
  assert(∃n∈ℕ>0: x ∈ Un(y)) ∧
  assert(∀z≺y,z≠y: x ∉ Un+1(z)) →
  
  assert(x ∉ ⋃z≺y,z≠y Un+1(z)) →
  assert(x ∈ Un(y) \ ⋃z≺y,z≠y Un+1(z)) →
  assert(x ∈ An(y)) →
  
  assert(∀x∈X: ∃y∈X,n∈ℕ>0: x ∈ An(y)) →
  assert(𝔸 is_cover_of X by_def_of Cover)
}