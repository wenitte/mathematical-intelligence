# 

Source: https://proofwiki.org/wiki/Fortissimo_Space_is_T5

Theorem
Let $T = \struct {S, \tau_p}$ be a Fortissimo space on an infinite set $S$.

Then $T$ is a $T_5$ space.


Proof
Let $A, B \in \tau_p$ such that $A$ and $B$ are separated.
If $p \notin A$ and $p \notin B$ then $A$ and $B$ are both open.

Otherwise $p$ must be in exactly one of them, because if $p$ were in both they could not be separated.
Without loss of generality, suppose $p \in A$.
Then $p \notin B$ so $B$ is open.

Now suppose $B$ were not closed.
Then $B$ is uncountable by definition of Fortissimo space.
But every open set not containing $p$ is co-countable in $S$.
So $p$ would be in $B^-$, where $B^-$ is the closure of $B$.
But then $p \in A$, by hypothesis.
So $A \cap B^- \ne \O$ and so $A$ and $B$ are not separated.
So $B$ must be closed.
Therefore $\relcomp S B$ is an open set such that $A \subseteq \relcomp S B$, and the $T_5$ separation axiom is satisfied.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $25$. Fortissimo Space: $1$




