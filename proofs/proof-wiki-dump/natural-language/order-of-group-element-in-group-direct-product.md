# 

Source: https://proofwiki.org/wiki/Order_of_Group_Element_in_Group_Direct_Product

Theorem
Let $G$ and $H$ be finite groups.
Let $g \in G: \order g = m, h \in H: \order h = n$.

Then $\order {\tuple {g, h} }$ in $G \times H$ is $\lcm \set {m, n}$.


Proof
Let $G$ and $H$ be a groups whose identities are $e_G$ and $e_H$.

Let $l = \lcm \set {m, n}$.
From the definition of lowest common multiple:

$\exists x, y \in \Z: l = m x = n y$
From the definition of order of an element:

$g^m = e_G, h^n = e_H$
Thus:














\(\ds \tuple {g, h}^l\)

\(=\)







\(\ds \tuple {g^l, h^l}\)




















\(\ds \)

\(=\)







\(\ds \tuple {\paren {g^m}^x, \paren {h^n}^y}\)




















\(\ds \)

\(=\)







\(\ds \tuple {e_G^x, e_H^y}\)




















\(\ds \)

\(=\)







\(\ds \tuple {e_G, e_H}\)










Now suppose $\exists k \in \Z: \tuple {g, h}^k = \tuple {e_G, e_H}$.
It follows that:

$\tuple {g, h}^k = \tuple {g^k, h^k} = \tuple {e_G, e_H}$
Thus:

$g^k = e_G, h^k = e_H$
It follows from $g^k = e_G$ and $\order g = m$, by Absolute Value of Integer is not less than Divisors, that:

$m \divides k$
Similarly it follows that:

$n \divides k$
So $k$ is a positive common multiple of both $m$ and $n$.
Since $l$ is the lowest common multiple:

$l \le k$
Therefore $l$ is the smallest such that $\tuple {g, h}^l = \tuple {e_G, e_H}$.
The result follows by definition of the order of an element.
$\blacksquare$





