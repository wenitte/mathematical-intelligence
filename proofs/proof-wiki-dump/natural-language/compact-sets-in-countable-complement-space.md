# 

Source: https://proofwiki.org/wiki/Compact_Sets_in_Countable_Complement_Space

Theorem
Let $T = \struct {S, \tau}$ be a countable complement topology on an uncountable set $S$.

Then the compact sets of $T$ are exactly the finite subsets of $S$.


Proof
From Finite Topological Space is Compact, any finite subset of $S$ is compact.

Aiming for a contradiction, suppose $H \subseteq S$ is an infinite compact set.
Take a (countably) infinite sequence $\sequence {a_n}_{n \mathop \ge 0}$ of distinct elements of $H$.
Consider the open sets:

$V_m := S \setminus \set {a_{m + n} }_{n \mathop \ge 0}$
for $m \ge 0$, which satisfy $V_{m_1} \subset V_{m_2}$ if $m_1 < m_2$.
Then:

$\ds H \subseteq \bigcup_{m \mathop \ge 0} V_m$
is an open cover of $H$.

Since $H$ is compact, it has a finite open subcover, say:

$\ds H \subseteq \bigcup_{i \mathop = 0}^N V_{m_i}$
with $m_0 < m_1 < \cdots < m_N$.
But then:

$\ds \bigcup_{i \mathop = 0}^N V_{m_i} = V_{m_N}$
and so:

$\ds a_{m_N + 1}, a_{m_N + 2}, \ldots \notin V_{m_N} = \bigcup_{i \mathop = 0}^N V_{m_i}$
which implies $a_{m_N + 1}, a_{m_N + 2}, \ldots \notin H$, a contradiction.
Hence the result by Proof by Contradiction.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $20$. Countable Complement Topology: $2$




