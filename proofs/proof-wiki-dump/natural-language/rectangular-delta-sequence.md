# 

Source: https://proofwiki.org/wiki/Rectangular_Delta_Sequence

Theorem
  The graph of the rectangular delta sequence. As $n$ grows, the rectangle becomes thinner and taller. The area of each rectangle is equal to $1$.
Let $\sequence {\map {\delta_n} x}$ be a sequence such that:

$\map {\delta_n} x := \begin{cases}
0 & : x < - \frac 1 {2n} \\
n & : - \frac 1 {2n} \le x \le \frac 1 {2n} \\
0 & : x > \frac 1 {2n} \end{cases}$

Then $\sequence {\map {\delta_n} x}_{n \mathop \in {\N_{>0} } }$ is a delta sequence.
That is, in the distributional sense it holds that:

$\ds \lim_{n \mathop \to \infty} \map {\delta_n} x = \map \delta x$
or

$\ds \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \map {\delta_n} x \map \phi x \rd x = \map \delta \phi$
where $\phi \in \map \DD \R$ is a test function, $\delta$ is the Dirac delta distribution, and $\map \delta x$ is the abuse of notation, usually interpreted as an infinitely thin and tall spike with its area equal to $1$.


Proof
Let $\phi \in \map \DD \R$ be a test function.
Then:














\(\ds \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \map {\delta_n} x \map \phi x \rd x\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} n \int_{- \frac 1 {2n} }^{\frac 1 {2n} } \map \phi x \rd x\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} n \map \phi {\xi_n} \paren {\frac 1 {2n} - \paren {- \frac 1 {2n} } }\)





Mean Value Theorem for Integrals, $\xi_n \in \closedint {-\frac 1 {2n} } {\frac 1 {2n} }$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \phi {\xi_n}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\lim_{n \mathop \to \infty} \xi_n}\)





Limit of Image of Sequence on Real Numbers














\(\ds \)

\(=\)







\(\ds \map \phi 0\)





$\ds \lim_{n \mathop \to \infty} \frac 1 {2n} = \lim_{n \mathop \to \infty} \paren {- \frac 1 {2n} } = 0$, Squeeze Theorem for Real Sequences














\(\ds \)

\(=\)







\(\ds \map \delta \phi\)





Definition of Dirac Delta Distribution



$\blacksquare$


Sources
2013: George Arfken, Hans J. Weber and Frank E. Harris: Mathematical Methods for Physicists (7th ed.): Chapter $1$ Mathematical Preliminaries $1.11$ Dirac Delta Function





