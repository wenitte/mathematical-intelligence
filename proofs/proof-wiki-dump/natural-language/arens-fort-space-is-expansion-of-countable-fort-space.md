# 

Source: https://proofwiki.org/wiki/Arens-Fort_Space_is_Expansion_of_Countable_Fort_Space

Theorem
Let $T = \struct {S, \tau}$ be the Arens-Fort space, where $S = \Z_{\ge 0} \times \Z_{\ge 0}$.
Let $T_p = \struct {S, \tau_p}$ be the Fort space on $S$ where $p = \left({0, 0}\right)$.

Then $\tau$ is an expansion of $\tau_p$.

Furthermore, $S$ is countably infinite, so $T_p$ is a countable Fort space.


Proof
Let $H \in \tau_p$ where $p = \tuple {0, 0}$.
Then either:

$(1): \quad \tuple {0, 0} \in \relcomp S H$
or:

$(2): \quad H$ is cofinite in $S$, that is $\relcomp S H$ is finite.

Case $(1)$ means that $\tuple {0, 0} \notin H$ and so $H \in \tau$ by definition of the Arens-Fort space.

Suppose case $(2)$ applies.
Then for all $m \in \Z_{\ge 0}$, the sets $S_m$ defined as $S_m = \set {n: \tuple {m, n} \notin H}$ are finite.
Thus in a finite number of these (that is, none of them) the set $S_m$ is infinite.
So $H \in \tau$.

So, if $H \in \tau_p$ it follows that $H \in \tau$ and so $\tau_p \subseteq \tau$.
Hence the result by definition of expansion.

Finally, from Arens-Fort Space is Countable we have that $S$ is countably infinite.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $26$. Arens-Fort Space: $1$




