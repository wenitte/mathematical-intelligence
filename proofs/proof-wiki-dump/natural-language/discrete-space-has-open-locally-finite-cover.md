# 

Source: https://proofwiki.org/wiki/Discrete_Space_has_Open_Locally_Finite_Cover

Theorem
Let $T = \struct {S, \tau}$ be a discrete topological space.

Consider the set $\CC$ of all singleton subsets of $S$:

$\CC := \set {\set x: x \in S}$
Then $\CC$ is an open cover of $T$ which is locally finite.

This cover is the finest cover on $S$.
That is, if $\VV$ is a cover of $T$, then $\CC$ is a refinement of $\VV$.


Proof
We have that:

$\forall x \in S: \exists \set x \in \CC: x \in \set x$
and so $\CC$ is a cover for $S$.
Then from Set in Discrete Topology is Clopen, it follows that $\CC$ is an open cover of $T$.
From Point in Discrete Space is Neighborhood, every point $x \in S$ has a neighborhood $\set x$.
This neighborhood $\set x$ intersects exactly one element of $\CC$, that is: $\set x$ itself.
As $1$ is a finite number, the result follows from definition of locally finite.

Now consider any cover $\VV$ of $S$.
By definition:

$\forall x \in S: \exists V \in \VV: x \in V$
That is:

$\forall x \in S: \exists V \in \VV: \set x \subseteq V$
That is, every element of $\CC$ is contained in some element of $\VV$.
Thus by definition, $\CC$ is a refinement of $\VV$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $1 \text { - } 3$. Discrete Topology: $7$




