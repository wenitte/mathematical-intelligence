# 

Source: https://proofwiki.org/wiki/Circle_Group_is_Group/Proof_2

Theorem
The circle group $\struct {K, \times}$ is a group.


Proof
We note that $K \ne \O$ as the identity element $1 + 0 i \in K$.

Since all $z \in K$ have modulus $1$, they have, for some $\theta \in \hointr 0 {2 \pi}$, the polar form:

$z = \map \exp {i \theta} = \cos \theta + i \sin \theta$
Conversely, if a complex number has such a polar form, it has modulus $1$.
Observe the following property of the complex exponential function:

$\forall a, b \in \C: \map \exp {a + b} = \map \exp a \map \exp b$

We must show that if $x, y \in K$ then $x \cdot y^{-1} \in K$.
Let $x, y \in K$ be arbitrary.
Choose suitable $s, t \in \hointr 0 {2 \pi}$ such that:

$x = \map \exp {i s}$
$y = \map \exp {i t}$
We compute:














\(\ds \map \exp {i t} \map \exp {-i t}\)

\(=\)







\(\ds \map \exp {i \paren {t - t} }\)




















\(\ds \)

\(=\)







\(\ds \map \exp 0\)




















\(\ds \)

\(=\)







\(\ds 1\)









So $y^{-1} = \map \exp {-i t}$.
We note that this lies in $K$.

Furthermore, we have:














\(\ds x y\)

\(=\)







\(\ds \map \exp {i s} \map \exp {-2 \pi i t}\)




















\(\ds \)

\(=\)







\(\ds \map \exp {i \paren {s - t} }\)









We conclude that $x y \in K$.
By the Two-Step Subgroup Test, $K$ is a subgroup of $\C$ under complex multiplication.
$\blacksquare$


This article contains statements that are justified by handwavery.In particular: actually, instead of $\hointr 0 {2 \pi}$ we should use $\R / 2 \pi \Z$ for formal correctness, but I haven't thought of a nice way to do so. Also the property of $\exp$ is only established for the reals so far.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




