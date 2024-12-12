# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Sequence_of_Sum_over_k_to_n_of_Reciprocal_of_k_by_n-k

Theorem
Let $\sequence {a_n}$ be the sequence whose terms are defined as:

$\forall n \in \Z_{\ge 0}: a_n = \ds \sum_{k \mathop = 1}^{n - 1} \dfrac 1 {k \paren {n - k} }$

Then $\sequence {a_n}$ has the generating function $\map G z$ such that:

$\map G z = \paren {\ln \dfrac 1 {1 - z} }^2$
and whose terms are:

$a_n = \dfrac {2 H_{n - 1} } n$


Proof
From Product of Generating Functions:

$\map G z = \paren {\map {G_1} z}^2$
where $\map {G_1} z$ is the generating function for $\ds \sum_{k \mathop \ge 1} \dfrac 1 k$.
From Generating Function for Sequence of Reciprocals of Natural Numbers:

$\map {G_1} z = \map \ln {\dfrac 1 {1 - z} }$
Hence:

$\map G z = \paren {\ln \dfrac 1 {1 - z} }^2$

Differentiating $\map G z$ with respect to $z$ gives:














\(\ds \map {G'} z\)

\(=\)







\(\ds \dfrac \d {\d z} \paren {\paren {\ln \dfrac 1 {1 - z} }^2}\)




















\(\ds \)

\(=\)







\(\ds 2 \ln \dfrac 1 {1 - z} \dfrac \d {\d z} \paren {\ln \dfrac 1 {1 - z} }\)





Chain Rule for Derivatives, Derivative of Power














\(\ds \)

\(=\)







\(\ds 2 \paren {\ln \dfrac 1 {1 - z} } \times \paren {\dfrac 1 {1 - z} }^{-1} \dfrac \d {\d z} \dfrac 1 {1 - z}\)





Chain Rule for Derivatives, Derivative of Logarithm Function














\(\ds \)

\(=\)







\(\ds 2 \paren {\ln \dfrac 1 {1 - z} } \times \paren {\dfrac 1 {1 - z} }^{-1} \times \dfrac {-1} {\paren {1 - z}^2} \map {\dfrac \d {\d z} } {1 - z}\)





Chain Rule for Derivatives, Derivative of Power














\(\ds \)

\(=\)







\(\ds 2 \paren {\ln \dfrac 1 {1 - z} } \times \paren {\dfrac 1 {1 - z} }^{-1} \times \dfrac {-1} {\paren {1 - z}^2} \times \paren {-1}\)





Chain Rule for Derivatives, Derivative of Power














\(\ds \)

\(=\)







\(\ds 2 \paren {\dfrac 1 {1 - z} \ln \dfrac 1 {1 - z} }\)





simplifying














\(\ds \)

\(=\)







\(\ds 2 \sum_{n \mathop \ge 0} H_n z^n\)





Generating Function for Sequence of Harmonic Numbers




Integrating again with respect to $z$ gives:














\(\ds \map G z\)

\(=\)







\(\ds \int_0^z \paren {2 \sum_{n \mathop \ge 0} H_n z^n}\)




















\(\ds \)

\(=\)







\(\ds 2 \sum_{n \mathop \ge 0} H_n \paren {\int_0^z z^n}\)




















\(\ds \)

\(=\)







\(\ds 2 \sum_{n \mathop \ge 0} H_n \dfrac {z^{n + 1} } {n + 1}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds 2 \sum_{n \mathop \ge 1} H_{n - 1} \dfrac {z^n} n\)





Translation of Index Variable of Summation



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.9$: Generating Functions: Exercise $6$




