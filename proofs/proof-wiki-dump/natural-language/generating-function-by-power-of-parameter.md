# 

Source: https://proofwiki.org/wiki/Generating_Function_by_Power_of_Parameter

Theorem
Let $\map G z$ be the generating function for the sequence $\sequence {a_n}$.
Let $m \in \Z_{\ge 0}$ be a non-negative integer.

Then $z^m \map G z$ is the generating function for the sequence $\sequence {a_{n - m} }$.


Proof













\(\ds z^m \map G z\)

\(=\)







\(\ds z^m \sum_{n \mathop \ge 0} a_n z^n\)





Definition of Generating Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 0} a_n z^{n + m}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n + m \mathop \ge 0} a_{n - m} z^n\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge m} a_{n - m} z^n\)










By letting $a_n = 0$ for all $n < 0$:

$z^m \map G z = \ds \sum_{n \mathop \ge 0} a_{n - m} z^n$
Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: $(3)$




