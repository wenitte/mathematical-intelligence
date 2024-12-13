# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Gamma_Distribution/Examples/First_Moment

Examples of Use of Moment Generating Function of Gamma Distribution
Let $X \sim \map \Gamma {\alpha, \beta}$ for some $\alpha, \beta > 0$, where $\Gamma$ is the Gamma distribution.
Let $t < \beta$.

The first moment generating function of $X$ is given by: 

$\map { {M_X}'} t = \dfrac {\beta^\alpha \alpha} {\paren {\beta - t}^{\alpha + 1} }$


Proof
We have:














\(\ds \map { {M_X}'} t\)

\(=\)







\(\ds \map {\frac \d {\d t} } {1 - \frac t \beta}^{-\alpha}\)





Moment Generating Function of Gamma Distribution














\(\ds \)

\(=\)







\(\ds \beta^\alpha \map {\frac \d {\d t} } {\frac 1 {\paren {\beta - t}^\alpha} }\)




















\(\ds \)

\(=\)







\(\ds \beta^\alpha \, \map {\frac \d {\map \d {\beta - t} } } {\frac 1 {\paren {\beta - t}^\alpha} } \cdot \map {\frac \d {\d t} } {\beta - t}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \paren {-1}^2 \frac {\beta^\alpha \alpha} {\paren {\beta - t}^{\alpha + 1} }\)





Derivative of Power














\(\ds \)

\(=\)







\(\ds \frac {\beta^\alpha \alpha} {\paren {\beta - t}^{\alpha + 1} }\)









$\blacksquare$





