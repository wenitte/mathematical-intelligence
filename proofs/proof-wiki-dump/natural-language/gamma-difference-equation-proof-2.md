# 

Source: https://proofwiki.org/wiki/Gamma_Difference_Equation/Proof_2

Theorem
$\map \Gamma {z + 1} = z \, \map \Gamma z$


Proof
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





