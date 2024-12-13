# 

Source: https://proofwiki.org/wiki/Product_of_Divisors/Proof_2

Theorem
Let $n$ be an integer such that $n \ge 1$.
Let $\map D n$ denote the product of the divisors of $n$.
Then:

$\map D n = n^{\map {\sigma_0} n / 2}$
where $\map {\sigma_0} n$ denotes the divisor count function of $n$.


Proof













\(\ds \map D n^2\)

\(=\)







\(\ds \paren {\prod_{d \mathop \divides n} d}^2\)





by definition














\(\ds \)

\(=\)







\(\ds \paren {\prod_{d \mathop \divides n} d} \paren {\prod_{d \mathop \divides n} \dfrac n d}\)





Sum Over Divisors Equals Sum Over Quotients














\(\ds \)

\(=\)







\(\ds \prod_{d \mathop \divides n} n\)





combining the two products














\(\ds \)

\(=\)







\(\ds n^{\map {\sigma_0} n}\)





Definition of Divisor Count Function



The result follows by taking the (positive) square root of both sides.
$\blacksquare$





