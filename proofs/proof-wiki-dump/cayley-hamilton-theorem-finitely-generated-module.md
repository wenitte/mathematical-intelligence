theorem CayleyHamilton_FinitelyGeneratedModule() {
  assert(
    ∀A: CommutativeRing(unity) ∧
    ∀M: FinitelyGenerated(A_Module) ∧
    ∀a: Ideal(A) ∧
    ∀φ: Endomorphism(M) →
    [φ(M) ⊆ aM] →
    ∃n,a₀,...,aₙ₋₁ ∈ a: φⁿ + aₙ₋₁φⁿ⁻¹ + ... + a₁φ + a₀ = 0
  )
} ↔

proof CayleyHamilton_FinitelyGeneratedModule() {
  setVar(End_A(M): A_Module(unity)) →
  define(R: A_Submodule(End_A(M))) {
    R = {a₀ + a₁φ + ... + aₖφᵏ | k ∈ ℕ, aᵢ ∈ A}
  } →
  assert(R: CommutativeRing(unity)) →
  
  letVar({m₁,...,mₙ}: Generator(M)) →
  ∀i ∈ {1,...,n}: assert(
    φ(mᵢ) = Σⱼ₌₁ⁿ(aⱼmⱼ), where aⱼ ∈ A
  ) →
  
  define(Δ: Matrix_R(n)) {
    Δ = (φδᵢⱼ - aᵢⱼ1_R)
  } →
  
  assert(Δ·[m₁,...,mₙ]ᵀ = 0_Rⁿ) →
  
  letVar(adj(Δ): AdjugateMatrix(Δ)) →
  apply(MatrixAdjugateProduct) {
    adj(Δ)·Δ = Δ·adj(Δ) = det(Δ)I_n
  } →
  
  apply(CramersRule) →
  assert(∀i ∈ {1,...,n}: det(Δ)mᵢ = 0) →
  conclude(det(Δ) = 0_R) →
  
  expand(det(Δ)) {
    det(Δ) = Σ_λ(sgn(λ)∏ₖ₌₁ⁿ(δₖλ(ₖ)φ - aₖλ(ₖ)1_R))
    = φⁿ + aₙ₋₁φⁿ⁻¹ + ... + a₁φ + a₀1_R
    where aᵢ ∈ a
  } →
  
  conclude(φⁿ + aₙ₋₁φⁿ⁻¹ + ... + a₁φ + a₀ = 0)
}