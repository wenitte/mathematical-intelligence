# 

Source: https://proofwiki.org/wiki/Best_Rational_Approximations_to_Root_2_generate_Pythagorean_Triples



Theorem
Consider the Sequence of Best Rational Approximations to Square Root of 2:

$\sequence S := \dfrac 1 1, \dfrac 3 2, \dfrac 7 5, \dfrac {17} {12}, \dfrac {41} {29}, \dfrac {99} {70}, \dfrac {239} {169}, \dfrac {577} {408}, \ldots$
Every odd term of $\sequence S$ can be expressed as:

$\dfrac {2 a + 1} b$
such that:

$a^2 + \paren {a + 1}^2 = b^2$


Proof 1
From Parity of Best Rational Approximations to Root 2‎:

The numerators of the terms of $\sequence S$ are all odd.
For all $n$, the parity of the denominator of term $S_n$ is the same as the parity of $n$.
Thus it follows that every other term of $\sequence S$ has a numerator and a denominator which are both odd.

This proof proceeds by induction.

Basis for the Induction
$\dfrac 1 1$ can be expressed as $\dfrac {2(0) + 1} 1$, and:

$0^2 + \paren {0 + 1}^2 = 1^2$


Induction Hypothesis
This is our induction hypothesis:
The best rational approximation $\dfrac {p_k} {q_k}$ of $\sqrt 2$, when expressed as:

$\dfrac {2 a + 1} b$
gives the relation:

$a^2 + \paren {a + 1}^2 = b^2$

We need to show that the best rational approximation $\dfrac {p_{k + 2} } {q_{k + 2} }$ of $\sqrt 2$, when expressed as:

$\dfrac {2 a' + 1} {b'}$
also give the relation:

$a'^2 + \paren {a' + 1}^2 = b'^2$


Induction Step
This is our induction step:
From the induction hypothesis we have:

$a = \dfrac {p_k - 1} 2, b = q_k$
and thus:

$\paren {\dfrac {p_k - 1} 2}^2 + \paren {\dfrac {p_k - 1} 2 + 1}^2 = q_k^2$
Expanding, we have:

$\dfrac {p_k^2} 2 + \dfrac 1 2 = q_k^2$

Now by Relation between Adjacent Best Rational Approximations to Root 2, we have:

$\dfrac {p_{k + 1} } {q_{k + 1} } = \dfrac {p_k + 2 q_k} {p_k + q_k}$
We check that, via GCD with Remainder:

$\gcd \set {p_k + 2 q_k, p_k + q_k} = \gcd \set {q_k, p_k + q_k} = \gcd \set {q_k, p_k} = 1$
Since both fractions are in canonical form and Canonical Form of Rational Number is Unique, we can write:

$p_{k + 1} = p_k + 2 q_k$
$q_{k + 1} = p_k + q_k$
Therefore:

$p_{k + 2} = 3 p_k + 4 q_k$
$q_{k + 2} = 2 p_k + 3 q_k$

We need to show that:

$\paren {\dfrac {p_{k + 2} - 1} 2}^2 + \paren {\dfrac {p_{k + 2} - 1} 2 + 1}^2 = q_k^2$
or:

$\dfrac {p_{k + 2}^2} 2 + \dfrac 1 2 = q_{k + 2}^2$

We have:














\(\ds \frac {p_{k + 2}^2} 2 + \frac 1 2\)

\(=\)







\(\ds \frac {\paren{3 p_k + 4 q_k}^2} 2 + \frac 1 2\)




















\(\ds \)

\(=\)







\(\ds \frac {9 p_k^2 + 24 p_k q_k + 16 q_k^2} 2 + \frac 1 2\)





Square of Sum














\(\ds \)

\(=\)







\(\ds \frac {p_k^2} 2 + \frac 1 2 + 4 p_k^2 + 12 p_k q_k + 8 q_k^2\)




















\(\ds \)

\(=\)







\(\ds 4 p_k^2 + 12 p_k q_k + 9 q_k^2\)




















\(\ds \)

\(=\)







\(\ds \paren {2 p_k + 3 q_k}^2\)





Square of Sum














\(\ds \)

\(=\)







\(\ds q_{k + 2}^2\)









The result follows by induction.
$\blacksquare$


Proof 2
From Pell Number as Sum of Squares, we have:

$P_{2 n + 1} = P_{n + 1}^2 + P_n^2$
Therefore:














\(\ds P_{2 n + 1}^2\)

\(=\)







\(\ds \paren {P_{n + 1}^2 + P_n^2}^2\)




















\(\ds \)

\(=\)







\(\ds P_{n + 1}^4 + 2 P_{n + 1}^2 P_n^2 + P_n^4\)





Square of Sum














\(\ds \)

\(=\)







\(\ds P_{n + 1}^4 + 2 P_{n + 1}^2 P_n^2 + P_n^4 + 2 P_{n + 1}^2 P_n^2 - 2 P_{n + 1}^2 P_n^2\)





adding zero














\(\ds \)

\(=\)







\(\ds P_{n + 1}^4 - 2 P_{n + 1}^2 P_n^2 + P_n^4 + 4 P_{n + 1}^2 P_n^2\)





regrouping














\(\ds \)

\(=\)







\(\ds \paren {P_{n + 1}^2 - P_n^2}^2 + \paren {2 P_{n + 1} P_n}^2\)










$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $1 \cdotp 41421 \, 35623 \, 73095 \, 04880 \, 16887 \, 24209 \, 69807 \, 85697 \ldots$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1 \cdotp 41421 \, 35623 \, 73095 \, 04880 \, 16887 \, 24209 \, 69807 \, 85697 \ldots$




