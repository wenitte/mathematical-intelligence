# 

Source: https://proofwiki.org/wiki/Dimension_of_Annihilator_on_Algebraic_Dual

Theorem
Let $G$ be an $n$-dimensional vector space over a field.
Let $G^*$ be the algebraic dual of $G$.
Let $M$ be an $m$-dimensional subspace of $G$.
Let $M^\circ$ be the annihilator of $M$.

Then:

$M^\circ$ is an $\paren {n - m}$-dimensional subspace of $G^*$.


Proof
Let $\sequence {a_n}$ be an ordered basis of $G$ such that $\sequence {a_m}$ is an ordered basis of $M$.
Let $\sequence { {a_n}'}$ be the ordered dual basis of $G^*$.
Let $\ds t = \sum_{k \mathop = 1}^n \lambda_k {a_k}' \in M^\circ$.
Then:










\(\ds \forall j \in \closedint 1 m: \, \)



\(\ds \lambda_j\)

\(=\)







\(\ds \map {\sum_{k \mathop = 1}^n \lambda_k {a_k}'} {a_j}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\sum_{k \mathop = 1}^n \lambda_k {a_k}'} } {a_j}\)




















\(\ds \)

\(=\)







\(\ds \map t {a_j}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds 0\)










So $t$ is a linear combination of $\set { {a_k}': m + 1 \le k \le n}$.
But ${a_k}'$ clearly belongs to $M^\circ$ for each $k \in \closedint {m + 1} n$.
Therefore $M^\circ$ has dimension $n - m$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Theorem $28.10$




