# 

Source: https://proofwiki.org/wiki/Derivative_of_Laplace_Transform



Theorem
Let $f: \R \to \R$ or $\R \to \C$ be a continuous function, differentiable on any closed interval $\closedint 0 a$.
Let $\laptrans f = F$ denote the Laplace transform of $f$.

Then, everywhere that $\dfrac \d {\d s} \laptrans f$ exists:

$\dfrac \d {\d s} \laptrans {\map f t} = -\laptrans {t \, \map f t}$


Proof

There is believed to be a mistake here, possibly a typo.In particular: see talk pageYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.













\(\ds \frac \d {\d s} \laptrans {\map f t}\)

\(=\)







\(\ds \frac \d {\d s} \int_0^{\to +\infty} \map f t \, e^{-s t} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \int_0^{\to +\infty} \map {\frac {\partial} {\partial s} } {\map f t \, e^{-s t} } \rd t\)





Definite Integral of Partial Derivative














\(\ds \)

\(=\)







\(\ds \int_0^{\to +\infty} \map f t \, \map {\frac {\partial} {\partial s} } {e^{-st} } \rd t\)




















\(\ds \)

\(=\)







\(\ds -\int_0^{\to +\infty} t \, \map f t \, e^{-s t} \rd t\)





Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds -\laptrans {t \, \map f t}\)





Definition of Laplace Transform



$\blacksquare$


Examples
Example 1
$\ds \int_0^\infty t e^{-2 t} \cos t \rd t = \dfrac 3 {25}$


Also see
Laplace Transform of Derivative
Higher Order Derivatives of Laplace Transform


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of General Properties of Laplace Transforms: $32.10$
2009: William E. Boyce and Richard C. DiPrima: Elementary Differential Equations and Boundary Value Problems (9th ed.): $\S 6.1$




