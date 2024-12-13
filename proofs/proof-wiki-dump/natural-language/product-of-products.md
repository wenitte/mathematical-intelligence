# 

Source: https://proofwiki.org/wiki/Product_of_Products

Theorem
Let $R: \Z \to \set {\T, \F}$ be a propositional function on the set of integers.
Let $\ds \prod_{R \paren i} x_i$ denote a continued product over $R$.

Let the fiber of truth of $R$ be finite.
Then:

$\ds \prod_{R \paren i} \paren {b_i c_i} = \paren {\prod_{R \paren i} b_i} \paren {\prod_{R \paren i} c_i}$


Proof
Let $b_i =: a_{i 1}$ and $c_i =: a_{i 2}$.
Then:














\(\ds \prod_{R \paren i} \paren {b_i c_i}\)

\(=\)







\(\ds \prod_{R \paren i} \paren {a_{i 1} a_{i 2} }\)





by definition














\(\ds \)

\(=\)







\(\ds \prod_{R \paren i} \paren {\prod_{1 \mathop \le j \mathop \le 2} a_{i j} }\)





Definition of Continued Product by Propositional Function














\(\ds \)

\(=\)







\(\ds \prod_{1 \mathop \le j \mathop \le 2} \paren {\prod_{R \paren i} a_{i j} }\)





Exchange of Order of Product














\(\ds \)

\(=\)







\(\ds \paren {\prod_{R \paren i} a_{i 1} } \paren {\prod_{R \paren i} a_{i 2} }\)





Definition of Continued Product by Propositional Function














\(\ds \)

\(=\)







\(\ds \paren {\prod_{R \paren i} b_i} \paren {\prod_{R \paren i} c_i}\)





by definition



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $22$




