# 

Source: https://proofwiki.org/wiki/Final_Value_Theorem_of_Laplace_Transform



Theorem
Let $\laptrans {\map f t} = \map F s$ denote the Laplace transform of the real function $f$.
Then:

$\ds \lim_{t \mathop \to \infty} \map f t = \lim_{s \mathop \to 0} s \, \map F s$
if those limits exist.


General Result
Let $\ds \lim_{t \mathop \to \infty} \dfrac {\map f t} {\map g t} = 1$.

Then:

$\ds \lim_{s \mathop \to 0} \dfrac {\map F s} {\map G s} = 1$
if those limits exist.


Proof
From Laplace Transform of Derivative:

$(1): \quad \laptrans {\map {f'} t} = s \, \map F s - \map f 0$

We have that:














\(\ds \lim_{s \mathop \to 0} \laptrans {\map {f'} t}\)

\(=\)







\(\ds \lim_{s \mathop \to 0} \int_0^\infty e^{-s t} \map {f'} t \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \int_0^\infty \map {f'} t \rd t\)




















\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \int_0^L \map {f'} t \rd t\)




















\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \paren {\map f L - \map f 0}\)





Fundamental Theorem of Calculus




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \lim_{t \mathop \to \infty} \map f t - \map f 0\)










Hence:














\(\ds \lim_{s \mathop \to 0} \laptrans {\map {f'} t}\)

\(=\)







\(\ds \lim_{s \mathop \to 0} s \, \map F s - \map f 0\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds \lim_{t \mathop \to \infty} \map f t - \map f 0\)

\(=\)







\(\ds \lim_{s \mathop \to 0} s \, \map F s - \map f 0\)





from $(2)$








\(\ds \leadsto \ \ \)





\(\ds \lim_{t \mathop \to \infty} \map f t\)

\(=\)







\(\ds \lim_{s \mathop \to 0} s \, \map F s\)









$\Box$

Suppose that $f$ is not continuous at $t = 0$.
From Laplace Transform of Derivative with Discontinuity at Zero:

$\laptrans {\map {f'} t} = s \, \map F s - \map f {0^+}$
which means:

$(3): \quad \laptrans {\map {f'} t} = s \, \map F s - \ds \lim_{u \mathop \to 0} \map f u$

We have that:














\(\ds \lim_{s \mathop \to 0} \laptrans {\map {f'} t}\)

\(=\)







\(\ds \lim_{u \mathop \to 0} \paren {\lim_{s \mathop \to 0} \int_u^\infty e^{-s t} \map {f'} t \rd t}\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \lim_{u \mathop \to 0} \paren {\int_u^\infty \map {f'} t \rd t}\)




















\(\ds \)

\(=\)







\(\ds \lim_{u \mathop \to 0} \paren {\lim_{L \mathop \to \infty} \int_u^L \map {f'} t \rd t}\)




















\(\ds \)

\(=\)







\(\ds \lim_{u \mathop \to 0} \paren {\lim_{L \mathop \to \infty} \paren {\map f L - \map f u} }\)





Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds \lim_{u \mathop \to 0} \paren {\lim_{t \mathop \to \infty} \map f t - \map f u}\)










\(\text {(4)}: \quad\)









\(\ds \)

\(=\)







\(\ds \lim_{t \mathop \to \infty} \map f t - \lim_{u \mathop \to 0} \map f u\)










Hence:














\(\ds \lim_{s \mathop \to 0} \laptrans {\map {f'} t}\)

\(=\)







\(\ds \lim_{s \mathop \to 0} s \, \map F s - \lim_{u \mathop \to 0} \map f u\)





from $(3)$








\(\ds \leadsto \ \ \)





\(\ds \lim_{t \mathop \to \infty} \map f t - \lim_{u \mathop \to 0} \map f u\)

\(=\)







\(\ds \lim_{s \mathop \to 0} s \, \map F s - \lim_{u \mathop \to 0} \map f u\)





from $(4)$








\(\ds \leadsto \ \ \)





\(\ds \lim_{t \mathop \to \infty} \map f t\)

\(=\)







\(\ds \lim_{s \mathop \to 0} s \, \map F s\)









$\blacksquare$


Examples
Example 1
Consider the real function $f: \R \to \R$ defined as:

$\map f t = 3 e^{-2 t}$
From Laplace Transform of Exponential:

$\laptrans {\map f t} = \dfrac 3 {s + 2}$

Then by the Initial Value Theorem of Laplace Transform:














\(\ds \lim_{t \mathop \to 0} 3 e^{-2 t}\)

\(=\)







\(\ds \lim_{s \mathop \to \infty} \dfrac 3 {s + 2}\)














\(\ds \leadsto \ \ \)





\(\ds 3\)

\(=\)







\(\ds 3\)











Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Important Properties of Laplace Transforms: $12$. Final-value theorem: Theorem $1 \text{-} 17$
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Initial and Final Value Theorems: $26$




