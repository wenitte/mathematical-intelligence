# 

Source: https://proofwiki.org/wiki/Derivative_of_General_Logarithm_Function



Theorem
Let $a \in \R_{>0}$ such that $a \ne 1$
Let $\log_a x$ be the logarithm function to base $a$.
Then:

$\map {\dfrac \d {\d x} } {\log_a x} = \dfrac {\log_a e} x$


Proof













\(\ds \map {\dfrac \d {\d x} } {\log_a x}\)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\dfrac {\log_e x} {\log_e a} }\)





Change of Base of Logarithm














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\log_e a} \map {\dfrac \d {\d x} } {\log_e x}\)





Derivative of Constant Multiple














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\log_e a} \dfrac 1 x\)





Derivative of Natural Logarithm














\(\ds \)

\(=\)







\(\ds \dfrac {\log_a e} x\)





Logarithm of Reciprocal



$\blacksquare$


Also presented as
This result can also be seen presented as:

$\map {\dfrac \d {\d x} } {\log_a x} = \dfrac 1 {x \ln a}$
where $\ln a := \log_e a$ is the natural logarithm of $a$.
This is seen to be equivalent to the given form by Logarithm of Reciprocal:

$\dfrac 1 {\ln a} = \log_a e$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation




