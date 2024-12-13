# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Exponential_of_x_by_Sine_of_x


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem













\(\ds e^x \sin x\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {2^{n / 2} \, \map \sin {n \pi / 4} x^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds x + x^2 + \frac {x^3} 3 - \frac {x^5} {30} - \frac {x^6} {90} + \cdots\)










for all $x \in \R$.


Proof
Let $\map f x = e^x \sin x$.
By definition of Maclaurin series:

$(1): \quad \map f x \sim \ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!} \map {f^{\paren n} } 0$
where $\map {f^{\paren n} } 0$ denotes the $n$th derivative of $f$ with respect to $x$ evaluated at $x = 0$.

It remains to be shown that:

$\map {f^{\paren n} } 0 = 2^{n / 2} \map \sin {\dfrac {n \pi} 4}$

The proof proceeds by induction.

For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\map {f^{\paren n} } x = 2^{n / 2} e^x \, \map \sin {x + \dfrac {n \pi} 4}$


Basis for the Induction
$\map P 0$ is the case:














\(\ds \map f x\)

\(=\)







\(\ds e^x \sin x\)




















\(\ds \)

\(=\)







\(\ds 2^{0 / 2} e^x \, \map \sin {x + \dfrac {0 \pi} 4}\)










Thus $\map P 0$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\map {f^{\paren k} } x = 2^{k / 2} e^x \, \map \sin {x + \dfrac {k \pi} 4}$

from which it is to be shown that:

$\map {f^{\paren {k + 1} } } x = 2^{\paren {k + 1} / 2} e^x \, \map \sin {x + \dfrac {\paren {k + 1} \pi} 4}$


Induction Step
This is the induction step:















\(\ds \map {f^{\paren {k + 1} } } x\)

\(=\)







\(\ds \frac \d {\d x} \map {f^{\paren k} } x\)




















\(\ds \)

\(=\)







\(\ds \frac \d {\d x} 2^{k / 2} e^x \, \map \sin {x + \dfrac {k \pi} 4}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds 2^{k / 2} \paren {e^x \frac \d {\d x} \map \sin {x + \dfrac {k \pi} 4} + \map \sin {x + \dfrac {k \pi} 4} \frac \d {\d x} e^x}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds 2^{k / 2} \paren {e^x \, \map \cos {x + \dfrac {k \pi} 4} + \map \sin {x + \dfrac {k \pi} 4} \frac \d {\d x} e^x}\)





Derivative of Sine Function, Derivatives of Function of $a x + b$














\(\ds \)

\(=\)







\(\ds 2^{k / 2} e^x \paren {\map \cos {x + \dfrac {k \pi} 4} + \map \sin {x + \dfrac {k \pi} 4} }\)





Derivative of Exponential Function and simplification














\(\ds \)

\(=\)







\(\ds 2^{k / 2} e^x \sqrt 2 \, \map \sin {x + \dfrac {k \pi} 4 + \dfrac \pi 4}\)





Sine of x plus Cosine of x: Sine Form














\(\ds \)

\(=\)







\(\ds 2^{\paren {k + 1} / 2} e^x \, \map \sin {x + \dfrac {\paren {k + 1} \pi} 4}\)





simplification




So $\map P k \implies \map P {k + 1}$ and by the Principle of Mathematical Induction:

$\forall n \in \Z_{\ge 0}: \map {f^{\paren n} } x = 2^{n / 2} e^x \, \map \sin {x + \dfrac {n \pi} 4}$

The result follows by setting $x = 0$ and substituting for $\map {f^{\paren n} } 0$ in $(1)$.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 20$: Miscellaneous Series: $20.46$



