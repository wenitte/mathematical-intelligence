# 

Source: https://proofwiki.org/wiki/Arens-Fort_Space_is_T5

Theorem
Let $T = \struct {S, \tau}$ be the Arens-Fort space.

Then $T$ is a $T_5$ space.


Proof
Let $A, B \subseteq S$ such that $A$ and $B$ are separated.
Let $p = \tuple {0, 0}$.
If $p \notin A$ and $p \notin B$ then $A$ and $B$ are both open and the problem is solved.

Otherwise $p$ must be in exactly one of them, because if $p$ were in both they could not be separated.
Without loss of generality, suppose $p \in A$.
Then $p \notin B$ so $B$ is open.
$B \cup \set p$ is closed by the definition of the Arens-Fort space.
From Set is Subset of its Topological Closure and Set Closure is Smallest Closed Set in Topological Space:

$B \subseteq B^- \subseteq B \cup \set p$
where $B^-$ is the closure of $B$.
So $B$ is closed or $p$ is in $B^-$.
But then $p \in A$, by hypothesis.
So $A \cap B^- \ne \O$ and so $A$ and $B$ are not separated.
So $B$ must be closed.
Therefore $\relcomp S B$ is an open set such that $A \subseteq \relcomp S B$, and the $T_5$ separation axiom is satisfied.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $26$. Arens-Fort Space: $2$




