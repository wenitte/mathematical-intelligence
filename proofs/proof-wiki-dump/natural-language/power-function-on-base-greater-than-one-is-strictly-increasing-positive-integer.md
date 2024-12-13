# 

Source: https://proofwiki.org/wiki/Power_Function_on_Base_Greater_than_One_is_Strictly_Increasing/Positive_Integer

Theorem
Let $a \in \R$ be a real number such that $a > 1$.
Let $f: \Z_{\ge 0} \to \R$ be the real-valued function defined as:

$\map f n = a^n$
where $a^n$ denotes $a$ to the power of $n$.

Then $f$ is strictly increasing.


Proof
Fix $n \in \Z_{\ge 0}$.

From Ordering of Reciprocals:

$0 < \dfrac 1 a < 1$
From Power Function on Base between Zero and One is Strictly Decreasing: Positive Integer:

$\paren {\dfrac 1 a}^{n + 1} < \paren {\dfrac 1 a}^n$
From Real Number to Negative Power: Positive Integer:

$\dfrac 1 {a^{n + 1} } < \dfrac 1 {a^n}$
From Ordering of Reciprocals:

$a^n < a^{n + 1}$

Hence the result.
$\blacksquare$





