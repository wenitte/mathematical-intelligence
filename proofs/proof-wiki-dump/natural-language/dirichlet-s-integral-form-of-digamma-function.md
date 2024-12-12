# 

Source: https://proofwiki.org/wiki/Dirichlet%27s_Integral_Form_of_Digamma_Function



Theorem
Let $z$ be a complex number with a positive real part.

Then: 

$\ds \map \psi z = \int_0^\infty \paren {\frac {e^{-t} } t - \frac 1 {t \paren {1 + t}^z } } \rd t$
where $\psi$ is the digamma function.


Proof
We have:














\(\ds \map \psi z\)

\(=\)







\(\ds \int_0^\infty \paren {\frac {e^{-t} } t - \frac {e^{-z t} } {1 - e^{-t} } } \rd t\)





Gauss's Integral Form of Digamma Function














\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {e^{-t} } t  \rd t - \int_0^\infty \frac {\paren {e^{-t} }^z } {1 - e^{-t} } \rd t\)





Linear Combination of Integrals




Let:














\(\ds \frac 1 {\paren {1 + x} }\)

\(=\)







\(\ds e^{-t}\)





Integration by Substitution








\(\ds \leadsto \ \ \)





\(\ds \paren {1 + x}\)

\(=\)







\(\ds e^t\)














\(\ds \leadsto \ \ \)





\(\ds \map \ln {1 + x}\)

\(=\)







\(\ds t\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 {\paren {1 + x} } \rd x\)

\(=\)







\(\ds \d t\)










We also have:














\(\ds \lim_{x \mathop \to 0} \map \ln {1 + x}\)

\(=\)







\(\ds 0\)





Natural Logarithm of 1 is 0














\(\ds \lim_{x \mathop \to \infty} \map \ln {1 + x}\)

\(=\)







\(\ds \infty\)





Logarithm Tends to Infinity




Then:














\(\ds \map \psi z\)

\(=\)







\(\ds \int_0^\infty \frac {e^{-t} } t \rd t - \int_0^\infty \frac {\paren {e^{-t} }^z} {1 - e^{-t} } \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {e^{-t} } t \rd t - \int_0^\infty \frac {\paren {\frac 1 {\paren {1 + x} } }^z} {1 - \frac 1 {\paren {1 + x} } } \paren {\frac 1 {\paren {1 + x} } \rd x}\)





substituting in second integral














\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {e^{-t} } t \rd t - \int_0^\infty \frac {\paren {\frac 1 {\paren {1 + x} } }^z} {\paren {1 + x} - 1} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {e^{-t} } t \rd t - \int_0^\infty \frac 1 {x \paren {1 + x}^z} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {e^{-t} } t \rd t - \int_0^\infty \frac 1 {t \paren {1 + t}^z} \rd t\)





$x \to t$














\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\frac {e^{-t} } t - \frac 1 {t \paren {1 + t}^z} } \rd t\)





Linear Combination of Integrals



$\blacksquare$


Source of Name
This entry was named for Johann Peter Gustav Lejeune Dirichlet.


Also see
Gauss's Integral Form of Digamma Function


Sources
1920: E.T. Whittaker and G.N. Watson: A Course of Modern Analysis (3rd ed.): $12.3$: Gauss's expression for the logarithmic derivate of the Gamma function as an infinite integral




