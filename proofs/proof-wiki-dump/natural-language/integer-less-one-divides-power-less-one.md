# 

Source: https://proofwiki.org/wiki/Integer_Less_One_divides_Power_Less_One



Theorem
Let $q, n \in \Z_{>0}$.
Then:

$\paren {q - 1} \divides \paren {q^n - 1}$
where $\divides$ denotes divisibility.


Corollary
Let $m, n, q \in \Z_{>0}$.
Let:

$m \divides n$
where $\divides$ denotes divisibility.
Then:

$\paren {q^m - 1} \divides \paren {q^n - 1}$


Proof
From Sum of Geometric Sequence:

$\ds \frac {q^n - 1} {q - 1} = \sum_{k \mathop = 0}^{n - 1} q^k$
That is:

$q^n - 1 = r \paren {q - 1}$
where $r = 1 + q + q^2 + \cdots + q^{n - 1}$.
As Integer Addition is Closed and Integer Multiplication is Closed, it follows that $r \in \Z$.
Hence the result by definition of divisor of integer.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.4$: The rational numbers and some finite fields: Further Exercises $5$




