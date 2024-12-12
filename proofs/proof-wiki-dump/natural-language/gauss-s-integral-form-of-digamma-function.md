# 

Source: https://proofwiki.org/wiki/Gauss%27s_Integral_Form_of_Digamma_Function



Theorem
Let $z$ be a complex number with a positive real part.

Then: 

$\ds \map \psi z = \int_0^\infty \paren {\frac {e^{-t} } t - \frac {e^{-z t} } {1 - e^{-t} } } \rd t$
where $\psi$ is the digamma function.


Proof
From Extension of Harmonic Number to Non-Integer Argument, we have:

$\map H x = \gamma + \dfrac {\map {\Gamma'} {x + 1} } {\map \Gamma {x + 1} }$
which is equivalent to:

$\ds \map \psi z = -\gamma + H_{z - 1}$

We aim to demonstrate:

$\ds \int_0^\infty \paren {\frac {e^{-t} } t - \frac {e^{-z t} } {1 - e^{-t} } } \rd t = -\gamma + H_{z - 1}$

We have:














\(\ds \map \psi z\)

\(=\)







\(\ds \int_0^\infty \paren {\frac {e^{-t} } t - \frac {e^{-z t} } {1 - e^{-t} } } \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {e^{-t} } t  \rd t - \int_0^\infty \frac {e^{-z t} } {1 - e^{-t} } \rd t\)





Linear Combination of Integrals














\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {e^{-t} } t  \rd t - \int_0^\infty \frac {e^{-t} } {1 - e^{-t} } \rd t  + \int_0^\infty \frac {e^{-t} } {1 - e^{-t} } \rd t  - \int_0^\infty \frac {e^{-z t} } {1 - e^{-t} } \rd t\)





adding $0$














\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {e^{-t} } t  \rd t - \int_0^\infty \frac {e^{-t} } {1 - e^{-t} } \rd t + \int_0^\infty \frac {e^{-t} - e^{-t z } } {1 - e^{-t} } \rd t\)





Linear Combination of Integrals














\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {e^{-t} } t  \rd t - \int_0^\infty \frac {e^{-t} } {1 - e^{-t} } \times \frac {e^t} {e^t} \rd t + \int_0^\infty \frac {e^{-t} - e^{-t z } } {1 - e^{-t} } \rd t\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {e^{-t} } t  \rd t - \int_0^\infty \frac 1 {e^t - 1 } \rd t + \int_0^\infty \frac {e^{-t} - e^{-t z } } {1 - e^{-t} } \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\frac {e^{-t} } t - \frac 1 {e^t - 1 } } \rd t + \int_0^\infty \frac {e^{-t} - e^{-t z } } {1 - e^{-t} } \rd t\)





Linear Combination of Integrals














\(\ds \)

\(=\)







\(\ds -\gamma + \int_0^\infty \paren {\frac {1 - e^{-t\paren {z - 1} } } {1 - e^{-t} } } e^{-t} \rd t\)





Definite Integral to Infinity of Reciprocal of Exponential of x minus One minus Exponential of -x over x




Let:














\(\ds u\)

\(=\)







\(\ds e^{-t}\)





Integration by Substitution








\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d t}\)

\(=\)







\(\ds -e^{-t}\)





Derivative of Exponential Function: Corollary 1




We also have:














\(\ds \lim_{t \mathop \to 0} e^{-t}\)

\(=\)







\(\ds 1\)





Exponential of Zero














\(\ds \lim_{t \mathop \to \infty} e^{-t}\)

\(=\)







\(\ds 0\)





Complex Exponential Tends to Zero




Then:














\(\ds \map \psi z\)

\(=\)







\(\ds -\gamma + \int_{\to 1}^{\to 0} \paren {\dfrac {1 - u^{z - 1} } {1 - u} } \paren {-\rd u}\)




















\(\ds \)

\(=\)







\(\ds -\gamma + \int_{\to 0}^{\to 1} \paren {\dfrac {1 - u^{z - 1} } {1 - u} } \rd u\)





reversing limits of integration














\(\ds \)

\(=\)







\(\ds -\gamma + \int_{\to 0}^{\to 1} \sum_{k \mathop = 0}^{z - 2} u^k\)





Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds -\gamma + \sum_{k \mathop = 0}^{z - 2} \int_{\to 0}^{\to 1} u^k\)





Tonelli's Theorem














\(\ds \)

\(=\)







\(\ds -\gamma + \sum_{k \mathop = 0}^{z - 2} \intlimits {\dfrac {u^{k + 1} } {k + 1} } 0 1\)





Integral of Power














\(\ds \)

\(=\)







\(\ds -\gamma + \sum_{k \mathop = 0}^{z - 2} \frac 1 {k + 1}\)




















\(\ds \)

\(=\)







\(\ds -\gamma + \sum_{k \mathop = 1}^{z - 1} \frac 1 k\)





reindexing the sum














\(\ds \)

\(=\)







\(\ds -\gamma + H_{z - 1}\)





Definition of Harmonic Numbers



$\blacksquare$


Source of Name
This entry was named for Carl Friedrich Gauss.


Also see
Definite Integral to Infinity of Reciprocal of Exponential of x minus One minus Exponential of -x over x
Dirichlet's Integral Form of Digamma Function


Sources
1920: E.T. Whittaker and G.N. Watson: A Course of Modern Analysis (3rd ed.): $12.3$: Gauss's expression for the logarithmic derivate of the Gamma function as an infinite integral




