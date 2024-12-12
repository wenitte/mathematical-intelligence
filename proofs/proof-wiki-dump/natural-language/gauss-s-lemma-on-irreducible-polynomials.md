# 

Source: https://proofwiki.org/wiki/Gauss%27s_Lemma_on_Irreducible_Polynomials



Theorem
Let $\Z$ be the ring of integers.
Let $\Z \sqbrk X$ be the ring of polynomials over $\Z$.
Let $h \in \Z \sqbrk X$ be a polynomial.

The following statements are equivalent:

$(1): \quad h$ is irreducible in $\Q \sqbrk X$ and primitive
$(2): \quad h$ is irreducible in $\Z \sqbrk X$.



This article, or a section of it, needs explaining.In particular: Make sure it is understood what Definition:Primitive Polynomial over Integers meansYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof

This article, or a section of it, needs explaining.In particular: Needs to be made explicit as to exactly what is being assumed and what follows as a consequence. As it stands, the consequence of 1 implies 2, for example, still needs to be completed so as to explain exactly how that show $h$ is irreducible -- it relies upon the implicit understanding of what irreducible means.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
1 implies 2
Suppose first that $h$ is not irreducible in $\Z \sqbrk X$.
Let $\ds h = a_0 + a_1 X + \cdots + a_n X^n$.

If $\deg h = 0$, then the content of $h$ is:

$\cont h = \gcd \set {a_0} = \size {a_0}$
Since $h$ is primitive by hypothesis, we have $h = \pm 1$.
Now by Units of Ring of Polynomial Forms over Field, the units of $\Q \sqbrk X$ are the units of $\Q$.
Thus $h$ is a unit of $\Q \sqbrk X$.
Therefore $h$ is irreducible.

If $\deg h \ge 1$, then by Units of Ring of Polynomial Forms over Integral Domain, the units of $\Z \sqbrk X$ are the units of $\Z$.
Therefore $h$ is not a unit of $\Z \sqbrk X$.
Thus since $h$ is reducible, there is a non-trivial factorization $h = f g$ in $\Z \sqbrk X$, with $f$ and $g$ both not units.
If $\deg f = 0$, that is, $f \in \Z$, then $f$ divides each coefficient of $h$.
Since $h$ is primitive, this means that $f$ divides $\cont h = 1$.
But the divisors of $1$ are $\pm 1$, so $f = \pm 1$.
But then $f$ is a unit in $\Z \sqbrk X$, a contradiction.
Therefore $\deg f \ge 1$, so $f$ is a non-unit in $\Q \sqbrk X$.
Similarly, $g$ is a non-unit in $\Q \sqbrk X$.
Therefore $h = fg$ is a non-trivial factorization in $\Q \sqbrk X$.


2 implies 1

This article needs to be tidied.In particular: ok in terms of details, but presentation needs touching upPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Suppose now that $h$ is not irreducible in $\Q \sqbrk X$.
That is, $h$ has a non-trivial factorization in $\Q \sqbrk X$.
Since the units of $\Q \sqbrk X$ are the units of $\Q$, this means that $h = f g$, with $f$ and $g$ both of positive degree.
Let $c_f$ and $c_g$ be the contents of $f$ and $g$ respectively.
Define $\tilde f = c_f^{-1} f$ and $\tilde g = c_g^{-1} g$. 
By Content of Scalar Multiple, it follows that $\cont {\tilde f} = \cont {\tilde g} = 1$.
Moreover by Polynomial has Integer Coefficients iff Content is Integer we have $\tilde f, \tilde g \in \Z \sqbrk X$.
Now we have:

$\tilde f \tilde g = \dfrac {f g} {c_f c_g} = \dfrac h {c_f c_g}$
Taking the content, and using Content of Scalar Multiple we have:

$\cont {\tilde f \tilde g} = \dfrac 1 {c_f c_g} \cont h$
By Gauss's Lemma on Primitive Rational Polynomials we know that $\cont {\tilde f \tilde g} = 1$.
Moreover, by Irreducible Integer Polynomial is Primitive, $\cont h = 1$.
Therefore we must have $c_f c_g = 1$.

Thus we have a factorization in $\Z \sqbrk X$:

$\tilde f \tilde g = h$
This is a non-trivial factorization of $h$, as both $f$ and $g$ have positive degree.
Thus $h$ is not irreducible in $\Z \sqbrk X$.
$\blacksquare$


Source of Name
This entry was named for Carl Friedrich Gauss.





