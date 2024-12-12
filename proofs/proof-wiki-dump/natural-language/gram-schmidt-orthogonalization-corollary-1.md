# 

Source: https://proofwiki.org/wiki/Gram-Schmidt_Orthogonalization/Corollary_1



Corollary to Gram-Schmidt Orthogonalization
Let $\struct {V, \innerprod \cdot \cdot}$ be an inner product space over $\R$ or $\C$.
Let $m \in \N_{>0}$ be a natural number.
Let $S = \set {v_n: n \le m}$ be a finite linearly independent subset of $V$. 

Then there exists an orthonormal subset $E = \set {e_n: n \le m}$ of $V$ such that:

$\forall k \le m: \span \set {v_1, \ldots, v_k} = \span \set {e_1, \ldots, e_k}$
where $\span$ denotes linear span.


Proof
Apply Gram-Schmidt Orthogonalization with $v_{m'} = v_m$ for $m' \ge m$.
$\blacksquare$


Source of Name
This entry was named for Jørgen Pedersen Gram and Erhard Schmidt.


Sources
1994: Robert Messer: Linear Algebra: Gateway to Mathematics: $\S 4.4$




