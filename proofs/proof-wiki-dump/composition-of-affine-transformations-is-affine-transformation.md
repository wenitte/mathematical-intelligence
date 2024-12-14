theorem Composition_of_Affine_Transformations() {
  assert(
    ∀𝔼,𝔽,𝔾: AffineSpace ∧
    let E = DifferenceSpace(𝔼) ∧
    let F = DifferenceSpace(𝔽) ∧
    let G = DifferenceSpace(𝔾) ∧
    let ℓ: 𝔼 → 𝔽 be AffineTrans ∧
    let 𝓜: 𝔽 → 𝔾 be AffineTrans ∧
    let L = TangentMap(ℓ) ∧
    let M = TangentMap(𝓜) ⇒
    (𝓜 ∘ ℓ) is AffineTrans with TangentMap(M ∘ L)
  )
}

proof Composition_of_Affine_Transformations() {
  setVar(𝒩 = 𝓜 ∘ ℓ: 𝔼 → 𝔾) →
  
  lemma Goal() {
    assert(
      ∀p,q ∈ 𝔼 ⇒
      𝒩(q) = 𝒩(p) + (M ∘ L)(vec(p,q))
    )
  } →

  step1() {
    assert(
      𝒩(q) = (𝓜 ∘ ℓ)(q) →
      𝒩(q) = 𝓜(ℓ(p) + L(vec(p,q)))
    ) by AffineTrans(ℓ)
  } →

  step2() {
    setVar(p' = ℓ(p)) →
    setVar(q' = ℓ(p) + L(vec(p,q))) →
    assert(vec(p',q') = L(vec(p,q))) →
    assert(
      𝒩(q) = 𝓜(q') →
      𝒩(q) = 𝓜(p') + M(vec(p',q'))
    ) by AffineTrans(𝓜)
  } →

  step3() {
    assert(
      𝒩(q) = 𝓜(ℓ(p)) + M(L(vec(p,q)))
    ) by substitute(p',q')
  } →

  conclude() {
    assert(
      𝒩(q) = (𝓜 ∘ ℓ)(p) + (M ∘ L)(vec(p,q))
    ) by definition(∘)
  }
}