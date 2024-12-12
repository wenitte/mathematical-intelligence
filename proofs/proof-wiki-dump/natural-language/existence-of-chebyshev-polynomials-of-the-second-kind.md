# 

Source: https://proofwiki.org/wiki/Existence_of_Chebyshev_Polynomials_of_the_Second_Kind

Theorem
There exists a Chebyshev polynomial of the second kind for all natural numbers $n$.


Proof

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
For $n = 0$:














\(\ds \map \sin { \paren {0+1} \theta}\)

\(=\)







\(\ds \map \sin \theta\)




















\(\ds \)

\(=\)







\(\ds 1 \cdot \sin \theta\)









$\map {U_0} x = 1$, $U_0 \in \Bbb P$

This article needs to be linked to other articles.In particular: $\Bbb P$ as the set/space of polynomialsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

For $n = 1$:














\(\ds \map \sin { \paren {1+1} \theta}\)

\(=\)







\(\ds \map \sin {2 \theta}\)




















\(\ds \)

\(=\)







\(\ds 2 \sin \theta \cos \theta\)





Double Angle Formula for Sine














\(\ds \)

\(=\)







\(\ds 2 \cos \theta \cdot \sin \theta\)









$\map {U_1} x = 2x$, $U_1 \in \Bbb P$

Assume $\map {U_n} {\cos \theta}\sin \theta = \map \sin { \paren {n+1} \theta }$.














\(\ds \map {U_{n+1} } {\cos \theta} \sin \theta\)

\(=\)







\(\ds \map \sin { \paren {n+1+1} \theta }\)




















\(\ds \)

\(=\)







\(\ds \map \sin { \paren {n+1} \theta + \theta }\)




















\(\ds \)

\(=\)







\(\ds \map \sin { \paren {n+1} \theta} \map \cos \theta + \map \cos { \paren {n+1} \theta }  \map \sin \theta\)





Sine of Sum














\(\ds \)

\(=\)







\(\ds 2 \map \sin { \paren {n+1} \theta} \map \cos \theta + \map \cos { \paren {n+1} \theta }  \map \sin \theta  - \map \sin { \paren {n+1} \theta} \map \cos \theta\)




















\(\ds \)

\(=\)







\(\ds 2 \map \sin { \paren {n+1} \theta} \map \cos \theta - \paren { \map \sin { \paren {n+1} \theta} \map \cos \theta - \map \cos { \paren {n+1} \theta }  \map \sin \theta }\)




















\(\ds \)

\(=\)







\(\ds 2 \map \sin { \paren {n+1} \theta} \map \cos \theta - \map \sin { \paren {n+1} \theta - \theta }\)





Sine of Difference














\(\ds \)

\(=\)







\(\ds 2 \map \cos \theta \map \sin { \paren {n+1} \theta} - \map \sin { \paren {n-1+1} \theta }\)




















\(\ds \)

\(=\)







\(\ds 2 \map \cos \theta \map {U_n} {\cos \theta} \map \sin \theta - \map {U_{n-1} } {\cos \theta} \sin \theta\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \paren { 2 \map \cos \theta \map {U_n} {\cos \theta} - \map {U_{n-1} } {\cos \theta} } \cdot \map \sin \theta\)









$\map {U_{n+1} } x = 2x \map {U_n} x - \map {U_{n - 1} } x$, $U_{n+1} \in \Bbb P$

By the Second Principle of Mathematical Induction, $U_n \in \Bbb P$ for all natural numbers $n$.
$\blacksquare$





