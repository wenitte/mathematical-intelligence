# 

Source: https://proofwiki.org/wiki/Expectation_of_Logistic_Distribution/Proof_1

Theorem
Let $X$ be a continuous random variable which satisfies the logistic distribution:

$X \sim \map {\operatorname {Logistic} } {\mu, s}$
The expectation of $X$ is given by:

$\expect X = \mu$


Proof
From the definition of the logistic distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac {\map \exp {-\dfrac {\paren {x - \mu} } s} } {s \paren {1 + \map \exp {-\dfrac {\paren {x - \mu} } s} }^2}$
From the definition of the expected value of a continuous random variable: 

$\ds \expect X = \int_{-\infty}^\infty x \, \map {f_X} x \rd x$
So:

$\ds \expect X = \frac 1 s \int_{-\infty}^\infty \dfrac {x \map \exp {-\dfrac {\paren {x - \mu} } s} } {\paren {1 + \map \exp {-\dfrac {\paren {x - \mu} } s} }^2} \rd x$

let:














\(\ds u\)

\(=\)







\(\ds \paren {1 + \map \exp {-\dfrac {\paren {x - \mu} } s} }^{-1}\)





Integration by Substitution








\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds -\paren {1 + \map \exp {-\dfrac {\paren {x - \mu} } s} }^{-2} \paren {-\frac 1 s \map \exp {-\dfrac {\paren {x - \mu} } s} }\)





Power Rule for Derivatives, Chain Rule for Derivatives and Derivative of Exponential Function: Corollary 1








\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 u - 1\)

\(=\)







\(\ds \paren {\map \exp {-\dfrac {\paren {x - \mu} } s} }\)














\(\ds \leadsto \ \ \)





\(\ds \map \ln {\dfrac 1 u - 1}\)

\(=\)







\(\ds -\dfrac {\paren {x - \mu} } s\)














\(\ds \leadsto \ \ \)





\(\ds -s \map \ln {\dfrac {1 - u} u} + \mu\)

\(=\)







\(\ds x\)










and also:














\(\ds \lim_{x \mathop \to -\infty} \paren {1 + \map \exp {-\dfrac {\paren {x - \mu} } s} }^{-1}\)

\(=\)







\(\ds 0\)




















\(\ds \lim_{x \mathop \to \infty} \paren {1 + \map \exp {-\dfrac {\paren {x - \mu} } s} }^{-1}\)

\(=\)







\(\ds 1\)










Then:














\(\ds \expect X\)

\(=\)







\(\ds \int_{\to 0}^{\to 1}  \paren {-s \map \ln {\dfrac {1 - u} u} + \mu} \rd u\)




















\(\ds \)

\(=\)







\(\ds -s \int_{\to 0}^{\to 1} \map \ln {\dfrac {1 - u} u} \rd u + \mu \int_{\to 0}^{\to 1} \rd u\)




















\(\ds \)

\(=\)







\(\ds -s \paren {\int_{\to 0}^{\to 1} \map \ln {1 - u} \rd u - \int_{\to 0}^{\to 1} \map \ln u \rd u} + \mu\)





Integral of Constant and Difference of Logarithms














\(\ds \)

\(=\)







\(\ds -s \paren {\paren {-1} - \paren {-1} } + \mu\)





Lemma 1 and Lemma 2














\(\ds \)

\(=\)







\(\ds \mu\)









$\blacksquare$





