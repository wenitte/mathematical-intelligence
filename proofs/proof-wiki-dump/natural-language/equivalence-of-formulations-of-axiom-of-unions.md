# 

Source: https://proofwiki.org/wiki/Equivalence_of_Formulations_of_Axiom_of_Unions



Theorem
In the context of class theory, the following formulations of the Axiom of Unions are equivalent:

Formulation 1
For every set of sets $A$, there exists a set $x$ (the union set) that contains all and only those elements that belong to at least one of the sets in the $A$:

$\forall A: \exists x: \forall y: \paren {y \in x \iff \exists z: \paren {z \in A \land y \in z} }$
Formulation 2
Let $x$ be a set (of sets).
Then its union $\bigcup x$ is also a set.


Proof
It is assumed throughout that the Axiom of Extensionality and the Axiom of Specification both hold.


Formulation $1$ implies Formulation $2$
Let formulation $1$ be axiomatic:
For every set of sets $A$, there exists a set $x$ (the union set) that contains all and only those elements that belong to at least one of the sets in the $A$:

$\forall A: \exists x: \forall y: \paren {y \in x \iff \exists z: \paren {z \in A \land y \in z} }$

Thus it is posited that for a given set of sets $A$ the union of $A$ exists:

$x := \bigcup A := \set {y: \exists z \in A: y \in z}$
and that this is a set.

Formulation $2$ asserts that given the existence of $\bigcup A$, it is axiomatic that $\bigcup A$ is itself a set.
Hence it follows that the truth of formulation $2$ follows from acceptance of the truth of formulation $1$.
From Class Union Exists and is Unique, which depends on:

the Axiom of Extensionality
the Axiom of Specification
$\bigcup A$ is unique for a given $A$.
$\Box$


Formulation $2$ implies Formulation $1$
Let formulation $2$ be axiomatic:
Let $x$ be a set (of sets).
Then its union $\bigcup x$ is also a set.

Let $A$ be a set of sets.
Let us create the class:

$x := \bigcup A := \set {y: \exists z \in A: y \in z}$
From Class Union Exists and is Unique, which depends on:

the Axiom of Extensionality
the Axiom of Specification
$\bigcup A$ exists and is unique for a given $A$.

We have asserted the truth of formulation $2$.
That is, $\bigcup A$ is a set.

As $A$ is arbitrary, it follows that $\bigcup A$ exists and is unique for all sets of sets $A$.
That is, the truth of formulation $1$ follows from acceptance of the truth of formulation $2$.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 5$ The union axiom: Note $1$




