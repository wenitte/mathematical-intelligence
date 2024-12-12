# 

Source: https://proofwiki.org/wiki/Continuous_Mapping_on_Finer_Domain_and_Coarser_Codomain_Topologies_is_Continuous

Theorem
Let $\struct {X, \tau_1}$ and $\struct {Y, \tau_2}$ be topological spaces.
Let $f: \struct {X, \tau_1} \to \struct {Y, \tau_2}$ be a continuous mapping.

Let $\tau'_1$ be a finer topology on $X$ than $\tau_1$, that is, $\tau_1 \subseteq \tau'_1$.
Let $\tau'_2$ be a coarser topology on $Y$ than $\tau_2$, that is, $\tau'_2 \subseteq \tau_2$.

Then:

$f: \struct {X, \tau'_1} \to \struct {Y, \tau'_2}$ is a continuous mapping.


Proof
Let $U \in \tau'_2$.

Since $\tau'_2$ is a coarser topology than $\tau_2$:

$U \in \tau_2$
By definition of continuity:

$\map {f^{-1}} U \in \tau_1$
Since $\tau'_1$ is a finer topology than $\tau_1$:

$\map {f^{-1}} U \in \tau'_1$

Since $U$ was arbitrary, by definition of continuity:

$f: \struct {X, \tau'_1} \to \struct {Y, \tau'_2}$ is a continuous mapping
$\blacksquare$





