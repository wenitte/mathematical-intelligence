# 

Source: https://proofwiki.org/wiki/Equivalence_of_Formulations_of_Axiom_of_Pairing_for_Classes



Theorem
The following formulations of the Axiom of Pairing in the context of class theory are equivalent:

Formulation 1
Let $a$ and $b$ be sets.
Then the class $\set {a, b}$ is likewise a set.

Formulation 2
For any two sets, there exists a set to which those two sets are elements:

$\forall a: \forall b: \exists c: \forall z: \paren {z = a \lor z = b \implies z \in c}$


Proof
It is assumed that all classes are subclasses of a basic universe $V$.


$(1)$ implies $(2)$
Let formulation $1$ of the Axiom of Pairing be assumed:
Let $a$ and $b$ be sets.
Then the class $\set {a, b}$ is likewise a set.

Thus we have that $c = \set {a, b}$ is a set such that both $a \in c$ and $b \in c$.
Thus formulation $2$ of the Axiom of Pairing is seen to hold.
$\Box$


$(2)$ implies $(1)$
Let formulation $2$ of the axiom of pairing be assumed:
For any two sets, there exists a set to which those two sets are elements:

$\forall a: \forall b: \exists c: \forall z: \paren {z = a \lor z = b \implies z \in c}$

Then the class $\set {a, b}$ is a subclass of $c$.
We have by hypothesis that $c$ is a subclass of a basic universe $V$.
Hence by the Axiom of Swelledness, every subclass of $c$ is a set.
That is, $\set {a, b}$ is a set.
Thus formulation $1$ of the Axiom of Pairing is seen to hold.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 4$ The pairing axiom: Note $4$




