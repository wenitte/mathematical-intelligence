# 

Source: https://proofwiki.org/wiki/One-Sided_Limit_of_Real_Function/Examples/e%5E-1_over_x_at_0_from_Left

Example of One-Sided Limit of Real Functions
Let $f: \R \to \R$ be the real function defined as:

$\map f x = e^{-1 / x}$
Then:














\(\ds \lim_{x \mathop \to 0^-} \map f x\)

\(=\)







\(\ds +\infty\)











Proof
  
By definition of the limit from the left:

$\ds \lim_{x \mathop \to a^-} \map f x = A$
if and only if:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall x \in \Bbb I: a - \delta < x < a \implies \size {\map f x - L} < \epsilon$

In this case we are interested in the situation where $a = 0$, and we wish to demonstrate that $L \to +\infty$ at that point.
Hence the condition we need to ascertain is:

$\lnot \paren {\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall x \in \Bbb I: -\delta < x < 0 \implies \size {e^{-1 / x} } < \epsilon}$
That is:

$\exists \epsilon \in \R_{>0}: \nexists \delta \in \R_{>0}: \forall x \in \Bbb I: -\delta < x < 0 \implies \size {e^{-1 / x} } < \epsilon$
or:

$\exists \epsilon \in \R_{>0}: \forall \delta \in \R_{>0}: \forall x \in \Bbb I: -\delta < x < 0 \implies \size {e^{-1 / x} } > \epsilon$

Let $\epsilon \in \R_{>0}$ be chosen arbitrarily such that $\epsilon < 1$.
Let $x < 0$.
Let $z = -x$.
Thus:

$z > 0$

Then we have:














\(\ds e^{1 / z}\)

\(>\)







\(\ds \epsilon\)














\(\ds \leadstoandfrom \ \ \)





\(\ds 1 / z\)

\(>\)







\(\ds \ln \epsilon\)














\(\ds \leadstoandfrom \ \ \)





\(\ds z\)

\(<\)







\(\ds \dfrac 1 {\ln \epsilon}\)










So, having been given an arbitrary $\epsilon \in \R_{>0}$, let $\delta = \dfrac 1 {\ln \epsilon}$.
Then:

$-\delta < -x < 0 \implies \size {e^{-1 / x} } > \epsilon$
Hence by definition of limit from the left:

$\ds \lim_{x \mathop \to 0^-} e^{-1 / x} = +\infty$
$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 2$. Functions of One Variable: Exercise $1 \, \text {(c)}$




