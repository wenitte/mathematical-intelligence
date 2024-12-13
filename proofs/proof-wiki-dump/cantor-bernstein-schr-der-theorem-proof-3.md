theorem Cantor_Bernstein_Schroeder() {
  assert(
    ∀S,T[sets] ∧
    ∃f: S → T[injection] ∧
    ∃g: T → S[injection] ⇒
    ∃h: S → T[bijection]
  )
} ↔

proof Cantor_Bernstein_Schroeder() {
  setVar(S,T: sets) →
  setVar(f: S → T[injection]) →
  setVar(g: T → S[injection]) →
  
  define(ℙS: powerSet(S)) →
  define(ℙT: powerSet(T)) →
  
  define(𝒞_S: ℙS → ℙS, X ↦ S∖X) →
  define(𝒞_T: ℙT → ℙT, Y ↦ T∖Y) →
  
  define(α: ℙS → ℙT, X ↦ f(X)) →
  define(β: ℙT → ℙS, Y ↦ g(Y)) →
  
  define(z: ℙS → ℙS, z = 𝒞_S ∘ β ∘ 𝒞_T ∘ α) →
  
  lemma z_increasing() {
    assert(∀A,B ∈ ℙS: A ⊆ B ⇒ z(A) ⊆ z(B)) →
    proof {
      assert(A ⊆ B ⇒ α(A) ⊆ α(B)) →
      assert(⇒ 𝒞_T(α(A)) ⊇ 𝒞_T(α(B))) →
      assert(⇒ β(𝒞_T(α(A))) ⊇ β(𝒞_T(α(B)))) →
      assert(⇒ 𝒞_S(β(𝒞_T(α(A)))) ⊆ 𝒞_S(β(𝒞_T(α(B))))) →
      assert(⇒ z(A) ⊆ z(B))
    }
  } →
  
  apply(Knaster_Tarski_Lemma) →
  setVar(𝔾 ∈ ℙS: z(𝔾) = 𝔾) →
  
  assert(𝒞_S ∘ 𝒞_S = id_ℙS) →
  assert(S∖𝔾 = g(𝒞_T(α(𝔾)))) →
  
  define(h: S → T,
    x ↦ {
      f(x) if x ∈ 𝔾,
      g⁻¹(x) if x ∈ S∖𝔾
    }
  ) →
  
  assert(S∖𝔾 ⊆ g(T)) →
  assert(g[injection] ⇒ g⁻¹[well_defined]) →
  assert(f[injection] ∧ g⁻¹[injection] ⇒ h[bijection])
}