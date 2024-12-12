# 

Source: https://proofwiki.org/wiki/Change_of_Measures_Formula_for_Integrals

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ and $\nu$ be $\sigma$-finite measures on $\struct {X, \Sigma}$ such that: 

$\nu$ is absolutely continuous with respect to $\mu$.
Let $g$ be a Radon-Nikodym derivative of $\nu$ with respect to $\mu$.
Let $f : X \to \overline \R$ be a positive $\Sigma$-measurable function.

Then: 

$\ds \int f \rd \nu = \int \paren {f \cdot g} \rd \mu$
where:

$f \cdot g$ is the pointwise product of $f$ and $g$
$\ds \int \cdot \rd \nu$ denotes the integral of a positive $\Sigma$-measurable function with respect to $\nu$.


Corollary
Let $f : X \to \overline \R$ be a $\nu$-integrable function.

Then $f \cdot g$ is $\mu$-integrable with: 

$\ds \int f \rd \nu = \int \paren {f \cdot g} \rd \mu$
where:

$f \cdot g$ is the pointwise product of $f$ and $g$
$\ds \int \cdot \rd \nu$ denotes the integral of a $\nu$-integrable function with respect to $\nu$.


Proof
First consider $f$ a positive simple function. 
From Simple Function has Standard Representation, there exists:

a finite sequence $a_0, \ldots, a_n$ of non-negative real numbers
a partition $E_0, E_1, \ldots, E_n$ of $X$ into $\Sigma$-measurable sets
such that: 

$\ds f = \sum_{i \mathop = 0}^n a_i \chi_{E_i}$
Then:














\(\ds \int f \rd \nu\)

\(=\)







\(\ds \int \paren {\sum_{i \mathop = 0}^n a_i \chi_{E_i} } \rd \nu\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \int a_i \chi_{E_i} \rd \nu\)





Integral of Positive Measurable Function is Additive














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n a_i \int \chi_{E_i} \rd \nu\)





Integral of Positive Measurable Function is Positive Homogeneous














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n a_i \map \nu {E_i}\)





Integral of Characteristic Function: Corollary














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n a_i \int_{E_i} g \rd \mu\)





Definition of Radon-Nikodym Derivative














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n a_i \int \paren {\chi_{E_i} \cdot g} \rd \mu\)





Definition of Integral of Positive Measurable Function over Measurable Set














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \int \paren {a_i \chi_{E_i} } \cdot g \rd \mu\)





Integral of Positive Measurable Function is Positive Homogeneous














\(\ds \)

\(=\)







\(\ds \int \paren {\sum_{i \mathop = 0}^n a_i \chi_{E_i} } \cdot g \rd \mu\)





Integral of Positive Measurable Function is Additive














\(\ds \)

\(=\)







\(\ds \int \paren {f \cdot g} \rd \mu\)










Now suppose that $f$ is a general positive $\Sigma$-measurable function.
From Measurable Function is Pointwise Limit of Simple Functions, there exists an increasing sequence $\sequence {f_n}_{n \mathop \in \N}$ of positive simple functions such that: 

$\ds \map f x = \lim_{n \mathop \to \infty} \map {f_n} x$
for each $x \in X$.
For each $n \in \N$, we have:

$\ds \int f_n \rd \nu = \int \paren {f_n \cdot g} \rd \mu$
From the Monotone Convergence Theorem (Measure Theory), we have: 

$\ds \lim_{n \mathop \to \infty} \int f_n \rd \nu = \int f \rd \nu$
Note that $\sequence {f_n \cdot g}_{n \mathop \in \N}$ is an increasing sequence with $f_n \cdot g \to f \cdot g$.
So, from the Monotone Convergence Theorem (Measure Theory), we have:

$\ds \lim_{n \mathop \to \infty} \int \paren {f_n \cdot g} \rd \mu = \int \paren {f \cdot g} \rd \mu$
So, we have: 

$\ds \int f \rd \nu = \int \paren {f \cdot g} \rd \mu$
$\blacksquare$





