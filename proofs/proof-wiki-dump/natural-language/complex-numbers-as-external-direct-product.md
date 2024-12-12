# 

Source: https://proofwiki.org/wiki/Complex_Numbers_as_External_Direct_Product

Theorem
Let $\struct {\C_{\ne 0}, \times}$ be the group of non-zero complex numbers under multiplication.
Let $\struct {\R_{> 0}, \times}$ be the group of positive real numbers under multiplication.
Let $\struct {K, \times}$ be the circle group.

Then:

$\struct {\C_{\ne 0}, \times} \cong \struct {\R_{> 0}, \times} \times \struct {K, \times}$

This article, or a section of it, needs explaining.In particular: It is apparent that the second $\times$ is Cartesian product, but this is not obvious.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
Let $\phi: \C_{\ne 0} \to \R_{> 0} \times K$ be the mapping:

$\map \phi {r e^{i \theta} } = \paren {r, e^{i \theta} }$
$\forall \tuple {a, b} \in \R_{> 0} \times K:\exists z = a \times b \in \C$ such that:

$\map \phi z = \tuple {a, b}$
by Complex Multiplication is Closed and $\R \subset \C$.
So $\phi$ is surjective.

To prove $\phi$ is injective, let $\map \phi {r_1 e^{i \theta_1} } = \map \phi {r_2 e^{i \theta_2} }$.














\(\ds \map \phi {r_1 e^{i \theta_1} }\)

\(=\)







\(\ds \map \phi {r_2 e^{i \theta_2} }\)














\(\ds \leadsto \ \ \)





\(\ds \paren {r_1, e^{i \theta_1} }\)

\(=\)







\(\ds \paren {r_2, e^{i \theta_2} }\)





Definition of $\phi$








\(\ds \leadsto \ \ \)





\(\ds r_1 = r_2\)

\(\land\)







\(\ds e^{i \theta_1} = e^{i \theta_2}\)














\(\ds \leadsto \ \ \)





\(\ds r_1 e^{i \theta_1}\)

\(=\)







\(\ds r_2 e^{i \theta_2}\)









So $\phi$ is injective, thus bijective.

Also:














\(\ds \map \phi {r_1 e^{i \theta_1} \times r_2 e^{i \theta_2} }\)

\(=\)







\(\ds \map \phi {r_1 r_2 e^{i \theta_1 + i \theta_2} }\)





Product of Complex Numbers in Exponential Form














\(\ds \)

\(=\)







\(\ds \paren {r_1 r_2, e^{i \theta_1 + i \theta_2} }\)





Definition of $\phi$














\(\ds \)

\(=\)







\(\ds \paren {r_1 \times r_2, e^{i \theta_1} \times e^{i \theta_2} }\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \paren {r_1, e^{i\theta_1} } \times \paren {r_2, e^{i\theta_2} }\)





Definition of Operation Induced by Direct Product














\(\ds \)

\(=\)







\(\ds \map \phi {r_1 e^{i \theta_1} } \times \map \phi {r_2 e^{i \theta_2} }\)





Definition of $\phi$




This article, or a section of it, needs explaining.In particular: It is not clear how $\paren {r_1 \times r_2, e^{i \theta_1} \times e^{i \theta_2} } = \paren {r_1, e^{\theta_1} } \times \paren {r_2, e^{\theta_2} }$. The first $\times$ is the times of multiplication, real and complex, and the second appears to be the $\times$ of cartesian product. In any case, it needs to be established that $\paren {a \times b, c \times d} = \tuple {a, c} \times \tuple {b, d}$ and in what context this holds -- and indeed, what it actually means.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
So $\phi$ is a group homomorphism.
Since it is bijective, it is a group isomorphism.
$\blacksquare$





