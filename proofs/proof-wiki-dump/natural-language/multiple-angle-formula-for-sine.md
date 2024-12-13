# 

Source: https://proofwiki.org/wiki/Multiple_Angle_Formula_for_Sine



Theorem
$\ds \frac {\map \sin {n z} } {\sin z} = 2^{n - 1} \prod_{k \mathop = 1}^{n - 1} \paren {\cos z - \cos \frac {k \pi} n}$
for $\sin z \ne 0$.


Proof
We have:














\(\ds \frac {\map \sin {n z} } {\sin z}\)

\(=\)







\(\ds \frac {e^{i n z} - e^{-i n z} } {e^{i z} - e^{-i z} }\)





Euler's Sine Identity














\(\ds \)

\(=\)







\(\ds \frac {e^{i n z} - e^{-i n z} } {e^{i z} - e^{-i z} } \times \frac {e^{i n z} } {e^{i n z} } \times \frac {2^{n - 1} } {2^{n - 1} } \times \frac {e^{i z} } {e^{i z} }\)





multiplying by $1$




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds 2^{n - 1}  \frac {e^{2 i n z} - 1} {2^{n - 1} e^{i \paren {n - 1} z} \paren {e^{2 i z} - 1} }\)










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




\(\text {(2)}: \quad\)









\(\ds e^{2 i n z} - 1\)

\(=\)







\(\ds \paren {e^{2 i z} - 1} \paren {e^{2 i z} - e^{-2 \pi i / n} } \paren {e^{2 i z} - e^{-4 \pi i / n} } \dotsm \paren {e^{2 i z} - e^{-2 \paren {n - 1} \pi i / n} }\)





product of all the roots



Plugging $(2)$ into $(1)$, we have:














\(\ds \frac {\map \sin {n z} } {\sin z}\)

\(=\)







\(\ds 2^{n - 1}  \frac {e^{2 i n z} - 1} {2^{n - 1} e^{i \paren {n - 1} z} \paren {e^{2 i z} - 1} }\)





from $\paren {1}$ above














\(\ds \)

\(=\)







\(\ds 2^{n - 1}  \frac {\paren {e^{2 i z} - 1} \paren {e^{2 i z} - e^{-2 \pi i / n} } \paren {e^{2 i z} - e^{-4 \pi i / n} } \dotsm \paren {e^{2 i z} - e^{-2 \paren {n - 1} \pi i / n} } } {2^{n - 1} e^{i \paren {n - 1} z} \paren {e^{2 i z} - 1} }\)





plugging $(2)$ into $(1)$














\(\ds \)

\(=\)







\(\ds 2^{n - 1}  \frac {\paren {e^{2 i z} - e^{-2 \pi i / n} } \paren {e^{2 i z} - e^{-4 \pi i / n} } \dotsm \paren {e^{2 i z} - e^{-2 \paren {n - 1} \pi i / n} } } {2^{n - 1} e^{i \paren {n - 1} z} }\)





cancelling $\paren {e^{2 i z} - 1}$




\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds 2^{n - 1}  \frac {\paren {\paren {e^{i z} + e^{-\pi i / n} } \paren {e^{i z} - e^{-\pi i / n} } } \paren {\paren {e^{i z} + e^{-2 \pi i / n} } \paren {e^{i z} - e^{-2 \pi i / n} } } \dotsm \paren {\paren {e^{i z} + e^{-\paren {n - 1} \pi i / n} } \paren {e^{i z} - e^{-\paren {n - 1} \pi i / n} } } } {2^{n - 1} e^{i \paren {n - 1} z} }\)





Difference of Two Squares




We now notice:














\(\ds \paren {e^{i z} + e^{-\pi i / n} }\)

\(=\)







\(\ds \paren {e^{i z} + e^{2\pi i - \pi i / n} }\)





Euler's Formula














\(\ds \)

\(=\)







\(\ds \paren {e^{i z} + e^{\pi i } e^{\pi i } e^{-\pi i / n} }\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \paren {e^{i z} + \paren {-1} e^{\pi i -\pi i / n} }\)





Euler's Identity and Product of Powers














\(\ds \)

\(=\)







\(\ds \paren {e^{i z} - e^{i \paren {\dfrac {\paren {n - 1} \pi} n} } }\)









And also:














\(\ds \paren {e^{i z} + e^{-\paren {n - k} \pi i / n} }\)

\(=\)







\(\ds \paren {e^{i z} + e^{-\pi i + k \pi i / n} }\)




















\(\ds \)

\(=\)







