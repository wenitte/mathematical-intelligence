# 

Source: https://proofwiki.org/wiki/Largest_Integer_whose_Digits_taken_in_Pairs_all_form_Distinct_Primes



Theorem
The largest integer which has the property that every pair of its digits taken together is a distinct prime number is $619 \, 737 \, 131 \, 179$.


Proof
Let $p$ be such an integer.
Apart from the first digit, each of its digits forms the second digit of a $2$-digit prime number.
Thus, apart from the first digit, $p$ cannot contain $2$, $4$, $5$, $6$, $8$ or $0$.
$0$ cannot of course be the first digit either.
Thus, apart from the first pair of its digits, the $2$-digit prime numbers contained in $p$ can only ever be in the set:

$S = \left\{ {11, 13, 17, 19, 31, 37, 71, 73, 79, 97}\right\}$
Let it be assumed that the largest such $p$ contains all of the above.
There are $10$ elements of $S$.
Each of the elements of $S$ apart from one shares both digits with one other element of $S$, apart from the final one in $p$.
Thus the elements of $S$ contribute $11$ digits of $p$ in total.
The first digit of the first pair contributes an extra $1$ digit to $p$.
Thus $p$ contains $12$ digits.

Only $1$ element of $S$ begins with $9$, but $2$ of them end with $9$.
Therefore $9$ must be the last digit of $p$.

Only $3$ elements of $S$ end in $1$, but $4$ of them begin with $1$.
Thus the first pair of digits of $p$ must be a prime number which does not appear in $S$ whose $2$nd digit is $1$.
Thus the first $2$ digits of $p$ can only be $41$ or $61$.

Let us construct $p$ by starting from the left and use the greedy algorithm consisting of select the largest digit available.

$61$ is larger than $41$, so $p$ can be assumed to start with $61$.
Using this algorithm, we select the elements of $S$ in the following order:

$61$, $19$, $97$ (which is forced), $73$, $37$, $71$
The next element of $S$ cannot be $17$, because that would force $79$ to follow.
But as $79$ is the only remaining element of $S$ ending in $9$, $79$ must be at the end of $p$.
So $71$ must be followed by $11$ or $13$.
Continuing to use the greedy algorithm:

$61$, $19$, $97$ $73$, $37$, $71$, $13$, $31$ (forced)
For the same reason as above, we cannot then select $17$, as this will be followed by $79$ which cannot be followed.
So we continue with the greedy algorithm:

$61$, $19$, $97$ $73$, $37$, $71$, $13$, $31$, $11$, $17$, $79$
and $p$ is complete:

$619 \, 737 \, 131 \, 179$
As a bonus, $p$ is itself a prime number.
$\blacksquare$


Historical Note
David Wells reports in his Curious and Interesting Numbers, 2nd ed. of $1997$ that this factoid appears in issue $40$ of Eureka, but this has not been corroborated.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $619,737,131,179$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $619,737,131,179$




