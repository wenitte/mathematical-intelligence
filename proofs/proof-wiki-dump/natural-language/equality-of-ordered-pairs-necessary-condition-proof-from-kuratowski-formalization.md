# 

Source: https://proofwiki.org/wiki/Equality_of_Ordered_Pairs/Necessary_Condition/Proof_from_Kuratowski_Formalization



Theorem
Let $\tuple {a, b}$ and $\tuple {c, d}$ be ordered pairs such that $\tuple {a, b} = \tuple {c, d}$.
Then $a = c$ and $b = d$.


Proof
First a lemma:
Let $\set {a, b}$ and $\set {a, d}$ be doubletons such that $\set {a, b} = \set {a, d}$.
Then:

$b = d$
$\Box$

Let $\tuple {a, b} = \tuple {c, d}$.
From the Kuratowski formalization:

$\set {\set a, \set {a, b} } = \set {\set c, \set {c, d} }$
There are two cases: either $a = b$, or $a \ne b$.


Case 1
Suppose $a = b$.
Then:

$\set {\set a, \set {a, b} } = \set {\set a, \set a} = \set {\set a}$
Thus $\set {\set c, \set {c, d} }$ has only one element.
Thus $\set c = \set {c, d}$ and so $c = d$.
So:

$\set {\set c, \set {c, d} } = \set {\set a}$
and so $a = c$ and $b = d$.
Thus the result holds.
$\Box$


Case 2
Now suppose $a \ne b$. By the same argument it follows that $c \ne d$.
So that means that either $\set a = \set c$ or $\set a = \set {c, d}$.

Since $\set {c, d}$ has $2$ distinct elements, $\set a \ne \set {c, d}$.
Thus:

$\set a = \set c$
and so $a = c$.

Then:

$\set {a, b} = \set {c, d}$
But as $a = c$ that means we have:

$\set {a, b} = \set {a, d}$
It follows from the lemma that:

$b = d$
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 6$: Ordered Pairs
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $1.1: \ 12$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 1$: The Language of Set Theory: Exercise $1.11$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 3$. Ordered pairs; cartesian product sets: Theorem $3.1$
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $1$: Pairs, Relations, and Functions
1999: András Hajnal and Peter Hamburger: Set Theory ... (previous) ... (next): $1$. Notation, Conventions: $9$: Theorem $1.3$
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 4$ The pairing axiom: Theorem $4.4$.




