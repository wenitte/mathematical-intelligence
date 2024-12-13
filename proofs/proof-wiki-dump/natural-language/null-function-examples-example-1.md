# 

Source: https://proofwiki.org/wiki/Null_Function/Examples/Example_1

Example of Null Function
Let $f: \R \to \R$ be the real function defined as:

$\forall x \in \R: \map f x = \begin {cases} 1 & : t = 1/2 \\ -1 & : t = 1 \\ 0 & : \text {otherwise} \end {cases}$

Then $f$ is a null function.


Proof
Let $x > 1$.














\(\ds \int_0^x \map f u \rd u\)

\(=\)







\(\ds \int_0^{1/2} \map f u \rd u + \int_{1/2}^1 \map f u \rd u + \int_1^x \map f u \rd u\)




















\(\ds \)

\(=\)







\(\ds \int_0^{1/2} 0 \rd u + \int_{1/2}^1 0 \rd u + \int_1^x 0 \rd u\)





Definition of $\map f x$














\(\ds \)

\(=\)







\(\ds 0 + 0 + 0\)





Definite Integral of Constant



The cases where $x < \dfrac 1 2$ and $\dfrac 1 2 \le x \le 1$ are treated similarly.
$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Special Functions: $\text {IX}$. Null functions: Example




