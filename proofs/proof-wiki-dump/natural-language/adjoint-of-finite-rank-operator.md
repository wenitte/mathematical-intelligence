# 

Source: https://proofwiki.org/wiki/Adjoint_of_Finite_Rank_Operator

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {\HH, \innerprod \cdot \cdot_\HH}$ and $\struct {\KK, \innerprod \cdot \cdot_\KK}$ be Hilbert spaces over $\GF$.
Let $T \in \map {B_{00} } {\HH, \KK}$ be a bounded finite rank operator.

Then:

$T^* \in \map {B_{00} } {\KK, \HH}$
that is, the adjoint of $T$ is also a bounded finite rank operator.


Proof
From Characterization of Finite Rank Operators, there exists $e_1, e_2, \ldots, e_n \in \HH$ and $g_1, g_2, \ldots, g_n \in \KK$ such that: 

$\ds T x = \sum_{i \mathop = 1}^n \innerprod x {e_i}_\HH g_i$
for each $x \in \HH$. 
Then for each $x \in \HH$, $y \in \KK$ we have: 














\(\ds \innerprod {T x} y_\KK\)

\(=\)







\(\ds \innerprod {\sum_{i \mathop = 1}^n \innerprod x {e_i}_\HH g_i} y_\KK\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \innerprod {\innerprod x {e_i} g_i} y_\KK\)





Inner Product is Sesquilinear














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \innerprod x {e_i}_\HH \innerprod {g_i} y_\KK\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \innerprod x {e_i \overline {\innerprod {g_i} y_\KK} }_\HH\)





Inner Product is Sesquilinear














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \innerprod x {e_i \innerprod y {g_i}_\KK}_\HH\)





since the inner product is conjugate symmetric














\(\ds \)

\(=\)







\(\ds \innerprod x {\sum_{i \mathop = 1}^n \innerprod y {g_i}_\KK e_i}_\HH\)





Inner Product is Sesquilinear



From Existence and Uniqueness of Adjoint: Lemma 1, we therefore have: 

$\ds T^\ast y = \sum_{i \mathop = 1}^n \innerprod y {g_i}_\KK e_i$
for each $y \in \KK$. 
So that: 

$\ds T^\ast y \in \span \set {e_1, e_2, \ldots, e_n}$
for each $y \in \KK$. 
So we have that $T^\ast$ has finite rank.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text{II}.4$ Exercise $3$




