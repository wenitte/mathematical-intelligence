# 

Source: https://proofwiki.org/wiki/Existence_of_Positive_Root_of_Positive_Real_Number/Positive_Exponent/Proof_1

Theorem
Let $x \in \R$ be a real number such that $x > 0$.
Let $n \in \Z$ be an integer such that $n > 0$.

Then there exists a $y \in \R: y \ge 0$ such that $y^n = x$.


Proof
Let $f$ be the real function defined on the unbounded closed interval $\hointr 0 \to$ defined by $\map f y = y^n$.
Consider first the case of $n > 0$.
By Strictly Positive Integer Power Function is Unbounded Above:

$\exists q \in \R_{>0}: \map f q \ge x$
Since $x \ge 0$:

$\map f 0 \le x$
By the Intermediate Value Theorem:

$\exists y \in \R: 0 \le y \le q, \map f y = x$
Hence the result has been shown to hold for $n > 0$.
$\blacksquare$





