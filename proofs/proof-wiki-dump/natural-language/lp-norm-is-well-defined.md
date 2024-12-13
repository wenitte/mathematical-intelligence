# 

Source: https://proofwiki.org/wiki/Lp_Norm_is_Well-Defined

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space, and let $p \in \hointr 1 \infty$. 
Let $\map {\LL^p} {X, \Sigma, \mu}$ be the Lebesgue $p$-space of $\struct {X, \Sigma, \mu}$. 
Let $\sim$ be the $\mu$-almost-everywhere equality relation on $\map {\LL^p} {X, \Sigma, \mu}$.
Let $\map {L^p} {X, \Sigma, \mu}$ be the $L^p$ space on $\struct {X, \Sigma, \mu}$.
Let $\eqclass f \sim \in \map {L^p} {X, \Sigma, \mu}$. 

Then the $L^p$ norm: 

$\ds \norm {\eqclass f \sim}_p = \paren {\norm f_p}^{1/p}$
is well-defined.


Proof
Note that: 

$\ds \int \size f^p \rd \mu$
is well-defined from the definition of the Lebesgue $p$-space. 
We show that for $E \in \map {L^p} {X, \Sigma, \mu}$, $\norm E_p$ is independent of the representative chosen for $E$.
Let:

$E = \eqclass f \sim = \eqclass g \sim$
for $\eqclass f \sim, \eqclass g \sim \in \map {L^p} {X, \Sigma, \mu}$.
We show that: 

$\norm f_p = \norm g_p$
From Equivalence Class Equivalent Statements, we have: 

$f \sim g$
So, from the definition of the almost-everywhere equality relation, we have: 

$\map f x = \map g x$ for $\mu$-almost all $x \in X$.
That is, there exists a $\mu$-null set $N$ such that: 

if $\map f x \ne \map g x$ then $x \in N$.
If $\size {\map f x}^p \ne \size {\map g x}^p$, we have $\map f x \ne \map g x$, so:

if $\size {\map f x}^p \ne \size {\map g x}^p$ then $x \in N$.
So:

$\size {\map f x}^p = \size {\map g x}^p$ for $\mu$-almost all $x \in X$.
So, from A.E. Equal Positive Measurable Functions have Equal Integrals, we have: 

$\ds \paren {\int \size f^p \rd \mu}^{1/p} = \paren {\int \size g^p \rd \mu}^{1/p}$
That is: 

$\norm f_p = \norm g_p$
as required.
$\blacksquare$





