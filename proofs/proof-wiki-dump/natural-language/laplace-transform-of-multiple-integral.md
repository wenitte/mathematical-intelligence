# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Multiple_Integral



Theorem
Let $f: \R \to \R$ or $\R \to \C$ be a function.
Let $\laptrans f = F$ denote the Laplace transform of $f$.

Then for all $n \in \Z_{\ge 0}$:

$\ds \laptrans {\underbrace {\int_0^t \dotsm \int_0^t}_{\text {$n$ times} } \map f u \rd u^n} = \dfrac {\map F s} {s^n}$
wherever $\laptrans f$ exists.


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\ds \laptrans {\underbrace {\int_0^t \dotsm \int_0^t}_{\text {$n$ times} } \map f u \rd u^n} = \dfrac {\map F s} {s^n}$

$\map P 0$ is the case:

$\map f u = \map F s$
which is the statement of the Laplace transform.
Thus $\map P 0$ is seen to hold.


Basis for the Induction
$\map P 1$ is the case:

$\ds \laptrans {\int_0^t \map f u \rd u} = \dfrac {\map F s} s$
which is established in Laplace Transform of Integral
Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\ds \laptrans {\underbrace {\int_0^t \dotsm \int_0^t}_{\text {$k$ times} } \map f u \rd u^k} = \dfrac {\map F s} {s^k}$

from which it is to be shown that:

$\ds \laptrans {\underbrace {\int_0^t \dotsm \int_0^t}_{\text {$k + 1$ times} } \map f u \rd u^{k + 1} } = \dfrac {\map F s} {s^{k + 1} }$


Induction Step
This is the induction step:














\(\ds \laptrans {\underbrace {\int_0^t \dotsm \int_0^t}_{\text {$k + 1$ times} } \map f u \rd u^{k + 1} }\)

\(=\)







\(\ds \laptrans {\int_0^t \paren {\underbrace {\int_0^t \dotsm \int_0^t}_{\text {$k$ times} } \map f u \rd u^k} \rd u}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 s \laptrans {\underbrace {\int_0^t \dotsm \int_0^t}_{\text {$k$ times} } \map f u \rd u^k}\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \dfrac 1 s \paren {\dfrac {\map F s} {s^k} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \dfrac {\map F s} {s^{k + 1} }\)





simplification



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: \ds \laptrans {\underbrace {\int_0^t \dotsm \int_0^t}_{\text {$n$ times} } \map f u \rd u^n} = \dfrac {\map F s} {s^n}$
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of General Properties of Laplace Transforms: $32.14$




