# 

Source: https://proofwiki.org/wiki/Minkowski_Functional_of_Open_Ball_with_respect_to_Seminorm_is_Seminorm

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $X$ be a vector space over $\GF$.
Let $p$ be a seminorm on $X$.
Let: 

$B = \set {x \in X : \map p x < 1}$
be the open ball centred at ${\mathbf 0}_X$ with radius $1$ in the pseudometric induced by $p$. 
Let $\mu_B$ the Minkowski functional of $B$. 

Then $p = \mu_B$.


Proof
From Open Ball with respect to Seminorm is Convex, Balanced and Absorbing, $B$ is convex and absorbing.
Hence the definition is valid.

Let $x \in X$.
From Seminorm Axiom $\text N 2$: Positive Homogeneity:

$\forall s > \map p x: \map p {\dfrac x s} = \dfrac 1 s \map p x < 1$

Then we have: 

$s \in \set {t > 0 : t^{-1} x \in B}$
so that: 

$\map {\mu_B} x \le s$
Taking the infimum over $s > \map p x$, we have: 

$\map {\mu_B} x \le \map p x$

Let $\map p x = 0$.
Then:

$\map p x \le \map {\mu_B} x$

Let $\map p x \ne 0$. 
Let $0 < t \le \map p x$.
Then: 

$\map p {\dfrac x t} = \dfrac 1 t \map p x \ge 1$
So $t^{-1} x \notin B$.

So:

$\forall x \in X: \map {\mu_B} x \ge \map p x$

We therefore obtain: 

$\forall x \in X: \map {\mu_B} x = \map p x$
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $1.34$: Theorem




