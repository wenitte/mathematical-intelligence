# 

Source: https://proofwiki.org/wiki/Odd_Integers_whose_Smaller_Odd_Coprimes_are_Prime

Theorem
Let $n \in \Z_{>0}$ be an odd positive integer such that all smaller odd integers greater than $1$ which are coprime to it are prime.
The complete list of such $n$ is as follows:

$1, 3, 5, 7, 9, 15, 21, 45, 105$
This sequence is A327823 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
First it is demonstrated that $105$ itself satisfies this property.
Let $d \in \Z_{> 1}$ be odd and coprime to $105$.
Then $d$ does not have $3$, $5$ or $7$ as a prime factor.
Thus $d$ must have at least one odd prime as a divisor which is $11$ or greater.
The smallest such composite number is $11^2$.
But $11^2 = 121 > 105$.
Thus $d$ must be prime.
Thus it has been demonstrated that all odd integers greater than $1$ and smaller than $105$ which are coprime to $105$ are prime.
$\Box$

Using an argument similar to the above, we see that for an integer to have this property, 
if it is greater than $p^2$ for some odd prime $p$, then it must be divisible by $p$.
If not, it will be coprime to $p^2$, a composite number.

Let $p_n$ denote the $n$th prime.
Suppose $N$ has this property.
By the argument above, if $p_{n + 1}^2 \ge N > p_n^2$, we must have $p_2 p_3 \cdots p_n \divides N$.
By Absolute Value of Integer is not less than Divisors, we have $p_2 p_3 \cdots p_n \le N$.

Bertrand-Chebyshev Theorem asserts that there is a prime between $p_n$ and $2 p_n$.
Thus we have $2 p_n > p_{n + 1}$.

Hence for $n \ge 5$:














\(\ds N\)

\(\ge\)







\(\ds p_2 p_3 \cdots p_n\)




















\(\ds \)

\(=\)







\(\ds 3 \times 5 p_4 \cdots p_n\)




















\(\ds \)

\(>\)







\(\ds 8 p_{n - 1} p_n\)




















\(\ds \)

\(>\)







\(\ds 4 p_n^2\)





Bertrand-Chebyshev Theorem














\(\ds \)

\(>\)







\(\ds p_{n + 1}^2\)





Bertrand-Chebyshev Theorem














\(\ds \)

\(\ge\)







\(\ds N\)





From assumption



This is a contradiction. 

Hence we must have $N \le p_5^2 = 121$.
From the argument above we also have:

$3 \divides N$ for $9 < N \le 25$
$3, 5 \divides N$ for $25 < N \le 49$
$3, 5, 7 \divides N$ for $49 < N \le 121$
So we end up with the list $N = 1, 3, 5, 7, 9, 15, 21, 45, 105$.
$\blacksquare$


Sources
Nov. 1987: Solomon W. Golomb and Kee-Wai Lau: E3137 (Amer. Math. Monthly Vol. 94, no. 9: pp. 883 – 884)  www.jstor.org/stable/2322829
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $105$




