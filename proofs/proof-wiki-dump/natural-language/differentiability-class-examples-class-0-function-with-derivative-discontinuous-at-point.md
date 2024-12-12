# 

Source: https://proofwiki.org/wiki/Differentiability_Class/Examples/Class_0_Function_with_Derivative_Discontinuous_at_Point

Example of Differentiability Class
Let $f$ be the real function defined as:

$\map f x = \begin {cases} x^2 \sin \dfrac 1 x & : x \ne 0 \\ 0 & : x = 0 \end {cases}$
Then $f \in C^0$ but $f \notin C^1$.


Proof
For $x = 0$:














\(\ds \map {f'} 0\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\map f h - \map f 0} h\)





Definition of Derivative of Real Function at Point














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} h \sin \frac 1 h\)




















\(\ds \)

\(=\)







\(\ds 0\)





Limit of $x \sin \dfrac 1 x$ at $0$



For $x \ne 0$:














\(\ds \map {f'} x\)

\(=\)







\(\ds \map {\frac \d {\d x} } {x^2} \sin \frac 1 x + x^2 \map {\frac \d {\d x} } {\sin \frac 1 x}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds 2 x \sin \frac 1 x + x^2 \cos \frac 1 x \map {\frac \d {\d x} } {\frac 1 x}\)





Power Rule for Derivatives, Derivative of Composite Function, Derivative of Sine Function














\(\ds \)

\(=\)







\(\ds 2 x \sin \frac 1 x - \cos \frac 1 x\)





Power Rule for Derivatives




From Differentiable Function is Continuous, $f \in C^0$.
$f'$ is not continuous at $0$, so $f \notin C^1$.
$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 2$. Functions of One Variable: $2.2$ Derivatives




