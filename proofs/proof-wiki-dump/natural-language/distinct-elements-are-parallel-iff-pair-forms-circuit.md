# 

Source: https://proofwiki.org/wiki/Distinct_Elements_are_Parallel_iff_Pair_forms_Circuit



Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $x, y \in S : x \ne y$.

Then:

$x$ and $y$ are parallel if and only if $\set {x, y}$ is a circuit


Proof
Necessary Condition
Let $x$ and $y$ be parallel.
By definition of parallel:

$\set x$ is independent
$\set y$ is independent
$\set {x, y}$ is dependent

Let $A \subseteq \set {x, y}$ be dependent.
Thus:

$A \ne \set x, \set y$

By matroid axiom $(\text I 1)$:

$\O$ is independent
Thus:

$A \ne \O$

From Power Set of Doubleton:

$\powerset {\set {x, y} } = \set {\O, \set x, \set y, \set {x, y} }$
Thus:

$A = \set {x, y}$

By definition of a minimal set:

$\set {x, y}$ is a minimal dependent subset
It follows that $\set {x, y}$ is a circuit by definition.
$\Box$


Sufficient Condition
Let $\set {x, y}$ by a circuit.
By definition of a circuit:

$\set {x, y}$ is a minimal dependent subset
By definition of a subset:

$\set x, \set y \subseteq \set {x, y}$
By definition of a minimal dependent subset: 

$\set x, \set y$ are independent subsets
It follows that $x$ and $y$ are parallel by definition.
$\blacksquare$


Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 4.$ Loops and parallel elements




