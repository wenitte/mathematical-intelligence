# 

Source: https://proofwiki.org/wiki/Generating_Function_Divided_by_Power_of_Parameter

Theorem
Let $\map G z$ be the generating function for the sequence $\sequence {a_n}$.
Let $m \in \Z_{\ge 0}$ be a non-negative integer.

Then $\dfrac 1 {z^m} \paren {\map G z - \ds \sum_{k \mathop = 0}^{m - 1} a_k z^k}$ is the generating function for the sequence $\sequence {a_{n + m} }$.


Proof













\(\ds z^{-m} \map G z\)

\(=\)







\(\ds z^{-m} \sum_{n \mathop \ge 0} a_n z^n\)





Definition of Generating Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 0} a_n z^{n - m}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n + m \mathop \ge 0} a_{n + m} z^n\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 0} a_{n + m} z^n + \sum_{k \mathop = -m}^{-1} a_{k + m} z^k\)





splitting up and changing variable














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 0} a_{n + m} z^n + \sum_{k \mathop = 0}^{m - 1} a_k z^{k - m}\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 0} a_{n + m} z^n + z^{-m} \sum_{k \mathop = 0}^{m - 1} a_k z^k\)









Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: $(4)$




