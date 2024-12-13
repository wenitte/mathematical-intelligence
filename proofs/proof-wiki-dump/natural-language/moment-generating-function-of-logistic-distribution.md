# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Logistic_Distribution



Theorem
Let $X$ be a continuous random variable which satisfies the logistic distribution:

$X \sim \map {\operatorname {Logistic} } {\mu, s}$
for some $\mu \in \R, s \in \R_{> 0}$.

Then the moment generating function $M_X$ of $X$ is given by: 

$\map {M_X} t = \begin {cases} \map \exp {\mu t}  \map \Beta {\paren {1 - s t}, \paren {1 + s t} } & \size t < \dfrac 1 s  \\ \text {does not exist} & \size t \ge \dfrac 1 s \end {cases}$
where $\Beta$ denotes the beta function


Proof
From the definition of the logistic distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac {\map \exp {-\dfrac {\paren {x - \mu} } s} } {s \paren {1 + \map \exp {-\dfrac {\paren {x - \mu} } s} }^2}$
From the definition of a moment generating function:

$\ds \map {M_X} t = \expect { e^{t X} } = \int_{-\infty}^\infty e^{t x} \map {f_X} x \rd x$
So: 

$\ds \map {M_X} t = \frac 1 s \int_{-\infty}^\infty \dfrac {\map \exp {t x} \map \exp {-\dfrac {\paren {x - \mu} } s} } {\paren {1 + \map \exp {-\dfrac {\paren {x - \mu} } s} }^2} \rd x$
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





\(\ds \map \exp {-\dfrac \mu s} \paren {\dfrac 1 u - 1}\)

\(=\)







\(\ds \map \exp {-\dfrac \mu s} \paren {\map \exp {-\dfrac {\paren {x - \mu} } s} }\)





multiplying both sides by $\map \exp {-\dfrac \mu s}$








\(\ds \leadsto \ \ \)





\(\ds \map \exp {-\dfrac \mu s} \paren {\dfrac 1 u - 1}\)

\(=\)







\(\ds \paren {\map \exp {-\dfrac x s} }\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\map \exp {-\dfrac \mu s} \paren {\dfrac 1 u - 1} }^{-s t}\)

\(=\)







\(\ds \paren {\map \exp {-\dfrac x s} }^{-s t}\)





raising both sides to the $-s t$ power








\(\ds \leadsto \ \ \)





\(\ds \map \exp {\mu t} \paren {\dfrac {1 - u} u}^{-s t}\)

\(=\)







\(\ds \map \exp {x t}\)










and also:














\(\ds \lim_{x \mathop \to -\infty} \paren {1 + \map \exp {-\dfrac {\paren {x - \mu} } s} }^{-1}\)

\(=\)







\(\ds 0\)




















\(\ds \lim_{x \mathop \to \infty} \paren {1 + \map \exp {-\dfrac {\paren {x - \mu} } s} }^{-1}\)

\(=\)







\(\ds 1\)










Then:














\(\ds \map {M_X} t\)

\(=\)







\(\ds \map \exp {\mu t} \int_{\to 0}^{\to 1}  \paren {\dfrac {1 - u} u}^{-s t} \rd u\)




















\(\ds \)

\(=\)







\(\ds \map \exp {\mu t} \int_{\to 0}^{\to 1}  \paren {1 - u }^{-s t} u^{s t} \rd u\)




















\(\ds \)

\(=\)







\(\ds \map \exp {\mu t} \map \Beta {\paren {1 - s t}, \paren {1 + s t} }\)





Definition of Beta Function and Commutativity of Parameters of Beta Function




Note that by definition of the beta function, $\Beta: \C \times \C \to \C$ is defined only for $\map \Re x, \map \Re y > 0$:
Therefore:

$1 - s t > 0 \leadsto t < \dfrac 1 s$
and:

$1 + s t > 0 \leadsto t > -\dfrac 1 s$
Therefore, the moment generating function is defined only when $\size t < \dfrac 1 s$.
$\blacksquare$


Examples
First Moment
The first moment generating function of $X$ is given by: 

$\ds \map { {M_X}'} t = \map \exp {\mu t} \paren {\mu \int_{\to 0}^{\to 1} \paren {\dfrac {1 - u} u}^{-s t} \rd u - s \int_{\to 0}^{\to 1} \map \ln {\dfrac {1 - u} u} \paren {\dfrac {1 - u} u}^{-s t} \rd u}$


Second Moment
The second moment generating function of $X$ is given by: 

$\ds \map { {M_X}} t = \map \exp {\mu t} \paren {\mu^2 \int_{\to 0}^{\to 1} \paren {\dfrac {1 - u} u}^{-s t} \rd u - 2 s \mu \int_{\to 0}^{\to 1} \map \ln {\dfrac {1 - u} u} \paren {\dfrac {1 - u} u}^{-s t} \rd u + s^2 \int_{\to 0}^{\to 1} \map {\ln^2} {\dfrac {1 - u} u} \paren {\dfrac {1 - u} u}^{-s t} \rd u}$


Third Moment
Moment Generating Function of Logistic Distribution/Examples/Third Moment

Fourth Moment
Moment Generating Function of Logistic Distribution/Examples/Fourth Moment





