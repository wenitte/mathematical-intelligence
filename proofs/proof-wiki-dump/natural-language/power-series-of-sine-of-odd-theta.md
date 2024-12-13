# 

Source: https://proofwiki.org/wiki/Power_Series_of_Sine_of_Odd_Theta

Theorem
Let $r \in \R$ such that $\size r < 1$.
Let $\theta \in \R$ such that $\theta \ne m \pi$ for any $m \in \Z$.
Then:














\(\ds \sum_{k \mathop \ge 0} \map \sin {2 k + 1} \theta r^k\)

\(=\)







\(\ds \sin \theta + r \sin 3 \theta + r^2 \sin 5 \theta + \cdots\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {1 + r} \sin \theta} {1 - 2 r \cos 2 \theta + r^2}\)











Proof
From Euler's Formula:

$\map \exp {i \theta} = \cos \theta + i \sin \theta$
Hence:














\(\ds \sum_{k \mathop = 0}^\infty \map \sin {2 k + 1} \theta r^k\)

\(=\)







\(\ds \map \Im {\sum_{k \mathop = 0}^\infty r^k \map \exp {\paren {2 k + 1} i \theta} }\)




















\(\ds \)

\(=\)







\(\ds \map \Im {\map \exp {i \theta} \sum_{k \mathop = 0}^\infty \paren {r \map \exp {2 i \theta} }^k}\)





as $\map \Im {\exp \paren {i \times 0 \times x} } = \map \Im 1 = 0$














\(\ds \)

\(=\)







\(\ds \map \Im {\frac {\map \exp {i \theta} } {1 - r \map \exp {2 i \theta} } }\)





Sum of Infinite Geometric Sequence: valid because $\size r < 1$














\(\ds \)

\(=\)







\(\ds \map \Im {\frac {\map \exp {i \theta} \paren {1 - r \map \exp {-2 i \theta} } } {\paren {1 - r \map \exp {2 i \theta} } \paren {1 - r \map \exp {-2 i \theta} } } }\)





multiplying by 1














\(\ds \)

\(=\)







\(\ds \map \Im {\frac {\map \exp {i \theta} \paren {1 - r \map \exp {-2 i \theta} } } {1 - r \paren {\map \exp {-2 i \theta} + \map \exp {2 i \theta} } + r^2} }\)





expanding














\(\ds \)

\(=\)







\(\ds \map \Im {\frac {\map \exp {i \theta} \paren {1 - r \map \exp {-2 i \theta} } } {1 - 2 r \cos 2 \theta + r^2} }\)





Euler's Cosine Identity














\(\ds \)

\(=\)







\(\ds \map \Im {\frac {\paren {\cos \theta + i \sin \theta} \paren {1 - r \paren {\cos 2 \theta - i \sin 2 \theta} } } {1 - 2 r \cos 2 \theta + r^2} }\)





Euler's Formula, Corollary to Euler's Formula














\(\ds \)

\(=\)







\(\ds \map \Im {\frac {\cos \theta + i \sin \theta - r \cos \theta \cos 2 \theta + i r \cos \theta \sin 2 \theta - i r \sin \theta \cos 2 \theta - r \sin \theta \sin 2 \theta} {1 - 2 r \cos 2 \theta + r^2} }\)





expanding














\(\ds \)

\(=\)







\(\ds \frac {\sin \theta + r \cos \theta \sin 2 \theta - r \sin \theta \cos 2 \theta} {1 - 2 r \cos 2 \theta + r^2}\)





taking imaginary part














\(\ds \)

\(=\)







\(\ds \frac {\sin \theta + r \paren {\sin 2 \theta \cos \theta - \cos 2 \theta \sin \theta} } {1 - 2 r \cos 2 \theta + r^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {\sin \theta + r \map \sin {2 \theta - \theta} } {1 - 2 r \cos 2 \theta + r^2}\)





Sine of Difference














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {1 + r } \sin \theta} {1 - 2 r \cos 2 \theta + r^2}\)





after simplification



$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4$. Elementary Functions of a Complex Variable: Exercise $10$




