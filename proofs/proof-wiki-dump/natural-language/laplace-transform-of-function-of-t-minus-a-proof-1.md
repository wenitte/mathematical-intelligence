# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Function_of_t_minus_a/Proof_1

Theorem
Let $f$ be a function such that $\laptrans f$ exists.
Let $\laptrans {\map f t} = \map F s$ denote the Laplace transform of $f$.
Let $a \in \C$ or $\R$ be constant.

Let $g$ be the function defined as:

$\map g t = \begin{cases} \map f {t - a} & : t > a \\ 0 & : t \le a \end{cases}$

Then:

$\laptrans {\map g t} = e^{-a s} \map F s$


Proof













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





