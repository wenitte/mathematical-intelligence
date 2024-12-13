# 

Source: https://proofwiki.org/wiki/Numbers_in_Even-Even_Amicable_Pair_are_not_Divisible_by_3

Theorem
Let $\tuple {m_1, m_2}$ be an amicable pair such that both $m_1$ and $m_2$ are even.
Then neither $m_1$ nor $m_2$ is divisible by $3$.


Proof
An amicable pair must be formed from a smaller abundant number and a larger deficient number.
Suppose both $m_1, m_2$ are divisible by $3$.
Since both are even, they must also be divisible by $6$.
However $6$ is a perfect number.
By Multiple of Perfect Number is Abundant, neither can be deficient.
So $m_1, m_2$ cannot form an amicable pair.
Therefore at most one of them is divisible by $3$.

Without loss of generality suppose $m_1$ is divisible by $3$.
Write:

$m_1 = 2^r 3^t a, m_2 = 2^s b$
where $a, b$ are not divisible by $2$ or $3$.

Then:














\(\ds m + n\)

\(=\)







\(\ds \map {\sigma_1} {m_2}\)





Definition of Amicable Pair














\(\ds \)

\(=\)







\(\ds \map {\sigma_1} {2^s} \map {\sigma_1} b\)





Divisor Sum Function is Multiplicative














\(\ds \)

\(=\)







\(\ds \paren {2^{s + 1} - 1} \map {\sigma_1} b\)





Divisor Sum of Power of Prime














\(\ds \)

\(\equiv\)







\(\ds \paren {\paren {-1}^{s + 1} - 1} \map {\sigma_1} b\)

\(\ds \pmod 3\)



Congruence of Powers



Since $m + n$ is not divisible by $3$, $s$ must be even.
Similarly, by Divisor Sum Function is Multiplicative, $t$ must also be even.
In particular, both $s, t$ are at least $2$.

Now write:

$m_1 = 2^2 \cdot 3 k, m_2 = 2^2 \cdot l$
where $k, l$ are some integers.

By Multiple of Perfect Number is Abundant, $m_1$ is abundant number.
Therefore $m_2 > m_1$.
This leads to $l > 3 k \ge 3$.

By Abundancy Index of Product is greater than Abundancy Index of Proper Factors:














\(\ds \frac {\map {\sigma_1} {m_1} } {m_1}\)

\(\ge\)







\(\ds \frac {\map {\sigma_1} {12} } {12}\)





equality occurs if and only if $m_1 = 12$














\(\ds \)

\(=\)







\(\ds \frac 7 3\)




















\(\ds \frac {\map {\sigma_1} {m_2} } {m_2}\)

\(>\)







\(\ds \frac {\map {\sigma_1} 4} 4\)




















\(\ds \)

\(=\)







\(\ds \frac 7 4\)









But:














\(\ds 1\)

\(=\)







\(\ds \frac {m_1 + m_2} {m_1 + m_2}\)




















\(\ds \)

\(=\)







\(\ds \frac {m_1} {\map {\sigma_1} {m_1} } + \frac {m_2} {\map {\sigma_1} {m_2} }\)





Definition of Amicable Pair














\(\ds \)

\(<\)







\(\ds \frac 3 7 + \frac 4 7\)




















\(\ds \)

\(=\)







\(\ds 1\)









which is a contradiction.

Therefore neither $m_1$ nor $m_2$ is divisible by $3$.
$\blacksquare$


Sources
1969: Elvin J. Lee: On Divisibility by Nine of the Sums of Even Amicable Pairs (Math. Comp. Vol. 23, no. 107: pp. 545 – 548)
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $220$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $220$




