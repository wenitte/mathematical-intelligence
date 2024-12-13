# 

Source: https://proofwiki.org/wiki/Non-Trivial_Ultraconnected_Space_is_not_T1

Theorem
Let $T = \struct {S, \tau}$ be a topological space which is ultraconnected.

If $S$ has more than one element, then $T$ is not a $T_1$ (Fréchet) space.

That is, if $T$ is a $T_1$ (Fréchet) space with more than one element, it is not ultraconnected.


Proof
$T = \struct {S, \tau}$ be ultraconnected.
Thus by definition:

$(1): \quad \forall x, y \in S: \set x^- \cap \set y^- \ne \O$

Let $a, b \in S$ such that $a \ne b$.
Aiming for a contradiction, suppose $T$ is a $T_1$ (Fréchet) space.
By definition of $T_1$ Space, $\set a$ and $\set b$ are closed.
From Closed Set Equals its Closure we have that $\set a^- = \set a$ and $\set b^- = \set b$.
It immediately follows that:

$\set a^- \cap \set b^- = \O$
But that contradicts $(1)$ above. 
The result follows by Proof by Contradiction.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $4$: Connectedness




