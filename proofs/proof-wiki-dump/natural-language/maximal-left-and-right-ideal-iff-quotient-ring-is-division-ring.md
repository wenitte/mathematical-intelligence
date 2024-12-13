# 

Source: https://proofwiki.org/wiki/Maximal_Left_and_Right_Ideal_iff_Quotient_Ring_is_Division_Ring



Theorem
Let $R$ be a ring with unity.
Let $J$ be an ideal of $R$.
Then the following are equivalent:

$(1): \quad J$ is a maximal left ideal
$(2): \quad J$ is a maximal right ideal
$(3): \quad$ the quotient ring $R / J$ is a division ring.


Proof
Maximal Left Ideal implies Quotient Ring is Division Ring
Since $J \subset R$, it follows from Quotient Ring of Ring with Unity is Ring with Unity that $R / J$ is a ring with unity.

We now need to prove that every non-zero element of $\struct {R / J, +,  \circ}$ has an inverse for $\circ$ in $R / J$.
By Left Inverse for All is Right Inverse it is sufficient to show that $\struct {R / J, +,  \circ}$ has a left inverse for every non-zero element.

Let $x + J \in R / J$ not be the zero element of $R / J$.
That is, $x + J \ne J$ and $x \notin J$.
Take $K \subseteq R$ such that $K = \set {j + r \circ x: j \in J, r \in R}$.
That is, $K$ is the subset of $R$ which can be expressed as a sum of an element of $J$ and a left product in $R$ of $x$.

Now $0_R \in K$ as $0_R \in J$ and $0_R \in R$, giving $0_R + 0_R \circ x = 0_R$.
So:

$(1): \quad K \ne \O$

Now let $g, h \in K$.
That is:

$g = j_1 + r_1 \circ x, h = j_2 + r_2 \circ x$
Then:














\(\ds g + \paren{-h }\)

\(=\)







\(\ds \paren{j_1 + r_1 \circ x } - \paren{j_2 + r_2  \circ x }\)




















\(\ds \)

\(=\)







\(\ds \paren{j_1 - j_2 } + \paren{r_1 \circ x  - r_2  \circ x }\)




















\(\ds \)

\(=\)







\(\ds \paren{j_1 - j_2 } + \paren{r_1  - r_2 } \circ x\)




















\(\ds \)

\(\in\)







\(\ds K\)





$j_1 - j_2 \in J$ from Test for Ideal and $r_1 - r_2 \in R$



So we have:

$(2) \quad \forall g, h \in K, g-h \in K$

Now consider $g = \paren {j_1 + r_1 \circ x} \in K, y \in R$.
Then:














\(\ds y \circ g\)

\(=\)







\(\ds y \circ \paren {j_1 + r_1 \circ x}\)




















\(\ds \)

\(=\)







\(\ds \paren {y \circ j_1 } + y  \circ \paren { r_1 \circ x }\)




















\(\ds \)

\(=\)







\(\ds \paren {y \circ j_1 } + \paren {y \circ r_1} \circ x\)




















\(\ds \)

\(\in\)







\(\ds K\)





$\paren{y \circ j_1} \in J$, as $J$ is an ideal, while $y \circ r_1 \in R$



Thus:

$(3) \quad y \circ g \in K$
So Test for Left Ideal can be applied to statements $(1)$ to $(3)$, and it is seen that $K$ is a left ideal of $R$.

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









As $x = 0_R + 1_R \circ x$, it follows that $x \in K$ also.

As $x \notin J$, it follows that $K$ is a left ideal such that $J \subset K \subseteq R$.
As $J$ is a maximal left ideal, it follows that $K = R$.
Thus $1_R \in K$ and thus:

$\exists j_0 \in J, s \in R: 1_R = j_0 + s \circ x$
So:

$1_R + \paren {-s \circ x} = j_0 \in J$
Hence:

$1_R + J = s \circ x + J = \paren {s + J} \circ \paren {x + J}$

So in the ring with unity $\struct {R / J, +,  \circ}$, the left inverse of $x + J$ is $s + J$.
The result follows.
$\Box$


Quotient Ring is Division Ring implies Maximal Left Ideal
Let $K$ be a left ideal of $R$ such that $J \subsetneq K \subset R$.
Let $x \in K \setminus J$.
As $x \notin J$, then $x + J \ne J$, the zero in $R / J$.
As $R / J$ is a division ring, $x + J \in R / J$ has an inverse, say $s + J$.
That is:

$1_R + J =  \paren {s + J} \circ \paren {x + J} = \paren {s \circ x} + J$
By Left Cosets are Equal iff Product with Inverse in Subgroup then:

$1_R - s \circ x \in J \subsetneq K$
By the definition of a left ideal then:

$x \in K$ and $s \in R \implies s \circ x \in K$
$1_R - s \circ x \in K$ and $s \circ x \in K \implies \paren {1_R - s \circ x} + \paren {s \circ x } = 1_R \in K$
$1_R \in K \implies \forall y \in R, y \circ 1_R = y \in K$
Hence $K = R$
The result follows.
$\Box$


Maximal Right Ideal implies Quotient Ring is Division Ring
The proof for Maximal Right Ideal implies Quotient Ring is Division Ring is similar to the proof for Maximal Left Ideal implies Quotient Ring is Division Ring with product orders reversed. It can be found here.
$\Box$


Quotient Ring is Division Ring implies Maximal Right Ideal
The proof for Quotient Ring is Division Ring implies Maximal Right Ideal is similar to the proof for Quotient Ring is Division Ring implies Maximal Left Ideal with product orders reversed. It can be found here.
$\blacksquare$




