# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Sequences/Real/Product_Rule

Theorem
Let $\sequence {x_n}$ and $\sequence {y_n}$ be sequences in $\R$.
Let $\sequence {x_n}$ and $\sequence {y_n}$ be convergent to the following limits:

$\ds \lim_{n \mathop \to \infty} x_n = l$
$\ds \lim_{n \mathop \to \infty} y_n = m$

Then:

$\ds \lim_{n \mathop \to \infty} \paren {x_n y_n} = l m$


Proof
Because $\sequence {x_n}$ converges, it is bounded by Convergent Sequence is Bounded.
Suppose $\size {x_n} \le K$ for $n = 1, 2, 3, \ldots$.
Then:














\(\ds \size {x_n y_n - l m}\)

\(=\)







\(\ds \size {x_n y_n - x_n m + x_n m - l m}\)




















\(\ds \)

\(\le\)







\(\ds \size {x_n y_n - x_n m} + \size {x_n m - l m}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(=\)







\(\ds \size {x_n} \size {y_n - m} + \size m \size {x_n - l}\)





Absolute Value Function is Completely Multiplicative














\(\ds \)

\(\le\)







\(\ds K \size {y_n - m} + \size m \size {x_n - l}\)




















\(\ds \)

\(=:\)







\(\ds z_n\)










But $x_n \to l$ as $n \to \infty$.
So $\size {x_n - l} \to 0$ as $n \to \infty$ from Convergent Sequence Minus Limit.
Similarly $\size {y_n - m} \to 0$ as $n \to \infty$.
From the Combined Sum Rule for Real Sequences:

$\ds \lim_{n \mathop \to \infty} \paren {\lambda x_n + \mu y_n} = \lambda l + \mu m$, $z_n \to 0$ as $n \to \infty$
The result follows by the Squeeze Theorem for Real Sequences.
$\blacksquare$


Sources
1953: Walter Rudin: Principles of Mathematical Analysis: $3.3c$
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: $\S 1.2$: Real Sequences: Proposition $1.2.11 \ \text {(b)}$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: $\S 4.8 \ \text {(ii)}$: Criteria for convergence
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): Appendix: $\S 18.3$: Combination theorem
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $5$




