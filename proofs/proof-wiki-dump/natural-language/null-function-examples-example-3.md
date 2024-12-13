# 

Source: https://proofwiki.org/wiki/Null_Function/Examples/Example_3

Example of Null Function
Let $f: \R \to \R$ be the real function defined as:

$\forall x \in \R: \map f x = \begin {cases} 1 & : t = 1 \le t \le 2 \\ 0 & : \text {otherwise} \end {cases}$

Then $f$ is not a null function.


Proof
Let $x > 2$.














\(\ds \int_0^x \map f u \rd u\)

\(=\)







\(\ds \int_0^1 \map f u \rd u + \int_1^2 \map f u \rd u + \int_2^x \map f u \rd u\)




















\(\ds \)

\(=\)







\(\ds \int_0^1 0 \rd u + \int_1^2 1 \rd u + \int_2^x 0 \rd u\)





Definition of $\map f x$














\(\ds \)

\(=\)







\(\ds 0 + 1 + 0\)





Definite Integral of Constant



Hence the result by definition of null function.
$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Impulse Functions. The Dirac Delta Function: $44 \ \text{(b)}$




