# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Half_Pi_of_Even_Power_of_Cosine_x



Theorem
Let $n \in \Z_{> 0}$ be a positive integer.

Then:

$\ds \int_0^{\frac \pi 2} \cos^{2 n} x \rd x = \dfrac {\paren {2 n}!} {\paren {2^n n!}^2} \dfrac \pi 2$


Proof 1
The proof proceeds by induction.
For all $n \in \Z_{> 0}$, let $\map P n$ be the proposition:

$\ds \int_0^{\frac \pi 2} \cos^{2 n} x \rd x = \dfrac {\paren {2 n}!} {\paren {2^n n!}^2} \dfrac \pi 2$


Basis for the Induction
$\map P 1$ is the case:














\(\ds \int_0^{\frac \pi 2} \cos^2 x \rd x\)

\(=\)







\(\ds \frac \pi 4\)





Definite Integral from 0 to Half Pi of Square of Cosine x














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \times \dfrac \pi 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 {\paren {2 \times 1}^2} \dfrac \pi 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {2 \times 1}!} {\paren {2^1 \times 1!}^2} \dfrac \pi 2\)









Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\ds \int_0^{\frac \pi 2} \cos^{2 k} x \rd x = \dfrac {\paren {2 k}!} {\paren {2^k k!}^2} \dfrac \pi 2$

from which it is to be shown that:

$\ds \int_0^{\frac \pi 2} \cos^{2 \paren {k + 1} } x \rd x = \dfrac {\paren {2 \paren {k + 1} }!} {\paren {2^{k + 1} \paren {k + 1}!}^2} \dfrac \pi 2$


Induction Step
This is the induction step:
Let $I_k = \ds \int_0^{\frac \pi 2} \cos^{2 k} x \rd x$.















\(\ds I_{k + 1}\)

\(=\)







\(\ds \frac {2 \paren {k + 1} - 1} {2 \paren {k + 1} } I_k\)





Reduction Formula for Definite Integral of Power of Cosine














\(\ds \)

\(=\)







\(\ds \frac {2 \paren {k + 1} - 1} {2 \paren {k + 1} } \dfrac {\paren {2 k}!} {\paren {2^k k!}^2} \dfrac \pi 2\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \frac {2 \paren {k + 1} \paren {2 \paren {k + 1} - 1} } {2^2 \paren {k + 1}^2} \dfrac {\paren {2 k}!} {\paren {2^k k!}^2} \dfrac \pi 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {2 \paren {k + 1} }!} {\paren {2^{k + 1} \paren {k + 1}!}^2} \dfrac \pi 2\)









So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \Z_{> 0}: \int_0^{\frac \pi 2} \cos^{2 n} x \rd x = \dfrac {\paren {2 n}!} {\paren {2^n n!}^2} \dfrac \pi 2$
$\blacksquare$


Proof 2













\(\ds \int_0^{\frac \pi 2} \cos^{2 n} x \rd x\)

\(=\)







\(\ds \int_0^{\frac \pi 2} \paren {\sin x}^{\frac 2 2 - 1} \paren {\cos x}^{2 \paren {n + \frac 1 2} - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \Beta \paren {\frac 1 2, n + \frac 1 2}\)





Definition 2 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \cdot \frac {\map \Gamma {n + \frac 1 2} \, \map \Gamma {\frac 1 2} } {\map \Gamma {n + 1} }\)





Definition 3 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma {n + \frac 1 2} \sqrt \pi} {2 \paren {n!} }\)





Gamma Function of One Half














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 n}! \paren {\sqrt \pi}^2} {2 \cdot 2^{2 n} \paren {n!}^2}\)





Gamma Function of Positive Half-Integer














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 n}!} {\paren {2^n n!}^2} \frac \pi 2\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.30$




