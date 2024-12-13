# 

Source: https://proofwiki.org/wiki/Product_of_Exponential_Generating_Functions/Proof

Theorem
Let $\map G z$ be the exponential generating function for the sequence $\sequence {\dfrac {a_n} {n!} }$.
Let $\map H z$ be the exponential generating function for the sequence $\sequence {\dfrac {b_n} {n!} }$.

Then $\map G z \map H z$ is the generating function for the sequence $\sequence {\dfrac {c_n} {n!} }$, where:

$\forall n \in \Z_{\ge 0}: c_n = \ds \sum_{k \mathop \in \Z} \dbinom n k a_k b_{n - k}$


Proof
Let $\map G z \map H z$ be the generating function for the sequence $\sequence {c'_n}$.

By definition of generating function:














\(\ds \map G z \map H z\)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \dfrac {a_k} {k!} z^k \sum_{k \mathop \ge 0} \dfrac {b_k} {k!} z^k\)




















\(\ds \)

\(=\)







\(\ds \paren {\dfrac {a_0} {0!} + \dfrac {a_1} {1!} z + \dfrac {a_2} {2!} z^2 + \cdots} \paren {\dfrac {b_0} {0!} + \dfrac {b_1} {1!} z + \dfrac {b_2} {2!} z^2 + \cdots}\)










Then:














\(\ds c'_n\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \dfrac {a_k} {k!} \dfrac {b_{n - k} } {\paren {n - k}!}\)





Product of Generating Functions














\(\ds \)

\(=\)







\(\ds \dfrac 1 {n!} \paren {\sum_{k \mathop = 0}^n \dfrac {n!} {k! \paren {n - k}!} a_k b_{n - k} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {n!} \paren {\sum_{k \mathop = 0}^n \dbinom n k a_k b_{n - k} }\)





Definition 1 of Binomial Coefficient/Integers














\(\ds \)

\(=\)







\(\ds \dfrac {c_n} {n!}\)





where $c_n = \ds \sum_{k \mathop = 0}^n \dbinom n k a_k b_{n - k}$



Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: Exercise $2$




