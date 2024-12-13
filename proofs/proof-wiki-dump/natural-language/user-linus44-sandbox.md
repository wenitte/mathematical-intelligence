# 

Source: https://proofwiki.org/wiki/User:Linus44/Sandbox



Theorem
Let $K$ be a division ring.
Let $V$, $W$ be finite dimensional $K$-vector spaces.
Then:

$\dim_{K} V = \dim_{K} W$ if and only if $V \simeq W$
where:

$V \simeq W$ indicates that $V$ and $W$ are isomorphic, and
$\dim_{K} V$ and $\dim_{K} W$ are the dimensions of $V$ and $W$ respectively.


Proof
Sufficient condition
Suppose that $V$ and $W$ have bases of the same cardinality.
Let $\mathbf e = \left({ e_1,\ldots, e_n}\right)$ and $\mathbf f = \left({ f_1,\ldots,f_n }\right)$ be bases for $V$ and $W$ respectively.
Define:

$\lambda:V \rightarrow W$
$:\sum\limits_{i = 1}^n v_i e_i \mapsto \sum\limits_{i = 1}^n v_if_i$
Then by construction $\lambda$ maps the basis $\mathbf e$ to the basis $\mathbf f$.
Therefore by Linear Transformation of Vector Space Equivalent Statements it suffices to show that $\lambda$ is a linear transformation.

Let:

$\displaystyle v = \sum_{i = 1}^n v_i e_i,\ v'= \sum_{i = 1}^n v_i' e_i \in V,\ k \in K$:
We have:














\(\ds \lambda\left({ cv+v' }\right)\)

\(=\)







\(\ds \lambda\left({ c\sum_{i = 1}^n v_i e_i + \sum_{i = 1}^n v_i' e_i }\right)\)




















\(\ds \)

\(=\)







\(\ds \lambda\left({ \sum_{i = 1}^n \left({ cv_i + v_i' }\right) e_i }\right)\)




















\(\ds \)

\(=\)







\(\ds \sum_{i = 1}^n \left({ cv_i + v_i' }\right) f_i\)





By the definition of $\lambda$














\(\ds \)

\(=\)







\(\ds c\sum_{i = 1}^n v_i f_i + \sum_{i = 1}^n v_i' f_i\)




















\(\ds \)

\(=\)







\(\ds c \lambda\left({ v }\right)+\lambda\left({ v' }\right)\)





By the definition of $\lambda$



Thus $\lambda$ is linear.
$\Box$


Necessary condition
Suppose that there exists an isomorphism $\phi : V \to W$.
Then by Linear Transformation of Vector Space Equivalent Statements we have that $\phi$ maps every basis of $V$ to a basis of $W$.
Since $\phi$ is a bijection this means that bases of $V$ and $W$ have the same cardinality.
Thus $V$ and $W$ have the same dimension.
$\Box$

$\blacksquare$





