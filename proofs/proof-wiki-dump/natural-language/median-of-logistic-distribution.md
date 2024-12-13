# 

Source: https://proofwiki.org/wiki/Median_of_Logistic_Distribution

Theorem
Let $X$ be a continuous random variable with a logistic distribution:

$\map {f_X} x = \dfrac {\map \exp {-\dfrac {\paren {x - \mu} } s} } {s \paren {1 + \map \exp {-\dfrac {\paren {x - \mu} } s} }^2}$
for $\mu \in \R, s \in \R_{>0}$.
The median of $X$ is $\mu$.


Proof
From the definition of the logistic distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac {\map \exp {-\dfrac {\paren {x - \mu} } s} } {s \paren {1 + \map \exp {-\dfrac {\paren {x - \mu} } s} }^2}$
Note that $f_X$ is non-zero, sufficient to ensure a unique median.


This article, or a section of it, needs explaining.In particular: Why does being non-zero ensure a unique median? This needs a page of its own, as it's used elsewhere as well.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By the definition of a median, to prove that $\mu$ is the median of $X$ we must verify: 

$\ds \map \Pr {X < \mu} = \int_{-\infty}^\mu \map {f_X} x \rd x = \frac 1 2$

We have:














\(\ds \int_{-\infty}^\mu \map {f_X} x \rd x\)

\(=\)







\(\ds \frac 1 s  \int_{-\infty}^\mu \dfrac {\map \exp {-\dfrac {\paren {x - \mu} } s} } {\paren {1 + \map \exp {-\dfrac {\paren {x - \mu} } s} }^2} \rd x\)










Let:














\(\ds u\)

\(=\)







\(\ds \paren {1 + \map \exp {-\dfrac {\paren {x - \mu} } s} }^{-1}\)





Integration by Substitution








\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds -\paren {1 + \map \exp {-\dfrac {\paren {x - \mu} } s} }^{-2} \paren {-\frac 1 s \map \exp {-\dfrac {\paren {x - \mu} } s} }\)





Power Rule for Derivatives, Chain Rule for Derivatives and Derivative of Exponential Function: Corollary $1$




and also:














\(\ds \lim_{x \mathop \to -\infty} \paren {1 + \map \exp {-\dfrac {\paren {x - \mu} } s} }^{-1}\)

\(=\)







\(\ds 0\)




















\(\ds \lim_{x \mathop \to \mu} \paren {1 + \map \exp {-\dfrac {\paren {x - \mu} } s} }^{-1}\)

\(=\)







\(\ds \dfrac 1 2\)










Then:














\(\ds \)

\(=\)







\(\ds \int_0^{\frac 1 2} \rd u\)




















\(\ds \)

\(=\)







\(\ds \bigintlimits u 0 {\frac 1 2}\)





Integral of Constant














\(\ds \)

\(=\)







\(\ds \frac 1 2\)









$\blacksquare$





