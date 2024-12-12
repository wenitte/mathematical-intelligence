# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Sequence_of_Partial_Sums_of_Series

Theorem
Let $s$ be the the series:

$\ds s = \sum_{n \mathop = 1}^\infty a_n = a_0 + a_1 + a_2 + a_3 + \cdots$
Let $\map G z$ be the generating function for the sequence $\sequence {a_n}$.
Let $\sequence {c_n}$ denote the sequence of partial sums of $s$.

Then the generating function for $\sequence {c_n}$ is given by:

$\ds \dfrac 1 {1 - z} \map G z = \sum_{n \mathop \ge 0} c_n z^n$


Proof
By definition of sequence of partial sums of $s$:














\(\ds \sequence {c_n}\)

\(=\)







\(\ds a_0 + \paren {a_0 + a_1} + \paren {a_0 + a_1 + a_2} + \cdots\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 0} \paren {\sum_{k \mathop = 0}^n a_k}\)










Consider the sequence $\sequence {b_n}$ defined as:

$\forall n \in \Z_{\ge 0}: b_n = 1$
Let $\map H z$ be the generating function for $\sequence {b_n}$.

By Generating Function for Constant Sequence:

$\map H z = \dfrac 1 {1 - z}$

Then:














\(\ds \map G z \map H z\)

\(=\)







\(\ds \sum_{n \mathop \ge 0} \paren {\sum_{k \mathop = 0}^n a_k b_{n - k} } z^n\)





Product of Generating Functions








\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 {1 - z} \map G z\)

\(=\)







\(\ds \sum_{n \mathop \ge 0} \paren {\sum_{k \mathop = 0}^n a_k} z^n\)





as all $b_{n - k} = 1$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 0} c_n z^n\)










Hence the result by definition of generating function.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: $(7)$




