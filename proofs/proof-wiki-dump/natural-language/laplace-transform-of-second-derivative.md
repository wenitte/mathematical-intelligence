# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Second_Derivative



Theorem
Let $f: \R \to \R$ or $\R \to \C$ be a continuous function on any interval of the form $0 \le t \le a$.
Let $f$ be twice differentiable.
Let $f'$ be continuous and $f$ piecewise continuous with one-sided limits on said intervals.
Let $f$ and $f'$ be of exponential order.
Let $\laptrans f$ denote the Laplace transform of $f$.

Then $\laptrans {f}$ exists for $\map \Re s > a$, and:

$\laptrans {\map {f} t} = s^2 \laptrans {\map f t} - s \, \map f 0 - \map {f'} 0$


Proof













\(\ds \laptrans {\map {f} t}\)

\(=\)







\(\ds s \laptrans {\map {f'} t} - \map {f'} 0\)





Laplace Transform of Derivative














\(\ds \)

\(=\)







\(\ds s \paren {s \laptrans {\map f t} - \map f 0} - \map {f'} 0\)





Laplace Transform of Derivative














\(\ds \)

\(=\)







\(\ds s^2 \laptrans {\map f t} - s \, \map f 0 - \map {f'} 0\)









$\blacksquare$


Also see
Laplace Transform of Higher Order Derivatives


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Important Properties of Laplace Transforms: $5$. Laplace transform of derivatives: Theorem $1 \text{-} 9$
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Laplace Transform of Derivative: $14$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of General Properties of Laplace Transforms: $32.8$
2009: William E. Boyce and Richard C. DiPrima: Elementary Differential Equations and Boundary Value Problems (9th ed.): $\S 6.2$
For a video presentation of the contents of this page, visit the Khan Academy.




