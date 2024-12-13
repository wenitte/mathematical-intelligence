# 

Source: https://proofwiki.org/wiki/One-Sided_Limit_of_Real_Function/Examples/e%5E-1_over_x_at_0_from_Right

Example of One-Sided Limit of Real Functions
Let $f: \R \to \R$ be the real function defined as:

$\map f x = e^{-1 / x}$
Then:














\(\ds \lim_{x \mathop \to 0^+} \map f x\)

\(=\)







\(\ds 0\)











Proof
  
By definition of the limit from the right:

$\ds \lim_{x \mathop \to a^+} \map f x = A$
if and only if:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall x \in \Bbb I: a < x < a + \delta \implies \size {\map f x - L} < \epsilon$

In this case we are interested in the situation where $a = 0$, and we wish to demonstrate that $L = 0$ at that point.
Hence the condition we need to ascertain is:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall x \in \Bbb I: 0 < x < \delta \implies \size {e^{-1 / x} } < \epsilon$

Let $\epsilon \in \R_{>0}$ be chosen arbitrarily.
Let $x > 0$.
We have that:

$e^{-1 / x} > 0$
and so:

$\size {e^{-1 / x} } = e^{-1 / x}$
Then we have:














\(\ds e^{-1 / x}\)

\(<\)







\(\ds \epsilon\)














\(\ds \leadstoandfrom \ \ \)





\(\ds -1 / x\)

\(<\)







\(\ds \ln \epsilon\)














\(\ds \leadstoandfrom \ \ \)





\(\ds 1 / x\)

\(>\)







\(\ds -\ln \epsilon\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\dfrac 1 \epsilon}\)





Logarithm of Reciprocal








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(<\)







\(\ds \dfrac 1 {\map \ln {1 / \epsilon} }\)










So, having been given an arbitrary $\epsilon \in \R_{>0}$, let $\delta = \dfrac 1 {\map \ln {1 / \epsilon} }$.
Then:

$0 < x < \delta \implies \size {e^{-1 / x} } < \epsilon$
Hence by definition of limit from the right:

$\ds \lim_{x \mathop \to 0^+} e^{-1 / x} = 0$
$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 2$. Functions of One Variable: Exercise $1 \, \text {(b)}$




