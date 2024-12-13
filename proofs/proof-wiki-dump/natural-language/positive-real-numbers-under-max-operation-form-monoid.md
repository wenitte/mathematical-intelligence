# 

Source: https://proofwiki.org/wiki/Positive_Real_Numbers_under_Max_Operation_form_Monoid

Theorem
Let $\R_{\ge 0}$ be the set of positive (that is, non-negative) real numbers.
Let $\max: \R_{\ge 0}^2 \to \R_{\ge 0}$ be the max operation on $\R_{\ge 0}$.

Then $\struct {\R_{\ge 0}, \max}$ is a monoid whose identity is $0$.


Proof
From Real Numbers are Totally Ordered, $\R$ is a totally ordered set.
From Max Operation on Toset forms Semigroup, $\struct {\R_{\ge 0}, \max}$ is a semigroup.
By definition of $\R_{\ge 0}$:

$\forall x \in \R_{\ge 0}: 0 \le x$
Thus by definition of the max operation:

$\forall x \in \R_{\ge 0}: \map \max {0, x} = x = \map \max {x, 0}$
So $0$ is the identity of $\struct {\R_{\ge 0}, \max}$ by definition.
The result follows by definition of monoid.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.1$: Monoids




