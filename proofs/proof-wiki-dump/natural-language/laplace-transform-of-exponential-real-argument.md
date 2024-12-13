# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Exponential/Real_Argument



Theorem
Let $\laptrans f$ denote the Laplace transform of a function $f$.
Let $e^x$ be the real exponential.
Then:

$\map {\laptrans {e^{a t} } } s = \dfrac 1 {s - a}$
where $a \in \R$ is constant, and $\map \Re s > \map \Re a$.


Proof 1













\(\ds \map {\laptrans {e^{a t} } } s\)

\(=\)







\(\ds \int_0^{\to +\infty} e^{-s t} e^{a t} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \int_0^{\to +\infty} e^{\paren {a - s} t} \rd t\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \int_0^L e^{\paren {a - s} t} \rd t\)





Definition of Improper Integral














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \intlimits {\frac 1 {a - s} e^{\paren {a - s} t} } 0 L\)





Primitive of Exponential Function, Integration by Substitution














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \frac 1 {a - s} \paren {e^{\paren {a - s} L} - e^{\paren {a - s} 0} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \frac 1 {s - a} \paren {1 - e^{\paren {a - s} L} }\)





Exponential of Zero and rearranging




Because $s > a$, we have that $a - s < 0$.
Hence:

$\ds \lim_{L \mathop \to \infty} \paren {a - s} L \to -\infty$

So:














\(\ds \lim_{L \mathop \to \infty} \frac 1 {s - a} \paren {1 - e^{\paren {a - s} L} }\)

\(=\)







\(\ds \frac 1 {s - a} \paren {1 - 0}\)





Exponential Tends to Zero














\(\ds \)

\(=\)







\(\ds \frac 1 {s - a}\)









$\blacksquare$


Proof 2













\(\ds \map {\laptrans {e^{a t} } } s\)

\(=\)







\(\ds \map {\laptrans {1 \times e^{a t} } } s\)




















\(\ds \)

\(=\)







\(\ds \map {\laptrans 1} {s - a}\)





Laplace Transform of Exponential times Function














\(\ds \)

\(=\)







\(\ds \frac 1 {s - a}\)





Laplace Transform of Constant Mapping



$\blacksquare$


Proof 3
From Laplace Transform of Derivative:

$(1): \quad \laptrans {\map {f'} t} = s \laptrans {\map f t} - \map f 0$
under suitable conditions.

Then:














\(\ds \map f t\)

\(=\)







\(\ds e^{a t}\)














\(\ds \leadsto \ \ \)





\(\ds \map {f'} t\)

\(=\)







\(\ds a e^{a t}\)




















\(\ds \map f 0\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {a e^{a t} }\)

\(=\)







\(\ds s \laptrans {e^{a t} } - 1\)





from $(1)$, substituting for $\map f t$ and $\map f 0$








\(\ds \leadsto \ \ \)





\(\ds a \laptrans {e^{a t} }\)

\(=\)







\(\ds s \laptrans {e^{a t} } - 1\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {e^{a t} }\)

\(=\)







\(\ds \dfrac 1 {s - a}\)





rearranging



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Laplace Transforms of some Elementary Functions: $4$.
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of Special Laplace Transforms: $32.29$




