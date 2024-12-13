# 

Source: https://proofwiki.org/wiki/Integral_of_Integrable_Function_is_Additive



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f, g: X \to \R$ be $\mu$-integrable functions.

Then $f + g$ is $\mu$-integrable, with:

$\ds \int \paren {f + g} \rd \mu = \int f \rd \mu + \int g \rd \mu$


Corollary 1
Let $f, g: X \to \overline \R$ be $\mu$-integrable functions.
Suppose that the pointwise sum $f + g$ is well-defined.

Then $f + g$ is $\mu$-integrable, with:

$\ds \int \paren {f + g} \rd \mu = \int f \rd \mu + \int g \rd \mu$


Corollary 2
Let $f, g: X \to \overline \R$ be $\mu$-integrable functions.
Suppose that the pointwise difference $f - g$ is well-defined.

Then $f - g$ is $\mu$-integrable, with:

$\ds \int \paren {f - g} \rd \mu = \int f \rd \mu - \int g \rd \mu$


Complex Function
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\struct {\C, \map \BB \C}$ be the complex numbers made into a measurable space with its Borel $\sigma$-algebra.
Let $f, g : X \to \C$ be a $\mu$-integrable function.

Then $f + g$ is $\mu$-integrable and:

$\ds \int \paren {f + g} \rd \mu = \int f \rd \mu + \int g \rd \mu$


Proof
From Pointwise Sum of Measurable Functions is Measurable:

$f + g$ is $\Sigma$-measurable.
From Function Measurable iff Positive and Negative Parts Measurable we have that: 

$\paren {f + g}^+$ and $\paren {f + g}^-$ are $\Sigma$-measurable.
Since $f$ and $g$ are $\mu$-integrable, we have that $f$ and $g$ are also $\Sigma$-measurable.
Then from Function Measurable iff Positive and Negative Parts Measurable we have that:

$f^+$, $f^-$, $g^+$ and $g^-$ are $\Sigma$-measurable.
We now want to show that: 

$\ds \int \paren {f + g}^+ \rd \mu < \infty$
and:

$\ds \int \paren {f + g}^- \rd \mu < \infty$

From Bound for Positive Part of Pointwise Sum of Functions, we have: 

$\paren {f + g}^+ \le f^+ + g^+$
Then: 














\(\ds \int \paren {f + g}^+ \rd \mu\)

\(\le\)







\(\ds \int \paren {f^+ + g^+} \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int f^+ \rd \mu + \int g^+ \rd \mu\)





Integral of Positive Measurable Function is Additive














\(\ds \)

\(<\)







\(\ds \infty\)





since $f$ and $g$ are $\mu$-integrable, both integrals are finite




From Bound for Negative Part of Pointwise Sum of Functions, we have: 

$\paren {f + g}^- \le f^- + g^-$
Then: 














\(\ds \int \paren {f + g}^- \rd \mu\)

\(\le\)







\(\ds \int \paren {f^- + g^-} \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int f^- \rd \mu + \int g^- \rd \mu\)





Integral of Positive Measurable Function is Additive














\(\ds \)

\(<\)







\(\ds \infty\)





since $f$ and $g$ are $\mu$-integrable, both integrals are finite




Now, we will show that: 

$\ds \int \paren {f + g} \rd \mu = \int f \rd \mu + \int g \rd \mu$
From Difference of Positive and Negative Parts, we have: 

$f + g = \paren {f + g}^+ - \paren {f + g}^-$
On the other hand, we have: 














\(\ds f + g\)

\(=\)







\(\ds \paren {f^+ - f^-} + \paren {g^+ - g^-}\)





Difference of Positive and Negative Parts














\(\ds \)

\(=\)







\(\ds \paren {f^+ + g^+} - \paren {f^- + g^-}\)









That is: 

$\paren {f^+ + g^+} - \paren {f^- + g^-} = \paren {f + g}^+ - \paren {f + g}^-$
From Integral of Positive Measurable Function is Additive, we have: 

$f^+ + g^+$ and $f^- + g^-$ are $\mu$-integrable.
From Integral of Integrable Function is Additive: Lemma, we then have: 

$\ds \int \paren {f^+ + g^+} \rd \mu - \int \paren {f^- + g^-} \rd \mu = \int \paren {f + g}^+ \rd \mu - \int \paren {f + g}^- \rd \mu$
From Integral of Positive Measurable Function is Additive, we have: 

$\ds \int \paren {f^+ + g^+} \rd \mu = \int f^+ \rd \mu + \int g^+ \rd \mu$
and:

$\ds \int \paren {f^- + g^-} \rd \mu = \int f^- \rd \mu + \int g^- \rd \mu$
Hence: 














\(\ds \int \paren {f + g} \rd \mu\)

\(=\)







\(\ds \int \paren {f + g}^+ \rd \mu - \int \paren {f + g}^- \rd \mu\)





Definition of Integral of Integrable Function














\(\ds \)

\(=\)







\(\ds \int f^+ \rd \mu + \int g^+ \rd \mu - \paren {\int f^- \rd \mu + \int g^- \rd \mu}\)




















\(\ds \)

\(=\)







\(\ds \paren {\int f^+ \rd \mu - \int f^- \rd \mu} + \paren {\int g^+ \rd \mu - \int g^- \rd \mu}\)




















\(\ds \)

\(=\)







\(\ds \int f \rd \mu + \int g \rd \mu\)





Definition of Integral of Integrable Function



$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $10.4 \ \text{(ii)}$




