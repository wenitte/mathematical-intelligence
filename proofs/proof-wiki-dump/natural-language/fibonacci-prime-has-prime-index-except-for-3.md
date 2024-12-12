# 

Source: https://proofwiki.org/wiki/Fibonacci_Prime_has_Prime_Index_except_for_3



Theorem
Let $F_n$ denote the $n$th Fibonacci number.
Let $F_n$ be a prime number.

Then, apart from $F_4 = 3$, $n$ is a prime number.


Proof
Let $F_n$ be a prime number.
Aiming for a contradiction, suppose $n$ is a composite number greater than $4$.
Then $n = r s$ for some $1 < r, s < n$.
Except for the case where $n = 4$, at least one of $r$ and $s$ is greater than $2$.
From Divisibility of Fibonacci Number:

$F_r \divides F_n$
and:

$F_s \divides F_n$
where $\divides$ denotes divisibility.
When $k > 2$ we have that $F_k > 1$.
Thus when $n$ is composite such that $n > 4$, $F_n$ has at least one proper divisor.
That is, $F_n$ is not prime.
Thus by Proof by Contradiction, $n$ cannot be composite.

The exception is when $n = 4$, as noted above in which case its only proper divisor is $2$.
But $F_2 = 1$, and so divisibility by $F_2$ does not preclude primality.
Indeed, $F_4 = 3$, which is prime.
$\blacksquare$


Also see
Fibonacci Number with Prime Index is not necessarily Prime, demonstrating the converse does not hold.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $7$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$




