# 

Source: https://proofwiki.org/wiki/Integral_of_Distribution_Function


This article needs to be linked to other articles.In particular: throughout, both definitions and resultsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

It has been suggested that this page or section be merged into Integral of Increasing Function Composed with Measurable Function.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space and $f$ be a $\mu$-measurable function. Let $p > 0, r \geq 0$.
For $\lambda > 0$, let $E_\lambda = \set {x \in X: \size {\map f x} > \lambda}$, so that $\map m \lambda = \map \mu {E_\lambda}$ is the distribution function of $f$.
Then:

$\ds \int_0^\infty p \lambda^{p - 1} \int_{E_\lambda} \size f^r \rd \mu \rd \lambda = \int_X \size f^{p + r} \rd \mu$
and in particular:

$\ds \int_0^\infty p \lambda^{p - 1} \map m \lambda \rd \lambda = \int_X \size f^p \rd \mu$


Proof













\(\ds \int_0^\infty p \lambda^{p - 1} \int_{E_\lambda} \size f^r \rd \mu \rd \lambda\)

\(=\)







\(\ds \int_0^\infty \int_{E_\lambda} p \lambda^{p - 1} \size f^r \rd \mu \rd \lambda\)




















\(\ds \)

\(=\)







\(\ds \int_X \int_0^{\size {\map f x} } p \lambda^{p - 1} \size f^r \rd \lambda \rd \mu\)





by Tonelli's Theorem














\(\ds \)

\(=\)







\(\ds \int_X \size f^r \int_0^{\size {\map f x} } p \lambda^{p - 1} \rd \lambda \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int_X \size f^r \size f^p \rd \mu\)





by Integral of Power














\(\ds \)

\(=\)







\(\ds \int_X \size f^{p + r} \rd \mu\)










We have that for any measurable $A \in \Sigma$:

$\map \mu A = \ds \int_A 1 \rd \mu$
Therefore, for $\lambda > 0$:

$\map \mu {E_\lambda} = \ds \int_{E_\lambda} 1 \rd \mu$
which can also be written:

$\map \mu {E_\lambda} = \ds \int_{E_\lambda} \size f^0 \rd \mu$

Therefore, taking $r = 0$ in the above, we obtain:














\(\ds \int_0^\infty p \lambda^{p - 1} \map m \lambda \rd \lambda\)

\(=\)







\(\ds \int_0^\infty p \lambda^{p - 1} \int_{E_\lambda} \size f^0 \rd \mu \rd \lambda\)




















\(\ds \)

\(=\)







\(\ds \int_X \size f^p \rd \mu\)









$\blacksquare$





