theorem_definition(Cayley-Hamilton_Theorem) ↔
∀T ∈ L(V), ∀v ∈ V, ∃χT(x) (Characteristic_Polynomial(T)) →
χT(T) = 0.
→

definition(Minimal_Polynomial) ↔
∀T ∈ L(V), ∀v ∈ V, ∃m ∈ ℕ, ∃a₀, a₁, …, aₘ₋₁ ∈ ℝ,
Tᵐv = -Σ_{j=0}^{m-1} aⱼTʲv ↔
minP(T,v)(x) = xᵐ + Σ_{j=0}^{m-1} aⱼxʲ.
→

lemma(Characteristic_Polynomial_Factorization) ↔
∀T ∈ L(V), ∀v ∈ V, minP(T,v) | χT(x).
→

lemma(Matrix_Representation) ↔
∀T ∈ L(V), dim(V) = n →
∃basis {v, Tv, T²v, …, Tᵏ⁻¹v, uₖ₊₁, …, uₙ},
∃A ∈ ℝⁿˣⁿ, A =
[
B C
0 D
]
where B is the companion matrix of minP(T,v),
χA(x) = χB(x)χD(x), and χB(x) = (-1)ᵏminP(T,v)(x).
→

proof(Cayley-Hamilton_Theorem) ↔
BaseCase ↔
∀v ∈ V, span{v, Tv, T²v, …, Tᵏ⁻¹v} is T-invariant ∧
A has block form with B representing T-invariant subspace ∧
minP(T,v) divides χT(x).

InductiveStep ↔  
    ∀w ∈ V, χT(T)w = Q(T)minP(T,w)(T)w = Q(T)(0) = 0.  

Combining ↔  
    BaseCase ∧ InductiveStep →  
    χT(T) = 0.  

→

conclusion(Cayley-Hamilton_Theorem) ↔
∀T ∈ L(V), χT(T) = 0.
∴ Proved.
