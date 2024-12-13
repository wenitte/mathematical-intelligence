# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Logistic_Distribution/Examples/First_Moment

Examples of Use of Moment Generating Function of Logistic Distribution
Let $X$ be a continuous random variable which satisfies the logistic distribution:

$X \sim \map {\operatorname {Logistic} } {\mu, s}$
for some $\mu \in \R, s \in \R_{> 0}$.
Let $\size t < \dfrac 1 s$.

The first moment generating function of $X$ is given by: 

$\ds \map { {M_X}'} t = \map \exp {\mu t} \paren {\mu \int_{\to 0}^{\to 1} \paren {\dfrac {1 - u} u}^{-s t} \rd u - s \int_{\to 0}^{\to 1} \map \ln {\dfrac {1 - u} u} \paren {\dfrac {1 - u} u}^{-s t} \rd u}$


Proof
We have:














\(\ds \map { {M_X}'} t\)

\(=\)







\(\ds \map {\frac \d {\d t} } {\map \exp {\mu t} \int_{\to 0}^{\to 1} \paren {\dfrac {1 - u} u}^{-s t} \rd u}\)





Moment Generating Function of Logistic Distribution














\(\ds \)

\(=\)







\(\ds \mu \map \exp {\mu t} \int_{\to 0}^{\to 1} \paren {\dfrac {1 - u} u}^{-s t} \rd u + \map \exp {\mu t} \int_{\to 0}^{\to 1} -s \map \ln {\dfrac {1 - u} u} \paren {\dfrac {1 - u} u}^{-s t} \rd u\)





Product Rule for Derivatives, Chain Rule for Derivatives Derivative of Power of Constant and Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds \map \exp {\mu t} \paren {\mu \int_{\to 0}^{\to 1} \paren {\dfrac {1 - u} u}^{-s t} \rd u - s \int_{\to 0}^{\to 1} \map \ln {\dfrac {1 - u} u} \paren {\dfrac {1 - u} u}^{-s t} \rd u}\)









$\blacksquare$





