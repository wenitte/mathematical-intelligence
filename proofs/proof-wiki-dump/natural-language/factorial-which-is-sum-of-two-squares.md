# 

Source: https://proofwiki.org/wiki/Factorial_which_is_Sum_of_Two_Squares

Theorem
The only factorial which can be expressed as the sum of two squares is:














\(\ds 6!\)

\(=\)







\(\ds 12^2 + 24^2\)











Proof
We show that for $n \ge 7$, $n!$ cannot be expressed as the sum of two squares.

By refining the result in Interval containing Prime Number of forms 4n - 1, 4n + 1, 6n - 1, 6n + 1, one can show that:

There exists a prime of the form $4 k + 3$ strictly between $m$ and $2 m$ whenever $m \ge 4$.
Let $n \ge 7$. Then $\ceiling {\dfrac n 2} \ge 4$.
Using the result above, there is a prime $p$ of the form $4 k + 3$ such that:

$\ceiling {\dfrac n 2} < p < 2 \ceiling {\dfrac n 2}$
We then have, by multiplying the inequality by $2$:

$2 \ceiling {\dfrac n 2} < 2 p < 4 \ceiling {\dfrac n 2}$
This gives:

$p < 2 \ceiling {\dfrac n 2} < 2 p$
Which implies:

$p \le n < 2 p$

From Integer as Sum of Two Squares:

$n!$ can be expressed as the sum of two squares if and only if each of its prime divisors of the form $4 k + 3$ (if any) occur to an even power.
The inequality above shows that there are no multiples of $p$ which are not greater than $n$ except $p$ itself.
Hence $p$ occurs to an odd power, $1$, in $n!$.
This shows that for $n \ge 7$, $n!$ cannot be expressed as the sum of two squares.

Checking the rest of the factorials we see that the only ones satisfying the criteria are:














\(\ds 0! = 1!\)

\(=\)







\(\ds 0^2 + 1^2\)




















\(\ds 2!\)

\(=\)







\(\ds 1^2 + 1^2\)




















\(\ds 6!\)

\(=\)







\(\ds 12^2 + 24^2\)









Hence the result.
$\blacksquare$


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $720$




