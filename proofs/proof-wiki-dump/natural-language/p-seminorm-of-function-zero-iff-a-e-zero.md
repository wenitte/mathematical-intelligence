# 

Source: https://proofwiki.org/wiki/P-Seminorm_of_Function_Zero_iff_A.E._Zero



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space and let $p \in \closedint 1 \infty$.
Let $\map {\LL^p} {X, \Sigma, \mu}$ be the Lebesgue $p$-space. 
Let $f \in \map {\LL^p} {X, \Sigma, \mu}$.

Then:

$\norm f_p = 0$ if and only if $f = 0$ $\mu$-almost everywhere
where $\norm \cdot_p$ is the $p$-seminorm. 


Proof
Case 1: $1 \le p < \infty$
We have that: 

$\norm f_p = 0$ if and only if $\norm f_p^p = 0$.
That is, $\norm f_p = 0$ if and only if:

$\ds \int \size f^p \rd \mu = 0$
From Measurable Function Zero A.E. iff Absolute Value has Zero Integral, this is equivalent to:

$\size f^p = 0$ almost everywhere.
From Pointwise Exponentiation preserves A.E. Equality, we have: 

$\size f = 0$ almost everywhere.
So:

$f = 0$ almost everywhere.
$\Box$


Case 2: $p = \infty$
We have that: 

$\norm f_\infty = 0$
if and only if:

$\inf \set {c > 0 : \map \mu {\set {x \in X : \size {\map f x} \ge c} } = 0} = 0$
From the definition of infimum, for each $\epsilon$ there exists $c < \epsilon$ such that: 

$\map \mu {\set {x \in X : \size {\map f x} \ge c} } = 0$
We show that it follows that: 

$\map \mu {\set {x \in X : \size {\map f x} \ge c} } = 0$
for all $c > 0$.
Aiming for a contradiction, suppose not, and there exists $M > 0$ such that: 

$\map \mu {\set {x \in X : \size {\map f x} \ge M} } > 0$
Then, from Survival Function is Decreasing, we have: 

$\map \mu {\set {x \in X : \size {\map f x} \ge c} } > 0$
for all $c \le M$.
But we have shown that there must exist $c \le M$ such that: 

$\map \mu {\set {x \in X : \size {\map f x} \ge c} } = 0$
which is a contradiction. 
So: 

$\map \mu {\set {x \in X : \size {\map f x} \ge c} } = 0$
for all $c > 0$.
Then, we have: 














\(\ds \map \mu {\set {x \in X : \size {\map f x} > 0} }\)

\(=\)







\(\ds \map \mu {\bigcup_{n \mathop = 1}^\infty \set {x \in X : \size {\map f x} \ge \frac 1 n} }\)




















\(\ds \)

\(=\)







\(\ds 0\)





Null Sets Closed under Countable Union



Then, if $\map f x \ne 0$ we have: 

$x \in \set {x \in X : \size {\map f x} > 0}$
which is a $\mu$-null set.
So: 

$f = 0$ $\mu$-almost everywhere.
$\blacksquare$





