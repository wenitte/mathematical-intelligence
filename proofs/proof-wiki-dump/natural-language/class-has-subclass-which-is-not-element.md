# 

Source: https://proofwiki.org/wiki/Class_has_Subclass_which_is_not_Element

Theorem
Let $A$ be a class.
Then $A$ has at least one subclass $B$ which is not an element of $A$.


Proof
Let a set $x$ be defined as ordinary if and only if $x \notin x$.
Let $\map \phi x$ be the set property defined as:

$\map \pi x := \neg \paren {x \in x}$
Then by the Axiom of Specification there exists a class, which can be denoted $B$, such that:

$B = \set {x \in A: \neg \paren {x \in x} }$
That is, $B$ contains as elements of all the ordinary sets of $A$.
By the Axiom of Extension $B$ is unique.
Thus $B$ is the class of all ordinary sets of $A$.

$x \in B \iff \paren {x \in A \land x \notin x}$
Hence, for all $x$ which happen to be elements of $A$, we have:

$x \in B \iff x \notin x$

Aiming for a contradiction, suppose $B \in A$.
Then we could set $A$ for $x$, and so obtain:

$B \in B \iff B \notin B$
This is a contradiction.
Hence by Proof by Contradiction $B$ cannot be an element of $A$.
That is:

$B \notin V$
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 1$ Extensionality and separation: Theorem $1.2$




