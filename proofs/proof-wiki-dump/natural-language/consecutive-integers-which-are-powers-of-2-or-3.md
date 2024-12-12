# 

Source: https://proofwiki.org/wiki/Consecutive_Integers_which_are_Powers_of_2_or_3



Theorem
The only pairs of consecutive positive integers which are powers of $2$ or $3$ are:

$\tuple {1, 2}$, $\tuple {2, 3}$, $\tuple {3, 4}$, $\tuple {8, 9}$


Proof
Let $a$ and $b$ be two arbitrary consecutive positive integers.


Both Integers Powers of $2$
The only powers of $2$ that differ by $1$ are $2^0$ and $2^1$, which gives us the pair $\tuple {1, 2}$.


Both Integers Powers of $3$
The powers of $3$ are:

$1, 3, 9, \ldots$
and so trivially there are no two consecutive positive integers which are powers of $3$.


The Remaining Case
There is no need to consider the case where $a$ or $b$ is $1$, as that has already been investigated.
So, let $a = 2^m$ and $b = 3^n$ where both $m$ and $n$ are greater than $0$.
From Powers of 3 Modulo 8, $b \equiv 1 \pmod 8$ or $b \equiv 3 \pmod 8$.
For $m \ge 3$ we have that:

$2^m \equiv 0 \pmod 8$
while:

$2^1 \equiv 2 \pmod 8$
$2^2 \equiv 4 \pmod 8$

Let $a = b + 1$.
Then we have the cases:

$b = 1, a = 2$
which has already been covered, and:

$b = 3, a = 4$
which gives us the pairs $\tuple {3, 4}$.
Otherwise, for $a \ge 8$, we have:














\(\ds b + 1\)

\(=\)







\(\ds a\)














\(\ds \leadsto \ \ \)





\(\ds b + 1\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod 8\)












\(\ds \leadsto \ \ \)





\(\ds b\)

\(\equiv\)







\(\ds 7\)

\(\ds \pmod 8\)







and we have demonstrated that there are no such $b$, as $b \equiv 1 \pmod 8$ or $b \equiv 3 \pmod 8$

Let $b = a + 1$.
Let $b = 3^n$ where $n$ is odd.
Then $b \equiv 3 \pmod 8$
which means:

$b \equiv 2 \pmod 8$
leading to the pair $\tuple {2, 3}$.
No further pairs are possible for $b = 3^n$ with $n$ odd.

Let $b = 3^n$ where $n$ is even.
Thus:














\(\ds a\)

\(=\)







\(\ds 2^m\)




















\(\ds \)

\(=\)







\(\ds b - 1\)




















\(\ds \)

\(=\)







\(\ds 3^n - 1\)




















\(\ds \)

\(=\)







\(\ds 3^{2 k} - 1\)




















\(\ds \)

\(=\)







\(\ds \paren {3^k + 1} \paren {3^k - 1}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \paren {3^k + 1} \paren {3^k - 1}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds 2^m\)




















\(\ds \)

\(=\)







\(\ds 2^p \, 2^q\)





for some $p, q \in \Z_{\ge 0}$ such that $2^p = 2^q + 2$



The only such $p$ and $q$ are $2^p = 2$ and $2^q = 4$
This means that the only possible pair fulfilling this condition is $\tuple {8, 9}$.
Thus all such possible pairs have been found.
$\blacksquare$


Historical Note
The result Consecutive Integers which are Powers of 2 or 3 was demonstrated rigorously by Levi ben Gershon, under the name Leo Hebraeus, in his De numeris harmonicis of $1343$.


Sources
1343: Leo Hebraeus: De numeris harmonicis




