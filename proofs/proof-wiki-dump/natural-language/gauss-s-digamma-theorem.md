# 

Source: https://proofwiki.org/wiki/Gauss%27s_Digamma_Theorem



Theorem
Let $\dfrac p q$ be a positive rational number with $p < q$.

Then: 

$\ds \map \psi {\dfrac p q} = -\gamma - \ln 2 q - \dfrac \pi 2 \map \cot {\dfrac p q \pi} + 2 \sum_{n \mathop = 1}^{\ceiling {q / 2} - 1} \map \cos {\dfrac {2 \pi p n} q} \map \ln {\map \sin {\dfrac {\pi n} q} }$
where:

$\psi$ is the digamma function
$\cot$ is the cotangent function
$\ln$ is the natural logarithm.


Proof
We now note:














\(\ds \map \psi {z + 1}\)

\(=\)







\(\ds -\gamma + \harm 1 z\)





Digamma Function in terms of General Harmonic Number








\(\ds \leadsto \ \ \)





\(\ds \map \psi {\dfrac p q}\)

\(=\)







\(\ds -\gamma + \harm 1 {\dfrac p q - 1}\)





$\paren {z + 1} := \dfrac p q$














\(\ds \)

\(=\)







\(\ds -\gamma + \sum_{n \mathop = 1}^\infty \paren {\frac 1 n - \frac 1 {\paren {\dfrac p q - 1} + n} }\)





Definition of General Harmonic Numbers














\(\ds \)

\(=\)







\(\ds -\gamma + \sum_{n \mathop = 0}^\infty \paren {\frac 1 {n + 1} - \frac 1 {\paren {\dfrac p q} + n} }\)





re-indexing the sum














\(\ds \)

\(=\)







\(\ds -\gamma + \sum_{n \mathop = 0}^\infty \paren {\frac 1 {n + 1} - \frac 1 {\paren {\dfrac p q} + n} \times \dfrac q q }\)





multiplying top and bottom by q














\(\ds \)

\(=\)







\(\ds -\gamma + \sum_{n \mathop = 0}^\infty \paren {\frac 1 {n + 1} - \frac q {p + n q} }\)




















\(\ds \)

\(=\)







\(\ds -\gamma + \lim_{t \mathop \to 1^-} \sum_{n \mathop = 0}^\infty \paren {\frac 1 {n + 1} - \frac q {p + n q} } t^{p + n q}\)





Abel's Limit Theorem: $\ds \lim_{x \mathop \to 1^-} \paren {\sum_{k \mathop = 0}^\infty a_k x^k} = \sum_{k \mathop = 0}^\infty a_k$














\(\ds \)

\(=\)







\(\ds -\gamma + \lim_{t \mathop \to 1^-} \paren {\sum_{n \mathop = 0}^\infty \paren {\frac {t^{p + n q} } {n + 1} } - \sum_{n \mathop = 0}^\infty \paren {\frac {q t^{p + n q} } {p + n q} } }\)




















\(\ds \)

\(=\)







\(\ds -\gamma + \lim_{t \mathop \to 1^-} \paren {t^p \sum_{n \mathop = 1}^\infty \paren {\frac {t^{\paren {n - 1} q} } {\paren {n - 1} + 1} } - \sum_{n \mathop = 0}^\infty \paren {\frac {q t^{p + n q} } {p + n q} } }\)





factoring out $t^p$ and reindexing sum














\(\ds \)

\(=\)







\(\ds -\gamma + \lim_{t \mathop \to 1^-} \paren {t^{p - q} \sum_{n \mathop = 1}^\infty \paren {\frac {t^{\paren {n q} } } n } - \sum_{n \mathop = 0}^\infty \paren {\frac {q t^{p + n q} } {p + n q} } }\)





factoring out $t^{-q}$














\(\ds \)

\(=\)







\(\ds -\gamma + \lim_{t \mathop \to 1^-} \paren {-t^{p - q} \map \ln {1 - t^q} - q \sum_{n \mathop = 0}^\infty \paren {\frac {t^{p + n q} } {p + n q} } }\)





Power Series Expansion: $\ds \map \ln {1 - x} = -\sum_{n \mathop = 1}^\infty \dfrac {x^n} n$



