# 

Source: https://proofwiki.org/wiki/Approximation_to_x%2By_Choose_y

Theorem
$\ds \lim_{x, y \mathop \to \infty} \dbinom {x + y} y = \sqrt {\dfrac 1 {2 \pi} \paren {\frac 1 x + \frac 1 y} } \paren {1 + \dfrac y x}^x \paren {1 + \dfrac x y}^y$


Proof
It can be assumed that both $x$ and $y$ are integers.















\(\ds \dbinom {x + y} y\)

\(=\)







\(\ds \dfrac {\paren {x + y}!} {x! \, y!}\)














\(\ds \leadsto \ \ \)





\(\ds \ds \lim_{x, y \mathop \to \infty} \dbinom {x + y} y\)

\(=\)







\(\ds \dfrac {\sqrt {2 \pi \paren {x + y} } \paren {\dfrac {x + y} e}^{\paren {x + y} } } {\sqrt {2 \pi x} \paren {\dfrac x e}^x \, \sqrt {2 \pi y} \paren {\dfrac y e}^y}\)





Stirling's Formula














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {2 \pi} } \dfrac {\paren {\frac 1 e}^{x + y} } {\paren {\frac 1 e}^x \paren {\frac 1 e}^y} \sqrt {\dfrac {x + y} {x y} } \dfrac {\paren {x + y}^x \paren {x + y}^y} {x^x \, y^y}\)





rearrangement














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {2 \pi} } \sqrt {\frac 1 x + \frac 1 y} \paren {1 + \dfrac y x}^x \paren {1 + \dfrac x y}^y\)





simplifying














\(\ds \)

\(=\)







\(\ds \sqrt {\dfrac 1 {2 \pi} \paren {\frac 1 x + \frac 1 y} } \paren {1 + \dfrac y x}^x \paren {1 + \dfrac x y}^y\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $46$




