# 

Source: https://proofwiki.org/wiki/Lp_Space_is_Vector_Space

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space, and let $p \in \closedint 1 \infty$.
Let $\map \MM {X, \Sigma, \R}/\sim_\mu$ be the space of real-valued measurable functions identified by $\mu$-A.E. equality.
Let $\map {L^p} {X, \Sigma, \mu}$ be the $L^p$ space of $\struct {X, \Sigma, \mu}$.
Let $+$ denote pointwise addition on $\map \MM {X, \Sigma, \R}/\sim_\mu$.
Let $\cdot$ be pointwise scalar multiplication on $\map \MM {X, \Sigma, \R}/\sim_\mu$.

Then: 

$\struct {\map {L^p} {X, \Sigma, \mu}, +, \cdot}_\R$
forms a vector space. 


Proof
It is sufficient to show that $\struct {\map {L^p} {X, \Sigma, \mu}, +, \cdot}_\R$ is a vector subspace of $\struct {\map \MM {X, \Sigma, \R}/\sim_\mu, +, \cdot}_\R$.

From $L^p$ Space is Subset of Space of Measurable Functions Identified by A.E. Equality:

$\map {L^p} {X, \Sigma, \mu} \subseteq \map \MM {X, \Sigma, \R}/\sim_\mu$

Let:

$\eqclass f {\sim_\mu}, \eqclass g {\sim_\mu} \in \map {L^p} {X, \Sigma, \mu}$
and:

$\lambda \in \R$
Then:

$f, g \in \map {\LL^p} {X, \Sigma, \mu}$
where $\map {\LL^p} {X, \Sigma, \mu}$ is the Lebesgue $p$-space $\struct {X, \Sigma, \mu}$. 

From the definition of pointwise addition on $\map \MM {X, \Sigma, \R}/\sim_\mu$: 

$\eqclass f {\sim_\mu} + \lambda \eqclass g {\sim_\mu} = \eqclass {f + \lambda g} {\sim_\mu}$
From Lebesgue Space is Vector Space:

$f + \lambda g \in \map {\LL^p} {X, \Sigma, \mu}$

So, from $L^p$ Space is Subset of Space of Measurable Functions Identified by A.E. Equality:

$\eqclass {f + \lambda g} {\sim_\mu} \in \map {L^p} {X, \Sigma, \mu}$.

So, from the One-Step Vector Subspace Test:

$\struct {\map {L^p} {X, \Sigma, \mu}, +, \cdot}_\R$ is a vector subspace of $\struct {\map \MM {X, \Sigma, \R}/\sim_\mu, +, \cdot}_\R$.

So $\struct {\map {L^p} {X, \Sigma, \mu}, +, \cdot}_\R$ forms a vector space as required.
$\blacksquare$





