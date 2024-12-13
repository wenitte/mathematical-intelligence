# 

Source: https://proofwiki.org/wiki/Quantity_of_Positive_Integers_Divisible_by_Particular_Integer

Theorem
Let $d$ be a positive integer. 
Let $x \ge 1$ be a real number.

Then: 

$\ds \sum_{n \le x, \, d \divides n} 1 = \floor {\frac x d}$
That is: 

there are $\floor {\dfrac x d}$ natural numbers less than or equal to $x$ that are divisible by $d$.


Proof
Consider the sum: 

$\ds \sum_{n \le x, \, d \divides n} 1$
Note that a natural number $n \le x$ is divisible by $d$ if and only if:

there exists a natural number $k$ such that $n = d k$.
So we are counting the natural numbers $k$ such that $d k \le x$. 
That is, the natural numbers $k$ such that: 

$k \le \dfrac x d$
So:














\(\ds \sum_{n \le x, \, d \divides n} 1\)

\(=\)







\(\ds \sum_{k \le x/d} 1\)




















\(\ds \)

\(=\)







\(\ds \floor {\frac x d}\)









$\blacksquare$





