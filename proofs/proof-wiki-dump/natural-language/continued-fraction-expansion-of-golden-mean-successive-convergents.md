# 

Source: https://proofwiki.org/wiki/Continued_Fraction_Expansion_of_Golden_Mean/Successive_Convergents



Theorem
Consider the continued fraction expansion to the golden mean:

$\phi = \sqbrk {1, 1, 1, 1, \ldots} = 1 + \cfrac 1 {1 + \cfrac 1 {1 + \cfrac 1 {\ddots} } }$

The $n$th convergent is given by:

$C_n = \dfrac {F_{n + 1} } {F_n}$
where $F_n$ denotes the $n$th Fibonacci number.


Proof
The proof proceeds by induction.
Listing the first few convergents, which can be calculated:

$C_1 = \dfrac 1 1$
$C_2 = \dfrac 2 1$
$C_3 = \dfrac 3 2$
$C_4 = \dfrac 5 3$
and so on.

For all $n \in \Z_{> 0}$, let $\map P n$ be the proposition:

$C_n = \dfrac {F_{n + 1} } {F_n}$

$\map P 1$ is the case:

$C_1 = \dfrac {F_{n + 1} } {F_n}$













\(\ds C_1\)

\(=\)







\(\ds \dfrac 1 1\)




















\(\ds \)

\(=\)







\(\ds \dfrac {F_2} {F_1}\)





Definition of Fibonacci Numbers



Thus $\map P 1$ is seen to hold.


Basis for the Induction
$\map P 2$ is the case:














\(\ds C_2\)

\(=\)







\(\ds 1 + \cfrac 1 1\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 1\)




















\(\ds \)

\(=\)







\(\ds \dfrac {F_3} {F_2}\)





Definition of Fibonacci Numbers



Thus $\map P 2$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$C_k = \dfrac {F_{k + 1} } {F_k}$

from which it is to be shown that:

$C_{k + 1} = \dfrac {F_{k + 2} } {F_{k + 1} }$


Induction Step
This is the induction step:
Let $C_n$ be expressed as $\dfrac {p_n} {q_n}$ for any given $n$.















\(\ds C_{k + 1}\)

\(=\)







\(\ds \dfrac {p_{k + 1} } {q_{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {p_k + p_{k - 1} } {q_k + q_{k - 1} }\)





Definition of Numerators and Denominators of Continued Fraction














\(\ds \)

\(=\)







\(\ds \dfrac {F_{k + 1} + F_k} {F_k + F_{k - 1} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \dfrac {F_{k + 2} } {F_{k + 1} }\)





Definition of Fibonacci Numbers



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{>0}: C_n = \dfrac {F_{n + 1} } {F_n}$
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $1 \cdotp 61803 \, 39887 \, 49894 \, 84820 \, 45868 \, 34365 \, 63811 \, 77203 \, 09179 \, 80576  \ldots$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1 \cdotp 61803 \, 39887 \, 49894 \, 84820 \, 45868 \, 34365 \, 63811 \, 77203 \, 09179 \, 80576  \ldots$




