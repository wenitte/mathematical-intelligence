# 

Source: https://proofwiki.org/wiki/Not_Every_Class_is_a_Set/Proof_1

Theorem
Let $A$ be a class.
Then it is not necessarily the case that $A$ is also a set.


Proof
Let a set $x$ be defined as ordinary if and only if $x \notin x$.
Let $\map \phi x$ be the set property defined as:

$\map \pi x := \neg \paren {x \in x}$
Then by the axiom of specification there exists a class, which can be denoted $A$, such that:

$A = \set {x: \neg \paren {x \in x} }$
By the axiom of extension $A$ is unique.
Thus $A$ is the class of all ordinary sets.
Hence we have:

$x \in A \iff x \notin x$

Aiming for a contradiction, suppose $A$ were a set.
Then we could set $A$ for $x$, and so obtain:

$A \in A \iff A \notin A$
This is a contradiction.
Hence by Proof by Contradiction $A$ cannot be a set.
But as $A$ is a subclass of the universal class $V$, $A$ is a class.
So the class $A$ of ordinary sets is not a set.
That is:

$A \notin V$
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 1$ Extensionality and separation: Theorem $1.1$




