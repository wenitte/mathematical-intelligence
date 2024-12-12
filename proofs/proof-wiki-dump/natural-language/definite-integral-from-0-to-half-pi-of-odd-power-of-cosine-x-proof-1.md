# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Half_Pi_of_Odd_Power_of_Cosine_x/Proof_1



Theorem
$\ds \int_0^{\frac \pi 2} \cos^{2 n + 1} x \rd x = \dfrac {\paren {2^n n!}^2} {\paren {2 n + 1}!}$


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\ds \int_0^{\frac \pi 2} \cos^{2 n + 1} x \rd x = \dfrac {\paren {2^n n!}^2} {\paren {2 n + 1}!}$


Basis for the Induction
$\map P 0$ is the case:














\(\ds \int_0^{\frac \pi 2} \cos x \rd x\)

\(=\)







\(\ds \bigintlimits {\sin x} 0 {\frac \pi 2}\)





Primitive of $\cos x$














\(\ds \)

\(=\)







\(\ds \sin \frac \pi 2 - \sin 0\)




















\(\ds \)

\(=\)







\(\ds 1\)





Sine of Right Angle, Sine of Zero is Zero














\(\ds \)

\(=\)







\(\ds \frac {\paren {2^0 \times 1!}^2} {\paren {2 \times 0 + 1}!}\)









Thus $\map P 0$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\ds \int_0^{\frac \pi 2} \cos^{2 k + 1} x \rd x = \dfrac {\paren {2^k k!}^2} {\paren {2 k + 1}!}$

from which it is to be shown that:

$\ds \int_0^{\frac \pi 2} \cos^{2 \paren {k + 1} + 1} x \rd x = \dfrac {\paren {2^{k + 1} \paren {k + 1}!}^2} {\paren {2 \paren {k + 1} + 1}!}$


Induction Step
This is the induction step:

Let $I_k = \ds \int_0^{\frac \pi 2} \cos^{2 k + 1} x \rd x$.















\(\ds I_{k + 1}\)

\(=\)







\(\ds \frac {2 \paren {k + 1} } {2 \paren {k + 1} + 1} I_k\)





Reduction Formula for Definite Integral of Power of Cosine














\(\ds \)

\(=\)







\(\ds \frac {2 \paren {k + 1} } {2 \paren {k + 1} + 1} \dfrac {\paren {2^k k!}^2} {\paren {2 k + 1}!}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 \paren {k + 1} }^2} {\paren {2 \paren {k + 1} + 1} \paren {2 \paren {k + 1} } } \dfrac {\paren {2^k k!}^2} {\paren {2 k + 1}!}\)





multiplying top and bottom by $2 \paren {k + 1}$














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {2^{k + 1} \paren {k + 1}!}^2} {\paren {2 \paren {k + 1} + 1}!}\)










So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \Z_{\ge 0}: \int_0^{\frac \pi 2} \cos^{2 n + 1} x \rd x = \dfrac {\paren {2^n n!}^2} {\paren {2 n + 1}!}$
$\blacksquare$





