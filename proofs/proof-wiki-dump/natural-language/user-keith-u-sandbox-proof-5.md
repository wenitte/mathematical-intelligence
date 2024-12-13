# 

Source: https://proofwiki.org/wiki/User:Keith.U/Sandbox/Proof_5

Theorem
Let $x$ be a real number.
Let $\exp$ denote the  (real) Exponential Function.

Then:

$\forall x \in \R : \exp x > 0$


Proof
This proof assumes the  definition of $\exp$ as the solution to an initial value problem.
That is, suppose $\exp$ satisfies:

$ (1): \quad D_x \exp x = \exp x$
$ (2): \quad \exp \left({ 0 }\right) = 1$
on $\R$.


Lemma
$\forall x \in \R : \exp x \neq 0$
$\Box$

Aiming for a contradiction, suppose that, $\exists \alpha \in \R : \exp \alpha < 0$.

Then, from Intermediate Value Theorem:
$\exists \zeta \in \left({ \alpha, \,.\,.\,. 0 }\right) : f \left({ \zeta }\right) = 0 \in \left({ \exp \alpha, \,.\,.\, 1 }\right)$

This contradicts the lemma.
$\blacksquare$





