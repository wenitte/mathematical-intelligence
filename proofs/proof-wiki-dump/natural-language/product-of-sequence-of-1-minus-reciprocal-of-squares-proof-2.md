# 

Source: https://proofwiki.org/wiki/Product_of_Sequence_of_1_minus_Reciprocal_of_Squares/Proof_2

Theorem
For all $n \in \Z_{\ge 1}$:

$\ds \prod_{j \mathop = 2}^n \paren {1 - \dfrac 1 {j^2} } = \dfrac {n + 1} {2 n}$


Proof
We have: 














\(\ds \prod_{j \mathop = 2}^n \paren {1 - \frac 1 {j^2} }\)

\(=\)







\(\ds \prod_{j \mathop = 2}^n \paren {\frac {\paren {j - 1} \paren {j + 1} } {j^2} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \paren {\prod_{j \mathop = 2}^n \paren {j - 1} } \paren {\prod_{j \mathop = 2}^n \paren {j + 1} } \paren {\prod_{j \mathop = 2}^n \frac 1 j}^2\)





Product of Products














\(\ds \)

\(=\)







\(\ds \paren {\prod_{j \mathop = 1}^{n - 1} j} \paren {\prod_{j \mathop = 3}^{n + 1} j} \frac 1 {\paren {\prod_{j \mathop = 2}^n j}^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {n - 1}! \paren {\frac 1 2 \prod_{j \mathop = 2}^{n + 1} j} \frac 1 {\paren {n!}^2}\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \frac {\paren {n - 1}! \paren {n + 1}!} {2 \times n! \times n!}\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \frac {\paren {n - 1}! n! \paren {n + 1} } {2 \paren {n - 1}! \times n \times n!}\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \frac {n + 1} {2 n}\)









$\blacksquare$





