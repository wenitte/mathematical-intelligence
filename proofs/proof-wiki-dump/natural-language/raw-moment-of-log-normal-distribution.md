# 

Source: https://proofwiki.org/wiki/Raw_Moment_of_Log_Normal_Distribution

Theorem
Let $X$ be a continuous random variable with the Log Normal distribution with $\mu \in \R, \sigma \in \R_{>0}$.
Let $n$ be a strictly positive integer. 

Then the $n$th raw moment $\expect {X^n}$ of $X$ is given by: 

$\expect {X^n} = \exp {\paren {n\mu + \dfrac {\sigma^2 n^2} 2} }$


Proof
From the definition of the Log Normal distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac 1 {\sigma \sqrt {2 \pi} x} \map \exp {-\dfrac {\paren {\map \ln x - \mu}^2} {2 \sigma^2} }$
where $\Img X = \R_{>0}$.

From the definition of the expected value of a continuous random variable: 

$\ds \expect {X^n} = \int_0^\infty x^n \map {f_X} x \rd x$
Therefore:














\(\ds \expect {X^n}\)

\(=\)







\(\ds \int_0^\infty x^n \dfrac 1 {\sigma \sqrt {2 \pi} x} \map \exp {-\dfrac {\paren {\map \ln x - \mu}^2} {2 \sigma^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sigma \sqrt {2 \pi} } \int_0^\infty x^{n - 1} \map \exp {-\dfrac {\paren {\map \ln x - \mu}^2} {2 \sigma^2} } \rd x\)





rewriting



Let: 

$u = \dfrac {\paren {\map \ln x - \mu}} {\sqrt 2 \sigma}$
Then by Chain Rule for Derivatives, we have:

$\dfrac {\d u} {\d x} = \dfrac 1 {x \sqrt 2 \sigma}$
and also:

$\exp {\paren {\sqrt 2 \sigma nu + n \mu} } = x^n$
We can see that:

$u \to -\infty$ as $x \to 0$
and

$u \to \infty$ as $x \to \infty$
Plugging these results back into our integral above, we have:














\(\ds \expect {X^n}\)

\(=\)







\(\ds \dfrac {\exp {\paren {n \mu} } } {\sqrt \pi} \int_{-\infty}^\infty \exp {\paren {-u^2 + \sqrt 2 \sigma nu} } \rd u\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\exp {\paren {n \mu} } } {\sqrt \pi} \int_{-\infty}^\infty \exp {\paren {-u^2 + \sqrt 2 \sigma nu - \dfrac {\sigma^2 n^2 } 2 + \dfrac {\sigma^2 n^2} 2} } \rd u\)





adding $0$














\(\ds \)

\(=\)







\(\ds \dfrac {\exp {\paren {n \mu + \dfrac {\sigma^2 n^2} 2} } } {\sqrt \pi} \int_{-\infty}^\infty \exp {\paren {-u^2 + \sqrt 2 \sigma nu - \dfrac {\sigma^2 n^2} 2} } \rd u\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \dfrac {\exp {\paren {n \mu + \dfrac {\sigma^2 n^2} 2} } } {\sqrt \pi} \int_{-\infty}^\infty \exp {\paren {-\paren {u - \dfrac {\sqrt 2 \sigma n} 2}^2} } \rd u\)





Square of Sum














\(\ds \)

\(=\)







\(\ds \dfrac {\exp {\paren {n \mu + \dfrac {\sigma^2 n^2} 2} } } {\sqrt \pi} \int_{-\infty}^\infty \exp {\paren {-y^2} } \rd y\)





setting $y = u - \dfrac {\sqrt 2 \sigma n} 2$ and hence $\d y = \d u$














\(\ds \)

\(=\)







\(\ds \dfrac {\exp {\paren {n \mu + \dfrac {\sigma^2 n^2} 2} } } {\sqrt \pi} \sqrt \pi\)





Gaussian Integral














\(\ds \)

\(=\)







\(\ds \exp {\paren {n \mu + \dfrac {\sigma^2 n^2} 2} }\)









$\blacksquare$





