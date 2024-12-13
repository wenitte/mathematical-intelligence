# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Exponential_times_Function



Theorem
Let $\map f t: \R \to \R$ or $\R \to \C$ be a function of exponential order $a$ for some constant $a \in \R$.
Let $\laptrans {\map f t} = \map F s$ be the Laplace transform of $f$.
Let $e^t$ be the exponential function.

Then:

$\laptrans {e^{a t} \map f t} = \map F {s - a}$
everywhere that $\laptrans f$ exists, for $\map \Re s > a$


Proof













\(\ds \laptrans {e^{a t} \map f t}\)

\(=\)







\(\ds \int_0^{\to +\infty} e^{-s t} e^{a t} \map f t \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \int_0^{\to +\infty} e^{-s t + a t} \map f t \rd t\)





Exponent Combination Laws














\(\ds \)

\(=\)







\(\ds \int_0^{\to +\infty} e^{-\paren {s - a} t} \map f t \rd t\)




















\(\ds \)

\(=\)







\(\ds \map F {s - a}\)





Definition of Laplace Transform



$\blacksquare$


Also known as
This property of the Laplace transform operator is sometimes seen referred to as:

the first translation property
or:

the first shifting property.


Examples
Example $1$
$\laptrans {e^{-t} \cos 2 t} = \dfrac {s + 1} {s^2 + 2 s + 5}$


Example $2$
$\laptrans {t^2 e^{3 t} } = \dfrac 2 {\paren {s - 3}^3}$


Example $3$
$\laptrans {e^{-2 t} \sin 4 t} = \dfrac 4 {s^2 + 4 s + 20}$


Example $4$
$\laptrans {e^{4 t} \cosh 5 t} = \dfrac {s - 4} {s^2 - 8 s - 9}$


Example $5$
$\laptrans {e^{-3 t} \paren {3 \cos 6 t - 5 \sin 6 t} } = \dfrac {3 s - 24} {s^2 + 4 s + 40}$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Important Properties of Laplace Transforms: $2$. First translation or shifting property: Theorem $1 \text{-} 3$
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Translation and Change of Scale Properties: $7$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of General Properties of Laplace Transforms: $32.5$
For a video presentation of the contents of this page, visit the Khan Academy.




