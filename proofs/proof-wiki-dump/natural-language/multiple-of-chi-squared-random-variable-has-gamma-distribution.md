# 

Source: https://proofwiki.org/wiki/Multiple_of_Chi-Squared_Random_Variable_has_Gamma_Distribution

Theorem
Let $n$ be a strictly positive integer. 
Let $k > 0$ be a real number. 
Let $X \sim \chi^2_n$ where $\chi^2_n$ is the chi-squared distribution with $n$ degrees of freedom. 

Then: 

$k X \sim \map \Gamma {\dfrac n 2, \dfrac 1 {2 k}}$
where $\map \Gamma {\dfrac n 2, \dfrac 1 {2 k}}$ is the gamma distribution with parameters $\dfrac n 2$ and $\dfrac 1 {2 k}$.


Proof
Let:

$Y \sim \map \Gamma {\dfrac n 2, \dfrac 1 {2 k}}$
We aim to show that: 

$\map \Pr {Y < k x} = \map \Pr {X < x}$
for all real $x \ge 0$.
We have: 














\(\ds \map \Pr {Y < k x}\)

\(=\)







\(\ds \frac 1 {\map \Gamma {n / 2} } \paren {\frac 1 {2 k} }^{n / 2} \int_0^{k x} t^{\paren {n / 2} - 1} e^{-\paren {1 / k} t / 2} \rd t\)





Definition of Gamma Distribution














\(\ds \)

\(=\)







\(\ds \frac 1 {\map \Gamma {n / 2} } \paren {\frac 1 {2 k} }^{n / 2} \int_0^x k \paren {k u}^{\paren {n / 2} - 1} e^{-u / 2} \rd u\)





substituting $t = k u$














\(\ds \)

\(=\)







\(\ds \frac {k^{n / 2} } {\map \Gamma {n / 2} \paren {2 k}^{n / 2} } \int_0^x u^{\paren {n / 2} - 1} e^{-u / 2} \rd u\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2^{n / 2} \map \Gamma {n / 2} } \int_0^x u^{\paren {n / 2} - 1} e^{-u / 2} \rd u\)




















\(\ds \)

\(=\)







\(\ds \map \Pr {X < x}\)





Definition of Chi-Squared Distribution



$\blacksquare$





