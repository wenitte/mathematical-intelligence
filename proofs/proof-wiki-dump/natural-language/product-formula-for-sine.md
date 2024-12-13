# 

Source: https://proofwiki.org/wiki/Product_Formula_for_Sine



Theorem
$\ds \map \sin {n z} = 2^{n - 1} \prod_{k \mathop = 0}^{n - 1} \map \sin {z + \frac {k \pi} n}$


Corollary
Let $m \in \Z$ such that $m > 1$.

Then:

$\ds \prod_{k \mathop = 1}^{m - 1} \sin \frac {k \pi} m = \frac m {2^{m - 1} }$


Proof
We have:














\(\ds \map \sin {n z}\)

\(=\)







\(\ds \frac {e^{i n z} - e^{-i n z} } {2 i}\)





Euler's Sine Identity














\(\ds \)

\(=\)







\(\ds \frac {e^{i n z} - e^{-i n z} } {2 i} \times \frac {e^{i n z} } {e^{i n z} } \times \frac {2^n} {2^n}\)





multiplying by $1$




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds 2^{n - 1} \frac {e^{2 i n z} - 1} {2^n i e^{i n z} }\)










Consider the equation:

$x^n - 1 = 0$
whose solutions are the complex roots of unity:

$1, e^{-2 \pi i / n}, e^{-4 \pi i / n}, e^{-6 \pi i / n}, \ldots, e^{-2 \paren {n - 1} \pi i / n}$
Then:














\(\ds x^n - 1\)

\(=\)







\(\ds \paren {x - 1} \paren {x - e^{-2 \pi i / n} } \paren {x - e^{-4 \pi i / n} } \dotsm \paren {x - e^{-2 \paren {n - 1} \pi i / n} }\)





product of all the roots



Let $x = e^{2 i z}$.
Then:














\(\ds e^{2 i nz} - 1\)

\(=\)







\(\ds \paren {e^{2 i z} - 1} \paren {e^{2 i z} - e^{-2 \pi i / n} } \paren {e^{2 i z} - e^{-4 \pi i / n} } \dotsm \paren {e^{2 i z} - e^{-2 \paren {n - 1} \pi i / n} }\)





product of all the roots














\(\ds \)

\(=\)







\(\ds \paren {e^{2 i z} - 1} \paren {e^{2 i z} - e^{-2 \pi i / n} } \paren {\dfrac {e^{2 \pi i / n} } {e^{2 \pi i / n} } } \paren {e^{2 i z} - e^{-4 \pi i / n} } \paren {\dfrac {e^{4 \pi i / n} } {e^{4 \pi i / n} } } \dotsm \paren {e^{2 i z} - e^{-2 \paren {n - 1} \pi i / n} } \paren {\dfrac {e^{2 \paren {n - 1} \pi i / n} } {e^{2 \paren {n - 1} \pi i / n} } }\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {e^{2 i z} - 1} \paren {e^{2 i \paren {z + \dfrac \pi n} } - 1} \paren {e^{2 i \paren {z + \dfrac {2 \pi} n} } - 1} \dotsm \paren {e^{2 i \paren {z + \dfrac {\paren {n - 1} \pi} n} } - 1} } {e^{2 \pi i / n} e^{4 \pi i / n} \dotsm e^{2 \paren {n - 1} \pi i / n} }\)





Product of Powers




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac {\paren {e^{2 i z} - 1} \paren {e^{2 i \paren {z + \dfrac \pi n} } - 1} \paren {e^{2 i \paren {z + \dfrac {2 \pi} n} } - 1} \dotsm \paren {e^{2 i \paren {z + \dfrac {\paren {n - 1} \pi} n} } - 1} } {\paren {-1}^{\paren {n - 1} } }\)





Product of nth Roots of Unity



Plugging $\paren {2}$ into $\paren {1}$, we have:














\(\ds \map \sin {n z}\)

\(=\)







\(\ds 2^{n - 1}  \frac {e^{2 i n z} - 1} {2^n i e^{i n z} }\)





From $\paren {1}$ above














\(\ds \)

\(=\)







\(\ds 2^{n - 1} \dfrac {\paren {e^{2 i z} - 1} \paren {e^{2 i \paren {z + \dfrac \pi n} } - 1} \paren {e^{2 i \paren {z + \dfrac {2 \pi} n} } - 1} \dotsm \paren {e^{2 i \paren {z + \dfrac {\paren {n - 1} \pi} n} } - 1} } {2^n i e^{i n z} \paren {-1}^{\paren {n - 1} } }\)





Plugging $\paren {2}$ into $\paren {1}$