The term $\ds -q \sum_{n \mathop = 0}^\infty \paren {\frac {t^{p + n q} } {p + n q} }$ is $q$ multiplied by the Power Series Expansion: $\ds \map \ln {1 - t} = -\sum_{n \mathop = 1}^\infty \dfrac {t^n} n$, but only when $n \equiv p \pmod q$

From Simpson's Dissection: 

$\ds \sum_{n \mathop = 0}^\infty a_{n q + p} x^{n q + p} = \dfrac 1 q \sum_{j \mathop = 0}^{q - 1} \omega^{- j p} \map f {\omega^j x}$
where $\omega = e^{2 i \pi/ q}$ is a primitive $q$th root of unity.














\(\ds \map \psi {\dfrac p q}\)

\(=\)







\(\ds -\gamma + \lim_{t \mathop \to 1^-} \paren {-t^{p - q} \map \ln {1 - t^q} + \sum_{n \mathop = 0}^{q - 1} \omega^{-n p} \map \ln {1 - \omega^n t} }\)





Simpson's Dissection and Power Series Expansion: $\ds \map \ln {1 - x} = -\sum_{n \mathop = 1}^\infty \dfrac {x^n} n$














\(\ds \)

\(=\)







\(\ds -\gamma + \lim_{t \mathop \to 1^-} \paren {-t^{p - q} \map \ln {1 - t^q} + \paren {t^{p - q} \map \ln {1 - t} - t^{p - q} \map \ln {1 - t} } + \sum_{n \mathop = 0}^{q - 1} \omega^{-n p} \map \ln {1 - \omega^n t} }\)





adding $0$














\(\ds \)

\(=\)







\(\ds -\gamma + \lim_{t \mathop \to 1^-} \paren {-t^{p - q} \map \ln {1 - t^q} + \paren {t^{p - q} \map \ln {1 - t} - t^{p - q} \map \ln {1 - t} } + \map \ln {1 - t} + \sum_{n \mathop = 1}^{q - 1} \omega^{-n p} \map \ln {1 - \omega^n t} }\)





reindexing sum














\(\ds \)

\(=\)







\(\ds -\gamma + \lim_{t \mathop \to 1^-} \paren {-t^{p - q} \map \ln {\frac {1 - t^q} {1 - t} } - \paren {t^{p - q} - 1} \map \ln {1 - t} + \sum_{n \mathop = 1}^{q - 1} \omega^{-n p} \map \ln {1 - \omega^n t} }\)





Sum of Logarithms and Difference of Logarithms














\(\ds \)

\(=\)







\(\ds -\gamma + \lim_{t \mathop \to 1^-} \paren {-t^{p - q} \map \ln {\sum_{j \mathop = 0}^{q - 1} t^j } - \paren {t^{p - q} - 1} \map \ln {1 - t} + \sum_{n \mathop = 1}^{q - 1} \omega^{-n p} \map \ln {1 - \omega^n t} }\)





Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds -\gamma - \map \ln {\sum_{j \mathop = 0}^{q - 1} 1 } + \sum_{n \mathop = 1}^{q - 1} \omega^{-n p} \map \ln {1 - \omega^n }\)





Limit of Power of x by Absolute Value of Power of Logarithm of x: Corollary




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map \psi {\dfrac p q}\)

\(=\)







\(\ds -\gamma - \map \ln q + \sum_{n \mathop = 1}^{q - 1} \omega^{-n p} \map \ln {1 - \omega^n }\)














\(\ds \leadsto \ \ \)





\(\ds \map \psi {1 - \dfrac p q}\)

\(=\)







\(\ds -\gamma - \map \ln q + \sum_{n \mathop = 1}^{q - 1} \omega^{-n \paren {q - p} } \map \ln {1 - \omega^n }\)





Replace $p$ by $\paren {q - p}$








\(\ds \leadsto \ \ \)





\(\ds \map \psi {1 - \dfrac p q}\)

\(=\)







\(\ds -\gamma - \map \ln q + \sum_{n \mathop = 1}^{q - 1} e^{\paren {-i 2 \pi n } } \omega^{n p} \map \ln {1 - \omega^n }\)





