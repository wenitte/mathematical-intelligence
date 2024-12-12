# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Involutive_Mapping



Theorem
The following definitions of the concept of Involutive Mapping are equivalent:

Definition 1
$f$ is an involution if and only if:

$\forall x \in A: \map f {\map f x} = x$
That is:

$f \circ f = I_A$
where $I_A$ denotes the identity mapping on $A$.

Definition 2
$f$ is an involution if and only if:

$\forall x, y \in A: \map f x = y \implies \map f y = x$
Definition 3
$f$ is an involution if and only if $f$ is both a bijection and a symmetric relation.
That is, if and only if $f$ is a bijection such that:

$f = f^{-1}$


Proof
$(1)$ implies $(2)$
Let $f: A \to A$ be an involutive mapping by definition 1.
Then by definition:

$(1): \quad \forall x \in A: \map f {\map f x} = x$
Let $\map f x = y$.
Then by substituting $y$ for $\map f x$ into $(1)$:

$\forall x \in A: \map f y = x$

Thus $f: A \to A$ is an involutive mapping by definition 2.
$\Box$


$(2)$ implies $(1)$
Let $f: A \to A$ be an involutive mapping by definition 2.
Then by definition:

$\forall x, y \in A: \map f x = y \implies \map f y = x$
and so substituting $\map f x$ for $y$ we have:

$\map f {\map f x} = x$
Thus $f: A \to A$ is an involutive mapping by definition 1.
$\Box$


$(1)$ iff $(3)$
This is demonstrated in Mapping is Involution iff Bijective and Symmetric.
$\blacksquare$





