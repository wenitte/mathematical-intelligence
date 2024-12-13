# 

Source: https://proofwiki.org/wiki/Lebesgue_Space_is_Vector_Space



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space and let $p \in \closedint 1 \infty$.
Let $\map {\LL^p} {X, \Sigma, \mu}$ be Lebesgue $p$-space on $\struct {X, \Sigma, \mu}$.

Then $\map {\LL^p} {X, \Sigma, \mu}$ is a vector subspace of $\map \MM {X, \Sigma, \R}$, the space of real-valued $\Sigma$-measurable functions on $X$.
In particular, it is a vector space over $\R$.


Proof
From Space of Real-Valued Measurable Functions is Vector Space: 

$\map \MM {X, \Sigma, \R}$ forms a vector space with pointwise addition and pointwise scalar multiplication.
From construction, we have: 

$\map {\LL^p} {X, \Sigma, \mu} \subseteq \map \MM {X, \Sigma, \R}$
Since $0 \in \map {\LL^p} {X, \Sigma, \mu}$, we have $\map {\LL^p} {X, \Sigma, \mu} \ne \O$.
From the One-Step Vector Subspace Test, it suffices to show that for each $f, g \in \map {\LL^p} {X, \Sigma, \mu}$ and $\lambda \in \R$ we have: 

$f + \lambda g \in \map {\LL^p} {X, \Sigma, \mu}$


Case 1: $1 \le p < \infty$
Since: 

$\ds \paren {\int \size g^p \rd \mu}^{1/p} < \infty$
we have: 














\(\ds \paren {\int \size {\lambda g}^p \rd \mu}^{1/p}\)

\(=\)







\(\ds \paren {\int \size \lambda^p \size g^p \rd \mu}^{1/p}\)




















\(\ds \)

\(=\)







\(\ds \paren {\size \lambda^p \int \size g^p \rd \mu}^{1/p}\)





Integral of Positive Measurable Function is Positive Homogeneous














\(\ds \)

\(=\)







\(\ds \size \lambda \paren {\int \size g^p \rd \mu}^{1/p}\)




















\(\ds \)

\(<\)







\(\ds \infty\)









From Minkowski's Inequality on Lebesgue Space, we have: 

$f + \lambda g \in \map {\LL^p} {X, \Sigma, \mu}$
as required.
$\Box$


Case 2: $p = \infty$
From $g \in \map {\LL^\infty} {X, \Sigma, \mu}$, we have: 

$\map \mu {\set {x \in X : \size {\map g x} \ge c} } = 0$ for some $c > 0$.
Then we have: 

$\map \mu {\set {x \in X : \size {\map g x} \ge c} } = \map \mu {\set {x \in X : \size {\lambda \map g x} \ge \size \lambda c} } = 0$
So $\lambda g \in \map {\LL^\infty} {X, \Sigma, \mu}$.
Then, from Minkowski's Inequality on Lebesgue Space, we have: 

$f + \lambda g \in \map {\LL^\infty} {X, \Sigma, \mu}$
as required.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $12.5 \ \text{(i)}$




