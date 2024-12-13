# 

Source: https://proofwiki.org/wiki/Modified_Fort_Space_is_T1

Theorem
Let $T = \struct {S, \tau_{a, b} }$ be a modified Fort space.

Then $T$ is a $T_1$ (Fréchet) space.


Proof
Let $p, q \in S: p \ne q$.
There are two options:

$(1): \quad$ At least one of $p$ and $q$ is not in $\set {a, b}$
$(2): \quad$ Both $p$ and $q$ are in $\set {a, b}$.

$(1): \quad$ First let $p \notin \set {a, b}$ or $q \notin \set {a, b}$.
Without loss of generality, let $p \notin \set {a, b}$.
From Clopen Points in Modified Fort Space both $\set p \in \tau_{a, b}$ and $S \setminus \set p \in \tau_{a, b}$.
So:

$p \in \set p, q \notin \set p$
$p \notin S \setminus \set p, q \in S \setminus \set p$
Similarly for $q \notin \set {a, b}$.

$(2): \quad$ Next, let $p, q \in \set {a, b}$.
Let $V_p \subseteq S$ such that $p \in V_p, q \notin V_p$ and $V_p$ is finite.
Then $S \setminus V_p$ is open in $T$ containing $q$ but not $p$.
Similarly, let $V_q \subseteq S$ such that $q \in V_q, p \notin V_q$ and $V_q$ is finite.
Then $S \setminus V_q$ is open in $T$ containing $p$ but not $q$.

Hence it can be seen that $T$ is a $T_1$ (Fréchet) space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $27$. Modified Fort Space: $2$




