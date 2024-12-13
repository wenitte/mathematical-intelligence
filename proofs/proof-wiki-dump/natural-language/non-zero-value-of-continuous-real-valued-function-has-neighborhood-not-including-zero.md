# 

Source: https://proofwiki.org/wiki/Non-Zero_Value_of_Continuous_Real-Valued_Function_has_Neighborhood_not_including_Zero

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $f: M \to \R$ be a continuous real-valued function.
Let $\map f a > 0$ for some $a \in M$.

Then there exists $\delta \in \R_{>0}$ such that:

$\forall x \in \map {B_\delta} a$
where $\map {B_\delta} a$ denotes the open $\delta$-ball of $a$ in $M$.


Proof
Let $\epsilon \in \R_{>0}$ such that $\epsilon < \map f a$.
Let $\map {N_\epsilon} {\map f a} = \openint {\map f a - \epsilon} {\map f a + \epsilon}$ be the $\epsilon$-neighborhood of $\map f a$.
Then $\map {N_\epsilon} {\map f a}$ is an open interval of $\map f a$ such that:

$\forall y \in \map {N_\epsilon} {\map f a}: y > 0$

We are given that $f$ is continuous.
So, by definition:

$\exists U \subseteq A: \forall x \in U: \map f x \in \map {N_\epsilon} {\map f a}$
where $U$ is an open set of $M$.
As $a \map {N_\epsilon} {\map f a}$, it follows that:

$a \in U$
By definition of open set:

$\exists \delta \in \R_{>0}: \map {B_\delta} a \subseteq U$
Hence:

$\forall x \in \map {B_\delta} a: \map f x \in \map {N_\epsilon} {\map f a}$
As we have already noted that:

$\forall y \in \map {N_\epsilon} {\map f a}: y > 0$
the result follows.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 13$




