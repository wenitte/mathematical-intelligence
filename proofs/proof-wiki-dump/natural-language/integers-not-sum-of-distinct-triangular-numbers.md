# 

Source: https://proofwiki.org/wiki/Integers_not_Sum_of_Distinct_Triangular_Numbers



Theorem
The sequence of integers which cannot be expressed as the sum of distinct triangular numbers is:

$2, 5, 8, 12, 23, 33$
This sequence is A053614 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
It will be proved that the largest integer which cannot be expressed as the sum of distinct triangular numbers is $33$.
The remaining integers in the sequence can be identified by inspection.

We prove this using a variant of Second Principle of Mathematical Induction.

Let $\map P n$ be the proposition:

$n$ can be expressed as the sum of distinct triangular numbers.


Basis for the induction
We verify the result up to $T_{13} = 91$.
Then we conclude all $n$ with $34 \le n \le 91$ can be expressed as the sum of distinct triangular numbers.
So $\map P n$ is true for all $34 \le n \le 91$.
This is the basis for the induction.


Induction Hypothesis
Suppose for some $k > 91$, $\map P j$ is true for all $34 \le j < k$.
That is, every integer between $34$ and $k - 1$ can be expressed as the sum of distinct triangular numbers.
This is the induction hypothesis.


Induction Step
This is the induction step:

We find the largest integer $i$ such that $T_i < k \le T_{i + 1}$.
We show that $k - T_{i - 3}$ can be expressed as the sum of distinct triangular numbers, and the sum does not involve $T_{i - 3}$.
Then $k$ can be expressed as the sum of distinct triangular numbers.

Since $k > 91 = T_{13}$, we must have $i \ge 13$.
Hence $k > k - T_{i - 3} > T_i - T_{i - 3} = i + \paren {i - 1} + \paren {i - 2} \ge 13 + 12 + 11 = 36$.
Thus $k - T_{i - 3}$ can be expressed as the sum of distinct triangular numbers by Induction Hypothesis.

A sufficient condition such that the sum does not involve $T_{i - 3}$ is $T_{i - 3} > k - T_{i - 3}$.
We have:














\(\ds T_{i - 3} - \paren {k - T_{i - 3} }\)

\(\ge\)







\(\ds 2 T_{i - 3} - T_{i + 1}\)





From $k \le T_{i + 1}$














\(\ds \)

\(=\)







\(\ds 2 \paren {\frac {\paren {i - 3} \paren {i - 2} } 2} - \frac {\paren {i + 1} \paren {i + 2} } 2\)





Closed Form for Triangular Numbers














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {2 i^2 - 10 i + 12 - i^2 - 3i - 2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {i^2 - 13 i + 10}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {i \paren {i - 13} + 10}\)




















\(\ds \)

\(\ge\)







\(\ds \frac 1 2 \paren {10}\)





From $i \ge 13$














\(\ds \)

\(=\)







\(\ds 5\)




















\(\ds \)

\(>\)







\(\ds 0\)









Therefore we have $T_{i - 3} > k - T_{i - 3}$.

Hence $\map P k$ is true.

By the Second Principle of Mathematical Induction, $\map P n$ is true for all $n \ge 34$.
Thus every integer greater than $33$ can be expressed as the sum of distinct triangular numbers.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $33$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $33$




