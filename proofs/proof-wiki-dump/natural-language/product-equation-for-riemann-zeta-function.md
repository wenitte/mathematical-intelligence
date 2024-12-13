# 

Source: https://proofwiki.org/wiki/Product_Equation_for_Riemann_Zeta_Function

Theorem
There exists a constant $B$ such that:

$\ds \frac {\map {\zeta'} s} {\map \zeta s} = B - \frac 1 {s - 1} + \frac 1 2 \ln \pi - \frac 1 2 \frac {\map {\Gamma'} {s / 2 + 1} } {\map \Gamma {s / 2 + 1} } + \sum_\rho \paren {\frac 1 {s - \rho} + \frac 1 \rho}$
where:

$\zeta$ is the Riemann zeta function
$\rho$ runs over the nontrivial zeros of $\zeta$
$\Gamma$ is the gamma function.


Proof
Let $\xi$ be the completed Riemann zeta function:














\(\ds \map \xi s\)

\(=\)







\(\ds \frac 1 2 s \paren {s - 1} \pi^{-s / 2} \map \Gamma {\frac s 2} \map \zeta s\)





Definition of Completed Riemann Zeta Function














\(\ds \)

\(=\)







\(\ds \paren {s - 1} \pi^{-s / 2} \map \Gamma {\frac s 2 + 1} \map \zeta s\)





Gamma Difference Equation: $\map \Gamma {\dfrac s 2 + 1} = \dfrac s 2 \map \Gamma {\dfrac s 2}$








\(\ds \leadsto \ \ \)





\(\ds \ln \map \xi s\)

\(=\)







\(\ds \map \ln {s - 1} - \frac s 2 \ln \pi + \ln \map \Gamma {\frac s 2 + 1} + \ln \map \zeta s\)





taking the logarithm of both sides




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \quad \ds \frac {\map {\xi'} s} {\map \xi s}\)

\(=\)







\(\ds \frac 1 {s - 1} - \frac 1 2 \ln \pi + \dfrac 1 2 \dfrac {\map {\Gamma'} {s / 2 + 1} } {\map \Gamma {s / 2 + 1} } + \frac {\map {\zeta'} s} {\map \zeta s}\)





taking the derivative of both sides




We have that the Completed Riemann Zeta Function has Order One.
So, by the Hadamard Factorisation Theorem, there exist constants $A$, $B$ such that:

$\ds \map \xi s = \map \exp {A + B s} : \prod_\rho \paren {1 - \frac s \rho} \map \exp {\frac s \rho}$
where $\rho$ runs over the zeros of $\xi$, that is, the nontrivial zeros of $\zeta$.
Therefore:














\(\ds \map \xi s\)

\(=\)







\(\ds \map \exp {A + B s} : \prod_\rho \paren {1 - \frac s \rho} \map \exp {\frac s \rho}\)





Hadamard Factorisation Theorem








\(\ds \leadsto \ \ \)





\(\ds \ln \map \xi s\)

\(=\)







\(\ds A + B s + \sum_\rho \paren {\map \ln {1 - \frac s \rho} + \frac s \rho}\)





taking the logarithm of both sides




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \quad \ds \frac {\map {\xi'} s} {\map \xi s}\)

\(=\)







\(\ds B + \sum_\rho \paren {\frac 1 {s - \rho} + \frac 1 \rho}\)





taking the derivative of both sides




Combining $(1)$ and $(2)$ we have:














\(\ds \frac 1 {s - 1} - \frac 1 2 \ln \pi + \dfrac 1 2 \dfrac {\map {\Gamma'} {s / 2 + 1} } {\map \Gamma {s / 2 + 1} } + \frac {\map {\zeta'} s} {\map \zeta s}\)

\(=\)







\(\ds B + \sum_\rho \paren {\frac 1 {s - \rho} + \frac 1 \rho}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\map {\zeta'} s} {\map \zeta s}\)

\(=\)







\(\ds B + \sum_\rho \paren {\frac 1 {s - \rho} + \frac 1 \rho} - \paren {\frac 1 {s - 1} - \frac 1 2 \ln \pi + \dfrac 1 2 \dfrac {\map {\Gamma'} {s / 2 + 1} } {\map \Gamma {s / 2 + 1} } }\)




















\(\ds \)

\(=\)







\(\ds B - \frac 1 {s - 1} + \frac 1 2 \ln \pi - \frac 1 2 \frac {\map {\Gamma'} {s / 2 + 1} } {\map \Gamma {s / 2 + 1} } + \sum_\rho \paren {\frac 1 {s - \rho} + \frac 1 \rho}\)





rearranging terms



$\blacksquare$


Warning
The sum $\ds \sum_\rho \frac 1 {\size \rho}$ diverges, so we must be careful of the order in which we take the terms.
By the Functional Equation for Riemann Zeta Function, the zeroes occur in complex conjugate pairs, and:

$\ds \frac 1 \rho + \frac 1 {\overline \rho} = \frac {2 \map \Re \rho} {\size \rho^2} \le \frac 2 {\size \rho^2}$
and we see by the corollary to Zeroes of Functions of Finite Order that a sum of such terms does converge.





