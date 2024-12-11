# 

Source: https://proofwiki.org/wiki/23_is_Largest_Integer_not_Sum_of_Distinct_Perfect_Powers

Theorem
The largest integer which cannot be expressed as the sum of distinct perfect powers is $23$.


Proof
The first few perfect powers are:

$1, 4, 8, 9, 16, 25, 27, 32, \dots$

First we show that $23$ cannot be expressed as the sum of distinct perfect powers.
Only $1, 4, 8, 9, 16$ are perfect powers less than $23$.
Suppose $23$ can be so expressed.
Since $1 + 4 + 8 + 9 = 22 < 23$, $16$ must be used in the sum.
However $23 - 16 = 7$ cannot be expressed as a sum of $1$ and $4$.
Thus $23$ cannot be expressed as the sum of distinct perfect powers.
$\Box$

Now we show that all numbers greater than $23$ can be so expressed.
By Richert's Theorem, we just need to show:

For any $23 < n \le 23 + 32$, $n$ can be expressed as a sum of distinct elements in $\set {1, 4, 8, 9, 16, 25, 27}$
$s_{i + 1} \le 2 s_i$ for every $i \ge 7$, where $s_i$ is the $i$th perfect power
Verification of the first statement is included in the bottom of this proof.

To verify the second statement:
Let $i \ge 7$.
Let $m$ be the integer satisfying:

$2^{m + 1} > s_i \ge 2^m$
Note that $2^{m + 1}$ is also a perfect power.
There must be a perfect power greater than $s_i$ but not greater than $2^{m + 1}$.
Thus:

$s_{i + 1} \le 2^{m + 1} = 2 \cdot 2^m \le 2 s_i$

Therefore $23$ is the largest integer that cannot be expressed as the sum of distinct perfect powers..
$\Box$

Here is $23 < n \le 55$ expressed as a sum of distinct elements in $\set {1, 4, 8, 9, 16, 25, 27}$:














\(\ds 24\)

\(=\)







\(\ds 16 + 8\)




















\(\ds 25\)

\(=\)







\(\ds 25\)




















\(\ds 26\)

\(=\)







\(\ds 25 + 1\)




















\(\ds 27\)

\(=\)







\(\ds 27\)




















\(\ds 28\)

\(=\)







\(\ds 27 + 1\)




















\(\ds 29\)

\(=\)







\(\ds 25 + 4\)




















\(\ds 30\)

\(=\)







\(\ds 25 + 4 + 1\)




















\(\ds 31\)

\(=\)







\(\ds 27 + 4\)




















\(\ds 32\)

\(=\)







\(\ds 27 + 4 + 1\)




















\(\ds 33\)

\(=\)







\(\ds 25 + 8\)




















\(\ds 34\)

\(=\)







\(\ds 25 + 9\)




















\(\ds 35\)

\(=\)







\(\ds 25 + 9 + 1\)




















\(\ds 36\)

\(=\)







\(\ds 27 + 9\)




















\(\ds 37\)

\(=\)







\(\ds 27 + 9 + 1\)




















\(\ds 38\)

\(=\)







\(\ds 25 + 9 + 4\)




















\(\ds 39\)

\(=\)







\(\ds 25 + 9 + 4 + 1\)




















\(\ds 40\)

\(=\)







\(\ds 27 + 9 + 4\)




















\(\ds 41\)

\(=\)







\(\ds 27 + 9 + 4 + 1\)




















\(\ds 42\)

\(=\)







\(\ds 25 + 9 + 8\)




















\(\ds 43\)

\(=\)







\(\ds 25 + 9 + 8 + 1\)




















\(\ds 44\)

\(=\)







\(\ds 27 + 9 + 8\)




















\(\ds 45\)

\(=\)







\(\ds 27 + 9 + 8 + 1\)




















\(\ds 46\)

\(=\)







\(\ds 25 + 9 + 8 + 4\)




















\(\ds 47\)

\(=\)







\(\ds 25 + 9 + 8 + 4 + 1\)




















\(\ds 48\)

\(=\)







\(\ds 27 + 9 + 8 + 4\)




















\(\ds 49\)

\(=\)







\(\ds 27 + 9 + 8 + 4 + 1\)




















\(\ds 50\)

\(=\)







\(\ds 25 + 16 + 9\)




















\(\ds 51\)

\(=\)







\(\ds 25 + 16 + 9 + 1\)




















\(\ds 52\)

\(=\)







\(\ds 27 + 25\)




















\(\ds 53\)

\(=\)







\(\ds 27 + 25 + 1\)




















\(\ds 54\)

\(=\)







\(\ds 25 + 16 + 9 + 4\)




















\(\ds 55\)

\(=\)







\(\ds 25 + 16 + 9 + 4 + 1\)









$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $23$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $23$




