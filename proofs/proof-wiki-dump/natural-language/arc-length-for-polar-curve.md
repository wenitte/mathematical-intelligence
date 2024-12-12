# 

Source: https://proofwiki.org/wiki/Arc_Length_for_Polar_Curve

Theorem
Let $a$ and $b$ be real numbers.
Let $\CC$ be a simple curve continuous on $\closedint a b$ and continuously differentiable on $\openint a b$.
Let $\CC$ be described by the parametric equations:

$\begin {cases}
x & = r \cos \theta \\
y & = r \sin \theta
\end {cases}$
where:

$r$ is a function of $\theta$
$\theta \in \closedint a b$.

Then the length $s$ of $\CC$ is given by:

$\ds s = \int_a^b \sqrt {r^2 + \paren {\frac {\d r} {\d \theta} }^2} \rd \theta$


Theorem
Note that $\CC$ satisfies the conditions of Arc Length for Parametric Equations.
So: 

$\ds s = \int_a^b \sqrt {\paren {\frac {\d x} {\d \theta} }^2 + \paren {\frac {\d y} {\d \theta} }^2} \rd \theta$
We have: 














\(\ds \frac {\d x} {\d \theta}\)

\(=\)







\(\ds \frac \d {\d \theta} \paren {r \cos \theta}\)




















\(\ds \)

\(=\)







\(\ds \frac {\d r} {\d \theta} \cos \theta + r \frac \d {\d \theta} \paren {\cos \theta}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {\d r} {\d \theta} \cos \theta - r \sin \theta\)





Derivative of Cosine Function



and:














\(\ds \frac {\d y} {\d \theta}\)

\(=\)







\(\ds \frac \d {\d \theta} \paren {r \sin \theta}\)




















\(\ds \)

\(=\)







\(\ds \frac {\d r} {\d \theta} \sin \theta + r \frac \d {\d \theta} \paren {\sin \theta}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \frac {\d r} {\d \theta} \sin \theta + r \cos \theta\)





Derivative of Sine Function



We then have:














\(\ds s\)

\(=\)







\(\ds \int_a^b \sqrt {\paren {\frac {\d r} {\d \theta} \cos \theta - r \sin \theta}^2 + \paren {\frac {\d r} {\d \theta} \sin \theta + r \cos \theta}^2} \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \int_a^b \sqrt {\paren {\frac {\d r} {\d \theta} }^2 \cos^2 \theta - 2 r \frac {\d r} {\d \theta} \sin \theta \cos \theta + r^2 \sin^2 \theta + \paren {\frac {\d r} {\d \theta} }^2 \sin^2 \theta + 2 r \frac {\d r} {\d \theta} \sin \theta \cos \theta + r^2 \cos^2 \theta} \rd \theta\)





Square of Sum














\(\ds \)

\(=\)







\(\ds \int_a^b \sqrt {\paren {\frac {\d r} {\d \theta} }^2 \paren {\sin^2 \theta + \cos^2 \theta} + r^2 \paren {\sin^2 \theta + \cos^2 \theta} } \rd \theta\)




















\(\ds \)

\(=\)







\(\ds \int_a^b \sqrt {r^2 + \paren {\frac {\d r} {\d \theta} }^2} \rd \theta\)





Sum of Squares of Sine and Cosine



$\blacksquare$


Also see
Arc Length for Parametric Equations




