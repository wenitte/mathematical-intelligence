# 

Source: https://proofwiki.org/wiki/Hahn-Banach_Theorem/Real_Vector_Space/Lemma_2



Lemma
Let $X$ be a vector space over $\R$. 
Let $p : X \to \R$ be a sublinear functional.
Let $X_0$ be a linear subspace of $X$. 
Let $f_0 : X_0 \to \R$ be a linear functional such that: 

$\map {f_0} x \le \map p x$ for each $x \in X_0$.
Let $P$ be the set of pairs $\tuple {G, g}$ such that: 

$(1): \quad$ $G$ is a linear subspace of $X$ with $X_0 \subseteq G$
$(2): \quad$ $g : G \to \R$ is a linear functional extending $f_0$
$(3): \quad$ $\map g x \le \map p x$ for each $x \in G$.
Define the relation $\preceq$ on $P$ by:

$\tuple {G, g} \preceq \tuple {H, h}$ if and only if:
$(1): \quad$ $G \subseteq H$
$(2): \quad$ $h$ extends $g$.

Then: 

$\struct {P, \preceq}$ is an ordered set.


Proof
We check each of the conditions of an ordering for $\preceq$. 

Proof of $(1)$
We show that for each $\tuple {G, g} \in P$, we have: 

$\tuple {G, g} \preceq \tuple {G, g}$

We have, from Set is Subset of Itself: 

$G \subseteq G$
We also have:

$g$ extends $g$.
So, we have: 

$\tuple {G, g} \preceq \tuple {G, g}$
$\Box$

Proof of $(2)$
Suppose that $\tuple {G, g}, \tuple {H, h}, \tuple {I, i} \in P$ have: 

$\tuple {G, g} \preceq \tuple {H, h}$
and:

$\tuple {H, h} \preceq \tuple {I, i}$
We show that: 

$\tuple {G, g} \preceq \tuple {I, i}$

We have: 

$G \subseteq H$
and:

$H \subseteq I$
From Subset Relation is Transitive, we have: 

$G \subseteq I$
Since $h$ extends $g$, we have: 

$\map g x = \map h x$ for each $x \in G$.
Since $i$ extends $h$, we have: 

$\map h x = \map i x$ for each $x \in H$.
Since $G \subseteq H$, we in particular have: 

$\map h x = \map i x$ for each $x \in G$.
So, we have: 

$\map g x = \map i x$ for each $x \in G$.
Since $G \subseteq I$, we therefore have: 

$i$ extends $g$.
So, we have: 

$\tuple {G, g} \preceq \tuple {I, i}$
$\Box$

Proof of $(3)$
Suppose that $\tuple {G, g}$ and $\tuple {H, h}$ have: 

$\tuple {G, g} \preceq \tuple {H, h}$
and:

$\tuple {H, h} \preceq \tuple {G, g}$
We show that: 

$\tuple {G, g} = \tuple {H, h}$
That is:

$G = H$ and $g = h$.
Since: 

$\tuple {G, g} \preceq \tuple {H, h}$
we have that: 

$G \subseteq H$
and:

$g$ extends $h$.
Since: 

$\tuple {H, h} \preceq \tuple {G, g}$
we have: 

$H \subseteq G$
and:

$h$ extends $g$.
So, from the definition of set equality, we have: 

$G = H$
So:

$h$ is actually a linear functional $G \to \R$.
Since $h$ extends $g$, we have: 

$\map h x = \map g x$ for each $g \in G$.
That is: 

$g = h$
So, we have: 

$\tuple {G, g} = \tuple {H, h}$
$\blacksquare$





