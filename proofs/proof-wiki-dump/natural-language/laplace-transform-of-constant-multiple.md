# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Constant_Multiple



Theorem
Let $f$ be a function such that $\LL f$ exists.
Let $\laptrans {\map f t} = \map F s$ denote the Laplace transform of $f$.
Let $\map F s$ denote $\laptrans {\map f t}$.
Let $a \in \C$ or $\R$ be constant.

Then:

$a \laptrans {\map f {a t} } = \map F {\dfrac s a}$


Proof













\(\ds a \laptrans {\map f {a t} }\)

\(=\)







\(\ds a \int_0^{\to + \infty} e^{-s t} \map f {a t} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds a \paren {\frac 1 a} \int_0^{\to + \infty} e^{-s t} \map f {a t} \rd \paren {a t}\)





Primitive of Function of Constant Multiple














\(\ds \)

\(=\)







\(\ds \int_0^{\to + \infty} e^{-u a t} \map f {a t} \rd \paren {a t}\)





where $u = \dfrac s a$














\(\ds \)

\(=\)







\(\ds \int_0^{\to + \infty} e^{-u a t} \map f {a t} \rd \paren {a t}\)




















\(\ds \)

\(=\)







\(\ds \map F u\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \map F {\dfrac s a}\)









$\blacksquare$


Also presented as
This result can also be given as:

$\laptrans {\map f {a t} } = \dfrac 1 a \map F {\dfrac s a}$


Also known as
This property of the Laplace transform operator is sometimes seen referred to as the change of scale property.


Examples
Example $1$
$\laptrans {\sin 3 t} = \dfrac 3 {s^2 + 9}$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Important Properties of Laplace Transforms: $4$. Change of scale property: Theorem $1 \text{-} 5$
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Translation and Change of Scale Properties: $11$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of General Properties of Laplace Transforms: $32.4$




