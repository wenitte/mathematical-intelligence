# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Positive_Integer_Power/Proof_2



Theorem
Let $\laptrans f$ denote the Laplace transform of a function $f$.
Let $t^n: \R \to \R$ be $t$ to the $n$th power for some $n \in \N_{\ge 0}$.

Then:

$\laptrans {t^n} = \dfrac {n!} { s^{n + 1} }$
for $\map \Re s > 0$.


Proof
The proof proceeds by induction on $n$ for $t^n$.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\laptrans {t^n} = \dfrac {n!} { s^{n + 1} }$


Basis for the Induction
$\map P 0$ is the case:














\(\ds \laptrans {t^0}\)

\(=\)







\(\ds \laptrans 1\)




















\(\ds \)

\(=\)







\(\ds \frac 1 s\)





Laplace Transform of 1














\(\ds \)

\(=\)







\(\ds \frac {0!} {s^{0 + 1} }\)





Definition of Factorial: $0! = 1$




This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\laptrans {t^k} = \dfrac {k!} {s^{k + 1} }$

from which it is to be shown that:

$\laptrans {t^{k + 1} } = \dfrac {\paren {k + 1}!} {s^{k + 2} }$


Induction Step
This is our induction step:














\(\ds \laptrans {t^{k + 1} }\)

\(=\)







\(\ds \int_0^{\to +\infty} t^{k + 1} e^{-s t} \rd t\)





Definition of Laplace Transform



From Integration by Parts:

$\ds \int f g' \rd t = f g - \int f' g \rd t$
Here:














\(\ds f\)

\(=\)







\(\ds t^{k + 1}\)














\(\ds \leadsto \ \ \)





\(\ds f'\)

\(=\)







\(\ds \paren {k + 1}  t^n\)





Power Rule for Derivatives














\(\ds g'\)

\(=\)







\(\ds e^{-s t}\)














\(\ds \leadsto \ \ \)





\(\ds g\)

\(=\)







\(\ds -\frac 1 s e^{-s t}\)





Primitive of Exponential Function



So:














\(\ds \int t^{k + 1} e^{-s t} \rd t\)

\(=\)







\(\ds -\frac {t^{k + 1} } s e^{-s t} + \frac {k + 1} s \int t^k e^{-s t} \rd t\)










Evaluating at $t = 0$ and $t \to +\infty$:














\(\ds \laptrans {t^{k + 1} }\)

\(=\)







\(\ds -\intlimits {\frac 1 s t^{k + 1} e^{-s t} } {t \mathop = 0} {t \mathop \to +\infty} + \frac {k + 1} s \laptrans {t^n}\)




















\(\ds \)

\(=\)







\(\ds -\intlimits {\frac {s^{-1} t^{k + 1} } {e^{s t} } } {t \mathop = 0} {t \mathop \to +\infty} + \frac {k + 1} s \laptrans {t^n}\)





Exponent Combination Laws














\(\ds \)

\(=\)







\(\ds 0 - 0 + \frac {k + 1} s \laptrans {t^n}\)





Limit at Infinity of Polynomial over Complex Exponential














\(\ds \)

\(=\)







\(\ds \frac {k + 1} s \times \frac {k!} {s^{k + 1} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \frac {\paren {k + 1}!} {s^{k + 1 + 1} }\)





Exponent Combination Laws, Definition of Factorial




The result follows by the Principle of Mathematical Induction.
$\blacksquare$


Sources
For a video presentation of the contents of this page, visit the Khan Academy.




