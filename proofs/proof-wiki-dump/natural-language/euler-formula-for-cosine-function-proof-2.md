# 

Source: https://proofwiki.org/wiki/Euler_Formula_for_Cosine_Function/Proof_2

Theorem













\(\ds \cos x\)

\(=\)







\(\ds \prod_{n \mathop = 0}^\infty \paren {1 - \frac {4 x^2} {\paren {2 n + 1}^2 \pi^2} }\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - \dfrac {4 x^2} {\pi^2} } \paren {1 - \dfrac {4 x^2} {9 \pi^2} } \paren {1 - \dfrac {4 x^2} {25 \pi^2} } \dotsm\)











Proof













\(\ds \prod_{n \mathop = 0}^\infty \paren {1 - \frac {4 x^2} {\paren {2 n + 1}^2 \pi^2} }\)

\(=\)







\(\ds \prod_{n \mathop = 0}^\infty \paren {1 - \frac {4 \pi^2 z^2} {\paren {2 n + 1}^2 \pi^2} }\)





$x \to \pi z$














\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 0}^\infty \paren {1 - \frac {4 z^2} {\paren {2 n + 1}^2 } }\)





$\pi^2$ cancels














\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \paren {1 - \frac {4 z^2} {\paren {2 \paren {n - 1} + 1}^2 } }\)





$n \to n - 1$














\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \paren {1 - \frac {4 z^2} {\paren {2 n - 1}^2 } }\)




















\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \paren {1 - \frac {4 z^2 \times \frac 1 4 } {\paren {2 n - 1}^2 \times \frac 1 4 } }\)





multiplying top and bottom by $\dfrac 1 4$














\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \paren {1 - \frac {z^2 } {\paren {n - \frac 1 2 }^2 } }\)




















\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \paren {\frac {\paren {n - \frac 1 2 }^2 - z^2 } {\paren {n - \frac 1 2 }^2 } }\)




















\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \paren {\frac {\paren {\paren {n - \frac 1 2 } + z} \paren {\paren {n - \frac 1 2 } - z} } {\paren {n - \frac 1 2 }^2 } }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \frac { \map \Gamma {\dfrac 1 2} \map \Gamma {\dfrac 1 2} } {\map \Gamma {\dfrac 1 2 + z} \map \Gamma {\dfrac 1 2 - z} }\)





Infinite Product of Product of Sequence of n plus alpha over Sequence of n plus beta














\(\ds \)

\(=\)







\(\ds \frac {\sqrt \pi \times \sqrt \pi \times \map \sin {\dfrac \pi 2 - \pi z} } \pi\)





Euler's Reflection Formula, Gamma Function of One Half














\(\ds \)

\(=\)







\(\ds \cos {\pi z}\)





Sine of Complement equals Cosine



$\blacksquare$





