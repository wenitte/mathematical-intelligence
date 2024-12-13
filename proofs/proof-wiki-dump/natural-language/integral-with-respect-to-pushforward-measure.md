# 

Source: https://proofwiki.org/wiki/Integral_with_respect_to_Pushforward_Measure



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\struct {X', \Sigma'}$ be a measurable space.
Let $T: X \to X'$ be a $\Sigma \, / \, \Sigma'$-measurable mapping.
Let $f: X' \to \overline \R$ be a positive $\Sigma'$-measurable function.
Let $\map T \mu$ be the pushforward measure of $\mu$ under $T$.

Then $f \circ T: X \to \overline \R$ is positive and $\Sigma$-measurable with: 

$\ds \int_{X'} f \rd \map T \mu = \int_X f \circ T \rd \mu$


Corollary
Then $f \circ T : X \to \overline \R$ is $\mu$-integrable if and only if $f : X' \to \overline \R$ is $\map T \mu$-integrable.
In this case, we have: 

$\ds \int_{X'} f \rd \map T \mu = \int_X f \circ T \rd \mu$


Proof
From Composition of Measurable Mappings is Measurable:

$f \circ T$ is $\Sigma$-measurable.
Clearly $f \circ T \ge 0$, so $f \circ T$ is a positive $\Sigma$-measurable function.
We first show the proposition for characteristic functions $f$.
Suppose $f = \chi_A$ for $A \in \Sigma'$.
Then, we have: 














\(\ds \int_{X'} \chi_A \rd \map T \mu\)

\(=\)







\(\ds \map T {\mu} \sqbrk A\)





Integral of Characteristic Function: Corollary














\(\ds \)

\(=\)







\(\ds \map \mu {T^{-1} \sqbrk A}\)





Definition of Pushforward Measure














\(\ds \)

\(=\)







\(\ds \int_X \chi_{T^{-1} \sqbrk A} \rd \mu\)





Integral of Characteristic Function: Corollary














\(\ds \)

\(=\)







\(\ds \int_X \chi_A \circ T \rd \mu\)





Characteristic Function of Preimage



So, we have: 

$\ds \int_{X'} \chi_A \rd \map T \mu = \int_X \chi_A \circ T \rd \mu$
whenever $A \in \Sigma'$. 

Now suppose that $f$ is a positive simple function.
From Simple Function has Standard Representation, there exists:

a finite sequence $a_0, \ldots, a_n$ of non-negative real numbers
a partition $E_0, E_1, \ldots, E_n$ of $X$ into $\Sigma'$-measurable sets
such that: 

$\ds f = \sum_{i \mathop = 0}^n a_i \chi_{E_i}$
Then: 














\(\ds \int_{X'} f \rd \map T \mu\)

\(=\)







\(\ds \int_{X'} \paren {\sum_{i \mathop = 0}^n a_i \chi_{E_i} } \rd \map T \mu\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \int_{X'} a_i \chi_{E_i} \rd \map T \mu\)





Integral of Positive Measurable Function is Additive














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n a_i \int_{X'} \chi_{E_i} \rd \map T \mu\)





Integral of Positive Measurable Function is Positive Homogeneous














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n a_i \int_X \chi_{E_i} \circ T \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^n \int_X \paren {a_i \chi_{E_i} } \circ T \rd \mu\)





Integral of Positive Measurable Function is Positive Homogeneous














\(\ds \)

\(=\)







\(\ds \int_X \paren {\sum_{i \mathop = 0}^n a_i \chi_{E_i} } \circ T \rd \mu\)





Integral of Positive Measurable Function is Additive














\(\ds \)

\(=\)







\(\ds \int_X f \circ T \rd \mu\)










Now suppose that $f$ is a general positive $\Sigma'$-measurable function.
From Measurable Function is Pointwise Limit of Simple Functions, there exists an increasing sequence $\sequence {f_n}_{n \mathop \in \N}$ of positive simple functions such that: 

$\ds \map f x = \lim_{n \mathop \to \infty} \map {f_n} x$
for each $x \in X$.
For each $n \in \N$, we have:

$\ds \int_{X'} f_n \rd \map T \mu = \int_X f_n \circ T \rd \mu$
Then:














\(\ds \int_{X'} f \rd \map T \mu\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_{X'} f_n \rd \map T \mu\)





Monotone Convergence Theorem (Measure Theory)














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_X f_n \circ T \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int_X f \circ T \rd \mu\)





Monotone Convergence Theorem (Measure Theory)



$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $14.1$




