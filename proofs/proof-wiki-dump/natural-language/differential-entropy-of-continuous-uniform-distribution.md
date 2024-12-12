# 

Source: https://proofwiki.org/wiki/Differential_Entropy_of_Continuous_Uniform_Distribution

Theorem
Let $X \sim \ContinuousUniform a b$ for some $a, b \in \R$, $a \ne b$, where $\operatorname U$ is the continuous uniform distribution. 
Then the differential entropy of $X$, $\map h X$, is given by: 

$\map h X = \map \ln {b - a}$


Proof
From the definition of the continuous uniform distribution, $X$ has probability density function: 

$\map {f_X} x = \begin{cases} \dfrac 1 {b - a} & : a \le x \le b \\ 0 & : \text{otherwise} \end{cases}$
From the definition of differential entropy: 

$\ds \map h X = - \int_{-\infty}^\infty \map {f_X} x \map \ln {\map {f_X} x} \rd x$
So: 














\(\ds \map h X\)

\(=\)







\(\ds -\int_a^b \frac 1 {b - a} \map \ln {\frac 1 {b - a} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \ln {b - a} } {b - a} \int_a^b \rd x\)





Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac {\map \ln {b - a} } {b - a} \bigintlimits x a b\)





Primitive of Constant, Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds \frac {\paren {b - a} \map \ln {b - a} } {b - a}\)




















\(\ds \)

\(=\)







\(\ds \map \ln {b - a}\)









$\blacksquare$





