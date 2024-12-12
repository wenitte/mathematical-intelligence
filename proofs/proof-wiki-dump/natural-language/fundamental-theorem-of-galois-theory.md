# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_of_Galois_Theory


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $L / K$ be a finite Galois extension.
Let $\Gal {L / K}$ denote the Galois group of the extension $L / K$.
Let $H$ denote a subgroup of $\Gal {L / K}$ and $F$ denote an intermediate field.

The mappings:

$H \mapsto L_H$, and
$F \mapsto \Gal {L / F}$
are inclusion-reversing and inverses.

Moreover, these maps induce a bijection between the normal subgroups of $\Gal {L / K}$ and the normal, intermediate extensions of $L / K$.


Proof
First, we show that the maps are inclusion-reversing.
Let $K \subset F_1 \subset F_2 \subset L$.
Let $G_i = \Gal {L / F_i}$.
Let $\sigma \in G_2$.
Then $\sigma$ is an automorphism of $L$ which fixes $F_2$.
Since $F_1 \subset F_2$, it follows that $\sigma$ fixes $F_1$ and consequently $\sigma \in G_1$.
Let $H_1 \subset H_2 \subset \Gal {L / K}$.
Let $F_i = L_{H_i}$.
Let $x \in F_2$.
Then $\map \sigma x = x$ for all $\sigma \in H_2$.
Since $H_1\subset H_2$, the same equality holds for each element of $H_1$ and thus $x \in F_1$.

For the remainder of the proof:

let $G$ denote $\Gal {L / K}$
for any field $K \subset F \subset L$ let $G_F$ denote $\Gal {L / F}$.
Next, we demonstrate that the two functions described are inverses.
That is:

For any intermediate field $K \subset F \subset L$:
$F = L_{G_F}$
For any subgroup $H \subset G$:
$H = G_{L_H}$

This article needs proofreading.In particular: This is why $F \subseteq L_{G_F}$.  A second option would be appreciated.If you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
For the first equality, $F$ is fixed by every element of $G_F$.
By definition $L_{G_F}$ includes all elements of $L$ which are fixed by $G_F$.
Thus we have $F \subseteq L_{G_F}$.
Aiming for a contradiction, suppose there exists $\alpha \in L_{G_F} \setminus F$.
Then:

$\index {\map F \alpha} F > 1$
where $\index {\map F \alpha} F$ is the degree of $\map F \alpha / F$.
We can express the minimal polynomial of $\alpha$ in terms of $G_F$ as:

$\ds \map {m_\alpha} x = \prod_{\sigma \mathop \in G_F} \paren {x - \map \sigma \alpha}^\frac 1 {\index L {\map F \alpha} }$
However, by our assumption, $\map \sigma \alpha = \alpha$ for each $\sigma$.
Thus:














\(\ds \map {m_\alpha} x\)

\(=\)







\(\ds \paren {x - \alpha}^\frac {\index L F} {\index L {\map F \alpha} }\)




















\(\ds \)

\(=\)







\(\ds \paren {x - \alpha}^{\index {\map F \alpha} F}\)





Degree of Field Extensions is Multiplicative




Since $\index {\map F \alpha} F > 1$, this contradicts the separability of $L / F$.
Therefore, the first equality holds.

For the second equality, it is immediate that $H \subset G_{L_H}$.
Aiming for a contradiction, suppose $H$ were a proper subset of $G_{L_H}$.
By Primitive Element Theorem, there exists an $\alpha \in L$ such that $L = \map {L_H} \alpha$.
Consider the polynomial:

$\ds f = \prod_{\sigma \mathop \in H} \paren {x - \map \sigma \alpha}$
The coefficients of $f$ are evidently elements of $L_H$ and $f$ is monic by construction.
However:

$\index L {L_H} = \map \deg f = \order H < \order {G_{L_H} } = \index L {L_H}$
by definition of Galois extension.
This is a contradiction and it follows that $H = G_{L_H}$.

Finally, we demonstrate the correspondence between normal subgroups of $G$ and the intermediate normal extensions of $K$.
Suppose $K \subset F \subset L$ is an intermediate field and $F / K$ is a normal extension.
We let $H = \Gal {F / K}$ denote the Galois group of interest.
Let $\sigma \in G$ and $\tau \in H$.
We want to show that $\sigma^{-1} \tau \sigma \in H$ to conclude that $H$ is normal.
We have that $F \subset L$.
Thus $\sigma$ restricts to an embedding of $F$ in $\overline K$.
However, since $F / K$ is a normal extension, the image of every embedding of $F$ is again $F$.
Thus, $\sigma$ restricts to an automorphism of $F$.
Let $x \in F$.
Then $\sigma \left({x}\right) \in F$.
We have that $\tau$ fixes $F$.
Thus:

$\map \tau {\map \sigma x} = \map \sigma x$
Therefore:

$\map {\sigma^{-1} } {\map \tau {\map \sigma x} } = x$
and we conclude that:

$\sigma^{-1} \tau \sigma \in H$
Next, suppose $H$ is a normal subgroup of $G$ and $F = L_H$.
Let $\tau \in H$ and $\sigma: F \mapsto \overline K$ be an embedding of $F$.
By Extension of Isomorphisms, we extend $\sigma$ to $\overline \sigma$, an automorphism of $L$.
Consider the composition $\hat \sigma^{-1} \tau \hat \sigma = \hat \tau \in H$ by our assumption of normality.
Then:

$\map {\hat \sigma^{-1} \tau \hat \sigma} x = \map {\hat \tau} x = x$
which implies that:

$\map \tau {\map {\hat \sigma} x} = \map {\hat \sigma} x \in F$
Since $x \in F$:

$\map {\hat \sigma} x = \map \sigma x \in F$
which was required to be shown.
$\blacksquare$


Source of Name
This entry was named for Évariste Galois.