Product of Powers




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map \psi {1 - \dfrac p q}\)

\(=\)







\(\ds -\gamma - \map \ln q + \sum_{n \mathop = 1}^{q - 1} \omega^{n p} \map \ln {1 - \omega^n }\)





Cosine of Zero is One and Period of Real Cosine Function








\(\ds \leadsto \ \ \)





\(\ds \map \psi {\dfrac p q} + \map \psi {1 - \dfrac p q}\)

\(=\)







\(\ds -2 \gamma - 2 \map \ln q + 2 \sum_{n \mathop = 1}^{q - 1} \dfrac {\paren {\omega^{-n p} + \omega^{n p} } } 2 \map \ln {1 - \omega^n}\)





$\paren {1} + \paren {2}$ and multiplying top and bottom by 2








\(\ds \leadsto \ \ \)





\(\ds \map \psi {\dfrac p q} + \map \psi {1 - \dfrac p q}\)

\(=\)







\(\ds -2 \gamma - 2 \map \ln q + 2 \sum_{n \mathop = 1}^{q - 1} \map \cos {\dfrac {2 \pi n p} q } \map \ln {1 - \omega^n}\)





Euler's Cosine Identity: $\cos z = \dfrac {e^{i z} + e^{-i z} } 2$




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map \psi {\dfrac p q} + \map \psi {1 - \dfrac p q}\)

\(=\)







\(\ds -2 \gamma - 2 \map \ln q + 2 \sum_{n \mathop = 1}^{q - 1} \map \cos {\dfrac {2 \pi n p} q } \map \ln {1 - \omega^n}\)










\(\text {(4)}: \quad\)









\(\ds \map \psi {\dfrac p q} - \map \psi {1 - \dfrac p q}\)

\(=\)







\(\ds -\pi \map \cot {\dfrac {\pi p} q}\)





Digamma Reflection Formula








\(\ds \leadsto \ \ \)





\(\ds 2 \map \psi {\dfrac p q}\)

\(=\)







\(\ds -2 \gamma - 2 \map \ln q + 2 \sum_{n \mathop = 1}^{q - 1} \map \cos {\dfrac {2 \pi n p} q } \map \ln {1 - \omega^n} - \pi \map \cot {\dfrac {\pi p} q}\)





$(3) + (4)$








\(\ds \leadsto \ \ \)





\(\ds \map \psi {\dfrac p q}\)

\(=\)







\(\ds -\gamma - \map \ln q - \dfrac \pi 2 \map \cot {\dfrac {\pi p} q} + \sum_{n \mathop = 1}^{q - 1} \map \cos {\dfrac {2 \pi n p} q } \map \ln {1 - \omega^n}\)





dividing by $2$














\(\ds \)

\(=\)







\(\ds -\gamma - \map \ln q - \dfrac \pi 2 \map \cot {\dfrac {\pi p} q} + \sum_{n \mathop = 1}^{q - 1} \map \cos {\dfrac {2 \pi n p} q } \map \ln {1 - e^{\dfrac {2 i \pi n} q} }\)




















\(\ds \)

\(=\)







\(\ds -\gamma - \map \ln q - \dfrac \pi 2 \map \cot {\dfrac {\pi p} q} + \sum_{n \mathop = 1}^{q - 1} \map \cos {\dfrac {2 \pi n p} q } \map \ln {1 - \map \cos {\dfrac {2 \pi n} q} - i \map \sin {\dfrac {2 \pi n} q} }\)





Euler's Formula




Since the left hand side $\map \psi {\dfrac p q}$ is a real number, we only want the real part of the natural logarithm.
This requires us to determine the modulus of the argument.














\(\ds \cmod z\)

\(=\)







\(\ds \sqrt {a^2 + b^2}\)





Definition of Complex Modulus














\(\ds \)

\(=\)







\(\ds \paren {\paren {1 - \map \cos {\dfrac {2 \pi n} q} }^2 + \paren {\map \sin {\dfrac {2 \pi n} q} }^2 }^{\frac 1 2}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - 2 \map \cos {\dfrac {2 \pi n} q} + \map {\cos^2} {\dfrac {2 \pi n} q} + \map {\sin^2} {\dfrac {2 \pi n} q} }^{\frac 1 2}\)





