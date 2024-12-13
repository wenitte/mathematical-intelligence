# 

Source: https://proofwiki.org/wiki/Log_of_Gamma_Function_is_Convex_on_Positive_Reals/Proof_2

Theorem
Let $\Gamma: \R_{>0} \to \R$ be the Gamma function, restricted to the strictly positive real numbers.
Let $\ln$ denote the natural logarithm function.

Then the composite mapping $\ln \circ \operatorname \Gamma$ is a convex function.


Proof
The strategy is to show that:

$\map \ln {\map \Gamma {\dfrac x 2 + \dfrac y 2} } \le \dfrac 1 2 \map \ln {\map \Gamma x} + \dfrac 1 2 \map \ln {\map \Gamma y}$

Let $0 < \delta < \Delta$.
Then:














\(\ds \paren {\int_\delta^\Delta t^{\paren {x + y - 2} / 2} e^{-t} \rd t}^2\)

\(=\)







\(\ds \paren {\int_\delta^\Delta \paren {t^{\paren {x - 1} / 2} e^{-t/2} } \paren {t^{\paren {y - 1} / 2} e^{-t/2} } \rd t}^2\)










\(\text {(1)}: \quad\)









\(\ds \)

\(\le\)







\(\ds \paren {\int_\delta^\Delta t^{x - 1} e^{-t} \rd t} \paren {\int_\delta^\Delta t^{y - 1} e^{-t} \rd t}\)





Cauchy-Bunyakovsky-Schwarz Inequality for Definite Integrals



Letting $\delta \to 0$ and $\Delta \to \infty$, $(1)$ becomes equivalent to:

$\paren {\map \Gamma {\dfrac {x + y} 2} }^2 \le \paren {\map \Gamma x} \paren {\map \Gamma y}$













\(\ds \paren {\map \Gamma {\dfrac {x + y} 2} }^2\)

\(\le\)







\(\ds \paren {\map \Gamma x} \paren {\map \Gamma y}\)














\(\ds \leadsto \ \ \)





\(\ds \map \ln {\paren {\map \Gamma {\dfrac {x + y} 2} }^2}\)

\(\le\)







\(\ds \map \ln {\paren {\map \Gamma x} \paren {\map \Gamma y} }\)














\(\ds \leadsto \ \ \)





\(\ds 2 \map \ln {\map \Gamma {\dfrac {x + y} 2} }\)

\(\le\)







\(\ds \map \ln {\map \Gamma x} + \map \ln {\map \Gamma y}\)














\(\ds \leadsto \ \ \)





\(\ds \map \ln {\map \Gamma {\dfrac x 2 + \dfrac y 2} }\)

\(\le\)







\(\ds \frac 1 2 \map \ln {\map \Gamma x} + \frac 1 2 \map \ln {\map \Gamma y}\)









The result follows by definition of convex function.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 17.4 \ (6)$




