# 

Source: https://proofwiki.org/wiki/Empty_Set_can_be_Derived_from_Axiom_of_Abstraction

Theorem
The empty set can be formed by application of the Axiom of Abstraction.
Hence the empty set can be derived as a valid object in Frege set theory.


Proof
Let $P$ be the property defined as:

$\forall x: \map P x := \neg \paren {x = x}$

Hence, using the Axiom of Abstraction, we form the set:

$\O := \set {x: \neg \paren {x = x} }$
where the property ${\map P x}$ is:

$\neg \paren {x = x}$
Since we have that:

$\forall x: x = x$
it is seen that $\O$ as defined here has no elements.

By definition of Frege set theory, given any property $P$, there exists a unique set which consists of all and only those objects which have property $P$:

$\set {x: \map P x}$
Therefore, there exists a unique set

$\O := \set {x: \neg \paren {x = x} }$
which the property $P= \neg \paren {x = x}$, which consists of no elements.

Hence, by the definition of the empty set, this set is a valid object in Frege set theory.
Hence the result by definition of the empty set.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $1$: General Background: $\S 7$ Frege set theory




