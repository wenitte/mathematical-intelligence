# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Definite_Integral_of_Power_of_Sine



Theorem
Let $n \in \Z_{> 0}$ be a positive integer.
Let $I_n$ be defined as:

$\ds I_n = \int_0^{\frac \pi 2} \sin^n x \rd x$

Then $\sequence {I_n}$ is a decreasing sequence of real numbers which satisfies:

$n I_n = \paren {n - 1} I_{n - 2}$

Thus:

$I_n = \dfrac {n - 1} n  I_{n - 2}$
is a reduction formula for $I_n$.


Corollary 1













\(\ds \int_0^{\frac \pi 2} \sin^{2 n} x \rd x\)

\(=\)







\(\ds \dfrac {\paren {2 n}!} {\paren {2^n n!}^2} \dfrac \pi 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 \cdot 3 \cdot 5 \cdots \paren {2 n - 1} } {2 \cdot 4 \cdot 6 \cdots 2 n} \dfrac \pi 2\)









for $n \in \Z_{>0}$.


Corollary 2













\(\ds \int_0^{\frac \pi 2} \sin^{2 n + 1} x \rd x\)

\(=\)







\(\ds \dfrac {\paren {2^n n!}^2} {\paren {2 n + 1}!}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 \cdot 4 \cdot 6 \cdots 2 n} {3 \cdot 5 \cdot 7 \cdots \paren {2 n + 1} }\)









for $n \in \Z_{>0}$.


Proof
From Shape of Sine Function:

$\forall x \in \closedint 0 {\dfrac \pi 2}: 0 \le \sin x \le 1$
and so on the same interval:

$0 \le \sin^{n + 1} x \le \sin^n x$
therefore:

$\forall n \in \N: 0 < I_{n + 1} < I_n$

From Reduction Formula for Integral of Power of Sine:

$\ds \int \sin^n x \rd x = \dfrac {n - 1} n \int \sin^{n - 2} x \rd x - \dfrac {\sin^{n - 1} x \cos x} n$

Thus:














\(\ds I_n\)

\(=\)







\(\ds \int_0^{\frac \pi 2} \sin^n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \dfrac {n - 1} n \int_0^{\frac \pi 2} \sin^{n - 2} x \rd x - \intlimits {\dfrac {\sin^{n - 1} x \cos x} n} 0 {\pi / 2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {n - 1} n I_{n - 2} - \frac {\paren {\sin^{n - 1} \frac \pi 2 \cos \frac \pi 2 - \sin^{n - 1} 0 \cos 0} } n\)




















\(\ds \)

\(=\)







\(\ds \dfrac {n - 1} n I_{n - 2} - \frac {\paren {0 - \sin^{n - 1} 0 \cos 0} } n\)





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
Reduction Formula for Definite Integral of Power of Cosine


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 17.4 \ (1)$




