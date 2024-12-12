# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Sequence_of_Powers_of_Constant/Examples/(b%2B1)%5En_-_b%5En

Example of Generating Function for Sequence of Powers of Constant
Let $b \in \R_{>0}$ be a positive real number.
Let $\sequence {a_n}$ be the sequence defined as:

$\forall n \in \Z_{\ge 0}: a_n = \paren {b + 1}^n - b^n$

Then the generating function for $\sequence {a_n}$ is given as:

$\map G z = \dfrac z {\paren {1 - b z} \paren {1 - b z - z} }$


Proof
Let $\map {H_1} z$ be the generating function for $\sequence {r_n}$ where:

$r_n = b^n$
Then from Generating Function for Sequence of Powers of Constant:

$\map {H_1} z = \dfrac 1 {1 - b z}$

Let $\map {H_2} z$ be the generating function for $\sequence {s_n}$ where:

$s_n = \paren {b + 1}^n$
Then again from Generating Function for Sequence of Powers of Constant:














\(\ds \map {H_2} z\)

\(=\)







\(\ds \dfrac 1 {1 - \paren {b + 1} z}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {1 - b z - z}\)










From Linear Combination of Generating Functions:














\(\ds \map G z\)

\(=\)







\(\ds \map {H_2} z - \map {H_1} z\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {1 - b z - z} - \dfrac 1 {1 - b z}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {1 - b z} - \paren {1 - b z - z} } {\paren {1 - b z - z} \paren {1 - b z} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac z {\paren {1 - b z - z} \paren {1 - b z} }\)









$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-4}$ Generating Functions: Exercise $7$




