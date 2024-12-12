# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Unique_Existential_Quantifier/Definition_1_iff_Definition_2



Theorem
The following definitions of the concept of Unique Existential Quantifier are equivalent:

Definition 1
There exists a unique object $x$ such that $\map P x$, denoted $\exists ! x: \map P x$, if and only if:

$\exists x : \paren {\map P x \land \forall y : \paren {\map P y \implies x = y} }$

In natural language, this means:

There exists exactly one $x$ with the property $P$
is logically equivalent to:
There exists an $x$ such that $x$ has the property $P$, and for every $y$, $y$ has the property $P$ only if $x$ and $y$ are the same object.
Definition 2
There exists a unique object $x$ such that $\map P x$, denoted $\exists ! x: \map P x$, if and only if:

$\exists x : \forall y : \paren {\map P y \iff x = y}$


Proof
Suppose Definition 1, that for some $x$, both:

$(1): \quad \map P x$
and:

$(2): \quad \forall y : \paren {\map P y \implies x = y}$
From $(1)$:

$x = y \implies \map P y$
From this and $(2)$, we conclude:

$\exists x : \forall y : \paren {\map P y \iff x = y}$

Suppose Definition 2, that for some $x$ and every $y$:

$\map P y \iff x = y$
Taking $y = x$ yields:

$x = x \implies \map P x$
implying that $\map P x$.
Thus we conclude:

$\exists x : \paren {\map P x \land \forall y : \paren {\map P y \implies x = y} }$
$\blacksquare$





