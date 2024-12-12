# 

Source: https://proofwiki.org/wiki/Differentiation_of_Vector-Valued_Function_Componentwise

Theorem
Let:

$\mathbf r: t \mapsto \tuple {\map {r_1} t, \map {r_2} t, \ldots, \map {r_n} t}$
be a differentiable vector-valued function.

The derivative of a vector-valued function can be calculated by differentiating each of its component functions:

$\dfrac {\d \map {\mathbf r} t} {\d t} = \tuple {\dfrac \d {\d t} \map {r_1} t, \dfrac \d {\d t} \map {r_2} t, \ldots, \dfrac \d {\d t} \map {r_n} t}$


Proof













\(\ds \frac {\d \map {\mathbf r} t} {\d t}\)

\(=\)







\(\ds \lim_{\Delta t \mathop \to 0} \frac {\map {\mathbf r} {t + \Delta t} - \map {\mathbf r} t} {\Delta t}\)





Definition of Derivative of Vector-Valued Function














\(\ds \)

\(=\)







\(\ds \begin {bmatrix}
\ds \lim_{\Delta t \mathop \to 0} \dfrac {\map {r_1} {t + \Delta t} - \map {r_1} t} {\Delta t} \\ \ds \lim_{\Delta t \mathop \to 0} \dfrac {\map {r_2} {t + \Delta t} - \map {r_2} t} {\Delta t} \\ \vdots \\ \ds \lim_{\Delta t \mathop \to 0} \dfrac {\map {r_n} {t + \Delta t} - \map {r_n} t} {\Delta t}
\end {bmatrix}\)





Definition of Limit of Vector-Valued Function














\(\ds \)

\(=\)







\(\ds \begin {bmatrix} \dfrac \d {\d t} \map {r_1} t \\ \dfrac \d {\d t} \map {r_2} t \\ \vdots \\ \dfrac \d {\d t} \map {r_n} t \end {bmatrix}\)





Definition of Derivative of Real Function



$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {III}$: The Differentiation of Vectors: $1$. Scalar Differentiation: $(3.1)$
1957: D.E. Rutherford: Vector Methods (9th ed.) ... (previous) ... (next): Chapter $\text I$: Vector Algebra: $\S 7$




