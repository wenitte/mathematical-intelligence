# 

Source: https://proofwiki.org/wiki/Power_of_Random_Variable_with_Continuous_Uniform_Distribution_has_Beta_Distribution

Theorem
Let $X \sim \ContinuousUniform 0 1$ where $\ContinuousUniform 0 1$ is the continuous uniform distribution on $\closedint 0 1$.
Let $n$ be a positive real number. 

Then:

$X^n \sim \BetaDist {\dfrac 1 n} 1$
where $\operatorname {Beta}$ is the beta distribution.


Proof
Let:

$Y \sim \BetaDist {\dfrac 1 n} 1$
We aim to show that: 

$\map \Pr {Y < x^n} = \map \Pr {X < x}$
for all $x \in \closedint 0 1$. 
We have:














\(\ds \map \Pr {Y < x^n}\)

\(=\)







\(\ds \int_0^{x^n} \frac 1 {\map \Beta {\frac 1 n, 1} } u^{\frac 1 n - 1} \paren {1 - u}^{1 - 1} \rd u\)





Definition of Beta Distribution














\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma {\frac 1 n + 1} } {\map \Gamma {\frac 1 n} \map \Gamma 1} \intlimits {n u^{\frac 1 n} } 0 {x^n}\)





Definition of Gamma Function, Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac n n x\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {1 - 0} \int_0^x \rd u\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds \map \Pr {X < x}\)





Definition of Continuous Uniform Distribution



$\blacksquare$





