# 

Source: https://proofwiki.org/wiki/Correspondence_Theorem_(Group_Theory)

This proof is about Correspondence Theorem in the context of Group Theory. For other uses, see Correspondence Theorem.

Theorem
Let $G$ be a group.
Let $N \lhd G$ be a normal subgroup of $G$.

Then every subgroup of the quotient group $G / N$ is of the form $H / N = \set {h N: h \in H}$, where $N \le H \le G$.
Conversely, if $N \le H \le G$ then $H / N \le G / N$.

The correspondence between subgroups of $G / N$ and subgroups of $G$ containing $N$ is a bijection.
This bijection maps normal subgroups of $G / N$ onto normal subgroups of $G$ which contain $N$.


Proof
Let $H'$ be a subgroup of $G / N$, so that it consists of a certain set $\set {h N}$ of left cosets of $N$ in $G$.
Let us define the subset $\map \beta {H'} \subseteq G$:

$\map \beta {H'} = \set {g \in G: g N \in H'}$
Then clearly:

$N \subseteq \map \beta {H'}$
Also:

$e_G \in N$
so:

$e_G \in \map \beta {H'}$

Let $x, y \in \map \beta {H'}$. Then:














\(\ds x, y\)

\(\in\)







\(\ds \map \beta {H'}\)














\(\ds \leadsto \ \ \)





\(\ds x N, y N\)

\(\in\)







\(\ds H'\)





Definition of $\beta$








\(\ds \leadsto \ \ \)





\(\ds \paren {x N} \paren {y N}\)

\(=\)







\(\ds x y N \in H'\)





Definition of Quotient Group: $G / N$ and as $H'$ is a subgroup of $G / N$








\(\ds \leadsto \ \ \)





\(\ds x y\)

\(\in\)







\(\ds \map \beta {H'}\)





Definition of $\beta$



We also have, from Quotient Group is Group:

$\paren {x N}^{-1} = x^{-1} N \implies x^{-1} \in \map \beta {H'}$
Thus, by the Two-Step Subgroup Test, $\map \beta {H'} \le G$ that contains $N$.

Conversely, let $H$ be such that $N \le H \le G$.
Let $\map \alpha H = \set {h N: h \in H} \subseteq G / N$.
It is easily checked that $\map \alpha H \le G / N$.

Now, let $X$ be the set of subgroups of $G$ containing $N$ and $Y$ be the set of all subgroups of $G / N$.
We now need to show that $\alpha: X \to Y$ is a bijection.
We do this by checking that $\beta: Y \to X$ is the inverse of $\alpha$.
To do this, we show that $\alpha \circ \beta = I_Y$ and $\beta \circ \alpha = I_X$.

Suppose $N \le H \le G$. Then:














\(\ds \map {\paren {\beta \circ \alpha} } H\)

\(=\)







\(\ds \map \beta {H / N}\)





Definition of $\alpha$














\(\ds \)

\(=\)







\(\ds \set {g \in G: g N \in H / N}\)





Definition of $\beta$














\(\ds \)

\(=\)







\(\ds H\)





Definition of Coset $H / N$



Thus $\beta \circ \alpha = I_X$.

Now let $H' \le G / N$. Then:














\(\ds \map {\paren {\alpha \circ \beta} } {H'}\)

\(=\)







\(\ds \map \alpha {\set {g \in G: g N \in H'} }\)





Definition of $\beta$














\(\ds \)

\(=\)







\(\ds \set {g N \in H'}\)





Definition of $\alpha$














\(\ds \)

\(=\)







\(\ds H'\)





Definition of $H'$



Thus $\alpha \circ \beta = I_Y$.

So, by Bijection iff Inverse is Bijection, $\alpha$ is a bijection.

Now let $H \lhd G$ such that $N \le H$.
We show that $\map \alpha H = H / N \lhd G / N$.
This follows by definition 3 of Normal Subgroup because: for any $h \in H, g \in G$

$\paren {g N} \paren {h N} \paren {g N}^{-1} = g h g^{-1} N \in H / N$
$\paren {g N}^{-1} \paren {h N} \paren {g N} = g^{-1} h g N \in H / N$
Conversely, let $H' \lhd G / N$.
Recall:

$\map \beta {H'} = \set {g \in G : g N \in H'}$
Hence, for any $x \in G$ we have:














\(\ds x \map \beta {H'} x^{-1}\)

\(=\)







\(\ds \set {x g x^{-1} \in G: g N \in H'}\)




















\(\ds \)

\(=\)







\(\ds \set {y \in G: x^{-1} y x N \in H'}\)









Now for any $h' \in \map \beta {H'}$, we have:

$h'N \in H'$
From $H' \lhd G / N$:
For all $x \in G$:

$\paren {x N}^{-1} \paren {h' N} \paren {x N} \in H'$
From $N \lhd G$:

$x^{-1} h' x N \in H'$
This implies:

$h' \in x \map \beta {H'} x^{-1}$
or:

$\map \beta {H'} \subseteq x \map \beta {H'} x^{-1}$
Similarly, we can also show:

$\map \beta {H'} \subseteq x^{-1} \map \beta {H'} x$
Hence by definition 4 of Normal Subgroup:

$\map \beta {H'} \lhd G$
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 47 \eta$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $7$: Normal subgroups and quotient groups: Theorem $7.14$




