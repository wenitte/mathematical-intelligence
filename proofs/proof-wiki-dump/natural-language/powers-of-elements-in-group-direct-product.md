# 

Source: https://proofwiki.org/wiki/Powers_of_Elements_in_Group_Direct_Product



Theorem
Let $\struct {G, \circ_1}$ and $\struct {H, \circ_2}$ be group whose identities are $e_G$ and $e_H$.
Let $\struct {G \times H, \circ}$ be the group direct product of $G$ and $H$.

Then:

$\forall n \in \Z: \forall g \in G, h \in H: \tuple {g, h}^n = \tuple {g^n, h^n}$


Proof
Proof by induction:
For all $n \in \N$, let $\map P n$ be the proposition $\forall g \in G, h \in H: \tuple {g, h}^n = \tuple {g^n, h^n}$.


Basis for the Induction
$\map P 0$ is true, as this says:

$\tuple {g, h}^0 = \tuple {e_G, e_H}$
$\map P 1$ is true, as this says:

$\tuple {g, h} = \tuple {g, h}$
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\tuple {g, h}^k = \tuple {g^k, h^k}$

Then we need to show:

$\tuple {g, h}^{k + 1} = \tuple {g^{k + 1}, h^{k + 1} }$


Induction Step
This is our induction step:














\(\ds \tuple {g, h}^{k + 1}\)

\(=\)







\(\ds \tuple {g, h}^k \circ \tuple {g, h}\)




















\(\ds \)

\(=\)







\(\ds \tuple {g^k, h^k} \circ \tuple {g, h}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \tuple {g^k \circ_1 g, h^k \circ_2 h}\)





Definition of Group Direct Product














\(\ds \)

\(=\)







\(\ds \tuple {g^{k + 1}, h^{k + 1} }\)










So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N: \forall g \in G, h \in H: \tuple {g, h}^n = \tuple {g^n, h^n}$

So we have shown the result holds true for all $n \ge 0$.
The result for $n < 0$ follows directly from Powers of Group Elements for Negative Indices.
$\blacksquare$





