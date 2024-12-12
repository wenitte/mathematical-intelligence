# 

Source: https://proofwiki.org/wiki/Existence_of_Laurent_Series

Theorem
Let $z_0 \in \C$ be a complex number.
Let $R \in \R_{>0}$ be a real number.
Let $\map {B'} {z_0, R}$ be the open punctured disk at $z_0$ of radius $R$.
Let $f: \map {B'} {z_0, R} \to \C$ be holomorphic.

Then there exists a sequence $\sequence {a_n}_{n \mathop \in \Z}$ such that:

$\ds \map f z = \sum_{n \mathop = -\infty}^\infty a_n \paren {z - z_0}^n$
for all $z \in B'(z_0, R)$.


Proof

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Choose circles $C_1$ and $C_3$ centered at $z_0$
Connect $C_2$ and $C_3$ by path $C_2$ such that $z$ is inside $C_1 + C_2 - C_3 - C_2$ as shown below:


This curve and its interior are contained in $B'$, so by Cauchy's Integral Formula:














\(\ds \map f z\)

\(=\)







\(\ds \dfrac 1 {2 \pi i} \int_{C_1 + C_2 - C_3 - C_2} \dfrac {\map f w} {\paren {w - z} } \rd w\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \pi i} \int_{C_1 - C_3} \dfrac {\map f w} {\paren {w - z} } \rd w\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \pi i} \int_{C_1} \dfrac {\map f w} {\paren {w - z} } \rd w - \dfrac 1 {2 \pi i} \int_{C_3} \dfrac {\map f w} {\paren {w - z} } \rd w\)










Since $C_1$ contains $z$ we have for all $w$ on $C_1$:

$\dfrac {\cmod {z - z_0} } {\cmod {w - z_0} } < 1$
Therefore:














\(\ds \frac 1 {2 \pi i} \int_{C_1} \frac {\map f w} {\paren {w - z} } \rd w\)

\(=\)







\(\ds \frac 1 {2 \pi i} \int_{C_1} \frac {\map f w} {\paren {w - z + z_0 - z_0} } \rd w\)





adding and subtracting $z_0$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi i} \int_{C_1} \frac {\map f w} {\paren {w - z_0} \paren {1 - \frac {z - z_0} {w - z_0} } } \rd w\)





Factoring out $w - z_0$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi i} \int_{C_1} \frac {\map f w} {\paren {w - z_0} } \cdot \frac 1 {\paren {1 - \frac {z - z_0} {w - z_0} } } \rd w\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi i} \int_{C_1} \frac {\map f w} {\paren {w - z_0} } \cdot \sum_{n \mathop = 0}^\infty \paren {\frac {z - z_0} {w - z_0} }^n \rd w\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi i} \int_{C_1} \sum_{n \mathop = 0}^\infty \frac {\map f w} {\paren {w - z_0}^{n + 1} } \cdot \paren {z - z_0}^n \rd w\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {\frac 1 {2 \pi i} \int_{C_1} \frac {\map f w} {\paren {w - z_0}^{n + 1} } \rd w} \paren {z - z_0}^n\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty a_n \paren {z - z_0}^n\)





letting $a_n$ equal the value in the large parentheses above, for all $n \ge 0$




Similarly, since $z$ lies outside $C_3$ we have for all $w$ on $C_3$:

$\dfrac {\cmod {w - z_0} } {\cmod {z - z_0} } < 1$
Therefore:














\(\ds \frac 1 {2 \pi i} \int_{C_3} \frac {\map f w} {\paren {w - z} } \rd w\)

\(=\)







\(\ds \frac 1 {2 \pi i} \int_{C_3} \frac {\map f w} {\paren {w - z + z_0 - z_0} } \rd w\)





adding and subtracting $z_0$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 \pi i} \int_{C_3} -\frac {\map f w} {\paren {z - z_0} \paren {1 - \frac {w - z_0} {z - z_0} } } \rd w\)





factoring out $z - z_0$














\(\ds \)

\(=\)







\(\ds -\frac 1 {2 \pi i} \int_{C_3} \frac {\map f w} {\paren {z - z_0} } \cdot \frac 1 {\paren {1 - \frac {w - z_0} {z - z_0} } } \rd w\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 {2 \pi i} \int_{C_3} \frac {\map f w} {\paren {z - z_0} } \cdot \sum_{n \mathop = 0}^\infty \paren {\frac {w - z_0} {z - z_0} }^n \rd w\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds -\sum_{n \mathop = 0}^\infty \paren {\frac 1 {2 \pi i} \int_{C_3} \map f w \paren {w - z_0}^n \rd w} \paren {z - z_0}^ {-n - 1}\)




















\(\ds \)

\(=\)







\(\ds -\sum_{k \mathop = -1}^ {-\infty} \paren {\frac 1 {2 \pi i} \int_{C_3} \frac {\map f w} {\paren {w - z_0}^{k + 1} } \rd w} \paren {z - z_0}^k\)





re-indexing with $k = -n - 1$














\(\ds \)

\(=\)







\(\ds -\sum_{k \mathop = -1}^ {-\infty} a_k \paren {z - z_0}^k\)





letting $a_k$ equal the value in the large parenthesis above, for all $k < 0$




Combining what has been shown above yields:














\(\ds \map f z\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty a_n \paren {z - z_0}^n + \sum_{n \mathop = -1}^ {-\infty} a_n \paren {z - z_0}^n\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = -\infty}^\infty a_n \paren {z - z_0}^n\)









$\blacksquare$