Square of Sum














\(\ds \)

\(=\)







\(\ds \paren {1 - 2 \map \cos {\dfrac {2 \pi n} q} + 1 }^{\frac 1 2}\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \paren {2 - 2 \map \cos {\dfrac {2 \pi n} q} }^{\frac 1 2}\)










Plugging this back into our main result:














\(\ds \map \psi {\dfrac p q}\)

\(=\)







\(\ds -\gamma - \map \ln q - \dfrac \pi 2 \map \cot {\dfrac {\pi p} q} + \sum_{n \mathop = 1}^{q - 1} \map \cos {\dfrac {2 \pi n p} q } \map \ln {2 - 2 \map \cos {\dfrac {2 \pi n} q} }^{\frac 1 2}\)




















\(\ds \)

\(=\)







\(\ds -\gamma - \map \ln q - \dfrac \pi 2 \map \cot {\dfrac {\pi p} q} + \sum_{n \mathop = 1}^{q - 1} \map \cos {\dfrac {2 \pi n p} q } \map \ln {2 - 2 \paren {1 - 2 \map {\sin^2} {\dfrac {\pi n} q} } }^{\frac 1 2}\)





Double Angle Formula for Cosine: Corollary $2$














\(\ds \)

\(=\)







\(\ds -\gamma - \map \ln q - \dfrac \pi 2 \map \cot {\dfrac {\pi p} q} + \sum_{n \mathop = 1}^{q - 1} \map \cos {\dfrac {2 \pi n p} q } \map \ln {2 \map \sin {\dfrac {\pi n} q } }\)




















\(\ds \)

\(=\)







\(\ds -\gamma - \map \ln q - \dfrac \pi 2 \map \cot {\dfrac {\pi p} q} + \sum_{n \mathop = 1}^{q - 1} \map \cos {\dfrac {2 \pi n p} q } \paren {\map \ln 2 + \map \ln {\map \sin {\dfrac {\pi n} q } } }\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds -\gamma - \map \ln q - \dfrac \pi 2 \map \cot {\dfrac {\pi p} q} + \sum_{n \mathop = 1}^{q - 1} \map \cos {\dfrac {2 \pi n p} q } \map \ln 2 + \sum_{n \mathop = 1}^{q - 1} \map \cos {\dfrac {2 \pi n p} q } \map \ln {\map \sin {\dfrac {\pi n} q } }\)




















\(\ds \)

\(=\)







\(\ds -\gamma - \map \ln q - \dfrac \pi 2 \map \cot {\dfrac {\pi p} q} - \map \ln 2 + \sum_{n \mathop = 1}^{q - 1} \map \cos {\dfrac {2 \pi n p} q } \map \ln {\map \sin {\dfrac {\pi n} q } }\)





Sum of Cosines of Fractions of Pi: $\sum_{n \mathop = 1}^{q - 1} \map \cos {\dfrac {2 \pi n p} q } = -1$














\(\ds \)

\(=\)







\(\ds -\gamma - \map \ln {2 q} - \dfrac \pi 2 \map \cot {\dfrac {\pi p} q} + \sum_{n \mathop = 1}^{q - 1} \map \cos {\dfrac {2 \pi n p} q } \map \ln {\map \sin {\dfrac {\pi n} q } }\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds -\gamma - \ln 2 q - \dfrac \pi 2 \map \cot {\dfrac p q \pi} + 2 \sum_{n \mathop = 1}^{\ceiling {q / 2} - 1} \map \cos {\dfrac {2 \pi p n} q} \map \ln {\map \sin {\dfrac {\pi n} q} }\)





Cosine of Angle plus Full Angle, Cosine Function is Even and Sine of Supplementary Angle



$\blacksquare$


Source of Name
This entry was named for Carl Friedrich Gauss.


Sources
1916: J.L. Jensen: An Elementary Exposition of the Theory of the Gamma Function
1999: George E. Andrews, Richard Askey and Ranjan Roy: Special Functions: Chapter $1$. The Gamma and Beta Functions
This article incorporates material from Proof of Gauss' Digamma Theorem on PlanetMath, which is licensed under the Creative Commons Attribution/Share-Alike License.




