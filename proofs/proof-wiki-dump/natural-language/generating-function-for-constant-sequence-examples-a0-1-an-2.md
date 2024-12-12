# 

Source: https://proofwiki.org/wiki/Generating_Function_for_Constant_Sequence/Examples/a0%3D1,_an%3D2

Example of Generating Function for Constant Sequence
Let $\sequence {a_n}$ be the sequence defined as:

$\forall n \in \Z_{\ge 0}: a_n = \begin{cases} 1 & : n = 0 \\ 2 & : n > 0 \end{cases}$

Then the generating function for $\sequence {a_n}$ is given as:

$\map G z = \dfrac {1 + z} {1 - z}$


Proof
Let $\map {H_1} z$ be the generating function for $\sequence {r_n}$ where:

$r_n = 2$
Then from Generating Function for Constant Sequence:

$\map H z = \dfrac 2 {1 - z}$
Then:














\(\ds \map G z\)

\(=\)







\(\ds \map H z - 1\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 {1 - z} - 1\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 - \paren {1 - z} } {1 - z}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 + z} {1 - z}\)









$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-4}$ Generating Functions: Exercise $8$