\(\ds \paren {e^{i z} + e^{-\pi i } e^{k \pi i / n} }\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \paren {e^{i z} + \paren {-1} e^{k \pi i / n} }\)





Euler's Identity














\(\ds \)

\(=\)







\(\ds \paren {e^{i z} - e^{k \pi i / n} }\)










Substituting into $\paren {3}$ above, we obtain:














\(\ds \frac {\map \sin {n z} } {\sin z}\)

\(=\)







\(\ds 2^{n - 1}  \frac {\paren {\paren {e^{i z} + e^{-\pi i / n} } \paren {e^{i z} - e^{-\pi i / n} } } \paren {\paren {e^{i z} + e^{-2 \pi i / n} } \paren {e^{i z} - e^{-2 \pi i / n} } } \dotsm \paren {\paren {e^{i z} + e^{-\paren {n - 1} \pi i / n} } \paren {e^{i z} - e^{-\paren {n - 1} \pi i / n} } } } {2^{n - 1} e^{i \paren {n - 1} z} }\)





from $(3)$ above














\(\ds \)

\(=\)







\(\ds 2^{n - 1}  \frac {\paren {\paren {e^{i z} - e^{i \paren {\dfrac {\paren {n - 1} \pi} n} } } \paren {e^{i z} - e^{-\pi i / n} } } \paren {\paren {e^{i z} - e^{i \paren {\dfrac {\paren {n - 2} \pi} n} } } \paren {e^{i z} - e^{-2 \pi i / n} } } \dotsm \paren {\paren {e^{i z} - e^{\pi i / n} } \paren {e^{i z} - e^{-\paren {n - 1} \pi i / n} } } } {2^{n - 1} e^{i \paren {n - 1} z} }\)





after substitution














\(\ds \)

\(=\)







\(\ds 2^{n - 1}  \frac {\paren {\paren {e^{i z} - e^{i \paren {\dfrac \pi n} } } \paren {e^{i z} - e^{-i \paren {\dfrac \pi n} } } } \paren {\paren {e^{i z} - e^{i \paren {\dfrac {2 \pi} n} } } \paren {e^{i z} - e^{-i \paren {\dfrac {2 \pi} n} } } } \dotsm \paren {\paren {e^{i z} - e^{i \paren {\dfrac {\paren {n - 1} \pi} n} } } \paren {e^{i z} - e^{-i \paren {\dfrac {\paren {n - 1} \pi} n} } } } } {2^{n - 1} e^{i \paren {n - 1} z} }\)





rearranging terms



From $(2)$ above, we have:














\(\ds e^{i \paren {n - 1} z}\)

\(=\)







\(\ds \prod_{k \mathop = 1}^{n - 1} e^{-i \paren {\dfrac {k \pi} n} }\)




















\(\ds \)

\(=\)







\(\ds \paren {e^{-i \paren {\dfrac {\pi} n} } } \paren {e^{-i \paren {\dfrac {2 \pi} n} } } \dotsm \paren {e^{-i \paren {\dfrac {\paren {n - 1} \pi} n} } }\)










Therefore:














\(\ds \)

\(=\)







\(\ds 2^{n - 1} \paren {\dfrac {\paren {e^{i z} - e^{i \paren {\dfrac \pi n} } } \paren {e^{i z} - e^{-i \paren {\dfrac \pi n} } } } {2 e^{-i \paren {\dfrac \pi n} } } } \paren {\dfrac {\paren {e^{i z} - e^{i \paren {\dfrac {2 \pi} n} } } \paren {e^{i z} - e^{-i \paren {\dfrac {2 \pi} n} } } } {2 e^{-i \paren {\dfrac {2 \pi} n} } } } \dotsm \paren {\dfrac {\paren {e^{i z} - e^{i \paren {\dfrac {\paren {n - 1} \pi} n} } } \paren {e^{i z} - e^{-i \paren {\dfrac {\paren {n - 1} \pi} n} } } } {2 e^{-i \paren {\dfrac {\paren {n - 1} \pi} n} } } }\)





separating terms














\(\ds \)

\(=\)







