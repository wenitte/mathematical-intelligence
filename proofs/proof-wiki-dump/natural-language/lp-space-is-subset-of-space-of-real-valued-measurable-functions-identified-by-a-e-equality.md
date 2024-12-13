# 

Source: https://proofwiki.org/wiki/Lp_Space_is_Subset_of_Space_of_Real-Valued_Measurable_Functions_Identified_by_A.E._Equality

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space, and let $p \in \closedint 1 \infty$.
Let $\map {\mathcal M} {X, \Sigma, \R}/\sim_\mu$ be the space of real-valued measurable functions identified by $\mu$-A.E. equality.
Let $\map {L^p} {X, \Sigma, \mu}$ be the $L^p$ space of $\struct {X, \Sigma, \mu}$.

Then: 

$\map {L^p} {X, \Sigma, \mu} \subseteq \map {\mathcal M} {X, \Sigma, \R}/\sim_\mu$
In particular:

if $f \in \map {\LL^p} {X, \Sigma, \mu}$ and $f \sim_\mu F$ we have $F \in \map {\LL^p} {X, \Sigma, \mu}$


Proof
Let $f \in \map {\LL^p} {X, \Sigma, \mu}$.
Denote by $\eqclass f {\sim_\mu}$ the $\sim_\mu$-equivalence class of $f$ in $\map {\LL^p} {X, \Sigma, \mu}$.
Let $\eqclass f {\sim_\mu}^\ast$ be the $\sim_\mu$-equivalence class of $f$ in $\map {\mathcal M} {X, \Sigma, \R}$.
We aim to show that: 

$\eqclass f {\sim_\mu} = \eqclass f {\sim_\mu}^\ast$
Since $\map {\LL^p} {X, \Sigma, \mu} \subseteq \map {\mathcal M} {X, \Sigma, \R}$, we have:

$\eqclass f {\sim_\mu} \subseteq \eqclass  f {\sim_\mu}^\ast$
Now let $F \in \eqclass f {\sim_\mu}^\ast$.
Then: 

$F \sim_\mu f$
From Pointwise Exponentiation preserves A.E. Equality, we have: 

$\size F^p \sim_\mu \size f^p$
Then, from A.E. Equal Positive Measurable Functions have Equal Integrals: Corollary 1, we have: 

$\ds \int \size F^p \rd \mu = \int \size f^p \rd \mu$
so that: 

$\ds \paren {\int \size F^p \rd \mu}^{1/p} = \paren {\int \size f^p \rd \mu}^{1/p}$
so:

$\norm F_p = \norm f_p < \infty$
We therefore finally have: 

$F \in \map {\LL^p} {X, \Sigma, \mu}$
giving:

$\eqclass f {\sim_\mu} = \eqclass f {\sim_\mu}^\ast$
$\blacksquare$





