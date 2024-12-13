# 

Source: https://proofwiki.org/wiki/Pi_as_Sum_of_Alternating_Sequence_of_Products_of_3_Consecutive_Reciprocals



Theorem
$\dfrac {\pi - 3} 4 = \dfrac 1 {2 \times 3 \times 4} - \dfrac 1 {4 \times 5 \times 6} + \dfrac 1 {6 \times 7 \times 8} \cdots$


Proof 1
Let $f: \R \to \R$ be the real function defined as:

$\forall x \in \R: \map f x = x^1 - x^3 + x^5 - x^7 + x^9 - x^{11} + x^{13} - x^{15} \cdots$

We can rewrite this infinite geometric sequence as follows:














\(\ds \map f x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n x^{2 n + 1}\)




















\(\ds \)

\(=\)







\(\ds x \sum_{n \mathop = 0}^\infty \paren {-1}^n x^{2 n}\)





factoring out an x














\(\ds \)

\(=\)







\(\ds x \sum_{n \mathop = 0}^\infty \paren {-x^2}^ n\)





Power of Power














\(\ds \)

\(=\)







\(\ds \dfrac x {1 - \paren {-x^2} }\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \dfrac x {1 + x^2 }\)










Integrating the infinite geometric sequence $3$ times and using Integral of Power, we get:




\(\text {(1)}: \quad\)









\(\ds \int \map f x\)

\(=\)







\(\ds \int \sum_{n \mathop = 0}^\infty \paren {-1}^n x^{2 n + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac {\paren {-1}^n x^{2 n + 2} } {2 n + 2}\)










\(\text {(2)}: \quad\)









\(\ds \iint \map f x\)

\(=\)







\(\ds \int \sum_{n \mathop = 0}^\infty \dfrac {\paren {-1}^n x^{2 n + 2} } {2 n + 2}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac {\paren {-1}^n x^{2 n + 3} } {\paren {2 n + 2} \paren {2 n + 3} }\)










\(\text {(3)}: \quad\)









\(\ds \iiint \map f x\)

\(=\)







\(\ds \int \sum_{n \mathop = 0}^\infty \dfrac {\paren {-1}^n x^{2 n + 3} } {\paren {2 n + 2} \paren {2 n + 3} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \dfrac {\paren {-1}^n x^{2 n + 4} } {\paren {2 n + 2} \paren {2 n + 3} \paren {2 n + 4} }\)










Integrating the equivalent analytic function $3$ times, we get:


Lemma
$\ds \iiint \dfrac x {x^2 + 1} \rd x \rd x \rd x = x \map \arctan x + \dfrac {\paren {x^2 - 1} \map \ln {x^2 + 1} - 3 x^2} 4$
with all integration constants at $0$.
$\Box$

We now have:

$\ds \sum_{n \mathop = 0}^\infty \dfrac {\paren {-1}^n x^{2 n + 4} } {\paren {2 n + 2} \paren {2 n + 3} \paren {2 n + 4} } = x \map \arctan x + \dfrac {\paren {x^2 - 1} \map \ln {x^2 + 1} - 3 \paren x^2} 4$

Next we confirm that the infinite geometric sequence on the left hand side will converge at $x = 1$.
We are guaranteed convergence by the Alternating Series Test:

$\map f 1 = \dfrac 1 {2 \times 3 \times 4} - \dfrac 1 {4 \times 5 \times 6} + \dfrac 1 {6 \times 7 \times 8} + \cdots + \dfrac {\paren {-1}^n } {\paren {2 n + 2} \paren {2 n + 3} \paren {2 n + 4} }$

Finally, we substitute $x = 1$ to obtain our desired result:














\(\ds \sum_{n \mathop = 0}^\infty \dfrac {\paren {-1}^n} {\paren {2 n + 2} \paren {2 n + 3} \paren {2 n + 4} }\)

\(=\)







\(\ds \paren 1 \map \arctan 1 + \dfrac {\paren {1^2 - 1} \map \ln {1^2 + 1} - 3 \paren 1^2} 4\)




















\(\ds \sum_{n \mathop = 1}^\infty \dfrac {\paren {-1}^{n + 1} } {\paren {2 n} \paren {2 n + 1} \paren {2 n + 2} }\)

\(=\)







\(\ds \map \arctan 1 - \dfrac 3 4\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\pi - 3} 4\)









$\blacksquare$


Proof 2
The alternating sum can be written as $\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1}} {2 n \paren{2 n + 1} \paren{2 n + 2}}$.
By Partial Fraction Decomposition:

$\ds \frac 1 {2 n \paren {2 n + 1} \paren {2 n + 2}} = \frac 1 2 \paren{\frac 1 {2 n} - \frac 2 {2 n + 1} + \frac 1 {2 n + 2}}$
Therefore:














\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } {2 n \paren{2 n + 1} \paren{2 n + 2} }\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } 2 \paren{\frac 1 {2 n} - \frac 2 {2 n + 1} + \frac 1 {2 n + 2} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } {4 n} - \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } {2 n + 1} - \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 2} } {4 \paren {n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } {4 n} - \sum_{n \mathop = 2}^\infty \frac {\paren {-1}^{n + 1} } {4 n} + \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n} {2 n + 1} - 1\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \frac 1 4 + \frac \pi 4 - 1\)





Leibniz's Formula for Pi














\(\ds \)

\(=\)







\(\ds \frac {\pi - 3} 4\)









$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $3 \cdotp 14159 \, 26535 \, 89793 \, 23846 \, 26433 \, 83279 \, 50288 \, 41972 \ldots$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $3 \cdotp 14159 \, 26535 \, 89793 \, 23846 \, 26433 \, 83279 \, 50288 \, 41971 \ldots$




