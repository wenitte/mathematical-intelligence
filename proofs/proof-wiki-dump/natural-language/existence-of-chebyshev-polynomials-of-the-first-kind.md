# 

Source: https://proofwiki.org/wiki/Existence_of_Chebyshev_Polynomials_of_the_First_Kind

Theorem
There exists a Chebyshev polynomial of the first kind for all natural numbers $n$.


Proof

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
For $n = 0$:














\(\ds \map \cos {0 \theta}\)

\(=\)







\(\ds \map \cos 0\)




















\(\ds \)

\(=\)







\(\ds 1\)









$\map {T_0} x = 1$, $T_0 \in \Bbb P$

This article needs to be linked to other articles.In particular: $\Bbb P$ as the set/space of polynomialsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

For $n = 1$:














\(\ds \map \cos {1 \theta}\)

\(=\)







\(\ds \map \cos \theta\)









$\map {T_1} x = x$, $T_1 \in \Bbb P$

Assume $\map {T_n} {\cos \theta} = \map \cos {n \theta}$.














\(\ds \map {T_{n+1} } {\cos \theta}\)

\(=\)







\(\ds \map \cos { \paren {n+1} \theta}\)




















\(\ds \)

\(=\)







\(\ds \map \cos { n \theta + \theta}\)




















\(\ds \)

\(=\)







\(\ds \map \cos { n \theta} \map \cos \theta - \map \sin { n \theta}  \map \sin \theta\)





Cosine of Sum














\(\ds \)

\(=\)







\(\ds 2 \map \cos { n \theta} \map \cos \theta - \map \cos { n \theta} \map \cos \theta - \map \sin { n \theta}  \map \sin \theta\)




















\(\ds \)

\(=\)







\(\ds 2 \map \cos { n \theta} \map \cos \theta - \paren { \map \cos { n \theta} \map \cos \theta + \map \sin { n \theta}  \map \sin \theta }\)




















\(\ds \)

\(=\)







\(\ds 2 \map \cos { n \theta} \map \cos \theta - \map \cos { n \theta - \theta }\)





Cosine of Difference














\(\ds \)

\(=\)







\(\ds 2 \map \cos \theta \map \cos { n \theta} - \map \cos { \paren {n-1} \theta }\)




















\(\ds \)

\(=\)







\(\ds 2 \map \cos \theta \map {T_n} {\cos \theta} - \map {T_{n-1} } {\cos \theta }\)





by hypothesis



$\map {T_{n+1} } x = 2x \map {T_n} x - \map {T_{n - 1} } x$, $T_{n+1} \in \Bbb P$

By the Second Principle of Mathematical Induction, $T_n \in \Bbb P$ for all natural numbers $n$.
$\blacksquare$





