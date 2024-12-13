theorem ArensFort_Not_FirstCountable() {
  assert(
    ∀T[T = ⟨S,τ⟩ ∧ IsArensForSpace(T) → ¬IsFirstCountable(T)]
  )
} ↔

proof ArensFort_Not_FirstCountable() {
  assume(IsFirstCountable(T)) →
  setVar(B₀: {Uᵢ}ᵢ₌₁^∞ as CountableLocalBase(⟨0,0⟩)) →
  
  lemma ExistsLargerPoint() {
    assume(¬∃⟨nᵢ,mᵢ⟩ ∈ Uᵢ[nᵢ > i ∧ mᵢ > i]) →
    setVar(Sₖ := {n: ⟨k,n⟩ ∉ Uᵢ}) →
    assert(k > i → Sₖ = ℤ₊) →
    assert(∀k[k > i → Sₖ is infinite]) →
    contradicts(ArensForSpace_Definition()) →
    therefore(∃⟨nᵢ,mᵢ⟩ ∈ Uᵢ[nᵢ > i ∧ mᵢ > i])
  } →
  
  setVar(E := X ∖ {⟨nᵢ,mᵢ⟩}ᵢ₌₁^∞) →
  
  lemma E_IsNeighborhood() {
    setVar(Sᵢ := {m: ⟨i,m⟩ ∉ E}) →
    assert(Sᵢ = {m: ⟨i,m⟩ ∈ {⟨nⱼ,mⱼ⟩}ⱼ₌₁^∞}) →
    assert(j > i → nⱼ > j > i) →
    assert(Sᵢ ⊆ {mⱼ}ⱼ₌₁^i) →
    therefore(Sᵢ is finite)
  } →
  
  assert(⟨nᵢ,mᵢ⟩ ∉ E) →
  assert(¬∃Uᵢ[Uᵢ ⊆ E]) →
  contradicts(CountableLocalBase_Definition()) →
  therefore(¬IsFirstCountable(T))
}