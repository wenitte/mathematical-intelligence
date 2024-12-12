# 

Source: https://proofwiki.org/wiki/Equality_of_Ordered_Pairs/Necessary_Condition/Proof_from_Wiener_Formalization

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
From the Wiener formalization:

$\set {\set {\O, \set a}, \set {\set b} } = \set {\set {\O, \set c}, \set {\set d} }$

Let $x \in \set {\set {\O, \set a}, \set {\set b} }$.
Then either:

$x = \set {\O, \set a}$
or:

$x = \set {\set b}$

First suppose $x = \set {\O, \set a}$.
Then:

$x = \set {\O, \set c}$ or $x = \set {\set d}$
Aiming for a contradiction, suppose $x = \set {\set d}$.
That is:

$\set {\O, \set a} = \set {\set d}$
Then:

$\set d = \set a$
and also:

$\set d = \O$
But that means:

$a \in \O$
which contradicts the definition of the empty set $\O$.
It follows by Proof by Contradiction that $x \ne \set {\set d}$.
Thus $x = \set {\O, \set c}$.
We have that:

$x = \set {\O, \set a}$ and $x = \set {\O, \set c}$
and so:

$\set {\O, \set a} = \set {\O, \set c}$
It follows from the lemma that:

$\set a = \set c$
Hence from Singleton Equality:

$a = c$

Now suppose $x = \set {\set b}$.
Then:

$x = \set {\O, \set c}$ or $x = \set {\set d}$
Aiming for a contradiction, suppose $x = \set {\O, \set c}$.
That is:

$\set {\set b} = \set {\O, \set c}$
which means that $\set b = \O$ and $\set b = \set c$.
But as $\O \ne \set \O$ it follows by Proof by Contradiction that $x \ne \set {\O, \set c}$.
Thus $x = \set {\set d}$.
We have that:

$x = \set {\set b}$ and $x = \set {\set d}$
By Singleton Equality:

$\set b = \set d$
and again by Singleton Equality:

$b = d$
$\blacksquare$



This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 4$ The pairing axiom: Exercise $4.1. \ \text{(b)}$