\(\ds \)

\(=\)







\(\ds 2^{n - 1} \dfrac {\paren {e^{2 i z} - 1} \paren {e^{2 i \paren {z + \dfrac \pi n} } - 1} \paren {e^{2 i \paren {z + \dfrac {2 \pi} n} } - 1} \dotsm \paren {e^{2 i \paren {z + \dfrac {\paren {n - 1} \pi} n} } - 1} } {2^n i e^{i n z} \paren {i^2}^{\paren {n - 1} } }\)





Powers of Imaginary Unit














\(\ds \)

\(=\)







\(\ds 2^{n - 1} \dfrac {\paren {e^{2 i z} - 1} \paren {e^{2 i \paren {z + \dfrac \pi n} } - 1} \paren {e^{2 i \paren {z + \dfrac {2 \pi} n} } - 1} \dotsm \paren {e^{2 i \paren {z + \dfrac {\paren {n - 1} \pi} n} } - 1} } {2^n i^{2 n - 1} e^{i n z} }\)





Product of Powers














\(\ds \)

\(=\)







\(\ds 2^{n - 1} \dfrac {\paren {e^{2 i z} - 1} \paren {e^{2 i \paren {z + \dfrac \pi n} } - 1} \paren {e^{2 i \paren {z + \dfrac {2 \pi} n} } - 1} \dotsm \paren {e^{2 i \paren {z + \dfrac {\paren {n - 1} \pi} n} } - 1} } {2^n i^n e^{i n z} \paren {e^{i \pi / 2} }^{n - 1} }\)





$e^{i \pi / 2} = i$














\(\ds \)

\(=\)







\(\ds 2^{n - 1} \dfrac {\paren {e^{2 i z} - 1} \paren {e^{2 i \paren {z + \dfrac \pi n} } - 1} \paren {e^{2 i \paren {z + \dfrac {2 \pi} n} } - 1} \dotsm \paren {e^{2 i \paren {z + \dfrac {\paren {n - 1} \pi} n} } - 1} } {2^n i^n e^{i \paren {nz + \dfrac {\pi \paren {\paren {n - 1} n} } {2 n} } } }\)





Product of Powers














\(\ds \)

\(=\)







\(\ds 2^{n - 1} \dfrac {\paren {e^{2 i z} - 1} \paren {e^{2 i \paren {z + \dfrac \pi n} } - 1} \paren {e^{2 i \paren {z + \dfrac {2 \pi} n} } - 1} \dotsm \paren {e^{2 i \paren {z + \dfrac {\paren {n - 1} \pi} n} } - 1} } {2^n i^n e^{i \paren {nz + \dfrac {\pi \paren {1 + 2 + \dotsm + \paren {n - 1} } } n} } }\)





Closed Form for Triangular Numbers














\(\ds \)

\(=\)







\(\ds 2^{n - 1} \paren {\dfrac {e^{2 i z} - 1} {2 i e^{i z} } } \paren {\dfrac {e^{2 i \paren {z + \dfrac \pi n} } - 1} {2 i e^{i \paren {z + \dfrac \pi n} } } } \paren {\dfrac {e^{2 i \paren {z + \dfrac {2 \pi} n} } - 1} {2 i e^{i \paren {z + \dfrac {2 \pi} n} } } } \dotsm \paren {\dfrac {e^{2 i \paren {z + \dfrac {\paren {n - 1} \pi} n} } - 1} {2 i e^{i \paren {z + \dfrac {\paren {n - 1} \pi} n} } } }\)





Product of Powers














\(\ds \)

\(=\)







\(\ds 2^{n - 1} \paren {\dfrac {e^{i z} - e^{-i z} } {2 i} } \paren {\dfrac {e^{i \paren {z + \dfrac \pi n} } - e^{-i \paren {z + \dfrac \pi n} } } {2 i} } \paren {\dfrac {e^{i \paren {z + \dfrac {2 \pi} n} } - e^{-i \paren {z + \dfrac {2 \pi} n} } } {2 i} } \dotsm \paren {\dfrac {e^{i \paren {z + \dfrac {\paren {n - 1} \pi} n} } - e^{-i \paren {z + \dfrac {\paren {n - 1} \pi} n} } } {2 i} }\)




















\(\ds \)

\(=\)







\(\ds 2^{n - 1} \prod_{k \mathop = 0}^{n - 1} \map \sin {z + \dfrac {k \pi} n}\)





Euler's Sine Identity



$\blacksquare$


Also see
Digamma Additive Formula
Gauss Multiplication Formula
Multiple Angle Formula for Sine




