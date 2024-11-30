((prime(p) ↔ p > 1 ∧ (∀n. n | p → n = 1 ∨ n = p)) ∧  
 (prime(p) → (∀m, n. p | (m * n) → (p | m ∨ p | n)))) →  

((composite(n) ↔ n > 1 ∧ (∃m. 1 < m < n ∧ m | n)) ∧  
 (composite(n) → ¬ prime(n))) →  

(∀n. n > 1 → (∃p. prime(p) ∧ p | n)) →  

(finite({p | prime(p)}) →  
 (let P = {p | prime(p)} ∧ max_prime = max(P)) →  
 (define N = ∏P + 1) →  

 (step 1: N > max_prime →  
   N is greater than all primes in P)) →  

 (step 2: N > 1 →  
   ∃q. prime(q) ∧ q | N)) →  

 (step 3: q ∈ P → contradiction →  
   (assume q ∈ P → q | (∏P + 1) → q | 1 → contradiction))) →  

 (step 4: q ∉ P →  
   q is a new prime → contradiction with max_prime)) →  

¬ finite({p | prime(p)})
