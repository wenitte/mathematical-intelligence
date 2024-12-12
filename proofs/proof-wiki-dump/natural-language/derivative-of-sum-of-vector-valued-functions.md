# 

Source: https://proofwiki.org/wiki/Derivative_of_Sum_of_Vector-Valued_Functions

Theorem
Let $\mathbf a: \R \to \R^n$ and $\mathbf b: \R \to \R^n$ be differentiable vector-valued functions.

Then the derivative of $\map {\mathbf v} t = \map {\mathbf a} t + \map {\mathbf b} t$ is given by:

$\dfrac {\d \mathbf v} {\d t} = \map {\dfrac \d {\d t} } {\mathbf a + \mathbf b} = \dfrac {\d \mathbf a} {\d t} + \dfrac {\d \mathbf b} {\d t}$


Proof













\(\ds \dfrac {\d \mathbf v} {\d t}\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \dfrac {\map {\mathbf v} {t + h} - \map {\mathbf v} t} h\)





Definition of Derivative of Vector-Valued Function














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \dfrac {\paren {\map {\mathbf a} {t + h} + \map {\mathbf b} {t + h} } - \paren {\map {\mathbf a} t + \map {\mathbf b} t} } h\)





Definition of $\mathbf v$














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \dfrac {\paren {\map {\mathbf a} {t + h} - \map {\mathbf a} t} + \paren {\map {\mathbf b} {t + h} - \map {\mathbf b} t} } h\)





rearranging














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \dfrac {\map {\mathbf a} {t + h} - \map {\mathbf a} t} h + \lim_{h \mathop \to 0} \dfrac {\map {\mathbf b} {t + h} - \map {\mathbf b} t} h\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\d \mathbf a} {\d t} + \dfrac {\d \mathbf b} {\d t}\)





Definition of Derivative of Vector-Valued Function



$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {III}$: The Differentiation of Vectors: $2$. Differentiation of Sums and Products: $(3.2)$




