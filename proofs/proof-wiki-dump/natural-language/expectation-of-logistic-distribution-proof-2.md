# 

Source: https://proofwiki.org/wiki/Expectation_of_Logistic_Distribution/Proof_2

Theorem
Let $X$ be a continuous random variable which satisfies the logistic distribution:

$X \sim \map {\operatorname {Logistic} } {\mu, s}$
The expectation of $X$ is given by:

$\expect X = \mu$


Proof
By Moment Generating Function of Logistic Distribution, the moment generating function of $X$ is given by: 

$\ds \map {M_X} t = \map \exp {\mu t} \int_{\to 0}^{\to 1} \paren {\dfrac {1 - u} u}^{-s t} \rd u$
for $\size t < \dfrac 1 s$. 
From Moment in terms of Moment Generating Function: 

$\expect X = \map { {M_X}'} 0$
From Moment Generating Function of Logistic Distribution: First Moment: 

$\ds \map { {M_X}'} t = \map \exp {\mu t} \paren {\mu \int_{\to 0}^{\to 1} \paren {\dfrac {1 - u} u}^{-s t} \rd u - s \int_{\to 0}^{\to 1} \map \ln {\dfrac {1 - u} u} \paren {\dfrac {1 - u} u}^{-s t} \rd u}$
Hence setting $t = 0$:














\(\ds \map { {M_X}'} 0\)

\(=\)







\(\ds \mu \int_{\to 0}^{\to 1} \rd u - s \int_{\to 0}^{\to 1} \map \ln {\dfrac {1 - u} u} \rd u\)




















\(\ds \)

\(=\)







\(\ds \mu - s \paren {0 }\)





Definite Integral of Constant and Lemma 3














\(\ds \)

\(=\)







\(\ds \mu\)









$\blacksquare$





