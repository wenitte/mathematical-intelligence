# 

Source: https://proofwiki.org/wiki/Maximal_Left_and_Right_Ideal_iff_Quotient_Ring_is_Division_Ring/Maximal_Right_Ideal_implies_Quotient_Ring_is_Division_Ring

Theorem
Let $R$ be a ring with unity.
Let $J$ be an ideal of $R$.
If $J$ is a maximal right ideal then the quotient ring $R / J$ is a division ring.


Proof
Since $J \subset R$, it follows from Quotient Ring of Ring with Unity is Ring with Unity that $R / J$ is a ring with unity.

We now need to prove that every non-zero element of $\struct {R / J, +,  \circ}$ has an inverse for $\circ$ in $R / J$.
By Right Inverse for All is Left Inverse it is sufficient to show that $\struct {R / J, +,  \circ}$ has a right inverse for every non-zero element.

Let $x + J \in R / J$ not be the zero element of $R / J$.
That is, $x + J \ne J$ and $x \notin J$.
Take $K \subseteq R$ such that $K = \set {j + x \circ r: j \in J, r \in R}$.
That is, $K$ is the subset of $R$ which can be expressed as a sum of an element of $J$ and a right product in $R$ of $x$.

Now $0_R \in K$ as $0_R \in J$ and $0_R \in R$, giving $0_R + x \circ 0_R = 0_R$.
So:

$(1): \quad K \ne \O$

Now let $g, h \in K$.
That is:

$g = j_1 + x \circ r_1, h = j_2 + x \circ r_2$
Then:














\(\ds g + \paren{-h }\)

\(=\)







\(\ds \paren{j_1 + x \circ r_1 } - \paren{j_2 + x \circ r_2 }\)




















\(\ds \)

\(=\)







\(\ds \paren{j_1 - j_2 } + \paren{x \circ r_1  - x \circ r_2 }\)




















\(\ds \)

\(=\)







\(\ds \paren{j_1 - j_2 } + x \circ \paren{r_1  - r_2 }\)




















\(\ds \)

\(\in\)







\(\ds K\)





$j_1 - j_2 \in J$ from Test for Ideal and $r_1 - r_2 \in R$



So we have:

$(2) \quad \forall g, h \in K, g - h \in K$

Now consider $g = \paren {j_1 + x \circ r_1} \in K, y \in R$.
Then:














\(\ds g \circ y\)

\(=\)







\(\ds \paren {j_1 + x \circ r_1} \circ y\)




















\(\ds \)

\(=\)







\(\ds \paren {j_1 \circ y} + \paren { x \circ r_1} \circ y\)




















\(\ds \)

\(=\)







\(\ds \paren {j_1 \circ y} + x \circ \paren {r_1 \circ y}\)




















\(\ds \)

\(\in\)







\(\ds K\)





$\paren {j_1 \circ y} \in J$, as $J$ is an ideal, while $r_1 \circ y \in R$



Thus:

$(3) \quad g \circ y \in K$
So Test for Right Ideal can be applied to statements $(1)$ to $(3)$, and it is seen that $K$ is a right ideal of $R$.

Now:














\(\ds j\)

\(\in\)







\(\ds J\)














\(\ds \leadsto \ \ \)





\(\ds j + x \circ 0_R\)

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









Since $x = 0_R + x \circ 1_R$, then $x \in K$ too.

Since $x \notin J$, then $K$ is a right ideal such that $J \subset K \subseteq R$.
Since $J$ is a maximal right ideal, then $K = R$.
Thus $1_R \in K$ and thus:

$\exists j_0 \in J, s \in R: 1_R = j_0 + x \circ s$
So:

$1_R + \paren {- x \circ s} = j_0 \in J$
Hence:

$1_R + J = x \circ s + J = \paren {x + J} \circ \paren {s + J}$

So in the ring with unity $\struct {R / J, +,  \circ}$, the right inverse of $x + J$ is $s + J$.
The result follows.

$\blacksquare$





