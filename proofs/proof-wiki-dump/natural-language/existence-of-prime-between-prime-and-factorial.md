# 

Source: https://proofwiki.org/wiki/Existence_of_Prime_between_Prime_and_Factorial



Theorem
Let $p$ be a prime number.
Then there exists a prime number $q$ such that:

$p < q \le p! + 1$
where $p!$ denotes the factorial of $p$.


Proof
Let $N = p! + 1$.
If $N$ is prime, then the proof is complete.
Otherwise, from Positive Integer Greater than 1 has Prime Divisor, $N$ has a prime divisor $q$.
From Absolute Value of Integer is not less than Divisors:

$q < N$
Aiming for a contradiction, suppose $q \le p$.
Then by the definition of factorial:

$q \divides p!$
But $q$ was chosen so that :$q \divides N$.
Let $p! = q m_1, N = q m_2$.
Then:

$1 = N - p! = q \paren {m_2 - m_1}$
and so:

$q \divides 1$
From Absolute Value of Integer is not less than Divisors:

$q \le 1$
and so $q$ cannot be a prime number.
It follows by Proof by Contradiction that $q > p$.
$\blacksquare$


Also see
Euclid's Theorem, of which this is a variant.


Sources
1982: Martin Davis: Computability and Unsolvability (2nd ed.) ... (previous) ... (next): Appendix $1$: Some Results from the Elementary Theory of Numbers: Theorem $4$




