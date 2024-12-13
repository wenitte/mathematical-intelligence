# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Constant_Mapping



Theorem
Let $a \in \R$ be a real constant.
Let $f_a: \R \to \R$ or $\C$ be the constant mapping, defined as:

$\forall t \in \R: \map {f_a} t = a$

Let $\laptrans {f_a}$ be the Laplace transform of $f_a$.

Then:

$\laptrans {\map {f_a} t} = \dfrac a s$
for $\map \Re s > a$.


Proof 1













\(\ds \laptrans {\map {f_a} t}\)

\(=\)







\(\ds \laptrans a\)





Definition of Constant Mapping














\(\ds \)

\(=\)







\(\ds a \, \laptrans 1\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds a \frac 1 s\)





Laplace Transform of 1














\(\ds \)

\(=\)







\(\ds \frac a s\)









$\blacksquare$


Proof 2













\(\ds \laptrans {\map {f_a} t}\)

\(=\)







\(\ds \laptrans a\)





Definition of Constant Mapping














\(\ds \)

\(=\)







\(\ds a \, \laptrans 1\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds a \int_0^{\to +\infty} e^{-s t} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \intlimits {- \frac a s e^{-st} } {t \mathop = 0} {t \mathop \to +\infty}\)




















\(\ds \)

\(=\)







\(\ds 0 - \paren {- \frac a s}\)





Complex Exponential Tends to Zero, Exponential of Zero














\(\ds \)

\(=\)







\(\ds \frac a s\)









$\blacksquare$


Examples
Example $1$
Let $\map f t$ be the real function defined as:

$\forall t \in \R: \map f t = \begin {cases} 0 & : t < 0 \\ 5 & : 0 \le t < 3 \\ 0 & : t \ge 3 \end {cases}$

Then the Laplace transform of $f$ is given by:

$\laptrans {\map f t} = \dfrac {5 \paren {1 - e^{-3 s} } } s$




