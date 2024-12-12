# 

Source: https://proofwiki.org/wiki/Content_of_Rational_Polynomial_is_Multiplicative/Proof_1

Theorem
Let $h \in \Q \sqbrk X$ be a polynomial with rational coefficients.
Let $\cont h$ denote the content of $h$.

Then for any polynomials $f, g \in \Q \sqbrk X$ with rational coefficients:

$\cont {f g} = \cont f \cont g$


Proof
Let $f^* = \dfrac 1 {\cont f} f$, $g^* = \dfrac 1 {\cont g}  g$
By Content of Scalar Multiple:

$\cont {f^*} = \cont {g^*} = 1$
That is, $f^*$ and $g^*$ are primitive.
By Gauss's Lemma on Primitive Rational Polynomials, it follows that $f^* g^*$ is primitive.
Then:














\(\ds \cont {f g}\)

\(=\)







\(\ds \cont f \cont g \cont {f^* g^*}\)





Content of Scalar Multiple














\(\ds \)

\(=\)







\(\ds \cont f \cont g\)





because $\cont {f^* g^*} = 1$



$\blacksquare$





