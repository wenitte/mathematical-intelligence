# 

Source: https://proofwiki.org/wiki/Normal_Space_is_Tychonoff_Space

Theorem
Let $\struct {S, \tau}$ be a normal space.

Then $\struct {S, \tau}$ is also a Tychonoff (completely regular) space.


Proof
Let $T = \struct {S, \tau}$ be a normal space.
From the definition of normal space:

$\struct {S, \tau}$ is a $T_4$ space
$\struct {S, \tau}$ is a $T_1$ (Fréchet) space.

Let $F$ be any closed set in $T$.
Let $y \in \relcomp S F$, that is, $y \in S$ such that $y \notin F$.
As $T$ is a $T_1$ (Fréchet) space it follows from Equivalence of Definitions of $T_1$ Space that $\set y$ is closed.

As $T = \struct {S, \tau}$ is a $T_4$ space, we have that for any two disjoint closed sets $A, B \subseteq S$ there exists an Urysohn function for $A$ and $B$.
But $F$ and $\set y$ are disjoint closed sets.
So there exists an Urysohn function for $F$ and $\set y$.
This is the definition of a $T_{3 \frac 1 2}$ space.
Next we note that as $T$ is a $T_1$ (Fréchet) space, from $T_1$ Space is $T_0$ Space it follows that $T$ is a $T_0$ (Kolmogorov) space.

So $T$ is both a $T_{3 \frac 1 2}$ space and $T_0$ (Kolmogorov) space.
So, by definition, $T$ is a Tychonoff space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms: Completely Regular Spaces




