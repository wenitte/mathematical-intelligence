# 

Source: https://proofwiki.org/wiki/Integral_of_Integrable_Function_is_Homogeneous



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f: X \to \overline \R$ be a $\mu$-integrable function.
Let $\lambda \in \R$.
Let $\lambda f$ be the pointwise $\lambda$-multiple of $f$.

Then $\lambda f$ is $\mu$-integrable, and:

$\ds \int \lambda f \rd \mu = \lambda \int f \rd \mu$


Complex Function
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\struct {\C, \map \BB \C}$ be the complex numbers made into a measurable space with its Borel $\sigma$-algebra.
Let $f : X \to \C$ be a $\mu$-integrable function.
Let $\lambda \in \C$. 

Then $\lambda f$ is $\mu$-integrable and:

$\ds \int \lambda f \rd \mu = \lambda \int f \rd \mu$


Proof
First suppose that $\lambda \ge 0$. 
From Positive Part of Multiple of Function, we have: 

$\paren {\lambda f}^+ = \lambda f^+$
From Negative Part of Multiple of Function, we have:

$\paren {\lambda f}^- = \lambda f^-$
From Function Measurable iff Positive and Negative Parts Measurable, we have: 

$f^-$ and $f^+$ are $\Sigma$-measurable.
From Pointwise Scalar Multiple of Measurable Function is Measurable, we have: 

$\lambda f^-$, $\lambda f^+$ and $\lambda f$ are $\Sigma$-measurable.
Then, we have: 














\(\ds \int \paren {\lambda f}^+ \rd \mu\)

\(=\)







\(\ds \int \lambda f^+ \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \lambda \int f^+ \rd \mu\)





Integral of Positive Measurable Function is Positive Homogeneous














\(\ds \)

\(<\)







\(\ds \infty\)





since $f$ is $\mu$-integrable



Similarly: 














\(\ds \int \paren {\lambda f}^- \rd \mu\)

\(=\)







\(\ds \int \lambda f^- \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \lambda \int f^- \rd \mu\)





Integral of Positive Measurable Function is Positive Homogeneous














\(\ds \)

\(<\)







\(\ds \infty\)





since $f$ is $\mu$-integrable



So: 

$\lambda f$ is $\mu$-integrable.
We then have: 














\(\ds \int \lambda f \rd \mu\)

\(=\)







\(\ds \int \paren {\lambda f}^+ \rd \mu - \int \paren {\lambda f}^- \rd \mu\)





Definition of Integral of Integrable Function














\(\ds \)

\(=\)







\(\ds \lambda \int f^+ \rd \mu - \lambda \int f^- \rd \mu\)





Positive Part of Multiple of Function, Negative Part of Multiple of Function














\(\ds \)

\(=\)







\(\ds \lambda \paren {\int f^+ \rd \mu - \int f^- \rd \mu}\)




















\(\ds \)

\(=\)







\(\ds \lambda \int f \rd \mu\)





Definition of Integral of Integrable Function




Now suppose that $\lambda < 0$. 
From Positive Part of Multiple of Function, we have: 

$\paren {\lambda f}^+ = -\lambda f^-$
From Negative Part of Multiple of Function, we have: 

$\paren {\lambda f}^- = -\lambda f^+$
From Function Measurable iff Positive and Negative Parts Measurable, we have: 

$f^-$ and $f^+$ are $\Sigma$-measurable.
From Pointwise Scalar Multiple of Measurable Function is Measurable, we have: 

$\lambda f^-$, $\lambda f^+$ and $\lambda f$ are $\Sigma$-measurable.
Then we have: 














\(\ds \int \paren {\lambda f}^+ \rd \mu\)

\(=\)







\(\ds \int \paren {-\lambda f^-} \rd \mu\)




















\(\ds \)

\(=\)







\(\ds -\lambda \int f^- \rd \mu\)





Integral of Positive Measurable Function is Positive Homogeneous, since $-\lambda \ge 0$














\(\ds \)

\(<\)







\(\ds \infty\)





since $f$ is $\mu$-integrable



Similarly:














\(\ds \int \paren {\lambda f}^- \rd \mu\)

\(=\)







\(\ds \int \paren {-\lambda f^+} \rd \mu\)




















\(\ds \)

\(=\)







\(\ds -\lambda \int f^+ \rd \mu\)





Integral of Positive Measurable Function is Positive Homogeneous














\(\ds \)

\(<\)







\(\ds \infty\)





since $f$ is $\mu$-integrable



So: 

$\lambda f$ is $\mu$-integrable.
We then have: 














\(\ds \int \lambda f \rd \mu\)

\(=\)







\(\ds \int \paren {\lambda f}^+ \rd \mu - \int \paren {\lambda f}^- \rd \mu\)





Definition of Integral of Integrable Function














\(\ds \)

\(=\)







\(\ds \int \paren {-\lambda f^-} \rd \mu - \int \paren {-\lambda f^+} \rd \mu\)





Positive Part of Multiple of Function, Negative Part of Multiple of Function














\(\ds \)

\(=\)







\(\ds \lambda \int f^+ \rd \mu - \lambda \int f^- \rd \mu\)





Integral of Positive Measurable Function is Positive Homogeneous














\(\ds \)

\(=\)







\(\ds \lambda \paren {\int f^+ \rd \mu - \int f^- \rd \mu}\)




















\(\ds \)

\(=\)







\(\ds \lambda \int f \rd \mu\)





Definition of Integral of Integrable Function



$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $10.4 \ \text{(i)}$




