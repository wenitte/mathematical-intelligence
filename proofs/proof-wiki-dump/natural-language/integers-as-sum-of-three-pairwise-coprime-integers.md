# 

Source: https://proofwiki.org/wiki/Integers_as_Sum_of_Three_Pairwise_Coprime_Integers



Theorem
Let $n$ be an integer greater than $17$.
Then $n$ is the sum of $3$ integers greater than $1$ which are pairwise coprime.


Proof
Case $1$: $n$ is even
There is some integer $k > 2$ such that one of the following holds:

$n = 6 k = 2 + 3 + \paren {6 k - 5}$
$n = 6 k + 2 = 4 + 3 + \paren {6 k - 7}$
$n = 6 k + 4 = 2 + 3 + \paren {6 k - 5}$
All terms are greater than $1$.

The first two terms are powers of $2$ and $3$, so they are coprime.
The last term is not divisible by $2$ or $3$, so the three numbers are pairwise coprime.
$\Box$


Case $2$: $n$ is odd
There is some integer $k \ge 1$ such that one of the following holds:

$n = 12 k + 1 = 3 + \paren {6 k - 7} + \paren {6 k + 5}$ and $k \ge 2$
$n = 12 k + 3 = 9 + \paren {6 k - 5} + \paren {6 k - 1}$ and $k \ge 2$
$n = 12 k + 5 = 3 + \paren {6 k - 5} + \paren {6 k + 7}$ and $k \ge 2$
$n = 12 k + 7 = 3 + \paren {6 k - 1} + \paren {6 k + 5}$
$n = 12 k + 9 = 3 + \paren {6 k - 1} + \paren {6 k + 7}$
$n = 12 k + 11 = 3 + \paren {6 k + 1} + \paren {6 k + 7}$
All terms are greater than $1$.

The first term is a power of $3$.
The last two terms are not divisible by $3$, so they are coprime with $3$.

Aiming for a contradiction, suppose the last two terms are not coprime.
Then they must have a common divisor greater than $1$.
This common divisor must also divide their difference.
However their difference is only divisible by $2$ and $3$, and the terms themselves are not.
Hence they cannot have a common divisor greater than $1$.
So they must be coprime.

Hence the result.
$\blacksquare$


Sources
1970: Wacław Sierpiński: 250 Problems in Elementary Number Theory: $48$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $17$




