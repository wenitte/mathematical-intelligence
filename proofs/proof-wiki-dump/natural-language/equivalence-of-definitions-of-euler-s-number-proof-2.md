# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Euler%27s_Number/Proof_2



Theorem
The following definitions of the concept of Euler's Number are equivalent:

Limit of Series
The series $\ds \sum_{n \mathop = 0}^\infty \frac 1 {n!}$ converges to a limit.
This limit is Euler's number $e$.


Limit of Sequence
The sequence $\sequence {x_n}$ defined as $x_n = \paren {1 + \dfrac 1 n}^n$ converges to a limit as $n$ increases without bound.
That limit is called Euler's number and is denoted $e$.


Base of Logarithm
Euler's number $e$ can be defined as the number satisfied by:

$\ln e = 1$
where $\ln e$ denotes the natural logarithm of $e$.
That $e$ is unique follows from Logarithm is Strictly Increasing.


Exponential Function
Euler's number $e$ can be defined as the number satisfied by:

$e := \exp 1 = e^1$
where $\exp 1$ denotes the exponential function of $1$.


Proof
1 implies 2
This is proved in Euler's Number: Limit of Sequence implies Limit of Series.
$\Box$


2 implies 3
This is proved in Euler's Number: Limit of Sequence implies Base of Logarithm.
$\Box$


3 implies 4
Let $e$ be the unique solution to the equation $\ln x = 1$.
We want to show that $\exp 1 = e$, where $\exp$ is the exponential function.














\(\ds \exp 1 = 0\)

\(\leadstoandfrom\)







\(\ds \map \ln {\exp 1} = \ln e\)





Logarithm is Strictly Increasing and Strictly Concave: Corollary














\(\ds \)

\(\leadstoandfrom\)







\(\ds 1 = \ln e\)





Exponential is Inverse of Logarithm and Inverse of Inverse



where the final equation holds by hypothesis.
Hence the result.
$\Box$


4 implies 1
Let $e = \exp 1$, where $\exp$ denotes the exponential function.
We want to show that:

$\ds \sum_{n \mathop = 0}^\infty \frac 1 {n!} = e$
By definition of $\exp$:

$\ds \sum_{n \mathop = 0}^\infty \frac 1 {n!} = \exp 1$
We also have that $\exp 1 = e$ by hypothesis.
Hence the result.
$\blacksquare$





