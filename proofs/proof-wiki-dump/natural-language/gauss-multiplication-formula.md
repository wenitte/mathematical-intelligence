# 

Source: https://proofwiki.org/wiki/Gauss_Multiplication_Formula



Theorem
Let $\Gamma$ denote the Gamma Function.
Let $n \in \N_{>0}$ where $\N_{>0}$ denotes the non-zero natural numbers.
Then:

$\ds \forall z \notin \set {-\frac m n: m \in \N}: \prod_{k \mathop = 0}^{n - 1} \map \Gamma {z + \frac k n} = \paren {2 \pi}^{\paren {n - 1} / 2} n^{1/2 - n z} \map \Gamma {n z}$


Proof













\(\ds \map \Gamma {z + \frac k n}\)

\(=\)







\(\ds \paren {z + \frac k n - 1} \map \Gamma {z + \frac k n - 1}\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \paren {z + \frac k n - 1} \frac {m! m^{z + k / n - 1} } {\paren {z + \frac k n - 1} \paren {z + \frac k n} \paren {z + \frac k n + 1} \paren {z + \frac k n + 2} \cdots \paren {z + \frac k n - 1 + m} }\)





Definition of Euler Form of Gamma Function














\(\ds \)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \frac {\sqrt {2 \pi m} \paren {\frac m e}^m m^{z + k / n - 1} } {\paren {z + \frac k n} \paren {z + \frac k n + 1} \paren {z + \frac k n + 2} \cdots \paren {z + \frac k n - 1 + m} }\)





Stirling's Formula and canceling $\paren {z + \frac k n - 1}$














\(\ds \)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \frac {\sqrt {2 \pi m} \paren {\frac m e}^m m^{z + k / n - 1} } {\paren {z + \frac k n} \paren {z + \frac k n + 1} \paren {z + \frac k n + 2} \cdots \paren {z + \frac k n - 1 + m} } \times \frac {n^m} {n^m}\)





multiplying top and bottom by $n^m$














\(\ds \)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \frac {\sqrt {2 \pi} \paren {\frac {m n} e}^m m^{z + k / n - 1/2} } {\paren {n z + k} \paren {n z + k + n} \paren {n z + k + 2n} \cdots \paren {n z + k - n + m n} }\)










Taking the product for $k = 0$ to $n - 1$, we have:














\(\ds \prod_{k \mathop = 0}^{n - 1} \map \Gamma {z + \frac k n}\)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \frac {\paren {\sqrt {2 \pi} }^n \paren {\frac {m n} e}^{m n} m^{n z  - n / 2} m^{\sum_{k \mathop = 0}^{n - 1} k / n} } {\paren {n z} \paren {n z + 1} \cdots \paren {n z - 1 + m n} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \frac {\paren {\sqrt {2 \pi} }^n \paren {\frac {m n} e}^{m n} m^{n z  - n / 2 + n / 2 - 1 / 2 } } {\paren {n z} \paren {n z + 1} \cdots \paren {n z - 1 + m n} }\)





Sum of Arithmetic Sequence














\(\ds \)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \frac {\paren {\sqrt {2 \pi} }^n \paren {\frac m e}^m m^{n z  - 1 / 2} n^{1 / 2 - n z} } {\paren {n z} \paren {n z + 1} \cdots \paren {n z - 1 + m} }\)





substituting $m n \mapsto m$














\(\ds \)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \frac {\paren {\sqrt {2 \pi} }^{n - 1} m! m^{n z  - 1} n^{1 / 2 - n z} } {\paren {n z} \paren {n z + 1} \cdots \paren {n z - 1 + m} }\)





Stirling's Formula














\(\ds \)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \frac {\paren {n z - 1} } {\paren {n z - 1} } \times \frac {\paren {\sqrt {2 \pi} }^{n - 1} m! m^{n z  - 1} n^{1 / 2 - n z} } {\paren {n z} \paren {n z + 1} \cdots \paren {n z - 1 + m} }\)





multiplying top and bottom by $n z - 1$














\(\ds \)

\(=\)







\(\ds \paren {2 \pi}^{\paren {n - 1} / 2} n^{1 / 2 - n z} \paren {n z - 1} \lim_{m \mathop \to \infty} \frac {m! m^{n z  - 1} } {\paren {n z - 1} \paren {n z} \paren {n z + 1} \cdots \paren {n z - 1 + m} }\)





bringing $\paren {2 \pi}^{\paren {n - 1} / 2} n^{1 / 2 - n z} \paren {n z - 1}$ outside the limit














\(\ds \)

\(=\)







\(\ds \paren {2 \pi}^{\paren {n - 1} / 2} n^{1 / 2 - n z} \paren {n z - 1} \map \Gamma {n z - 1}\)





Definition of Euler Form of Gamma Function














\(\ds \)

\(=\)







\(\ds \paren {2 \pi}^{\paren {n - 1} / 2} n^{1 / 2 - n z} \map \Gamma {n z}\)





Gamma Difference Equation



$\blacksquare$

Also see
Digamma Additive Formula
Product Formula for Sine


Source of Name
This entry was named for Carl Friedrich Gauss.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $16.10$: Relationships among Gamma Functions
Weisstein, Eric W. "Gauss Multiplication Formula." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/GaussMultiplicationFormula.html




