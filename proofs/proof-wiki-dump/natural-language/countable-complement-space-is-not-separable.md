# 

Source: https://proofwiki.org/wiki/Countable_Complement_Space_is_not_Separable

Theorem
Let $T = \struct {S, \tau}$ be a countable complement topology on an uncountable set $S$.

Then $T$ is not a separable space.


Proof
Let $U$ be a countable subset of $S$.
By the definition of $T$, $U$ is closed.
As $U$ is countable but $S$ is uncountable:

$U \subsetneq S$
and so:

$U \ne S$
From Closed Set Equals its Closure:

$U^- = U$
where $U^-$ is the closure of $U$.
Thus:

$U^- \ne S$
So by definition, $U$ is not everywhere dense in $T$.
As $U$ is arbitrary, there is no countable set which is everywhere dense in $T$.
The result follows by definition of separable space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $20$. Countable Complement Topology: $3$




