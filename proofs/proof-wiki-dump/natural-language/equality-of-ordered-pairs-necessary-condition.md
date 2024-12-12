# 

Source: https://proofwiki.org/wiki/Equality_of_Ordered_Pairs/Necessary_Condition



Theorem
Let $\tuple {a, b}$ and $\tuple {c, d}$ be ordered pairs such that $\tuple {a, b} = \tuple {c, d}$.
Then $a = c$ and $b = d$.


Proof from Kuratowski Formalization
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


Proof from Empty Set Formalization
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


Proof from Wiener Formalization
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


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 6$: Ordered Pairs
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $1.1: \ 12$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Exercise $1.11$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 3$. Ordered pairs; cartesian product sets: Theorem $3.1$
1999: András Hajnal and Peter Hamburger: Set Theory ... (previous) ... (next): $1$. Notation, Conventions: $9$: Theorem $1.3$
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 4$ The pairing axiom: Theorem $4.4$.




