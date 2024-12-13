# 

Source: https://proofwiki.org/wiki/Rational_Numbers_form_Prime_Field



Theorem
The field of rational numbers $\struct {\Q, +, \times}$ is a prime field.

That is, the only subset of $\Q$ which sustains both addition and multiplication are $\Q$ and $\set 0$, and vacuously $\O$.


Proof
Let $F$ be a subfield of $\struct {\Q, +, \times}$.
Then $F$ is by definition a field.
Thus by definition:

$\struct {F, +}$ is an abelian group
and:

$\struct {F^*, \times}$ is an abelian group, where $F^* = F \setminus \set 0$.
and $\times$ is distributive over $+$:

$\forall a, b, c \in F: a \times \paren {b + c} = a \times b + a \times c$

Let $a \in F^*$.
Then:














\(\ds a\)

\(\in\)







\(\ds F^*\)














\(\ds \leadsto \ \ \)





\(\ds a^{-1}\)

\(\in\)







\(\ds F^*\)





Group Axiom $\text G 3$: Existence of Inverse Element in $\struct {F^*, \times}$








\(\ds \leadsto \ \ \)





\(\ds a^{-1} \times a = 1\)

\(\in\)







\(\ds F^*\)














\(\ds \leadsto \ \ \)





\(\ds 1\)

\(\in\)







\(\ds F\)














\(\ds \leadsto \ \ \)





\(\ds -1\)

\(\in\)







\(\ds F\)





Group Axiom $\text G 3$: Existence of Inverse Element in $\struct {F, +}$








\(\ds \leadsto \ \ \)





\(\ds 1 + \paren {-1} = 0\)

\(\in\)







\(\ds F\)










We have $1 \in F$.
Suppose $n \in \Z$ such that $n \in F$.
Then:

$n + 1 \in F$
So by the Principle of Mathematical Induction, all positive integers are in $F$.
By Group Axiom $\text G 3$: Existence of Inverse Element in $\struct {F, +}$:

$m \in F \implies -m \in F$
So all negative integers are also in $F$.
That is:

$\forall m \in \Z: m \in \F$

Recall Group Axiom $\text G 3$: Existence of Inverse Element in $\struct {F^*, \times}$:

$m \in F^* \implies m^{-1} \in F^*$
So:

$\forall p \in \Z, q \in \Z_{\ne 0}: p \times q^{-1} \in F$
and it follows by the Subfield Test that $F = \Q$.
$\blacksquare$


Also see
Number Field has Rational Numbers as Subfield, a direct consequence


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 2$. Elementary Properties: Example $1$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.4$: The rational numbers and some finite fields: Exercise $3$




