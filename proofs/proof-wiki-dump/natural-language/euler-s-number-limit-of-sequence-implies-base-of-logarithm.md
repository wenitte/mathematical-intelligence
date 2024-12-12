# 

Source: https://proofwiki.org/wiki/Euler%27s_Number:_Limit_of_Sequence_implies_Base_of_Logarithm

Theorem
Let $e$ be Euler's number defined by:

$\ds e := \lim_{n \mathop \to \infty} \paren {1 + \frac 1 n}^n$
Then $e$ is the unique solution to the equation $\map \ln x = 1$.
That is:

$\map \ln x = 1 \iff x = e$


Proof
First we prove that $e$ is a solution to $\map \ln x = 1$:














\(\ds \map \ln e\)

\(=\)







\(\ds \map \ln {\lim_{n \mathop \to \infty} \paren {1 + \frac 1 n}^n }\)





Definition of Euler's Number as Limit of Sequence














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\map \ln {1 + \frac 1 n}^n }\)





Definition of Limit at Infinity














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \dfrac {n \map \ln {\dfrac {n + 1} n } } 1\)





Logarithm of Power














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac {\map \ln {\dfrac {n + 1} n} } {\paren {\dfrac 1 n} }\)





multiplying numerator and denominator by $\dfrac 1 n$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \frac{\paren {-\dfrac 1 {n^2} } \paren {\dfrac n {n + 1} } } {\paren {-\dfrac 1 {n^2} } }\)





L'Hôpital's Rule














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {\frac n {n + 1} }\)




















\(\ds \)

\(=\)







\(\ds 1\)










From Logarithm is Strictly Increasing, $\ln$ is strictly monotone.
By Strictly Monotone Mapping with Totally Ordered Domain is Injective it follows that $\ln$ is an injection.
So the solution to $\map \ln x = 1$ is unique.
Hence the result.
$\blacksquare$





