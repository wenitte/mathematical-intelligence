# 

Source: https://proofwiki.org/wiki/Real_Number_is_Ceiling_minus_Difference



Theorem
Let $x \in \R$ be a real number.
Let $\ceiling x$ be the ceiling of $x$.
Let $n$ be a integer.

The following statements are equivalent:

$(1): \quad$ There exists $t \in \hointr 0 1$ such that $x = n - t$
$(2): \quad n = \ceiling x$


Proof
1 implies 2
Let $x = n - t$, where $t \in \hointr 0 1$.
Because $0 \le t < 1$, we have:

$0 \leq n - x < 1$
Thus:

$n - 1 < x \le  n$
That is, $n$ is the ceiling of $x$.
$\Box$


2 implies 1
Now let $n = \ceiling x$.
Let $t = \ceiling x - x$.
Then $x = n - t$.
From Ceiling minus Real Number, $t = \ceiling x - x \in \hointr 0 1$
$\blacksquare$


Also see
Real Number is Floor plus Difference
Definition:Fractional Part




