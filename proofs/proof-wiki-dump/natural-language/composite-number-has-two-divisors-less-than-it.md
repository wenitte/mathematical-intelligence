# 

Source: https://proofwiki.org/wiki/Composite_Number_has_Two_Divisors_Less_Than_It

Theorem
Let $n \in \Z_{> 1}$ such that $n \notin \mathbb P$.

Then:

$\exists a, b \in \Z: 1 < a < n, 1 < b < n: n = a b$

That is, a non-prime number greater than $1$ can be expressed as the product of two positive integers strictly greater than $1$ and less than $n$.

Note that these two numbers are not necessarily distinct.


Proof
Since $n \notin \mathbb P$, it has a positive factor $a$ such that $a \ne 1$ and $a \ne n$.
Hence $\exists b \in \Z: n = a b$.

Thus by definition of factor:

$a \divides n$
where $\divides$ denotes divisibility.
From Divisor Relation on Positive Integers is Partial Ordering:

$a \le n$
As $a \ne n$, it follows that $a < n$.
From One Divides all Integers:

$1 \divides a$
Thus from Divisor Relation on Positive Integers is Partial Ordering:

$1 \le a$
Similarly, as $1 \ne a$ it follows that $1 < a$.

Since $a \ne n$, it follows that $b \ne 1$.
Similarly, since $a \ne 1$, it follows that $b \ne n$.
Thus:

$b \divides n: 1 \ne b \ne n$
Arguing as above, we show that $1 < b < n$ and the result follows.
$\blacksquare$

Note that we have not shown (and it is not necessarily the case) that $a \ne b$.





