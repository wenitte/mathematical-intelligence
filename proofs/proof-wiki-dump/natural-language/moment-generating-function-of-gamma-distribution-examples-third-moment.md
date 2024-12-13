# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Gamma_Distribution/Examples/Third_Moment

Examples of Use of Moment Generating Function of Gamma Distribution
Let $X \sim \map \Gamma {\alpha, \beta}$ for some $\alpha, \beta > 0$, where $\Gamma$ is the Gamma distribution.
Let $t < \beta$.

The third moment generating function of $X$ is given by: 

$\map { {M_X}} t = \dfrac {\beta^\alpha \alpha \paren {\alpha + 1} \paren {\alpha + 2} } {\paren {\beta - t}^{\alpha + 3} }$


Proof
We have:














\(\ds \map { {M_X}} t\)

\(=\)







\(\ds \frac \d {\d t} \map { {M_X}} t\)





Definition of Moment Generating Function














\(\ds \)

\(=\)







\(\ds \frac \d {\d t} \frac {\beta^\alpha \alpha \paren {\alpha + 1} } {\paren {\beta - t}^{\alpha + 2} }\)





Moment Generating Function of Gamma Distribution: Second Moment














\(\ds \)

\(=\)







\(\ds \beta^\alpha \alpha \paren {\alpha + 1} \paren {\alpha + 2} {\frac {-1} {\paren {\beta - t}^{\alpha + 3} } }\)





Chain Rule for Derivatives, Derivative of Power














\(\ds \)

\(=\)







\(\ds \dfrac {\beta^\alpha \alpha \paren {\alpha + 1} \paren {\alpha + 2} } {\paren {\beta - t}^{\alpha + 3} }\)









$\blacksquare$





