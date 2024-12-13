# 

Source: https://proofwiki.org/wiki/Primitive_of_Exponential_of_a_x_over_x



Theorem
For $x > 0$:














\(\ds \int \frac {e^{a x} \rd x} x\)

\(=\)







\(\ds \ln x + \sum_{k \mathop \ge 1} \frac {\paren {a x}^k} {k \times k!} + C\)




















\(\ds \)

\(=\)







\(\ds \ln x + \dfrac {a x} {1 \times 1!} + \dfrac {\paren {a x}^2} {2 \times 2!} + \dfrac {\paren {a x}^3} {3 \times 3!} + \cdots + C\)











Proof













\(\ds \int \frac {e^{a x} \rd x} x\)

\(=\)







\(\ds \int \frac 1 x \paren {\sum_{k \mathop = 0}^\infty \frac {\paren {a x}^k} {k!} } \rd x\)





Power Series Expansion for Exponential Function














\(\ds \)

\(=\)







\(\ds \int \frac 1 x \paren {1 + \sum_{k \mathop = 1}^\infty \frac {\paren {a x}^k} {k!} } \rd x\)





extracting the case $k = 0$ from the expansion




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \int \frac {\d x} x + \sum_{k \mathop = 1}^\infty \frac {a^k} {k!} \int x^{k - 1} \rd x\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \ln x + \sum_{k \mathop = 1}^\infty \frac {a^k} {k!} \int x^{k - 1} \rd x\)





Primitive of Reciprocal: $x > 0$ so negative argument does not apply














\(\ds \)

\(=\)







\(\ds \ln x + \sum_{k \mathop = 1}^\infty \frac {a^k} {k!} \frac {x^k} k + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \ln x + \sum_{k \mathop \ge 1} \frac {\paren {a x}^k} {k \times k!} + C\)





simplification



The validity of $(1)$ follows from absolute convergence of the power series expansion.
$\blacksquare$


Also see
Primitive of $\dfrac {e^x} x$ has no Solution in Elementary Functions


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $e^{a x}$: $14.513$




