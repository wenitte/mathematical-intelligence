# 

Source: https://proofwiki.org/wiki/Divisibility_of_n-1_Factorial_by_Composite_n



Theorem
Let $n \in \Z$ be composite.
Then:

$n \divides \paren {n - 1}! \iff n \ne 4$
where:

$\divides$ denotes divisibility
$n!$ denotes the factorial of $n$.


Proof
Necessary Condition
We have that $3! = 6$ and that $4$ does not divide $6$.
So in order for $n$ to divide $\paren {n - 1}!$ it is necessary that $n \ne 4$.
$\Box$


Sufficient Condition
Let $n \ne 4$ be composite.
Let $n = r s$ where:

$r, s \in \Z_{> 1}$
$r \ne s$
$r, s < n$
This is always possible unless $n = p^2$ for some prime number $p$.
Without loss of generality, let $r < s$.
Then by definition of factorial:

$\paren {n - 1}! = 1 \times 2 \times \ldots \times r \times \ldots \times s \times \ldots \times \paren {n - 2} \times \paren {n - 1}$
and so:

$n = r s \divides \paren {n - 1}!$

Let $n = p^2$.
As $n \ne 4$, we have that $p \ne 2$.
Hence $p > 2$.
Hence:

$2 p < p^2$
and so:

$2 p \divides \paren {n - 1}!$
By definition of factorial:

$\paren {n - 1}! = 1 \times 2 \times \ldots \times p \times \ldots \times 2 p \times \ldots \times \paren {n - 2} \times \paren {n - 1}$
and so:

$n = p^2 \divides \paren {n - 1}!$
Hence the result.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $4$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $4$




