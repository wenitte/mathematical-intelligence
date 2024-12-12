# 

Source: https://proofwiki.org/wiki/Binomial_Theorem/Integral_Index

  This article was Featured Proof .




Theorem
Let $X$ be one of the standard number systems $\N$, $\Z$, $\Q$, $\R$ or $\C$.
Let $x, y \in X$.
Then:










\(\ds \forall n \in \Z_{\ge 0}: \, \)



\(\ds \paren {x + y}^n\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \binom n k x^{n - k} y^k\)




















\(\ds \)

\(=\)







\(\ds x^n + \binom n 1 x^{n - 1} y + \binom n 2 x^{n - 2} y^2 + \binom n 3 x^{n - 3} y^3 + \cdots\)




















\(\ds \)

\(=\)







\(\ds x^n + n x^{n - 1} y + \frac {n \paren {n - 1} } {2!} x^{n - 2} y^2 + \frac {n \paren {n - 1} \paren {n - 3} } {3!} x^{n - 3} y^3 + \cdots\)









where $\dbinom n k$ is $n$ choose $k$.


Proof
Basis for the Induction
For $n = 0$ we have:

$\ds \paren {x + y}^0 = 1 = \binom 0 0 x^{0 - 0} y^0 = \sum_{k \mathop = 0}^0 \binom 0 k x^{0 - k} y^k$
This is the basis for the induction.


Induction Hypothesis
This is our induction hypothesis:

$\ds \paren {x + y}^n = \sum_{k \mathop = 0}^n \binom n k x^{n - k} y^k$


Induction Step
This is our induction step:














\(\ds \paren {x + y}^{n + 1}\)

\(=\)







\(\ds \paren {x + y} \paren {x + y}^n\)




















\(\ds \)

\(=\)







\(\ds x \sum_{k \mathop = 0}^n \binom n k x^{n - k}y^k + y \sum_{k \mathop = 0}^n \binom n k x^{n - k} y^k\)





Inductive Hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \binom n k x^{n + 1 - k} y^k + \sum_{k \mathop = 0}^n \binom n k x^{n - k} y^{k + 1}\)




















\(\ds \)

\(=\)







\(\ds \binom n 0 x^{n + 1} + \sum_{k \mathop = 1}^n \binom n k x^{n + 1 - k} y^k + \binom n n y^{n + 1} + \sum_{k \mathop = 0}^{n - 1} \binom n k x^{n - k} y^{k + 1}\)




















\(\ds \)

\(=\)







\(\ds x^{n + 1} + y^{n + 1} + \sum_{k \mathop = 1}^n \binom n k x^{n + 1 - k} y^k + \sum_{k \mathop = 0}^{n - 1} \binom n k x^{n - k} y^{k + 1}\)




















\(\ds \)

\(=\)







\(\ds \binom {n + 1} 0 x^{n + 1} + \binom {n + 1} {n + 1} y^{n + 1} + \sum_{k \mathop = 1}^n \binom n k x^{n + 1 - k} y^k + \sum_{k \mathop = 1}^n \binom n {k - 1} x^{n + 1 - k} y^k\)




















\(\ds \)

\(=\)







\(\ds \binom {n + 1} 0 x^{n + 1} + \binom {n + 1} {n + 1} y^{n + 1} + \sum_{k \mathop = 1}^n \paren {\binom n k + \binom n {k - 1} } x^{n + 1 - k} y^k\)




















\(\ds \)

\(=\)







\(\ds \binom {n + 1} 0 x^{n + 1} + \binom {n + 1} {n + 1} y^{n + 1} + \sum_{k \mathop = 1}^n \binom {n + 1} k x^{n + 1 - k} y^k\)





Pascal's Rule














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n + 1} \binom {n + 1} k x^{n + 1 - k} y^k\)









The result follows by the Principle of Mathematical Induction.
$\blacksquare$


Also see
Definition:Binomial Coefficient


Sources
1937: Eric Temple Bell: Men of Mathematics ... (previous) ... (next): Chapter $\text{VI}$: On the Seashore
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text I$. Algebra: The Method of Induction: Example $3$
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text I$. Algebra: The Binomial Theorem
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.1$ Binomial Theorem etc.: Binomial Theorem: $3.1.1$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 2.6$. Algebra of congruences: Example $42 \ (1)$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 0.6$: Theorem $8: \ 5$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 3$: The Binomial Formula and Binomial Coefficients: $3.3, \ 3.4$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-1}$ Permutations and Combinations: Exercise $10$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 20 \gamma$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.18$: Sequences Defined Inductively: Exercise $4$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 3$: Natural Numbers: Exercise $\S 3.11 \ (4)$
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $1$: Some Preliminary Considerations: $1.2$ The Binomial Theorem
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Solved Problems: De Moivre's Theorem: $21$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers: Exercise $12$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $35$
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.2.4$: Factorials and binomial coefficients
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: $\text{F} \ (13)$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $15$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $35$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): binomial theorem
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): combination
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): binomial theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): combination




