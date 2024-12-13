# 

Source: https://proofwiki.org/wiki/Moment_Generating_Function_of_Gamma_Distribution



Theorem
Let $X \sim \map \Gamma {\alpha, \beta}$ for some $\alpha, \beta > 0$, where $\Gamma$ is the Gamma distribution.
Then the moment generating function of $X$ is given by: 

$\map {M_X} t = \begin {cases} \paren {1 - \dfrac t \beta}^{-\alpha} & t < \beta \\ \text {does not exist} & t \ge \beta \end {cases}$


Proof
From the definition of the Gamma distribution, $X$ has probability density function:

$\map {f_X} x = \dfrac {\beta^\alpha x^{\alpha - 1} e^{-\beta x} } {\map \Gamma \alpha}$
From the definition of a moment generating function:

$\ds \map {M_X} t = \expect {e^{t X} } = \int_0^\infty e^{t x} \map {f_X} x \rd x$

First take $t < \beta$. 
Then:














\(\ds \map {M_X} t\)

\(=\)







\(\ds \frac {\beta^\alpha} {\map \Gamma \alpha} \int_0^\infty x^{\alpha - 1} e^{-\paren {\beta - t} x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {\beta^\alpha} {\map \Gamma \alpha} \int_0^\infty \paren {\frac u {\beta - t} }^{\alpha - 1} e^{-u} \frac {\rd u} {\beta - t}\)





substituting $\paren {\beta - t} x = u$














\(\ds \)

\(=\)







\(\ds \frac {\beta^\alpha} {\map \Gamma \alpha \paren {\beta - t}^\alpha} \int_0^\infty u^{\alpha - 1} e^{-u} \rd u\)




















\(\ds \)

\(=\)







\(\ds \frac {\beta^\alpha \map \Gamma \alpha} {\map \Gamma \alpha \paren {\beta - t}^\alpha}\)





Definition of Gamma Function














\(\ds \)

\(=\)







\(\ds \paren {\frac \beta {\beta - t} }^\alpha\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {\beta - t} \beta}^{-\alpha}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - \frac t \beta}^{-\alpha}\)









$\Box$

Now take $t = \beta$. 
Our integral becomes: 














\(\ds \frac {\beta^\alpha} {\map \Gamma \alpha} \int_0^\infty x^{\alpha - 1} \rd x\)

\(=\)







\(\ds \frac {\beta^\alpha} {\alpha \map \Gamma \alpha} \bigintlimits {x^\alpha} 0 \infty\)





Primitive of Power, Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds 0 + \frac {\beta^\alpha} {\alpha \map \Gamma \alpha} \lim_{x \mathop \to \infty} x^\alpha\)




















\(\ds \)

\(\to\)







\(\ds \infty\)





for $\alpha > 0$, $x^\alpha$ increases without bound as $x \mathop \to \infty$



So $\expect {e^{\beta X} }$ does not exist.
$\Box$

Finally take $t > \beta$.
We have that $-\paren {\beta - t}$ is positive.
As a consequence of Exponential Dominates Polynomial, we have:

$x^{\alpha - 1} < e^{-\paren {\beta - t} x}$
for sufficiently large $x$. 
Therefore, in this case, the integrand increases without bound. 
We conclude that the integral is divergent.
Hence $\expect {e^{t X} }$ does not exist for $t > \beta$. 
$\blacksquare$


Examples
In the below, $t < \beta$ throughout.


First Moment
The first moment generating function of $X$ is given by: 

$\map { {M_X}'} t = \dfrac {\beta^\alpha \alpha} {\paren {\beta - t}^{\alpha + 1} }$


Second Moment
The second moment generating function of $X$ is given by: 

$\map { {M_X}} t = \dfrac {\beta^\alpha \alpha \paren {\alpha + 1} } {\paren {\beta - t}^{\alpha + 2} }$


Third Moment
The third moment generating function of $X$ is given by: 

$\map { {M_X}} t = \dfrac {\beta^\alpha \alpha \paren {\alpha + 1} \paren {\alpha + 2} } {\paren {\beta - t}^{\alpha + 3} }$


Fourth Moment
The fourth moment generating function of $X$ is given by: 

$\map { {M_X}^{\paren 4} } t = \dfrac {\beta^\alpha \alpha \paren {\alpha + 1} \paren {\alpha + 2} \paren {\alpha + 3} } {\paren {\beta - t}^{\alpha + 4} }$


Sources
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $13$: Probability distributions
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $15$: Probability distributions