\(\ds 2^{n - 1} \paren {\dfrac {\paren {e^{i z} - e^{i \paren {\dfrac \pi n} } } \paren {e^{i \paren {z + \dfrac \pi n} } - 1} } 2} \paren {\dfrac {e^{-i \paren {\dfrac \pi n} } } {e^{-i \paren {\dfrac \pi n} } } } \paren {\dfrac {\paren {e^{i z} - e^{i \paren {\dfrac {2 \pi} n} } } \paren {e^{i \paren {z + \dfrac {2 \pi} n} } - 1} } 2} \paren {\dfrac {e^{-i \paren {\dfrac {2 \pi} n} } } {e^{-i \paren {\dfrac {2 \pi} n} } } } \dotsm \paren {\dfrac {\paren {e^{i z} - e^{i \paren {\dfrac {\paren {n - 1} \pi} n} } } \paren {e^{i \paren {z + \dfrac {\paren {n - 1} \pi} n} } - 1} } 2} \paren {\dfrac {e^{-i \paren {\dfrac {\paren {n - 1} \pi} n} } } {e^{-i \paren {\dfrac {\paren {n - 1} \pi} n} } } }\)





factoring out $1$ and Product of Powers














\(\ds \)

\(=\)







\(\ds 2^{n - 1} \paren {\dfrac {\paren {e^{i z} - e^{i \paren {\dfrac \pi n} } } \paren {e^{i \paren {z + \dfrac \pi n} } - 1} } 2} \paren {\dfrac {\paren {e^{i z} - e^{i \paren {\dfrac {2 \pi} n} } } \paren {e^{i \paren {z + \dfrac {2 \pi} n} } - 1} } 2} \dotsm \paren {\dfrac {\paren {e^{i z} - e^{i \paren {\dfrac {\paren {n - 1} \pi} n} } } \paren {e^{i \paren {z + \dfrac {\paren {n - 1} \pi} n} } - 1} } 2}\)





dividing by $1$














\(\ds \)

\(=\)







\(\ds 2^{n - 1} \paren {\dfrac {e^{i \paren {2 z + \dfrac \pi n} } + e^{i \paren {\dfrac \pi n} } - e^{i \paren {z + \dfrac {2 \pi} n} } - e^{i z} } 2} \paren {\dfrac {e^{i \paren {2 z + \dfrac {2 \pi} n} } + e^{i \paren {\dfrac {2 \pi} n} }  - e^{i \paren {z + \dfrac {4 \pi} n} } - e^{i z} } 2} \dotsm \paren {\dfrac {e^{i \paren {2 z + \dfrac {\paren {n - 1} \pi} n} } + e^{i \paren {\dfrac {\paren {n - 1} \pi} n} }  - e^{i \paren {z + \dfrac {2 \paren {n - 1} \pi} n} } - e^{i z} } 2}\)





expanding the product














\(\ds \)

\(=\)







\(\ds 2^{n - 1} \paren {\dfrac {e^{i z} + e^{-i z} - e^{i \paren {\dfrac \pi n} } - e^{-i \paren {\dfrac \pi n} } } 2} \paren {\dfrac {e^{i \paren {z + \dfrac \pi n} } } {e^{i \paren {z + \dfrac \pi n} } } } \paren {\dfrac {e^{i z} + e^{-i z} - e^{i \paren {\dfrac {2 \pi} n} } - e^{-i \paren {\dfrac {2 \pi} n} } } 2} \paren {\dfrac {e^{i \paren {z + \dfrac {2 \pi} n} } } {e^{i \paren {z + \dfrac {2 \pi} n} } } } \dotsm \paren {\dfrac {e^{i z} + e^{-i z} - e^{i \paren {\dfrac {\paren {n - 1} \pi} n} } - e^{-i \paren {\dfrac {\paren {n - 1} \pi} n} } } 2} \paren {\dfrac {e^{i \paren {z + \dfrac {\paren {n - 1} \pi} n} } } {e^{i \paren {z + \dfrac {\paren {n - 1} \pi} n} } } }\)





factoring out $1$ and Product of Powers














\(\ds \)

\(=\)







\(\ds 2^{n - 1} \paren {\dfrac {e^{i z} + e^{-i z} - e^{i \paren {\dfrac \pi n} } - e^{-i \paren {\dfrac \pi n} } } 2} \paren {\dfrac {e^{i z} + e^{-i z} - e^{i \paren {\dfrac {2 \pi} n} } - e^{-i \paren {\dfrac {2 \pi} n} } } 2} \dotsm \paren {\dfrac {e^{i z} + e^{-i z} - e^{i \paren {\dfrac {\paren {n - 1} \pi} n} } - e^{-i \paren {\dfrac {\paren {n - 1} \pi} n} } } 2}\)





dividing by $1$














\(\ds \)

\(=\)







\(\ds 2^{n - 1} \prod_{k \mathop = 1}^{n - 1} \paren {\cos z - \cos \frac {k \pi} n}\)





Euler's Cosine Identity



$\blacksquare$


Also see
Product Formula for Sine


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Miscellaneous Problems: $161 \ \text{(a)}$




