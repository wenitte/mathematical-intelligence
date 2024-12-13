theorem CanonicalInjectionIdealExternalDirectSum() {
  let(R_k: Ring, k ∈ [1..n]) →
  let(R = ∏_{k=1}^n R_k) →
  setVar(R'_k = {(x₁,...,xₙ) ∈ R | ∀j≠k: xⱼ=0}) →
  define(inj_k: R_k → R, "canonical injection") →
  define(pr_k: R → R'_k, "projection") →
  assert(
    (inj_k: R_k → R'_k is_isomorphism) ∧
    (pr_k|_{R'_k} = inj_k⁻¹)
  )
} ↔

proof CanonicalInjectionIdealExternalDirectSum() {
  lemma IdealExternalDirectSum() {
    assert(R'_k is_ideal_of R) →
    assert(R'_k is_subring_of R)
  } →
  
  apply(IdealExternalDirectSum()) →
  
  lemma CanonicalInjectionMonomorphism() {
    assert(inj_k: R_k → R is_monomorphism)
  } →
  
  apply(CanonicalInjectionMonomorphism()) →
  
  assert(inj_k(R_k) = R'_k) →
  assert(pr_k ∘ inj_k = id_{R_k}) →
  assert(inj_k ∘ pr_k|_{R'_k} = id_{R'_k}) →
  
  conclude(
    (inj_k: R_k → R'_k is_isomorphism) ∧
    (pr_k|_{R'_k} = inj_k⁻¹)
  )
}