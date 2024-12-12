# 

Source: https://proofwiki.org/wiki/Extension_of_Harmonic_Number_to_Non-Integer_Argument



Theorem
Let $\map H x$ be the real function defined as:

$\map H x = \gamma + \dfrac {\map {\Gamma'} {x + 1} } {\map \Gamma {x + 1} }$
where:

$\map \Gamma x$ denotes the Gamma function
$\map {\Gamma'} x$ denotes the derivative of the Gamma function
$\gamma$ denotes the Euler-Mascheroni constant.

Then $H$ is an extension of the mapping $H: \N \to \Q$ defined as:

$\forall n \in \N: \map H n = H_n$
where $H_n$ denotes the $n$th harmonic number.


Proof
For $n \in \N$:














\(\ds \map H n\)

\(=\)







\(\ds \gamma + \frac {\map {\Gamma'} {n + 1} } {\map \Gamma {n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \gamma - \gamma + \sum_{m \mathop = 1}^\infty \paren {\frac 1 m - \frac 1 {n + m} }\)





Reciprocal times Derivative of Gamma Function














\(\ds \)

\(=\)







\(\ds \lim_{k \mathop \to \infty} \sum_{m \mathop = 1}^k \paren {\frac 1 m - \frac 1 {n + m} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{k \mathop \to \infty} \paren {\sum_{m \mathop = 1}^k \paren {\frac 1 m} - \sum_{m \mathop = 1}^k \paren {\frac 1 {n + m} } }\)





Linear Combination of Convergent Series














\(\ds \)

\(=\)







\(\ds \lim_{k \mathop \to \infty} \paren {\sum_{m \mathop = 1}^k \paren {\frac 1 m} - \sum_{m \mathop = n + 1}^{k + n} \paren {\frac 1 m} }\)





reindexing sum














\(\ds \)

\(=\)







\(\ds \lim_{k \mathop \to \infty} \paren {\sum_{m \mathop = 1}^n \paren {\frac 1 m} - \sum_{m \mathop = k + 1}^{k + n} \paren {\frac 1 m} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{m \mathop = 1}^n \paren {\frac 1 m} - \lim_{k \mathop \to \infty} \sum_{m \mathop = k + 1}^{k + n} \paren {\frac 1 m}\)





this limit will vanish since it is positive but less than $\dfrac n {k + 1}$














\(\ds \)

\(=\)







\(\ds H_n - 0\)





Definition of Harmonic Number














\(\ds \)

\(=\)







\(\ds H_n\)









$\blacksquare$


Also see
Reciprocal times Derivative of Gamma Function


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.7$: Harmonic Numbers: Exercise $23$




