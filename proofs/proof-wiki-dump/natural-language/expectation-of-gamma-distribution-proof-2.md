# 

Source: https://proofwiki.org/wiki/Expectation_of_Gamma_Distribution/Proof_2

Theorem
Let $X \sim \map \Gamma {\alpha, \beta}$ for some $\alpha, \beta > 0$, where $\Gamma$ is the Gamma distribution.
The expectation of $X$ is given by:

$\expect X = \dfrac \alpha \beta$


Proof
By Moment Generating Function of Gamma Distribution, the moment generating function of $X$ is given by: 

$\map {M_X} t = \paren {1 - \dfrac t \beta}^{-\alpha}$
for $t < \beta$. 
From Moment in terms of Moment Generating Function: 

$\expect X = \map { {M_X}'} 0$
From Moment Generating Function of Gamma Distribution: First Moment: 

$\map { {M_X}'} t = \dfrac {\beta^\alpha \alpha} {\paren {\beta - t}^{\alpha + 1} }$
Hence setting $t = 0$:














\(\ds \map { {M_X}'} 0\)

\(=\)







\(\ds \frac {\beta^\alpha \alpha} {\paren {\beta - 0}^{\alpha + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\beta^\alpha \alpha} {\beta^{\alpha + 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac \alpha \beta\)









$\blacksquare$





