theorem_definition(sylow_theorems) ↔ 
∀G (|G| = p^k * m ∧ p ∈ prime_numbers ∧ gcd(p, m) = 1) → 
(∃P (P ⊆ G ∧ |P| = p^k) ∧ ∀P₁ P₂ (P₁, P₂ are Sylow_p_subgroups of G → P₁ is_conjugate_to P₂) ∧ ∃n_p (n_p ≡ 1 mod p ∧ n_p | m)).

proof(sylow_theorems) ↔ 
assume(|G| = p^k * m ∧ p ∈ prime_numbers ∧ gcd(p, m) = 1) →
let S = {subsets of G of size p^k} →
|S| = (|G| choose p^k) →
G acts on S by right multiplication →
∃X ∈ S such that |X| mod p ≠ 0 →
define P = stabilizer of X in G →
|P| = p^k →
P is a Sylow_p_subgroup of G →
∀P₁ P₂ (P₁, P₂ are Sylow_p_subgroups of G) →
G acts on the set of Sylow_p_subgroups by conjugation →
∃g ∈ G such that gP₁g⁻¹ = P₂ →
P₁ is_conjugate_to P₂ →
let n_p = number of Sylow_p_subgroups of G →
|G| = |P| * |G : P| →
|G : P| = n_p →
n_p ≡ 1 mod p →
n_p | m.