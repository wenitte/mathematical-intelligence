theorem Associativity_on_Indexing_Set() {
  assert(
    ∀S(CommutativeSemigroup(S)) ∧
    ∀A(Set(A) ∧ Finite(A) ∧ NonEmpty(A)) ∧
    ∀x_α(Family(x_α, α ∈ A) ∧ Terms(x_α, S)) ∧
    ∀B_k(Family(B_k, 1 ≤ k ≤ n) ∧ Partition(B_k, A)) →
    ∏_{k=1}^n (∏_{α∈B_k} x_α) = ∏_{α∈A} x_α
  )
} ↔

proof Associativity_on_Indexing_Set() {
  setVar(k: ℕ_{>0}, card(B_k) = p_k) →
  
  define(r_0 = 0) →
  define(∀k ∈ ℕ_{>0}: r_k = ∑_{j=1}^k p_j) →
  define(p = r_n) →
  
  assert(r_k - r_{k-1} = p_k) →
  
  lemma Interval_Isomorphism() {
    assert(
      ∀k(card([1,p_k]) = card([r_{k-1}+1,r_k])) →
      ∃!τ_k(Isomorphism(τ_k: [1,p_k] → [r_{k-1}+1,r_k]))
    )
  } →
  
  define(∀j ∈ [1,p_k]: τ_k(j) = r_k + j) →
  
  setVar(ρ_k: [1,p_k] → B_k, Bijective(ρ_k)) →
  
  define(
    σ: [1,p] → A,
    ∀j ∈ [r_{k-1}+1,r_k], ∀k ∈ [1,n]:
    σ(j) = ρ_k(τ_k^{-1}(j))
  ) →
  
  define(∀j ∈ [1,p]: y_j = x_{σ(j)}) →
  
  assert(∏_{α∈A} x_α = ∏_{j=1}^p x_{σ(j)} = ∏_{j=1}^p y_j) →
  
  assert(∀k ∈ [1,n]: ∏_{α∈B_k} x_α = ∏_{i=1}^{p_k} x_{ρ_k(i)}) →
  
  assert(
    ∏_{j=r_{k-1}+1}^{r_k} y_j = 
    ∏_{i=1}^{p_k} y_{τ_k(i)} = 
    ∏_{i=1}^{p_k} x_{σ(τ_k(i))} = 
    ∏_{i=1}^{p_k} x_{ρ_k(i)}
  ) →
  
  apply(General_Associativity_Theorem()) →
  
  conclude(
    ∏_{α∈A} x_α = 
    ∏_{j=1}^p y_j = 
    ∏_{k=1}^n (∏_{j=r_{k-1}+1}^{r_k} y_j) =
    ∏_{k=1}^n (∏_{i=1}^{p_k} x_{ρ_k(i)}) =
    ∏_{k=1}^n (∏_{α∈B_k} x_α)
  )
}