# 

Source: https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Identification_Topology

Theorem
Let $T_1 = \struct {S_1, \tau_1}$ be a topological space.
Let $S_2$ be a set.
Let $f: S_1 \to S_2$ be a mapping.
Let $\tau_2$ be the identification topology on $S_2$ with respect to $f$ and $\struct {S_1, \tau_1}$.

Then the identification topology on $S_2$ with respect to $f$ and $\struct {S_1, \tau_1}$ always exists and is unique.


Proof
Let $\tau_2$ be the identification topology on $S_2$ with respect to $f$ and $\struct {S_1, \tau_1}$.
By definition:

$\tau_2 := \set {V \in \powerset {S_2}: f^{-1} \sqbrk V \in \tau_1} \subseteq \powerset {S_2}$
where $\powerset {S_2}$ is the power set of $S_2$.

Let $V \subseteq S_2$.
Then either:

$f^{-1} \sqbrk V \in \tau_1 \implies V \in \tau_2$
or:

$f^{-1} \sqbrk V \notin \tau_1 \implies V \notin \tau_2$
In particular:

$f^{-1} \sqbrk {S_2} = S_1 \in \tau_1 \implies S_2 \in \tau_2$
Thus $\tau_2$ exists.

By the same coin, given any $V \subseteq S_2$, either $V \in \tau_2$ or $V \notin \tau_2$, and so the set:

$\tau_2 := \set {V \in \powerset {S_2}: f^{-1} \sqbrk V \in \tau_1}$
consists of a uniquely defined set of elements.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.8$: Quotient spaces




