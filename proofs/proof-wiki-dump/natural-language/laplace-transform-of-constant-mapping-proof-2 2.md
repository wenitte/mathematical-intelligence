# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Constant_Mapping/Proof_2

Theorem
Let $a \in \R$ be a real constant.
Let $f_a: \R \to \R$ or $\C$ be the constant mapping, defined as:

$\forall t \in \R: \map {f_a} t = a$

Let $\laptrans {f_a}$ be the Laplace transform of $f_a$.

Then:

$\laptrans {\map {f_a} t} = \dfrac a s$
for $\map \Re s > a$.


Proof













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





