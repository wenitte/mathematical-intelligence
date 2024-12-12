# 

Source: https://proofwiki.org/wiki/Euler_Formula_for_Sine_Function/Complex_Numbers/Proof_3

Theorem













\(\ds \sin z\)

\(=\)







\(\ds z \prod_{n \mathop = 1}^\infty \paren {1 - \frac {z^2} {n^2 \pi^2} }\)




















\(\ds \)

\(=\)







\(\ds z \paren {1 - \dfrac {z^2} {\pi^2} } \paren {1 - \dfrac {z^2} {4 \pi^2} } \paren {1 - \dfrac {z^2} {9 \pi^2} } \dotsm\)









for all $z \in \C$.


Proof













\(\ds z \prod_{n \mathop = 1}^\infty \paren {1 - \frac {z^2} {n^2 \pi^2} }\)

\(=\)







\(\ds \pi z \prod_{n \mathop = 1}^\infty \paren {1 - \frac {\pi^2 z^2} {n^2 \pi^2} }\)





$z \to \pi z$














\(\ds \)

\(=\)







\(\ds \pi z \prod_{n \mathop = 1}^\infty \paren {1 - \frac { z^2} {n^2} }\)





$\pi^2$ cancels














\(\ds \)

\(=\)







\(\ds \pi z \prod_{n \mathop = 1}^\infty \paren {\frac {n^2 - z^2 } {n^2 } }\)




















\(\ds \)

\(=\)







\(\ds \pi z \prod_{n \mathop = 1}^\infty \paren {\frac {\paren {n + z} \paren {n - z} } {n^2 } }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \paren {\frac n {n - \frac 1 2} }^2 \paren {\frac {n - 1 + z} {n + z} } \prod_{n \mathop = 1}^\infty \paren {\frac {\paren {n + z} \paren {n - z} } {n^2 } }\)





Multiple of Pi as Infinite Product














\(\ds \)

\(=\)







\(\ds \prod_{n \mathop = 1}^\infty \paren {\frac {\paren {n - 1 + z} \paren {n - z} } {\paren {n - \frac 1 2}^2 } }\)





$n^2$ and $\paren {n + z}$ cancels














\(\ds \)

\(=\)







\(\ds \frac { \map \Gamma {\dfrac 1 2} \map \Gamma {\dfrac 1 2} } {\map \Gamma z \map \Gamma {1 - z} }\)





Infinite Product of Product of Sequence of n plus alpha over Sequence of n plus beta














\(\ds \)

\(=\)







\(\ds \frac {\sqrt \pi \times \sqrt \pi \times \map \sin {\pi z} } \pi\)





Euler's Reflection Formula, Gamma Function of One Half














\(\ds \)

\(=\)







\(\ds \sin {\pi z}\)









$\blacksquare$





