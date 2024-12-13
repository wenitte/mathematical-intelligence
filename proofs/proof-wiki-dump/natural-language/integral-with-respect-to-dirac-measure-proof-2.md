# 

Source: https://proofwiki.org/wiki/Integral_with_respect_to_Dirac_Measure/Proof_2

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $x \in X$, and let $\delta_x$ be the Dirac measure at $x$.

Let $f \in \MM _{\overline \R}, f: X \to \overline \R$ be a measurable function.

Then:

$\ds \int f \rd \delta_x = \map f x$
where the integral sign denotes the $\delta_x$-integral.


Proof
We first prove the result for positive simple functions.
Let $g : X \to \R$ be a positive simple function.
From Simple Function has Standard Representation, there exists:

a finite sequence $a_1, \ldots, a_n$ of real numbers
a partition $E_0, E_1, \ldots, E_n$ of $X$ into $\Sigma$-measurable sets
such that: 

$\ds g = \sum_{i \mathop = 0}^n a_i \chi_{E_i}$
Then, from the definition of the $\delta_x$-integral of a positive simple function:

$\ds \int g \rd \delta_x = \sum_{i \mathop = 1}^n a_i \map {\delta_x} {E_i}$
Since $E_0, E_1, \ldots, E_n$ is a partition of $X$, precisely one contains $x$. 
That is, $x \in E_i$ for precisely one $i$. 
Then:

$\map {\delta_x} {E_j} = 0$ for $i \ne j$
leaving:

$\ds \int g \rd \delta_x = a_i$
Note that: 

$\ds \map g x = \sum_{j \mathop = 0}^n a_j \map {\chi_{E_j} } x$
and $\map {\chi_{E_j} } x = 1$ if and only if $j = i$, so we have: 

$\map g x = a_i$
So we have: 

$\ds \int g \rd \delta_x = \map g x$
for positive simple functions $g$.

Now consider a positive $\Sigma$-measurable function $f : X \to \overline \R_{\ge 0}$. 
From Measurable Function is Pointwise Limit of Simple Functions, there exists an increasing sequence $\sequence {f_n}_{n \mathop \in \N}$ of positive simple functions such that: 

$\ds \map f x = \lim_{n \mathop \to \infty} \map {f_n} x$
for each $x \in X$.
For each $n \in \N$, we have: 

$\ds \int f_n \rd \delta_x = \map {f_n} x$
from our previous work. 
From the Integral of Positive Measurable Function as Limit of Integrals of Positive Simple Functions, we have: 

$\ds \int f \rd \delta_x = \lim_{n \mathop \to \infty} \int f_n \rd \delta_x$
That is: 

$\ds \int f \rd \delta_x = \lim_{n \mathop \to \infty} \map {f_n} x = \map f x$

Now consider an arbitrary $\Sigma$-measurable function $f : X \to \overline \R$. 
From Function Measurable iff Positive and Negative Parts Measurable, we have: 

$f^+$ and $f^-$ are $\Sigma$-measurable.
Now, if $\map f x \ge 0$, we have:

$\map {f^+} x = \map f x$
and:

$\map {f^-} x = 0$
So:

$\ds \int f^+ \rd \delta_x = \map f x$
and:

$\ds \int f^- \rd \delta_x = 0$
giving:














\(\ds \int f \rd \delta_x\)

\(=\)







\(\ds \int f^+ \rd \delta_x - \int f^- \rd \delta_x\)





Definition of Integral of Integrable Function














\(\ds \)

\(=\)







\(\ds \map f x - 0\)




















\(\ds \)

\(=\)







\(\ds \map f x\)









If $\map f x < 0$, then we have: 

$\map {f^+} x = 0$
and:

$\map {f^-} x = -\map f x$
so that: 

$\ds \int f^+ \rd \delta_x = 0$
and:

$\ds \int f^- \rd \delta_x = -\map f x$
Then we have:














\(\ds \int f \rd \delta_x\)

\(=\)







\(\ds \int f^+ \rd \delta_x - \int f^- \rd \delta_x\)





Definition of Integral of Integrable Function














\(\ds \)

\(=\)







\(\ds 0 - \paren {-\map f x}\)




















\(\ds \)

\(=\)







\(\ds \map f x\)









Hence the demand.
$\blacksquare$





