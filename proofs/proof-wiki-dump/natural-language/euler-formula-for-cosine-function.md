# 

Source: https://proofwiki.org/wiki/Euler_Formula_for_Cosine_Function



Theorem













\(\ds \cos x\)

\(=\)







\(\ds \prod_{n \mathop = 0}^\infty \paren {1 - \frac {4 x^2} {\paren {2 n + 1}^2 \pi^2} }\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - \dfrac {4 x^2} {\pi^2} } \paren {1 - \dfrac {4 x^2} {9 \pi^2} } \paren {1 - \dfrac {4 x^2} {25 \pi^2} } \dotsm\)











Proof 1
We have that $\cos x$  has a power series representation:

$\cos x = 1 - \dfrac {x^2} {2!} + \dfrac {x^4} {4!} - \dfrac {x^6} {6!} + \dotsb$
The roots of cosine are the numbers $\paren {k + \dfrac 1 2} \pi$, where $k$ is any integer.
From the Polynomial Factor Theorem, the following (after simplification) might be true:

$\ds \cos x = A \prod \paren {1 - \frac {2 x} {\paren {2 k + 1} \pi} }$
where the product is taken over all $k \in \Z$, and $A$ is some constant.
The intuition is as follows.














\(\ds \cos x\)

\(=\)







\(\ds \ldots \paren {1 - \frac {2 x} {5 \pi} } \paren {1 - \frac {2 x} {3 \pi} } \paren {1 - \frac {2 x} \pi} A \paren {1 + \frac {2 x} \pi} \paren {1 + \frac {2 x} {3 \pi} } \paren {1 + \frac {2 x} {5 \pi} } \cdots\)




















\(\ds \)

\(=\)







\(\ds A \paren {1 - \frac {4 x^2} {\pi^2} } \paren {1 - \frac {4 x^2} {3^2 \pi^2} } \paren {1 - \frac {4 x^2} {5^2 \pi^2} } \cdots\)









Letting $x$ tend to $0$ in the above equation implies that $A = 1$.
It remains to formalize the above claims.


Proof 2













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


Also see
Euler Formula for Sine Function
Euler Formula for Hyperbolic Sine Function
Euler Formula for Hyperbolic Cosine Function


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 38$: Infinite Products: $38.2$




