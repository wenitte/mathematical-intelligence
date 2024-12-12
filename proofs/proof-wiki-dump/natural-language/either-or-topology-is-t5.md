# 

Source: https://proofwiki.org/wiki/Either-Or_Topology_is_T5

Theorem
Let $T = \struct {S, \tau}$ be the either-or space.

Then $T$ is a $T_5$ space.


Proof
Let $A, B \subseteq S$ such that $A \cap B \ne \O$.

Suppose neither $A$ nor $B$ contain $0$.
Then $A$ and $B$ are both open in $T$.
From Limit Points of Either-Or Topology, the only limit point that either $A$ or $B$ may have is $0$.
So either $A^- = A \cup \set 0$ or $A^- = A$, where $A^-$ is the closure of $A$
Similarly for $B$.
So $A^- \cap B = \O$, and so are separated, and such that:

$\exists U, V \in \tau: A \subseteq U, B \subseteq V, U \cap V = \O$
where $U = A$ and $V = B$, fulfilling the condition for a $T_5$ space.

Suppose one of $A$ and $B$ contains $0$.
Without loss of generality, suppose $0 \in A$.
Then for $A$ and $B$ to be separated, $0 \notin B^-$ and so $B^-$ has to be $\set {-1}$ or $\set 1$ or their union.
In any of these cases we have that $B$ and $S \setminus B$ are disjoint open sets containing $B$ and $A$ respectively.

So in all cases we see that if $A$ and $B$ are separated, then:

$\exists U, V \in \tau: A \subseteq U, B \subseteq V, U \cap V = \O$
where $U = A$ and $V = B$.
and so by definition $T$ is a $T_5$ space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $17$. Either-Or Topology: $1$




