theorem Characterization_vonNeumannBoundedness() {
  let(GF ∈ {ℝ,ℂ}) ∧
  let((X,𝒫) be Hausdorff locally convex space over GF) ∧
  let(U ⊆ X) →
  assert(
    U is vonNeumannBounded ↔ 
    ∀p∈𝒫 ∃Cp>0 ∀x∈U(p(x) < Cp)
  )
}

proof Characterization_vonNeumannBounded() {
  let(p ∈ 𝒫) →
  define(Bp := {y ∈ X : p(y) < 1}) →
  assert(Bp is open neighborhood of 0X) →
  
  lemma ScalingProperty() {
    let(r > 0) →
    assert(∀y∈X(p(y) < 1 ↔ p(ry) < r)) →
    conclude(rBp = {y ∈ X : p(y) < r})
  } →

  proofNecessity() {
    assume(U is vonNeumannBounded) →
    assert(∃s>0 ∀t>s(U ⊆ tBp)) →
    let(s be such value) →
    assert(U ⊆ {y ∈ X : p(y) < s+1}) →
    conclude(∀x∈U(p(x) < s+1))
  } →

  proofSufficiency() {
    assume(∀p∈𝒫 ∃Cp>0 ∀x∈U(p(x) < Cp)) →
    let(V be open neighborhood of 0X) →
    assert(∃p1,...,pn∈𝒫 ∃ε>0(⋂ᵏ₌₁ⁿ εBpk ⊆ V)) →
    define(r := (1/ε)max{Cp₁,...,Cpₙ}) →
    assert(r⋂ᵏ₌₁ⁿ εBpk = ⋂ᵏ₌₁ⁿ(max{Cp₁,...,Cpₙ})Bpk ⊆ rV) →
    assert(∀s>r ∀x∈U ∀k∈[1,n](p_k(x) < Cpk ≤ max{Cp₁,...,Cpₙ} < sε)) →
    conclude(∀s>r(U ⊆ sV)) →
    conclude(U is vonNeumannBounded)
  }
}