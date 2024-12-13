# 

Source: https://proofwiki.org/wiki/Second_Derivative_of_Laplace_Transform



Theorem
Let $f: \R \to \R$ or $\R \to \C$ be a continuous function, twice differentiable on any closed interval $\closedint 0 a$.
Let $\laptrans f = F$ denote the Laplace transform of $f$.

Then, everywhere that $\dfrac {\d^2} {\d s^2} \laptrans f$ exists:

$\dfrac {\d^2} {\d s^2} \laptrans {\map f t} = \laptrans {t^2 \, \map f t}$


Proof













\(\ds \dfrac {\d^2} {\d s^2} \laptrans {\map f t}\)

\(=\)







\(\ds \map {\frac \d {\d s} } {\dfrac \d {\d s} \laptrans {\map f t} }\)





Definition of Second Derivative














\(\ds \)

\(=\)







\(\ds \map {\frac \d {\d s} } {-\laptrans {t \, \map f t} }\)





Derivative of Laplace Transform














\(\ds \)

\(=\)







\(\ds -\frac \d {\d s} \laptrans {t \, \map f t}\)




















\(\ds \)

\(=\)







\(\ds -\paren {-\laptrans {t \paren {t \, \map f t} } }\)





Derivative of Laplace Transform














\(\ds \)

\(=\)







\(\ds \laptrans {t^2 \, \map f t}\)









$\blacksquare$


Also see
Derivative of Laplace Transform
Higher Order Derivatives of Laplace Transform


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of General Properties of Laplace Transforms: $32.11$




