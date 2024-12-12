# 

Source: https://proofwiki.org/wiki/Exponential_of_Real_Number_is_Strictly_Positive/Proof_5/Lemma

Theorem
Let $x$ be a real number.
Let $\exp$ denote the (real) Exponential Function.

Then:

$\forall x \in \R: \exp x \ne 0$


Proof
This proof assumes the definition of $\exp$ as the solution to an initial value problem.
That is, suppose $\exp$ satisfies:

$(1): \quad D_x \exp x = \exp x$
$(2): \quad \map \exp 0 = 1$
on $\R$.

Aiming for a contradiction, suppose $\exists \alpha \in \R: \exp \alpha = 0$.
Suppose that $\alpha > 0$.
Let $J = \closedint 0 \alpha$.

From Exponential Function is Continuous, $\exp$ is continuous on $J$.
From Max and Min of Function on Closed Real Interval:

$\exists K \in \R: \forall x \in J: \size {\exp x} < K$

Then, $\forall n \in \N : \exists c_n \in J$ such that:














\(\ds 1\)

\(=\)







\(\ds \exp 0\)





by $(2)$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{n - 1} \frac {\map {\exp^j} \alpha} {j!} \paren {-\alpha}^j + \frac {\exp c_n} {n!} \paren {-\alpha}^n\)





Taylor's Theorem for Univariate Functions














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{n - 1} \frac {\map \exp \alpha} {j!} \paren {-\alpha}^j + \frac {\exp c_n} {n!} \paren {-\alpha}^n\)





by $(1)$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{n - 1} \frac 0 {j!} \paren {-\alpha}^j + \frac {\exp c_n} {n!} \paren {-\alpha}^n\)





from our assumption aiming for a contradiction














\(\ds \)

\(=\)







\(\ds \frac {\exp c_n} {n!} \paren {-\alpha}^n\)










So:

$\forall n \in \N: 1 \le K \dfrac {\alpha^n} {n!}$
That is, dividing both sides by $K$:

$\forall n \in \N: \dfrac 1 K \le \dfrac {\alpha^n} {n!}$
But from Power over Factorial, $\dfrac {\alpha^n} {n!} \to 0$.

This contradicts our assumption.

The same argument, mutatis mutandis proves the result for $\alpha < 0$.

By hypothesis $(2)$:














\(\ds \alpha\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \exp \alpha\)

\(=\)







\(\ds 1\)




















\(\ds \)

\(\ne\)







\(\ds 0\)










Hence the result.
$\blacksquare$





