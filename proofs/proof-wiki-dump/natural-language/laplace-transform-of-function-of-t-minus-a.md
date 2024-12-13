# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Function_of_t_minus_a



Theorem
Let $f$ be a function such that $\laptrans f$ exists.
Let $\laptrans {\map f t} = \map F s$ denote the Laplace transform of $f$.
Let $a \in \C$ or $\R$ be constant.
Let $g$ be the function defined as:

$\map g t = \begin{cases} \map f {t - a} & : t > a \\ 0 & : t \le a \end{cases}$

Then:

$\laptrans {\map g t} = e^{-a s} \map F s$


Proof 1













\(\ds \laptrans {\map f {t - a} }\)

\(=\)







\(\ds \int_0^{\to + \infty} e^{-s t} \map f {t - a} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \int_0^{\to + \infty} e^{-s \paren {t - a} } e^{-a s} \map f {t - a} \rd \paren {t - a}\)




















\(\ds \)

\(=\)







\(\ds e^{-a s} \int_0^{\to + \infty} e^{-s \paren {t - a} } \map f {t - a} \rd \paren {t - a}\)




















\(\ds \)

\(=\)







\(\ds e^{-a s}\map F s\)





Definition of Laplace Transform



$\blacksquare$


Proof 2













\(\ds \laptrans {\map g t}\)

\(=\)







\(\ds \int_0^\infty e^{-s t} \map g t \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \int_0^a e^{-s t} \map g t \rd t + \int_a^\infty e^{-s t} \map g t \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^a 0 \times e^{-s t} \rd t + \int_a^\infty e^{-s t} \map f {t - a} \rd t\)





Definition of $\map g t$














\(\ds \)

\(=\)







\(\ds \int_a^\infty e^{-s t} \map f {t - a} \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty e^{-s \paren {u + a} } \map f u \rd u\)





Integration by Substitution: $t = u + a$














\(\ds \)

\(=\)







\(\ds e^{-a s} \int_0^\infty e^{-s u} \map f u \rd u\)




















\(\ds \)

\(=\)







\(\ds e^{-a s} \map F s\)





Definition of Laplace Transform



$\blacksquare$


Also known as
This property of the Laplace transform operator is sometimes seen referred to as:

the second translation property
or:

the second shifting property.


Examples
Example $1$
$\laptrans {\paren {t - 2}^3} = \dfrac {6 e^{-2 s} } {s^4}$
where $t > 2$.


Example $2$
Let $f: \R \to \R$ be the function defined as:

$\forall t \in \R: \map f t = \begin {cases} \map \cos {t - \dfrac {2 \pi} 3} & : t \ge \dfrac {2 \pi} 3 \\ 0 & : t < \dfrac {2 \pi} 3 \end {cases}$

Then:

$\laptrans {\map f t} = s \exp \dfrac {-2 \pi s} 3 \dfrac 1 {s^2 + 1}$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Important Properties of Laplace Transforms: $3$. Second translation or shifting property: Theorem $1 \text{-} 4$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of General Properties of Laplace Transforms: $32.6$




