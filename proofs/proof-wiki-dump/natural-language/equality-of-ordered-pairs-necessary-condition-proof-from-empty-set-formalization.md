# 

Source: https://proofwiki.org/wiki/Equality_of_Ordered_Pairs/Necessary_Condition/Proof_from_Empty_Set_Formalization

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
From the empty set formalization:

$\set {\set {\O, a}, \set {\set \O, b} } = \set {\set {\O, c}, \set {\set \O, d} }$

First we note the special case where $a = \set \O$ and $b = \O$.
Then we have:














\(\ds \set {\set {\O, a}, \set {\set \O, b} }\)

\(=\)







\(\ds \set {\set {\O, \set \O}, \set {\set \O, \O} }\)




















\(\ds \)

\(=\)







\(\ds \set {\set {\O, \set \O}, \set {\O, \set \O} }\)





Definition of Set Equality: $\set {\O, \set \O } = \set {\set \O, \O}$














\(\ds \)

\(=\)







\(\ds \set {\set {\O, \set \O} }\)





Doubleton Class of Equal Sets is Singleton Class














\(\ds \)

\(=\)







\(\ds \set {\set {\O, c}, \set {\set \O, d} }\)





by definition



Thus we have that:

$c = d = \set {\O, \set \O}$
and so:

$c = \set \O$ and $d = \O$
leading to the result that $a = c$ and $b = d$.
$\Box$

Suppose otherwise, that either $a \ne \set \O$ or $b \ne \O$, or both.

Let $x \in \set {\set {\O, a}, \set {\set \O, b} }$.
Then either:

$x = \set {\O, a}$
or:

$x = \set {\set \O, b}$

First suppose $x = \set {\O, a}$.
Then:

$x = \set {\O, c}$ or $x = \set {\set \O, d}$
Aiming for a contradiction, suppose $x = \set {\set \O, d}$.
That is:

$\set {\O, a} = \set {\set \O, d}$
which means that $a = \set \O$ and $d = \O$.
But as $\O \ne \set \O$ it follows by Proof by Contradiction that $x \ne \set {\set \O, d}$.
Thus $x = \set {\O, c}$.
We have that:

$x = \set {\O, a}$ and $x = \set {\O, c}$
and so:

$\set {\O, a} = \set {\O, c}$
It follows from the lemma that:

$a = c$

Now suppose $x = \set {\set \O, b}$.
Then:

$x = \set {\O, c} \lor \set {\set \O, d}$
Aiming for a contradiction, suppose $x = \set {\O, c}$.
That is:

$\set {\set \O, b} = \set {\O, c}$
which means that $b = \O$ and $c = \set \O$.
But as $\O \ne \set \O$ it follows by Proof by Contradiction that $x \ne \set {\O, c}$.
Thus $x = \set {\set \O, d}$.
We have that:

$x = \set {\set \O, b}$ and $x = \set {\set \O, d}$
and so:

$\set {\set \O, b} = \set {\set \O, d}$
It follows from the lemma that:

$b = d$
$\blacksquare$



This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 4$ The pairing axiom: Exercise $4.1. \ \text{(a)}$




