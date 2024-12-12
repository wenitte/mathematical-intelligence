# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Associated_Prime_of_Module



Theorem
Let $A$ be a commutative ring with unity.
Let $M$ be a module over $A$.
Let $\mathfrak p$ be a prime ideal in $A$.
The following definitions of the concept of Associated Prime of Module are equivalent:

Definition 1
$\mathfrak p$ is an associated prime of $M$ if and only if:

$\exists x \in M : \map {\operatorname {Ann}_A} x = \mathfrak p$
where $\map {\operatorname {Ann}_A} x$ is the annihilator of $x$.

Definition 2
$\mathfrak p$ is an associated prime of $M$ if and only if:

$M$ contains a submodule which is isomorphic to the quotient ring $A/\mathfrak p$.


Proof
Definition 1 implies Definition 2
Suppose that $x \in M$ satisfies:

$\map {\operatorname {Ann}_A} x = \mathfrak p$
Define a submodule of $M$ by:

$N := \set { a x : a \in A }$
Define a module homomorphism $\phi : A \to N$ by:

$a \mapsto a x$
Then the kernel of $\phi$ is:

$\map \ker \phi = \map {\operatorname {Ann}_A} x = \mathfrak p$
By First Isomorphism Theorem:

$N \cong A / \mathfrak p$
$\Box$

Definition 2 implies Definition 1
Let $N \subseteq M$ be a submodule.
Suppose that there is an isomorphism:

$\psi : A / \mathfrak p \to N$
Let $a_0 \in A \setminus \mathfrak p$.
Let:

$x := \map \psi {a_0 + \mathfrak p}$
We claim that:

$\map {\operatorname {Ann}_A} x = \mathfrak p$
Indeed:














\(\ds a\)

\(\in\)







\(\ds \map {\operatorname {Ann}_A} x\)














\(\ds \leadstoandfrom \ \ \)





\(\ds 0\)

\(=\)







\(\ds a x\)





Definition of Annihilator














\(\ds \)

\(=\)







\(\ds a \map \psi {a_0 + \mathfrak p}\)




















\(\ds \)

\(=\)







\(\ds \map \psi {a a_0 + \mathfrak p}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds a a_0 + \mathfrak p\)

\(=\)







\(\ds 0 + \mathfrak p\)





since $\psi$ is bijective








\(\ds \leadstoandfrom \ \ \)





\(\ds a a_0\)

\(\in\)







\(\ds \mathfrak p\)





Definition of Quotient Ring








\(\ds \leadstoandfrom \ \ \)





\(\ds a\)

\(\in\)







\(\ds \mathfrak p\)





since $\mathfrak p$ is prime and $a_0 \not \in \mathfrak p$



$\blacksquare$





