# 

Source: https://proofwiki.org/wiki/Integral_of_Positive_Measurable_Function_with_respect_to_Restricted_Measure

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space. 
Let $\GG \subseteq \Sigma$ be a sub-$\sigma$-algebra of $\Sigma$.
Let $\mu \restriction_\GG$ be the restriction of $\mu$ to $\GG$.
Let $f : X \to \overline \R$ be a positive $\GG$-measurable function.

Then: 

$\ds \int f \rd \mu = \int f \rd \mu \restriction_\GG$


Proof
We first prove the result for positive simple functions.
Let $f : X \to \R$ be a positive simple function that is $\GG$-measurable.
From  Simple Function has Standard Representation there exists:

a finite sequence $a_1, \ldots, a_n$ of real numbers
a partition $E_1, \ldots, E_n$ of $\GG$-measurable sets
such that: 

$f = \ds \sum_{j \mathop = 1}^n a_j \chi_{E_j}$
Then we have: 














\(\ds \int f \rd \mu \restriction_G\)

\(=\)







\(\ds \sum_{j \mathop = 1}^n a_j \map {\paren {\mu \restriction_G} } {E_j}\)





Integral of Positive Measurable Function Extends Integral of Positive Simple Function, Definition of Integral of Positive Simple Function














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n a_j \map \mu {E_j}\)





Definition of Restricted Measure














\(\ds \)

\(=\)







\(\ds \int f \rd \mu\)





Integral of Positive Measurable Function Extends Integral of Positive Simple Function, Definition of Integral of Positive Simple Function



So we get the theorem for positive simple functions.

Now let $f$ be a general positive $\GG$-measurable function.
From Measurable Function is Pointwise Limit of Simple Functions, there exists an increasing sequence $\sequence {f_n}_{n \mathop \in \N}$ of positive simple functions such that: 

$\ds \map f x = \lim_{n \mathop \to \infty} \map {f_n} x$
for each $x \in X$.
Then for each $n \in \N$ we have: 

$\ds \int f_n \rd \mu = \int f_n \rd \mu \restriction_\GG$
From Integral of Positive Measurable Function as Limit of Integrals of Positive Simple Functions, taking $n \to \infty$ we obtain: 

$\ds \int f \rd \mu = \int f \rd \mu \restriction_\GG$
$\blacksquare$





