# 

Source: https://proofwiki.org/wiki/User:Keith.U/Sandbox/Lemma

Theorem
Let $x$ be a real number.
Let $\exp$ denote the  (real) Exponential Function.

Then:

$\forall x \in \R : \exp x \neq 0$


Proof
This proof assumes the  definition of $\exp$ as the solution to an initial value problem.
That is, suppose $\exp$ satisfies:

$ (1): \quad D_x \exp x = \exp x$
$ (2): \quad \exp \left({ 0 }\right) = 1$
on $\R$.

Aiming for a contradiction, suppose that $\exists \alpha \in \R : \exp \alpha = 0$.
Suppose that $\alpha > 0$.
Let $J = \left[{ 0 \,.\,.\, \alpha }\right]$.

From  Exponential Function is Continuous, $\exp$ is  continuous on $J$.
From Max and Min of Function on Closed Real Interval:

$\exists K \in \R : \forall x \in J : \left\vert{ \exp x }\right\vert < K$

Then, $\forall n \in \N : \exists c_n \in J$ such that:














\(\ds 1\)

\(=\)







\(\ds \exp 0\)





By  hypothesis $(2)$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{n-1} \frac{ \exp^{j} \left({ \alpha }\right) }{ j! } \left({ -\alpha }\right)^{j} + \frac{\exp c_n}{n!} \left({ -\alpha }\right)^{n}\)





 Taylor's Theorem for Univariate Functions














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{n-1} \frac{ \exp \left({ \alpha }\right) }{ j! } \left({ -\alpha }\right)^{j} + \frac{\exp c_n}{n!} \left({ -\alpha }\right)^{n}\)





By hypothesis $(1)$














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{n-1} \frac{ 0 }{ j! } \left({ -\alpha }\right)^{j} +  \frac{\exp c_n}{n!} \left({ -\alpha }\right)^{n}\)





From our assumption aiming at a contradiction














\(\ds \)

\(=\)







\(\ds \frac{\exp c_n}{n!} \left({ -\alpha }\right)^{n}\)










So $\forall n \in \N : 1 \leq K \dfrac{ \alpha^{n} }{ n! }$
That is, dividing both sides by $K$:

$\forall n \in \N : \dfrac{1}{K} \leq \dfrac{ \alpha^{n} }{ n! }$
But from Power over Factorial, $\dfrac{ \alpha^{n} }{ n! } \to 0$.

This contradicts our assumption.

The same argument,  mutatis mutandis proves the result for $\alpha < 0$.

By hypothesis $(2)$:






\(\ds \alpha = 0 \ \ \)

\(\ds \implies \ \ \)





\(\ds \exp \alpha\)

\(=\)







\(\ds 1\)




















\(\ds \)

\(\neq\)







\(\ds 0\)










Hence the result.
$\blacksquare$





