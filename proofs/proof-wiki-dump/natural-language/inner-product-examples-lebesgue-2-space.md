# 

Source: https://proofwiki.org/wiki/Inner_Product/Examples/Lebesgue_2-Space


It has been suggested that this page or section be merged into Definition:L-2 Inner Product.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Example of Inner Product
Let $\tuple {X, \Sigma, \mu}$ be a measure space.
Let $\map {L^2} \mu$ be the Lebesgue $2$-space of $\mu$.

Let $\innerprod \cdot \cdot: \map {L^2} \mu \times \map {L^2} \mu \to \C$ be the mapping defined by:

$\ds \innerprod f g = \int f \, \overline g \rd \mu$

Then $\innerprod \cdot \cdot$ is an inner product on $\map {L^2} \mu$.


Proof
First of all, by Hölder's Inequality for Integrals with $p = q = 2$, it follows that:

$\ds \int f \, \overline g \rd \mu$
is defined.

Now checking the axioms for an inner product in turn:


$(1)$ Conjugate Symmetry













\(\ds \innerprod f g\)

\(=\)







\(\ds \int f \, \overline g \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int \overline {\overline f \, g} \rd \mu\)





Complex Conjugation is Involution














\(\ds \)

\(=\)







\(\ds \overline {\int g \, \overline f \rd \mu}\)




















\(\ds \)

\(=\)







\(\ds \overline {\innerprod g f}\)









$\Box$


$(2)$ Sesquilinearity













\(\ds \innerprod {\lambda f + g} h\)

\(=\)







\(\ds \int \paren {\lambda f + g} \overline h \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int \paren {\lambda f \, \overline h} + \paren {g \, \overline h} \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int \lambda f \, \overline h \rd \mu + \int g \, \overline h \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \lambda \int f \, \overline h \rd \mu + \int g \, \overline h \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \lambda \innerprod f h + \innerprod g h\)









$\Box$


$(3)$ Non-Negative Definiteness













\(\ds \innerprod f f\)

\(=\)







\(\ds \int f \, \overline f \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int \cmod f^2 \rd \mu\)




















\(\ds \)

\(\in\)







\(\ds \R_{\ge 0}\)





Integral of Positive Function is Positive



$\Box$


$(4)$ Positivity
Suppose that $\innerprod f f = 0$.
That is:

$\ds \int \cmod f^2 \rd \mu = 0$
Hence:

$\ds \int \cmod {f - 0}^2 \rd \mu = 0$
which is to say that $f = 0$ in $\map {L^2} \mu$ by definition of Lebesgue space.
$\Box$

Having verified all the axioms, we conclude $\innerprod \cdot \cdot$ is an inner product.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 1.$ Elementary Properties and Examples: Example $1.3$




