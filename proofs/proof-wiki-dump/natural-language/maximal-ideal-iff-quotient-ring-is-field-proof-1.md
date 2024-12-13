# 

Source: https://proofwiki.org/wiki/Maximal_Ideal_iff_Quotient_Ring_is_Field/Proof_1



Theorem
Let $\struct {R, +, \circ}$ be a commutative ring with unity whose zero is $0_R$ and whose unity is $1_R$.
Let $J$ be an ideal of $R$.

The following are equivalent:

$(1): \quad$ $J$ is a maximal ideal.
$(2): \quad$ The quotient ring $R / J$ is a field.


Proof Outline

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
The hard part is proving the existence of inverses.
Take an element $x$ of the Ring to invert.
Define a set $K$, that contains the Ideal and is contained by the ring.
It is the set of all members of the Ideal, each added to a multiple of $x$.
Prove that this set is an ideal and contains our original maximal ideal.


Proof
Maximal Ideal implies Quotient Ring is Field
Let $J$ be a maximal ideal.
Because $J \subset R$, it follows from Quotient Ring of Commutative Ring is Commutative and Quotient Ring of Ring with Unity is Ring with Unity that $R / J$ is a commutative ring with unity.

We now need to prove that every non-zero element of $\struct {R / J, +,  \circ}$ has a product inverse in $R / J$.
Let $x \in R$ such that $x + J \ne J$, that is: $x \notin J$.
Thus $x + J \in R / J$ is not the zero element of $R / J$.

Take $K \subseteq R$ such that:

$K = \set {j + r \circ x: j \in J, r \in R}$
that is, the subset of $R$ which can be expressed as a sum of an element of $J$ and a product in $R$ of $x$.

Now $0_R \in K$ as $0_R \in J$ and $0_R \in R$, giving $0_R + 0_R \circ x = 0_R$.
So:

$(1): \quad K \ne \O$
Now let $g, h \in K$.
That is:

$g = j_1 + r_1 \circ x, h = j_2 + r_2 \circ x$
Then:

$-h = -j_2 + \paren {-r_2} \circ x$
But $j_1 - j_2 \in J$ from Test for Ideal.
Similarly $-r_2 \in R$.
So $-h \in K$ and we have:

$(2) \quad g + \paren {-h} = \paren {j_1 - j_2} + \paren {r_1 - r_2} \circ x$
Now consider $g \in J, y \in R$.
Then:

$g \circ y = \paren {j_1 + r_1 \circ x} \circ y = \paren {j_1 \circ y} + \paren {r_1 \circ y} \circ x$
which is valid by the fact that $R$ is a commutative ring.
But as $J$ is an ideal:

$\paren {j_1 \circ y} \in J$
while $r_1 \circ y \in R$.
Thus:

$(3) \quad g \circ y \in K$
and similarly:

$(3) \quad y \circ g \in K$
So Test for Ideal can be applied to statements $(1)$ to $(3)$, and it is seen that $K$ is an ideal of $R$.

Now:














\(\ds j\)

\(\in\)







\(\ds J\)














\(\ds \leadsto \ \ \)





\(\ds j + 0_R \circ x\)

\(\in\)







\(\ds K\)














\(\ds \leadsto \ \ \)





\(\ds j\)

\(\in\)







\(\ds K\)














\(\ds \leadsto \ \ \)





\(\ds J\)

\(\subseteq\)







\(\ds K\)









and because $x = 0_R + 1_R \circ x$ (remember $0_R \in J$), then $x \in K$ too.

So, because $x \notin J$, $K$ is an ideal such that $J \subset K \subseteq R$.
Because $J$ is a maximal ideal, then $K = R$.
Thus $1_R \in K$ and thus:

$\exists j_0 \in J, s \in R: 1_R = j_0 + s \circ x$
So:

$1_R + \paren {-s \circ x} = j_0 \in J$
Hence:

$1_R + J = s \circ x + J = \paren {s + J} \circ \paren {x + J}$

So in the commutative ring $\struct {R / J, +,  \circ}$, the product inverse of $x + J$ is $s + J$.
The result follows.
$\Box$


Quotient Ring is Field implies Ideal is Maximal
Let $R / J$ be a field.
Let $K$ be a left ideal of $R$ such that $J \subsetneq K \subseteq R$.
We have that $J$ is the zero of $R / J$.
Let $x \in K \setminus J$.
Because $x \notin J$ then $x + J \ne J$.
Because $R / J$ is a field then $x + J \in R / J$ has a product inverse, say $s + J$.
Hence:

$1_R + J = \paren {s + J} \circ \paren {x + J} = \paren {s \circ x } + J$
By Left Cosets are Equal iff Product with Inverse in Subgroup:

$1_R - s \circ x \in J \subsetneq K$
By the definition of an ideal:

$x \in K, s \in R \implies s \circ x \in K$
$1_R - s \circ x \in K, s \circ x \in K \implies \paren {1_R - s \circ x} + \paren {s \circ x} = 1_R \in K$
$1_R \in K \implies \forall y \in R:  y \circ 1_R = y \in K$
Hence $K = R$.
The result follows.
$\blacksquare$





