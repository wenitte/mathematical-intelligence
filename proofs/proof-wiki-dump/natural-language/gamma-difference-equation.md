# 

Source: https://proofwiki.org/wiki/Gamma_Difference_Equation



Theorem
The Gamma function satisfies:

$\map \Gamma {z + 1} = z \, \map \Gamma z$
for any $z$ which is not a nonpositive integer.


Proof 1
Let $z \in \C$, with $\map \Re z > 0$.
Then:














\(\ds \map \Gamma {z + 1}\)

\(=\)







\(\ds \int_0^\infty t^z e^{-t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \bigintlimits {-t^z e^{-t} } 0 \infty + z \int_0^\infty t^{z - 1} e^{-t} \rd t\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds z \int_0^\infty t^{z - 1} e^{-t} \rd t\)




















\(\ds \)

\(=\)







\(\ds z \, \map \Gamma z\)










If $z \in \C \setminus \set {0, -1, -2, \ldots}$ such that $\map \Re z \le 0$, then the statement holds by the definition of $\Gamma$ in this region.
$\blacksquare$


Proof 2
By Euler's form of the Gamma function:














\(\ds \frac {\map \Gamma {z + 1} } {\map \Gamma z}\)

\(=\)







\(\ds \paren {\frac 1 {z + 1} \lim_{m \mathop \to \infty} \prod_{n \mathop = 1}^m \frac {\paren {1 + \frac 1 n}^{z + 1} } {1 + \frac {z + 1} n} } \div \paren {\frac 1 z \lim_{m \mathop \to \infty} \prod_{n \mathop = 1}^m \frac {\paren {1 + \frac 1 n}^z} {1 + \frac z n} }\)




















\(\ds \)

\(=\)







\(\ds \frac z {z + 1} \lim_{m \mathop \to \infty} \prod_{n \mathop = 1}^m \paren {\frac {\paren {1 + \frac 1 n}^{z + 1} \paren {1 + \frac z n} } {\paren {1 + \frac 1 n}^z \paren {1 + \frac {z + 1} n} } }\)




















\(\ds \)

\(=\)







\(\ds \frac z {z + 1} \lim_{m \mathop \to \infty} \prod_{n \mathop = 1}^m \paren {\frac {\paren {1 + \frac 1 n} \paren {z + n} } {z + n + 1} }\)




















\(\ds \)

\(=\)







\(\ds z \lim_{m \mathop \to \infty} \frac {m + 1} {z + m + 1} = z\)









$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Special Functions: $\text {I}$. The Gamma function: $1$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $16.2$: The Gamma Function: Recursion Formula
1983: François Le Lionnais and Jean Brette: Les Nombres Remarquables ... (previous) ... (next): $0,88560 31944 \ldots$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: Exercise $10$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): gamma function
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $11.14 \ \text{(iii)}$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): gamma function




