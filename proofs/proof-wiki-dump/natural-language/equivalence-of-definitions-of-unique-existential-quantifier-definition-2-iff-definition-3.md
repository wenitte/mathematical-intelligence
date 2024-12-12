# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Unique_Existential_Quantifier/Definition_2_iff_Definition_3



Theorem
The following definitions of the concept of Unique Existential Quantifier are equivalent:

Definition 2
There exists a unique object $x$ such that $\map P x$, denoted $\exists ! x: \map P x$, if and only if:

$\exists x : \forall y : \paren {\map P y \iff x = y}$
Definition 3
There exists a unique object $x$ such that $\map P x$, denoted $\exists ! x: \map P x$, if and only if both:

$\exists x : \map P x$
and:

$\forall y : \forall z : \paren {\paren {\map P y \land \map P z} \implies y = z }$


Proof
Suppose Definition 2, that for some $x$:

$(1): \quad \forall y : \paren {\map P y \iff x = y}$
Taking $y = x$ yields:

$x = x \implies \map P x$
implying that $\exists x : \map P x$.
Suppose $\map P y$ and $\map P z$ for arbitrary $y$ and $z$.
Then from $(1)$, $y = x$ and $z = x$, giving:

$\forall y : \forall z : \paren {\paren {\map P y \land \map P z} \implies y = z}$

Suppose Definition 3, that:

$(1): \quad \exists x : \map P x$
and for arbitrary $y$ and $z$:

$(2): \quad \paren { \map P y \land \map P z } \implies y = z$
From $(2)$, take $z = x$:

$\paren {\map P y \land \map P x} \implies y = x$
Thus, by $(1)$:

$\map P y \implies x = y$
Suppose $x = y$.
From $(1)$, $\map P x$, yielding:

$x = y \implies \map P y$
Thus:

$\exists x : \forall y : \paren {\map P y \iff x = y}$
$\blacksquare$





