# 

Source: https://proofwiki.org/wiki/Normal_Space_is_T3_Space



Theorem
Let $\struct {S, \tau}$ be a normal space.

Then $\struct {S, \tau}$ is also a $T_3$ space.


Corollary
Let $\struct {S, \tau}$ be a normal space.

Then $\struct {S, \tau}$ is also a regular space.


Proof
Let $T = \struct {S, \tau}$ be a normal space.
From the definition of normal space:

$\struct {S, \tau}$ is a $T_4$ space
$\struct {S, \tau}$ is a Fréchet ($T_1$) space.

Let $F$ be any closed set in $T$.
Let $y \in \relcomp S F$, that is, $y \in S$ such that $y \notin F$.
As $T$ is a Fréchet ($T_1$) space it follows from Equivalence of Definitions of $T_1$ Space that $\set y$ is closed.

As $T = \struct {S, \tau}$ is a normal space, we have that:

$\forall A, B \in \map \complement \tau, A \cap B = \O: \exists U, V \in \tau: A \subseteq U, B \subseteq V, U \cap V = \O$
That is, for any two disjoint closed sets $A, B \subseteq S$ there exist disjoint open sets $U, V \in \tau$ containing $A$ and $B$ respectively.
But $F$ and $\set y$ are disjoint closed sets.
So:

$\forall F \subseteq S: \relcomp S F \in \tau, y \in \relcomp S F: \exists U, V \in \tau: F \subseteq U, y \in V: U \cap V = \O$
which is precisely the definition of a $T_3$ space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms: Regular and Normal Spaces




