# 

Source: https://proofwiki.org/wiki/Generating_Function_of_Multiple_of_Parameter

Theorem
Let $G \left({z}\right)$ be the generating function for the sequence $\left\langle{a_n}\right\rangle$.
Let $c$ be a constant.

Then $G \left({c z}\right)$ be the generating function for the sequence $\left\langle{b_n}\right\rangle$ where:

$\forall n \in \Z_{\ge 0}: b_n = c^n a_n$


Proof













\(\ds G \left({c z}\right)\)

\(=\)







\(\ds \sum_{n \mathop \ge 0} a_n \left({c z}\right)^n\)





Definition of Generating Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \ge 0} \left({a_n c^n}\right) z^n\)









Hence the result by definition of generating function.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions




