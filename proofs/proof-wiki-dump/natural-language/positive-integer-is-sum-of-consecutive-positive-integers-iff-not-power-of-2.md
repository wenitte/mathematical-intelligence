# 

Source: https://proofwiki.org/wiki/Positive_Integer_is_Sum_of_Consecutive_Positive_Integers_iff_not_Power_of_2



Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Then $n$ can be expressed as the sum of $2$ or more consecutive (strictly) positive integers if and only if $n$ is not a power of $2$.


Proof
Necessary Condition
Let $a$ be the smallest of $m$ consecutive (strictly) positive integers, where $m \ge 2$.
From Sum of Arithmetic Sequence, their sum is $\dfrac {m \paren {2 a + m - 1} } 2$. 

Aiming for a contradiction, suppose $\dfrac {m \paren {2 a + m - 1} } 2$ is a power of $2$.
Then $m$ and $2 a + m - 1$ must also be powers of $2$.
Since $m \ge 2$, $m$ must be even.
Then $2 a + m - 1$ is odd.
Together with $2 a + m - 1$ being a power of $2$, we have $2 a + m - 1 = 1$.
However, $2 a + m - 1 > 2 \times 0 + 2 - 1 = 1$.
This is a contradiction.

Therefore any sum of $2$ or more consecutive integers cannot be a power of $2$.
$\Box$


Sufficient Condition
Let $n$ be an integer that is not a power of $2$.
Then $n$ contains an odd factor greater than $1$.
Let $d = 2 m + 1$ be such a factor.

Then:

$\dfrac n d - m, \dfrac n d - m + 1, \dots, \dfrac n d + m$
is a sequence of $2 m + 1$ consecutive integers.

From Sum of Arithmetic Sequence:














\(\ds \paren {\dfrac n d - m} + \paren {\dfrac n d - m + 1} + \cdots + \paren {\dfrac n d + m}\)

\(=\)







\(\ds \dfrac {\paren {2 m + 1} \paren {\dfrac n d - m + \dfrac n d + m} } 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac d 2 \times \dfrac {2 n} d\)




















\(\ds \)

\(=\)







\(\ds n\)










It may happen that $\dfrac n d - m \le 0$.
In that case, notice that:

$\dfrac n d - m \le m - \dfrac n d \le \dfrac n d + m$
and so $m - \dfrac n d$ is also (somewhere) in our sequence of $2 m + 1$ consecutive integers.

So all negative integers in our sequence of $2 m + 1$ consecutive integers cancel out with their positive counterparts.
Hence we can remove all numbers from $\dfrac n d - m$ to $m - \dfrac n d$.
As a result of that process, the sum remains unchanged.

We see that the number of integers eliminated is $2 \paren {m - \dfrac n d} + 1$.
Since $\dfrac n d$ is a factor of $n$, we have $\dfrac n d \ge 1$.
Hence the number of integers remaining is:














\(\ds 2 m + 1 - \paren {2 \paren {m - \dfrac n d} + 1}\)

\(=\)







\(\ds \dfrac {2 n} d\)




















\(\ds \)

\(\ge\)







\(\ds 2\)









This finishes our proof.
$\blacksquare$


Examples
Example: $18$
$18$ is not a power of $2$.
In fact, it has $3$ and $9$ as its odd factors.
Hence by the construction, we can express $18$ as:














\(\ds 18\)

\(=\)







\(\ds 5 + 6 + 7\)




















\(\ds 18\)

\(=\)







\(\ds \paren {-2} + \paren {-1} + 0 + 1 + 2 + 3 + 4 + 5 + 6\)




















\(\ds \)

\(=\)







\(\ds 3 + 4 + 5 + 6\)





after cancellation





Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $2$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $2$




