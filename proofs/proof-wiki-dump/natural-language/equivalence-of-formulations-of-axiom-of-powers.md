# 

Source: https://proofwiki.org/wiki/Equivalence_of_Formulations_of_Axiom_of_Powers



Theorem
In the context of class theory, the following formulations of the Axiom of Powers are equivalent:

Formulation 1
For every set, there exists a set of sets whose elements are all the subsets of the given set.

$\forall x: \exists y: \paren {\forall z: \paren {z \in y \iff \forall w: \paren {w \in z \implies w \in x} } }$
Formulation 2
Let $x$ be a set.
Then its power set $\powerset x$ is also a set.


Proof
It is assumed throughout that the Axiom of Extensionality and the Axiom of Specification both hold.


Formulation $1$ implies Formulation $2$
Let formulation $1$ be axiomatic:
For every set, there exists a set of sets whose elements are all the subsets of the given set.

$\forall x: \exists y: \paren {\forall z: \paren {z \in y \iff \forall w: \paren {w \in z \implies w \in x} } }$

Thus it is posited that for a given set $x$ the power set of $x$ exists:

$y := \powerset x := \set {z: z \subseteq x}$
and that this is a set.

Formulation $2$ asserts that given the existence of $\powerset x$, it is axiomatic that $\powerset x$ is itself a set.
Hence it follows that the truth of formulation $2$ follows from acceptance of the truth of formulation $1$.
From Power Set Exists and is Unique, which depends on:

the Axiom of Extensionality
the Axiom of Specification
$\powerset x$ is unique for a given $x$.
$\Box$


Formulation $2$ implies Formulation $1$
Let formulation $2$ be axiomatic:
Let $x$ be a set.
Then its power set $\powerset x$ is also a set.

Let $x$ be a set.
Let us create the  power set $y$ of x:

$\powerset x := \set {z: z \subseteq x}$
From Power Set Exists and is Unique, which depends on:

the Axiom of Extensionality
the Axiom of Specification
$\powerset x$ exists and is unique for a given $x$.

We have asserted the truth of formulation $2$.
That is, $\powerset x$ is a set.

As $x$ is arbitrary, it follows that $\powerset x$ exists and is unique for all sets $x$.
That is, the truth of formulation $1$ follows from acceptance of the truth of formulation $2$.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 6$ The power axiom: Remarks $(1)$




