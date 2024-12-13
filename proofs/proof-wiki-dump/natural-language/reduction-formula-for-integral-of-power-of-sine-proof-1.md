# 

Source: https://proofwiki.org/wiki/Reduction_Formula_for_Integral_of_Power_of_Sine/Proof_1

Theorem
Let $n \in \Z_{> 0}$ be a (strictly) positive integer.
Let:

$I_n := \ds \int \sin^n x \rd x$
Then:

$I_n = \dfrac {n - 1} n I_{n - 2} - \dfrac {\sin^{n - 1} x \cos x} n$
is a reduction formula for $\ds \int \sin^n x \rd x$.


Proof
Let $n \ge 2$.
Let:

$\ds I_n := \int \sin^n x \rd x$

Then:














\(\ds I_n\)

\(=\)







\(\ds \int \sin^n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \sin^{n - 1} x \sin x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \sin^{n - 1} x \map \rd {-\cos x}\)





Derivative of Cosine Function














\(\ds \)

\(=\)







\(\ds - \sin^{n - 1} x \cos x - \int \paren {-\cos x} \map \rd {\sin^{n - 1} x}\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds - \sin^{n - 1} x \cos x - \int \paren {-\cos x} \paren {n - 1} \sin^{n - 2} x \cos x \rd x\)





Derivative of Power and Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds - \sin^{n - 1} x \cos x + \paren {n - 1} \int \sin^{n - 2} x \cos^2 x \rd x\)





Linear Combination of Primitives and rearranging














\(\ds \)

\(=\)







\(\ds - \sin^{n - 1} x \cos x + \paren {n - 1} \int \sin^{n - 2} x \paren {1 - \sin^2 x} \rd x\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds - \sin^{n - 1} x \cos x + \paren {n - 1} \int \sin^{n - 2} x \rd x - \paren {n - 1} \int \sin^n x \rd x\)




















\(\ds \)

\(=\)







\(\ds - \sin^{n - 1} x \cos x + \paren {n - 1} I_{n - 2} - \paren {n - 1} I_n\)














\(\ds \leadsto \ \ \)





\(\ds n I_n\)

\(=\)







\(\ds - \sin^{n - 1} x \cos x + \paren {n - 1} I_{n - 2}\)





adding $\paren {n - 1} I_n$ to both sides








\(\ds \leadsto \ \ \)





\(\ds I_n\)

\(=\)







\(\ds \dfrac {n - 1} n I_{n - 2} - \dfrac {\sin^{n - 1} x \cos x} n\)





dividing by $n$ and rearranging



thus demonstrating the identity for all $n \ge 2$.

When $n = 1$ this degenerates to:














\(\ds \int \sin x \rd x\)

\(=\)







\(\ds \dfrac 0 1 \int \frac 1 {\sin x} \rd x - \dfrac {\sin^0 x \cos x} 1\)




















\(\ds \)

\(=\)







\(\ds 0 - 1 \cdot \cos x\)




















\(\ds \)

\(=\)







\(\ds -\cos x\)









From Primitive of Sine Function this shows that the identity still holds for $n = 1$.
$\blacksquare$



This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.




