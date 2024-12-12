# 

Source: https://proofwiki.org/wiki/Confusion_of_Bound_Variables

Mistake
Let $\mathbf A$ be the WFF of predicate logic:

$\forall x: ( \exists y: x < y )$
Suppose we wished to substitute $y$ for $x$.
If we paid no heed to whether $y$ were free for $x$, we would obtain:

$\forall y: ( \exists y: y < y )$
This is plainly false for the natural numbers, but $\forall x: \exists y: x < y$ is true (just take $y = x + 1$).
This problem is called confusion of bound variables.


Resolution
In formal systems with the language of predicate calculus, substitution is restricted to substitution for free occurrences.
Since $x$ is in the WFF $(\exists y: x < y)$, it is by definition not the case that $y$ is free for $x$.
Thus this substitution is not asserted to preserve truth.
$\blacksquare$





