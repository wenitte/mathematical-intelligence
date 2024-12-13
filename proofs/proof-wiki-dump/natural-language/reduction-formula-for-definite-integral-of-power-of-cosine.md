# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Definite_Integral_of_Power_of_Cosine



Theorem
Let $n \in \Z_{> 0}$ be a positive integer.
Let $I_n$ be defined as:

$\ds I_n = \int_0^{\frac \pi 2} \cos^n x \rd x$

Then $\sequence {I_n}$ is a decreasing sequence of real numbers which satisfies:

$n I_n = \paren {n - 1} I_{n - 2}$

Thus:

$I_n = \dfrac {n - 1} n  I_{n - 2}$
is a reduction formula for $I_n$.


Corollary 1
$\ds \int_0^{\frac \pi 2} \cos^{2 n} x \rd x = \dfrac {\paren {2 n}!} {\paren {2^n n!}^2} \dfrac \pi 2$


Corollary 2
$\ds \int_0^{\frac \pi 2} \cos^{2 n + 1} x \rd x = \dfrac {\paren {2^n n!}^2} {\paren {2 n + 1}!}$


Proof
From Shape of Cosine Function:

$\forall x \in \closedint 0 {\dfrac \pi 2}: 0 \le \cos x \le 1$
So, on the same interval:

$0 \le \cos^{n + 1} x \le \cos^n x$
Therefore:

$\forall n \in \N: 0 < I_{n + 1} < I_n$

From Reduction Formula for Integral of Power of Cosine:

$\ds \int \cos^n x \rd x = \dfrac {\cos^{n - 1} x \sin x} n + \dfrac {n - 1} n \int \cos^{n - 2} x \rd x$

Thus:














\(\ds I_n\)

\(=\)







\(\ds \int_0^{\frac \pi 2} \cos^n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \dfrac {n - 1} n \int_0^{\frac \pi 2} \cos^{n - 2} x \rd x - \intlimits {\dfrac {\cos^{n - 1} x \sin x} n} 0 {\pi / 2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {n - 1} n I_{n - 2} - \frac {\paren {\cos^{n - 1} \frac \pi 2 \sin \frac \pi 2 - \cos^{n - 1} 0 \sin 0} } n\)




















\(\ds \)

\(=\)







\(\ds \dfrac {n - 1} n I_{n - 2} - \frac {\paren {0 - \cos^{n - 1} 0 \sin 0} } n\)





Cosine of Right Angle














\(\ds \)

\(=\)







\(\ds \dfrac {n - 1} n I_{n - 2} - \frac {\paren {0 - 0} } n\)





Sine of Zero is Zero








\(\ds \leadsto \ \ \)





\(\ds n I_n\)

\(=\)







\(\ds \paren {n - 1} I_{n - 2}\)





multiplying both sides by $n$



$\blacksquare$


Also see
Reduction Formula for Definite Integral of Power of Sine




