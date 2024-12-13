# 

Source: https://proofwiki.org/wiki/Partial_Gamma_Function_expressed_as_Integral



Theorem
Let $m \in \Z_{\ge 1}$.
Let $\map {\Gamma_m} x$ denote the partial Gamma function, defined as:

$\map {\Gamma_m} x := \dfrac {m^x m!} {x \paren {x + 1} \paren {x + 2} \cdots \paren {x + m} }$

Then:

$\ds \map {\Gamma_m} x = \int_0^m \paren {1 - \frac t m}^m t^{x - 1} \rd t$
for $x > 0$.


Proof
Lemma
First we establish:


$(1): \quad \ds \int_0^m \paren {1 - \frac t m}^m t^{x - 1} \rd t = m^x \int_0^1 \paren {1 - t}^m t^{x - 1} \rd t$
for $x > 0$.

The proof continues by induction on $m$.
For all $m \in \Z_{\ge 1}$, let $\map P m$ be the proposition:

$\ds \map {\Gamma_m} x = m^x \int_0^1 \paren {1 - t}^m t^{x - 1} \rd t$


Basis for the Induction
$\map P 1$ is the case:














\(\ds m^x \int_0^1 \paren {1 - t}^m t^{x - 1} \rd t\)

\(=\)







\(\ds \int_0^1 \paren {1 - t} t^{x - 1} \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^1 t^{x - 1} \rd t - \int_0^1 t^x \rd t\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\frac {t^x} x} 0 1 - \intlimits {\frac {t^{x + 1} } {x + 1} } 0 1\)




















\(\ds \)

\(=\)







\(\ds \frac 1 x - \frac 1 {x + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {x + 1 - x} {x \paren {x + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {x \paren {x + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {1^x 1!} {x \paren {x + 1} }\)









Thus $\map P 1$ is seen to hold.
This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\ds \map {\Gamma_k} x = k^x \int_0^1 \paren {1 - t}^k t^{x - 1} \rd t$

from which it is to be shown that:

$\ds \map {\Gamma_{k + 1} } x = \paren {k + 1}^x \int_0^1 \paren {1 - t}^{k + 1} t^{x - 1} \rd t$


Induction Step
This is the induction step:
With a view to expressing the primitive in the form:

$\ds \int u \frac {\rd v} {\rd x} \rd x = u v - \int v \frac {\rd u} {\rd x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \paren {1 - t}^{k + 1}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\rd u} {\rd t}\)

\(=\)







\(\ds -\paren {k + 1} \paren {1 - t}^k\)





Power Rule for Derivatives




and let:














\(\ds \frac {\rd v} {\rd t}\)

\(=\)







\(\ds t^{x - 1}\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {t^x} x\)





Primitive of Power




Then:














\(\ds \)

\(\)







\(\ds \paren {k + 1}^x \int_0^1 \paren {1 - t}^{k + 1} t^{x - 1} \rd t\)




















\(\ds \)

\(=\)







\(\ds \paren {k + 1}^x \intlimits {-\paren {k + 1} \paren {1 - t}^k \frac {t^x} x} 0 1 - \paren {k + 1}^x \int_0^1 \paren {-\paren {k + 1} \frac {t^x} x} \paren {\paren {1 - t}^k} \rd t\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {\paren {k + 1}^{x + 1} } x \int_0^1 \paren {1 - t}^k t^x \rd t\)





$u v$ term vanishes














\(\ds \)

\(=\)







\(\ds \frac {\paren {k + 1}^{x + 1} } x \frac {\map {\Gamma_k} {x + 1} } {k^{x + 1} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \frac {\paren {k + 1}^{x + 1} } x \frac {k^{x + 1} k!} {k^{x + 1} \paren {x + 1} \paren {x + 2} \cdots \paren {x + k} \paren {x + 1 + k} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {k + 1}^{x + 1} k!} {x \paren {x + 1} \paren {x + 2} \cdots \paren {x + k} \paren {x + k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {k + 1}^x \paren {k + 1}!} {x \paren {x + 1} \paren {x + 2} \cdots \paren {x + k} \paren {x + k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \map {\Gamma_{k + 1} } x\)










So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall m \in \Z_{\ge 1}: \map {\Gamma_m} x = \int_0^m \paren {1 - \frac t m}^m t^{x - 1} \rd t$
for $x > 0$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: Exercise $19$




