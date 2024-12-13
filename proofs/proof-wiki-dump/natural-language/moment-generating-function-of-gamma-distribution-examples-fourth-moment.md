# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Gamma_Distribution/Examples/Fourth_Moment

Examples of Use of Moment Generating Function of Gamma Distribution
Let $X \sim \map \Gamma {\alpha, \beta}$ for some $\alpha, \beta > 0$, where $\Gamma$ is the Gamma distribution.
Let $t < \beta$.

The fourth moment generating function of $X$ is given by: 

$\map { {M_X}^{\paren 4} } t = \dfrac {\beta^\alpha \alpha \paren {\alpha + 1} \paren {\alpha + 2} \paren {\alpha + 3} } {\paren {\beta - t}^{\alpha + 4} }$


Proof
We have:














\(\ds \map { {M_X}^{\paren 4} } t\)

\(=\)







\(\ds \frac \d {\d t} \map { {M_X}} t\)





Definition of Moment Generating Function














\(\ds \)

\(=\)







\(\ds \frac \d {\d t} \frac {\beta^\alpha \alpha \paren {\alpha + 1} \paren {\alpha + 2} } {\paren {\beta - t}^{\alpha + 3} }\)





Moment Generating Function of Gamma Distribution: Third Moment














\(\ds \)

\(=\)







\(\ds \paren {-1} \beta^\alpha \alpha \paren {\alpha + 1} \paren {\alpha + 2} \paren {\alpha + 3} {\frac {-1} {\paren {\beta - t}^{\alpha + 4} } }\)





Chain Rule for Derivatives, Derivative of Power














\(\ds \)

\(=\)







\(\ds \dfrac {\beta^\alpha \alpha \paren {\alpha + 1} \paren {\alpha + 2} \paren {\alpha + 3} } {\paren {\beta - t}^{\alpha + 4} }\)









$\blacksquare$





