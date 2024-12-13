# 

Source: https://proofwiki.org/wiki/Median_of_Cauchy_Distribution

Theorem
Let $X$ be a continuous random variable with a Cauchy distribution:

$\map {f_X} x = \dfrac 1 {\pi \lambda \paren {1 + \paren {\frac {x - \gamma} \lambda }^2} }$
for:

$\lambda \in \R_{>0}$
$\gamma \in \R$
The median of $X$ is $\gamma$.


Proof
From the definition of the Cauchy distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac 1 {\pi \lambda \paren {1 + \paren {\frac {x - \gamma} \lambda }^2} }$
Note that $f_X$ is non-zero, sufficient to ensure a unique median.
By the definition of a median, to prove that $\gamma$ is the median of $X$ we must verify: 

$\ds \map \Pr {X < \gamma} = \int_{-\infty}^\gamma \map {f_X} x \rd x = \frac 1 2$
We have:














\(\ds \int_{-\infty}^\gamma \map {f_X} x \rd x\)

\(=\)







\(\ds \frac 1 {\pi \lambda}  \int_{-\infty}^\gamma \dfrac 1 {\paren {1 + \paren {\frac {x - \gamma} \lambda }^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \pi \int_{-\infty}^0 \dfrac 1 {1 + t^2} \rd t\)





substituting $t = \dfrac {x - \gamma} {\lambda}$














\(\ds \)

\(=\)







\(\ds \dfrac 1 \pi \bigintlimits {\arctan t} {-\infty} {0}\)





Primitive of $\dfrac 1 {1 + x^2}$














\(\ds \)

\(=\)







\(\ds \dfrac 1 \pi \paren {0 - \paren {-\dfrac \pi 2} }\)





Definition of Arctangent and Arctangent of Zero is Zero














\(\ds \)

\(=\)







\(\ds \frac 1 2\)









$\blacksquare$


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Cauchy distribution
Weisstein, Eric W. "Cauchy Distribution." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/CauchyDistribution.html




