# 

Source: https://proofwiki.org/wiki/Null_Sequence_in_Metrizable_Topological_Vector_Space_Dominates_some_Sequence_of_Scalars_Tending_to_Infinity

Theorem
Let $\GF \in \set {\R, \C}$.
Let $\struct {X, \tau}$ be a metrizable topological vector space over $\GF$.
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence with $x_n \to {\mathbf 0}_X$. 

Then there exists a sequence of positive real numbers $\sequence {\gamma_n}_{n \mathop \in \N}$ such that:

$\gamma_n \to \infty$
and:

$\gamma_n x_n \to {\mathbf 0}_X$


Proof
From Birkhoff-Kakutani Theorem: Topological Vector Space, there exists an invariant metric $d$ on $X$ that induces $\tau$.
Then:

$\map d {x_n, { {\mathbf 0}_X} } \to 0$
Pick $n_1 \in \N$ such that:

$\map d {x_n, { {\mathbf 0}_X} } < 1$ for $n > n_1$.
Inductively, for $k \ge 2$, pick $n_k > n_{k - 1}$ such that:

$\map d {x_n, { {\mathbf 0}_X} } < k^{-2}$ for $n > n_k$.
For $n < n_2$, set $\gamma_n = 1$. 
For $k \ge 2$ and $n_k \le n < n_{k + 1}$, set $\gamma_n = k$.
For each $n$, let $\map k n$ be the unique $k \in \N$ such that $n_k \le n < n_{k + 1}$. 
Since $n_k < n_{k + 1}$, we have $\map k n \to \infty$ as $n \to \infty$.
Now, for $n \ge n_2$:














\(\ds \map d {\gamma_n x_n, { {\mathbf 0}_X} }\)

\(=\)







\(\ds \map d {\map k n x_n, { {\mathbf 0}_X} }\)




















\(\ds \)

\(\le\)







\(\ds \map k n \map d {x_n, { {\mathbf 0}_X} }\)





Subadditivity of Invariant Metric on Vector Space














\(\ds \)

\(<\)







\(\ds \frac 1 {\map k n}\)





since $\map d {x_n, { {\mathbf 0}_X} } < k^{-2}$ for $n > n_k$



Taking $n \to \infty$, we obtain:

$\map d {\gamma_n x_n, { {\mathbf 0}_X} } \to 0$
and hence:

$\gamma_n x_n \to {\mathbf 0}_X$
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.28$: Theorem




