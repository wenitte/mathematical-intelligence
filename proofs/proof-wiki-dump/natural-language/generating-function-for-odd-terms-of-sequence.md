# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Odd_Terms_of_Sequence

Theorem
Let $\map G z$ be the generating function for the sequence $\sequence {a_n}$.
Consider the subsequence $\sequence {b_n} := \tuple {a_1, a_3, a_5, \ldots}$

Then the generating function for $\sequence {b_n}$ is:

$\dfrac 1 2 \paren {\map G z - \map G {-z} }$


Proof













\(\ds \map G z\)

\(=\)







\(\ds \sum_{n \mathop \ge 0} a_n z^n\)





Definition of Generating Function














\(\ds \)

\(=\)







\(\ds \sum_{r \mathop \ge 0} a_{2 r} z^{2 r} + \sum_{r \mathop \ge 0} a_{2 r + 1} z^{2 r + 1}\)





separating out odd and even integers














\(\ds \map G {-z}\)

\(=\)







\(\ds \sum_{n \mathop \ge 0} a_n \paren {-z}^n\)





Definition of Generating Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 0} \paren {-1}^n a_n z^n\)




















\(\ds \)

\(=\)







\(\ds \sum_{r \mathop \ge 0} \paren {-1}^{2 r} a_{2 r} z^{2 r} + \sum_{r \mathop \ge 0} \paren {-1}^{2 r + 1} a_{2 r + 1} z^{2 r + 1}\)





separating out odd and even integers














\(\ds \)

\(=\)







\(\ds \sum_{r \mathop \ge 0} a_{2 r} z^{2 r} - \sum_{r \mathop \ge 0} a_{2 r + 1} z^{2 r + 1}\)














\(\ds \leadsto \ \ \)





\(\ds \map G z - \map G {-z}\)

\(=\)







\(\ds 2 \sum_{r \mathop \ge 0} a_{2 r + 1} z^{2 r + 1}\)









Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: $(12)$




