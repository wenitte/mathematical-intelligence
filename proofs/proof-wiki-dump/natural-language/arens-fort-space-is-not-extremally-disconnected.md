# 

Source: https://proofwiki.org/wiki/Arens-Fort_Space_is_not_Extremally_Disconnected

Theorem
Let $T = \struct {S, \tau}$ be the Arens-Fort space.

Then $T$ is not extremally disconnected.


Proof
Let $\map {S_m} V$ denote the set:

$\map {S_m} V := \set {n: \tuple {m, n} \notin V}$
where $V \subseteq \Z_{\ge 0} \times \Z_{\ge 0}$ (the same set $S_m$ used in the definition of the Arens-Fort space).
Let $U = \set {\tuple {n, m}: \exists k: m = 2 k} \setminus \set {\tuple {0, 0} }$.
From the definition of the Arens-Fort space, $U$ is open in $T$ since $\left({0, 0}\right) \notin U$.
We have that:

$\tuple {0, 0} \in \relcomp S U$
and:

$\map {S_m} U$ is infinite for any $m \in \N$.
Thus by definition of the Arens-Fort space, $\relcomp S U$ is not open in $T$.
So $U$ is not closed in $T$.

Let $U^-$ denote the closure of $U$.
We have that:

$\tuple {0, 0} \notin \relcomp S {U \cup \set {\tuple {0, 0} } }$
Therefore by definition of the Arens-Fort space, $\relcomp S {U \cup \set {\tuple {0, 0} } }$ is open in $T$.
Therefore $U \cup \set {\tuple {0, 0} }$ is closed in $T$.
From Set Closure is Smallest Closed Set in Topological Space, it follows that $U^- = U \cup \set {\tuple {0, 0} }$.

We have that:

$\tuple {0, 0} \in U \cup \set {\tuple {0, 0} }$
and:

$\map {S_m} {U \cup \set {\tuple {0, 0} } }$ is infinite for any $m \in \N$.
Therefore by definition of the Arens-Fort space, $U \cup \set {\tuple {0, 0} }$ is not open.

Thus we have created an open set $U$ whose closure $U^-$ is not itself open.
Thus by definition the  Arens-Fort space is not extremally disconnected.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $26$. Arens-Fort Space: $9$




