# 

Source: https://proofwiki.org/wiki/Equivalence_of_Formulations_of_Axiom_of_Empty_Set_for_Classes



Theorem
In the context of class theory, the following formulations of the Axiom of the Empty Set are equivalent:

Formulation 1
$\exists x: \forall y: \paren {\neg \paren {y \in x} }$
Formulation 2
The empty class $\O$ is a set, that is:

$\O \in V$


Proof
It is assumed throughout that the Axiom of Extension and the Axiom of Specification both hold.


Formulation $1$ implies Formulation $2$
Let formulation $1$ be axiomatic:
There exists a set that has no elements:

$\exists x: \forall y: \paren {\neg \paren {y \in x} }$

From the Axiom of Specification it follows that the $x$ so created is a class, and we label it $\O$.
But by hypothesis this $\O$ is a set.
Hence it follows that the truth of formulation $2$ follows from acceptance of the truth of formulation $1$.
$\Box$


Formulation $2$ implies Formulation $1$
Let formulation $2$ be axiomatic:
The empty class $\O$ is a set, that is:

$\O \in V$

By the Axiom of Specification, we can define the class $\O$ as:

$\O := \set {y: \lnot {y \ne y} }$
which is a class with no elements.
We have that $\O$ is a set by hypothesis.
By the Axiom of Extension we have that $\O$ is unique.
From Equivalence of Formulations of Axiom of Empty Set, we can express $\O$ as:

$\O := \set {y: \lnot {y \in \O} }$
That is, the truth of formulation $1$ follows from acceptance of the truth of formulation $2$.
$\blacksquare$





