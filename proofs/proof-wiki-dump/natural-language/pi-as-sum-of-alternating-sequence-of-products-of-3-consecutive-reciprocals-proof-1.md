# 

Source: https://proofwiki.org/wiki/Pi_as_Sum_of_Alternating_Sequence_of_Products_of_3_Consecutive_Reciprocals/Proof_1

Theorem
$\dfrac {\pi - 3} 4 = \dfrac 1 {2 \times 3 \times 4} - \dfrac 1 {4 \times 5 \times 6} + \dfrac 1 {6 \times 7 \times 8} \cdots$


Proof
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





