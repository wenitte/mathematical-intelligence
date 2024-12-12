# 

Source: https://proofwiki.org/wiki/Convergent_Trigonometric_Series_is_Periodic

Theorem
Let $\map S x$ be a trigonometric series:

$\map S x = \dfrac {a_0} 2 + \ds \sum_{n \mathop = 1}^\infty \paren {a_n \cos n x + b_n \sin n x}$
Let $S$ be convergent.

Then $S$ is periodic:

$\forall r \in \Z: \map S {x + 2 r \pi} = \map S x$


Proof
Let $\map S x$ converge to some $L \in \R$.
Let $r \in \Z$ be arbitrary.

Then:














\(\ds \map S {x + 2 r \pi}\)

\(=\)







\(\ds \dfrac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \cos n \paren {x + 2 r \pi} + b_n \sin n \paren {x + 2 r \pi} }\)





Definition of $\map S {x + 2 r \pi}$














\(\ds \)

\(=\)







\(\ds \dfrac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \map \cos {n x + 2 r n \pi} + b_n \map \sin {n x + 2 r n \pi} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \cos n x + b_n \sin n x}\)





Sine and Cosine are Periodic on Reals














\(\ds \)

\(=\)







\(\ds \map S x\)





Definition of $\map S x$



$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter One: $\S 1$. Trigonometrical Series




