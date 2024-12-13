# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Gamma_Distribution/Examples/Second_Moment

Examples of Use of Moment Generating Function of Gamma Distribution
Let $X \sim \map \Gamma {\alpha, \beta}$ for some $\alpha, \beta > 0$, where $\Gamma$ is the Gamma distribution.
Let $t < \beta$.

The second moment generating function of $X$ is given by: 

$\map { {M_X}} t = \dfrac {\beta^\alpha \alpha \paren {\alpha + 1} } {\paren {\beta - t}^{\alpha + 2} }$


Proof
We have:














\(\ds \map { {M_X}} t\)

\(=\)







\(\ds \frac {\d^2} {\d t^2} \paren {1 - \frac t \beta}^{-\alpha}\)




















\(\ds \)

\(=\)







\(\ds \beta^\alpha \frac {\d^2} {\d t^2} \paren {\frac 1 {\paren {\beta - t}^\alpha} }\)




















\(\ds \)

\(=\)







\(\ds \beta^\alpha \map {\frac \d {\d t} } {\map {\frac \d {\map \d {\beta - t} } } {\frac 1 {\paren {\beta - t}^\alpha} } \cdot \map {\frac \d {\d t} } {\beta - t} }\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \paren {-1}^2 \beta^\alpha \alpha \map {\frac \d {\d t} } {\frac 1 {\paren {\beta - t}^{\alpha + 1} } }\)





Derivative of Power














\(\ds \)

\(=\)







\(\ds \frac {\beta^\alpha \alpha \paren {\alpha + 1} } {\paren {\beta - t}^{\alpha + 2} }\)





Chain Rule for Derivatives, Derivative of Power



$\blacksquare$





