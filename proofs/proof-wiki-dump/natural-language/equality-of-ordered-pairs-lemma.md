# 

Source: https://proofwiki.org/wiki/Equality_of_Ordered_Pairs/Lemma

Theorem
Let $\set {a, b}$ and $\set {a, d}$ be doubletons such that $\set {a, b} = \set {a, d}$.
Then:

$b = d$


Proof
We have that:

$b \in \set {a, b}$
and so by definition of set equality:

$b \in \set {a, d}$
So:

$(1): \quad$ either $b = a$ or $b = d$.

First suppose that $b = a$.
Then:

$\set {a, b} = \set {a, a} = \set a$
We have that:

$d \in \set {a, d}$
and so by definition of set equality:

$d \in \set {a, b}$
and so as $\set {a, b} = \set a$ it follows that:

$d = a$
We have $b = a$ and $d = a$, and so:

$b = d$
$\Box$

Next suppose that $b \ne a$.
We have from $(1)$ that either $b = a$ or $b = d$.
As $b \ne a$ it must be the case that $b = d$.
$\Box$

So in either case we see that:

$b = d$
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $1.1: \ 12$
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 4$ The pairing axiom: Lemma $4.3$.




