# 

Source: https://proofwiki.org/wiki/Hahn-Banach_Theorem/Real_Vector_Space/Lemma_3

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
Define the ordering $\preceq$ on $P$ by:

$\tuple {G, g} \preceq \tuple {H, h}$ if and only if:
$(1): \quad$ $G \subseteq H$
$(2): \quad$ $h$ extends $g$.

Then: 

every non-empty chain in $\struct {P, \preceq}$ has an upper bound.


Proof
Let:

$C = \set {\tuple {G_\alpha, g_\alpha} : \alpha \in A}$
be a non-empty chain in $\struct {P, \preceq}$. 
Let: 

$\ds G = \bigcup_{\alpha \in A} G_\alpha$
We show that $G$ is a linear subspace of $X$. 
Clearly we have $G \subseteq X$. 
Let $x, y \in G$ and $\lambda \in \R$.
From One-Step Vector Subspace Test, it suffices to show $x + \lambda y \in G$. 
Then $x \in G_\alpha$ for some $\alpha \in A$, and $y \in G_\beta$ for some $\beta \in A$.
Since $C$ is a chain and $\tuple {G_\alpha, g_\alpha}, \tuple {G_\beta, g_\beta} \in C$, we have that:

$\tuple {G_\alpha, g_\alpha}$ and $\tuple {G_\beta, g_\beta}$ are comparable.
So either $G_\alpha \subseteq G_\beta$ or $G_\beta \subseteq G_\alpha$.
So either $x, y \in G_\alpha$ or $x, y \in G_\beta$.
Suppose that $x, y \in G_\gamma$ for $\gamma \in A$.
Since $G_\gamma$ is a vector subspace of $X$, we have: 

$x + \lambda y \in G_\gamma$
so:

$x + \lambda y \in G$
So, by the One-Step Vector Subspace Test, we have that $G$ is a vector subspace of $X$. 
Since:

$X_0 \subseteq G_\alpha$
we have:

$X_0 \subseteq G$
from Set is Subset of Union, so we have $(1)$ for $G$. 

We construct a linear functional $g : G \to \R$ that extends each $g_\alpha$. 
Let $x \in G$. 
Then $x \in G_\alpha$ for some $\alpha \in A$. 
If $x \in G_\alpha$ for exactly one $\alpha \in A$, we can safely pick $\map g x = \map {g_\alpha} x$. 
However, if $x \in G_\alpha$ for more than one $\alpha \in A$, the choice is initially unclear.
Suppose $x \in G_\alpha$ and $x \in G_\beta$ for $\alpha, \beta \in A$ with $\alpha \ne \beta$.
Since $C$ is a chain, $\tuple {G_\alpha, g_\alpha}$ and $\tuple {G_\beta, g_\beta}$ are comparable, and we either have: 

$\tuple {G_\alpha, g_\alpha} \preceq \tuple {G_\beta, g_\beta}$
or:

$\tuple {G_\beta, g_\beta} \preceq \tuple {G_\alpha, g_\alpha}$
If:

$\tuple {G_\alpha, g_\alpha} \preceq \tuple {G_\beta, g_\beta}$
then $g_\beta$ extends $g_\alpha$.
Then: 

$\map {g_\alpha} t = \map {g_\beta} t$ for all $t \in G_\alpha$.
In particular: 

$\map {g_\alpha} x = \map {g_\beta} x$
Similarly, if: 

$\tuple {G_\beta, g_\beta} \preceq \tuple {G_\alpha, g_\alpha}$
then $g_\alpha$ extends $g_\beta$.
Then: 

$\map {g_\alpha} t = \map {g_\beta} t$ for all $t \in G_\beta$.
In particular: 

$\map {g_\alpha} x = \map {g_\beta} x$
So, if $x \in G_\alpha \cap G_\beta$, then $\map {g_\alpha} x = \map {g_\beta} x$. 
So, for each $x \in G$ we safely choose $\map g x = \map {g_\alpha} x$ for any $\alpha \in A$ with $x \in G_\alpha$.

We now verify that $g$ is a linear functional $g : G \to \R$ that extends each $g_\alpha$.
Let $\alpha \in A$. 
Note that, from Set is Subset of Union, we have: 

$G_\alpha \subseteq G$
From construction, we have: 

$\map g x = \map {g_\alpha} x$
for any $x \in G_\alpha$.
So $g$ extends $g_\alpha$ for each $\alpha \in A$. 
We show that $g$ is a linear functional.
Let $\lambda, \mu \in \R$ and $x, y \in G$. 
Then $x \in G_\alpha$ for some $\alpha \in A$, and $y \in G_\beta$ for some $\beta \in A$.
Since $C$ is a chain and $\tuple {G_\alpha, g_\alpha}, \tuple {G_\beta, g_\beta} \in C$, we have that:

$\tuple {G_\alpha, g_\alpha}$ and $\tuple {G_\beta, g_\beta}$ are comparable.
So either $G_\alpha \subseteq G_\beta$ or $G_\beta \subseteq G_\alpha$.
So either $x, y \in G_\alpha$ or $x, y \in G_\beta$.
Suppose that $x, y \in G_\gamma$ for $\gamma \in A$.
Then, we have: 














\(\ds \lambda \map g x + \mu \map g y\)

\(=\)







\(\ds \lambda \map {g_\gamma} x + \mu \map {g_\gamma} y\)




















\(\ds \)

\(=\)







\(\ds \map {g_\gamma} {\lambda x + \mu y}\)





since $g_\gamma$ is a linear functional














\(\ds \)

\(=\)







\(\ds \map g {\lambda x + \mu y}\)





since $g$ extends $g_\gamma$



So:

$g$ is a linear functional.

We now show that $\tuple {G, g} \in P$. 
We have already shown that: 

$G$ is a linear subspace of $X$ with $X_0 \subseteq G$.
It remains to show that: 

$g : G \to \R$ is a linear functional extending $f_0$
and:

$\map g x \le \map p x$ for each $x \in G$.
Let $x \in X_0$, then $x \in G$. 
So $x \in G_\alpha$ for some $\alpha \in A$. 
We then have: 

$\map g x = \map {g_\alpha} x$
Since $g_\alpha$ extends $f_0$, we have: 

$\map g x = \map {f_0} x$
for each $x \in X_0$.
So $g$ extends $f_0$. 
We also have: 

$\map {g_\alpha} x \le \map p x$
so:

$\map g x \le \map p x$
for each $x \in X_0$. 
So we have $\tuple {G, g} \in P$.

Since $G_\alpha \subseteq G$ for each $\alpha \in A$, and $g$ extends $g_\alpha$ we have that: 

$\tuple {G, g}$ is an upper bound for $C$ in $\tuple {P, \preceq}$.
So:

$C$ has an upper bound.
Since $C$ was an arbitrary non-empty chain, we have: 

every non-empty chain in $\struct {P, \preceq}$ has an upper bound.
$\blacksquare$





