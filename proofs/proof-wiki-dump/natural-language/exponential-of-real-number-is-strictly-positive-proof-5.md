# 

Source: https://proofwiki.org/wiki/Exponential_of_Real_Number_is_Strictly_Positive/Proof_5



Theorem
Let $x$ be a real number.
Let $\exp$ denote the (real) exponential function.

Then:

$\forall x \in \R : \exp x > 0$


Proof
This proof assumes the definition of $\exp$ as the solution to an initial value problem.
That is, suppose $\exp$ satisfies:

$ (1): \quad D_x \exp x = \exp x$
$ (2): \quad \map \exp 0 = 1$
on $\R$.


Lemma
$\forall x \in \R: \exp x \ne 0$
$\Box$

Aiming for a contradiction, suppose that $\exists \alpha \in \R: \exp \alpha < 0$.

Then $0 \in \openint {\exp \alpha} 1$.
From Intermediate Value Theorem:

$\exists \zeta \in \openint \alpha 0: \map f \zeta = 0$

This contradicts the lemma.
$\blacksquare$


Sources
2011: Robert G. Bartle and Donald R. Sherbert: Introduction to Real Analysis (4th ed.): $\S 8.3$: Theorem $6 \ \text {(iii)}$




