# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Linear_Transformation_of_Random_Variable

Theorem
Let $X$ be a random variable. 
Let $\alpha$ and $\beta$ be real numbers.
Let $Z = \alpha X + \beta$.
Let $M_X$ be the moment generating function of $X$. 

Then the moment generating function of $Z$, $M_Z$, is given by: 

$\map {M_Z} t = e^{\beta t} \map {M_X} {\alpha t}$


Proof













\(\ds \map {M_Z} t\)

\(=\)







\(\ds \expect {\map \exp {t Z} }\)





Definition of Moment Generating Function














\(\ds \)

\(=\)







\(\ds \expect {\map \exp {t \paren {\alpha X + \beta} } }\)




















\(\ds \)

\(=\)







\(\ds \expect {\map \exp {\paren {\alpha t} X} \map \exp {\beta t} }\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \map \exp {\beta t} \expect {\map \exp {\paren {\alpha t} X} }\)





Expectation is Linear














\(\ds \)

\(=\)







\(\ds e^{\beta t} \map {M_X} {\alpha t}\)





Definition of Moment Generating Function



$\blacksquare$





