# 

Source: https://proofwiki.org/wiki/Gauss-Lucas_Theorem


This article needs to be tidied.In particular: Lifted in its entirety from Wikipedia (see talk page).  $\LaTeX$ has been standardised, the rest of the structure needs adjustment.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.In particular: everywhere, throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $P$ be a non-constant polynomial in $\C$.
Then all zeroes of its derivative $P'$ belong to the convex hull of the set of zeroes of $P$.


Proof
Over the complex numbers, $P$ is a product of prime factors:

$\ds \map P z = \alpha \prod_{i \mathop = 1}^n \paren{ z - a_i }$
where:

$a_1, a_2, \ldots, a_n \in \C$ are the (not necessary distinct) zeroes of $P$
$\alpha \in \C$ is the leading coefficient of $P$
$n$ is the degree of $P$.
Let $z$ be any complex number for which $\map P z \ne 0$.
Then we have for the logarithmic derivative:

$\ds \frac {\map {P'} z} {\map P z} = \sum_{i \mathop = 1}^n \frac 1 {z - a_i}$

In particular, if $z$ is a zero of $P'$ and $\map P z \ne 0$, then:

$\ds \sum_{i \mathop = 1}^n \frac 1 {z - a_i} = 0$
or:

$\ds \sum_{i \mathop = 1}^n \frac {\overline z - \overline {a_i} } {\size {z - a_i}^2} = 0$
This may also be written as:

$\ds \paren {\sum_{i \mathop = 1}^n \frac 1 {\size {z - a_i}^2} } \overline z = \paren {\sum_{i \mathop = 1}^n \frac 1 {\size {z - a_i}^2} \overline {a_i} }$
Taking their conjugates, we see that $z$ is a weighted sum with positive coefficients that sum to one, or the barycenter on affine coordinates, of the complex numbers $a_i$ (with different mass assigned on each root whose weights collectively sum to $1$).

On the other hand, if $\map P z = \map {P'} z = 0$, then:

$z = 1 \cdot z + 0 \cdot a_i$
and is still a convex combination of the zeroes of $P$.
$\blacksquare$


Source of Name
This entry was named for Carl Friedrich Gauss and François Édouard Anatole Lucas.





