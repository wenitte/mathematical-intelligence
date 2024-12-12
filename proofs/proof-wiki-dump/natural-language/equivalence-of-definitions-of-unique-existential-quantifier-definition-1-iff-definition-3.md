# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Unique_Existential_Quantifier/Definition_1_iff_Definition_3



Theorem
The following definitions of the concept of Unique Existential Quantifier are equivalent:

Definition 1
There exists a unique object $x$ such that $\map P x$, denoted $\exists ! x: \map P x$, if and only if:

$\exists x : \paren {\map P x \land \forall y : \paren {\map P y \implies x = y} }$

In natural language, this means:

There exists exactly one $x$ with the property $P$
is logically equivalent to:
There exists an $x$ such that $x$ has the property $P$, and for every $y$, $y$ has the property $P$ only if $x$ and $y$ are the same object.
Definition 3
There exists a unique object $x$ such that $\map P x$, denoted $\exists ! x: \map P x$, if and only if both:

$\exists x : \map P x$
and:

$\forall y : \forall z : \paren {\paren {\map P y \land \map P z} \implies y = z }$


Proof
Suppose Definition 1, that for some $x$:

$(1): \quad \map P x$
and:

$(2): \quad \forall y : \paren {\map P y \implies x = y}$
Suppose that $\map P y$ and $\map P z$ for arbitrary $y$ and $z$.
From $(2)$, there is an $x$ such that $x = y$ and $x = z$.
Thus, for arbitrary $y$ and $z$:

$\paren {\map P y \land \map P z} \implies y = z$
and from $(1)$:

$\exists x : \map P x$

Suppose Definition 3, that there is an $x$ such that:

$(1): \quad \map P x$
and that for arbitrary $y$ and $z$:

$(2): \quad \paren {\map P y \land \map P z} \implies y = z$
Taking $z = x$, we have from $(2)$:

$\paren {\map P y \land \map P x} \implies y = x$
Thus, from $\map P x$ in $(1)$:

$\forall y : \paren {\map P y \implies x = y}$
Thus:

$\exists x : \paren {\map P x \land \forall y : \paren {\map P y \implies x = y} }$
$\blacksquare$





