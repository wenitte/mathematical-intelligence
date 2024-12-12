# 

Source: https://proofwiki.org/wiki/Composite_Number_has_Prime_Factor_not_Greater_Than_its_Square_Root



Theorem
Let $n \in \N$ and $n = p_1 \times p_2 \times \cdots \times p_j$, $j \ge 2$, where $p_1, \ldots, p_j \in \Bbb P$ are prime factors of $n$.
Then $\exists p_i \in \Bbb P$ such that $p_i \le \sqrt n$.

That is, if $n \in \N$ is composite, then $n$ has a prime factor $p \le \sqrt n$. 


Proof
Let $n$ be composite such that $n \ge 0$.
From Composite Number has Two Divisors Less Than It, we can write $n = a b$ where $a, b \in \Z$ and $1 < a, b < n$. 
Without loss of generality, suppose that $a \le b$.

Let $a > \sqrt n$.
Then $b \ge a > \sqrt n$. 
However, if $b \ge a > \sqrt n$ is true, then:

$n = a b > \sqrt n \sqrt n > n$
This is clearly a contradiction.

So:

$a \le \sqrt n$
From Positive Integer Greater than 1 has Prime Divisor it follows that there is some prime $p$ which divides $a$.
From Absolute Value of Integer is not less than Divisors, we have that $p \le a$ and so:

$p \le \sqrt n$
From Divisor Relation on Positive Integers is Partial Ordering:

$p \divides n$
Hence the result.
$\blacksquare$


Comment
Suppose we are testing a number to see whether it is prime, or so as to find all its divisors.
One way to do this (which may not be the most efficient in all circumstances, but it gets the job done) is to divide it by successively larger primes until you find one that is a factor of the number.
Eventually you're bound to find a prime that is a factor, by Positive Integer Greater than 1 has Prime Divisor.

However, this result tells us that we don't need to go out that far.
If we've tested all the primes up to the square root of our target number without finding a divisor, we don't need to go any further because we know that our target number is prime after all.


Sources
1937: Eric Temple Bell: Men of Mathematics ... (previous) ... (next): Chapter $\text{IV}$: The Prince of Amateurs
1979: G.H. Hardy and E.M. Wright: An Introduction to the Theory of Numbers (5th ed.) ... (previous) ... (next): $\text I$: The Series of Primes: $1.2$ Prime numbers
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.2$: Divisibility and factorization in $\mathbf Z$: Exercise $2$




