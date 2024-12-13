# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Pareto_Distribution

Theorem
Let $X$ be a continuous random variable with a Pareto distribution with parameters a and b for $a, b \in \R_{> 0}$. 

Then the moment generating function $M_X$ of $X$ is given by: 

$\map {M_X} t = \begin {cases} a \paren {-b t}^a \map \Gamma {-a, -b t} & t < 0 \\ 1 & t = 0 \\ \text {does not exist} & t > 0 \end {cases}$


Proof
From the definition of the Pareto distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac {a b^a} {x^{a + 1} }$
From the definition of a moment generating function:

$\ds \map {M_X} t = \expect { e^{t X} } = \int_b^\infty e^{t x} \map {f_X} x \rd x$
First take $t < 0$. 
Then:

$\ds \map {M_X} t = a b^a \int_b^\infty x^{-\paren {a + 1} } e^{t x} \rd x $

let:














\(\ds u\)

\(=\)







\(\ds -t x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds -t\)





Derivative of Power




Then: 














\(\ds \map {M_X} t\)

\(=\)







\(\ds -\dfrac {a b^a} t \int_{-bt}^\infty \paren {-\dfrac u t}^{-\paren {a + 1} } e^{-u} \rd u\)




















\(\ds \)

\(=\)







\(\ds -\dfrac {a b^a} t \int_{-bt}^\infty \paren {-\dfrac 1 t}^{-\paren {a + 1} } u^{-\paren {a + 1} } e^{-u} \rd u\)




















\(\ds \)

\(=\)







\(\ds a \paren {-b t}^a \int_{-bt}^\infty u^{-\paren {a + 1} } e^{-u} \rd u\)




















\(\ds \)

\(=\)







\(\ds a \paren {-b t}^a \map \Gamma {-a, -b t}\)





Definition of Gamma Distribution



$\Box$

Now take $t = 0$. 
Our integral becomes: 














\(\ds a b^a \int_b^\infty x^{-a - 1} \rd x\)

\(=\)







\(\ds a b^a \bigintlimits {-\dfrac 1 {a x^a} } b \infty\)





Primitive of Power, Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds - b^a \lim_{x \mathop \to \infty} \dfrac 1 {x^a } - a b^a \paren {-\dfrac 1 {a b^a} }\)




















\(\ds \)

\(\to\)







\(\ds 1\)





since $a > 0$, $\dfrac 1 {x^a} \to 0$ as $x \mathop \to \infty$



$\Box$

Finally take $t > 0$.
Then:














\(\ds \map {M_X} t\)

\(=\)







\(\ds a b^a \int_b^\infty \dfrac {e^{t x} \rd x } {x^{a + 1} }\)




















\(\ds \)

\(=\)







\(\ds a b^a \paren {\bigintlimits {\dfrac {e^{t x} } {\paren {a + 1 - 1} x^{a + 1 - 1} } } b \infty + \frac {t} {a + 1 - 1} \int_b^\infty \frac {e^{t x} \rd x} {x^{a + 1 - 1} } }\)





Primitive of Exponential of a x over Power of x














\(\ds \)

\(\to\)







\(\ds \infty\)









As a consequence of Exponential Dominates Polynomial, we have:

$x^a < e^{t x}$
for sufficiently large $x$. 
Therefore, in this case, the integrand increases without bound. 
We conclude that the integral is divergent.
Hence $\expect {e^{t X} }$ does not exist for $t > 0$. 
$\blacksquare$





