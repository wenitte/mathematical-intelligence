# 

Source: https://proofwiki.org/wiki/Multiplication_by_Power_of_10_by_Moving_Decimal_Point

Theorem
Let $n \in \R$ be a real number.

Let $n$ be expressed in decimal notation.
Let $10^d$ denote a power of $10$ for some integer $d$

Then $n \times 10^d$ can be expressed in decimal notation by shifting the decimal point $d$ places to the right.
Thus, if $d$ is negative, and so $10^d = 10^{-e}$ for some $e \in \Z_{>0}$, $n \times 10^d$ can be expressed in decimal notation by shifting the decimal point $e$ places to the left.


Proof
Let $n$ be expressed in decimal notation as:

$n = \sqbrk {a_r a_{r - 1} \dotso a_1 a_0 \cdotp a_{-1} a_{-2} \dotso a_{-s} a_{-s - 1} \dotso}$
That is:

$n = \ds \sum_{k \mathop \in \Z} a_k 10^k$

Then:














\(\ds n \times 10^d\)

\(=\)







\(\ds 10^d \times \sum_{k \mathop \in \Z} a_k 10^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in \Z} 10^d \times a_k 10^k\)





Distributive Property














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in \Z} a_k 10^{k + d}\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in \Z} a_{k - d} 10^k\)





Translation of Index Variable of Summation



The effect of presenting digit $a_{k - d}$ in position $k$ of $n$ is the same as what you get having moved the decimal point from between $a_0$ and $a_{-1}$ to between $a_{-d}$ and $a_{-d - 1}$.
Thus:

if $d$ is positive, that is equivalent to moving the decimal point $d$ places to the right
and:

if $d$ is negative, that is equivalent to moving the decimal point $d$ places to the left.
$\blacksquare$


Sources
1972: Murray R. Spiegel and R.W. Boxer: Theory and Problems of Statistics (SI ed.) ... (previous) ... (next): Chapter $1$: Scientific Notation




