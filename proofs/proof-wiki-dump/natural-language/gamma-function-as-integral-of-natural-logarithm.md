# 

Source: https://proofwiki.org/wiki/Gamma_Function_as_Integral_of_Natural_Logarithm

Theorem
Let $x \in \R_{>0}$ be a strictly positive real number.
Then:

$\ds \map \Gamma x = \int_{\to 0}^1 \paren {\ln \frac 1 t}^{x - 1} \rd t$
where $\Gamma$ denotes the Gamma function.


Proof
By definition of the Gamma function:

$\ds \map \Gamma x = \int_0^{\to \infty} t^{x - 1} e^{-t} \rd t$
In order to allow the limits to be evaluated, this is to be expressed as:

$\ds \map \Gamma x = \lim_{\delta \mathop \to 0^+, \ \Delta \mathop \to +\infty} \int_\delta^\Delta t^{x - 1} e^{-t} \rd t$
where $0 < \delta < \Delta$.

Let $-t = \ln u$.
Then by Derivative of Logarithm Function and the Chain Rule for Derivatives:

$-1 = \dfrac 1 u \dfrac {\rd u} {\rd t}$
Also:














\(\ds -t\)

\(=\)







\(\ds \ln u\)














\(\ds \leadsto \ \ \)





\(\ds e^{-t}\)

\(=\)







\(\ds u\)





Exponential of Natural Logarithm




Hence:














\(\ds \int_\delta^\Delta t^{x - 1} e^{-t} \rd t\)

\(=\)







\(\ds \int_{e^{-\delta} }^{e^{-\Delta} } \paren {-\ln u}^{x - 1} e^{\ln u} \paren {-\frac 1 u \frac {\rd u} {\rd t} } \rd t\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \int_{e^{-\Delta} }^{e^{-\delta} } \paren {-\ln u}^{x - 1} e^{\ln u} \paren {\frac 1 u \frac {\rd u} {\rd t} } \rd t\)





Reversal of Limits of Definite Integral














\(\ds \)

\(=\)







\(\ds \int_{e^{-\Delta} }^{e^{-\delta} } \paren {\ln \frac 1 u}^{x - 1} u \frac 1 u \rd u\)





Exponential of Natural Logarithm




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \int_{e^{-\Delta} }^{e^{-\delta} } \paren {\ln \frac 1 u}^{x - 1} \rd u\)





simplification




Next:














\(\ds \lim_{\delta \mathop \to 0^+} e^{-\delta}\)

\(=\)







\(\ds 1\)





Exponential of Zero














\(\ds \lim_{\Delta \mathop \to +\infty} e^{-\Delta}\)

\(=\)







\(\ds 0\)





Exponential Tends to Zero and Infinity




Thus:














\(\ds \lim_{\delta \mathop \to 0^+, \ \Delta \mathop \to +\infty} \int_{e^{-\Delta} }^{e^{-\delta} } \paren {\ln \frac 1 u}^{x - 1} \rd u\)

\(=\)







\(\ds \int_{e^{-\Delta} }^1 \paren {\ln \frac 1 u}^{x - 1} \rd u\)





substituting for the top limit














\(\ds \)

\(=\)







\(\ds \int_{\to 0}^1 \paren {\ln \frac 1 u}^{x - 1} \rd u\)





as $\ln 0$ is undefined



The result follows by renaming the bound variable $u$ to $t$.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 17.7 \ (1)$




