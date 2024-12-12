# 

Source: https://proofwiki.org/wiki/Element_is_Loop_iff_Singleton_is_Circuit



Theorem
Let $M = \struct{S, \mathscr I}$ be a matroid.
Let $x \in S$.

Then:

$x$ is a loop if and only if $\set x$ is a circuit


Proof
Necessary Condition
Let $x$ be a loop.
By definition of a loop:

$\set x$ is a dependent subset of $S$
Let $A \subseteq \set x$ be a dependent subset.
From Power Set of Singleton:

$\powerset {\set x} = \set{\O, \set x}$
By matroid axiom $(\text I 1)$:

$\O$ is an independent subset
Then:

$A = \set x$
It follows that:

$\set x$ is a minimal dependent subset of $S$.
Then $\set x$ be a circuit by definition. 
$\Box$


Sufficient Condition
Let $\set x$ be a circuit.
By definition of a circuit:

$\set x$ is a minimal dependent subset of $S$.
In particular, $\set x$ is a dependent subset of $S$.
Then $\set x$ is a loop by definition.
$\blacksquare$


Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 4.$ Loops and parallel elements




