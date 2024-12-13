# 

Source: https://proofwiki.org/wiki/Hahn-Banach_Theorem/Real_Vector_Space



Theorem
Let $X$ be a vector space over $\R$. 
Let $p : X \to \R$ be a sublinear functional.
Let $X_0$ be a linear subspace of $X$. 
Let $f_0 : X_0 \to \R$ be a linear functional such that: 

$\map {f_0} x \le \map p x$ for each $x \in X_0$.

Then there exists a linear functional $f$ defined on the whole space $X$ which extends $f_0$ and satisfies: 

$\map f x \le \map p x$ for each $x \in X$.

That is, there exists a linear functional $f : X \to \R$ such that: 

$\map f x \le \map p x$ for each $x \in X$
and:

$\map f x = \map {f_0} x$ for each $x \in X_0$.


Corollary 1
Let $p : X \to \R$ be a seminorm on $X$. 
Let $X_0$ be a linear subspace of $X$. 
Let $f_0 : X_0 \to \R$ be a linear functional such that: 

$\size {\map {f_0} x} \le \map p x$ for each $x \in X_0$.

Then there exists a linear functional $f$ defined on the whole space $X$ which extends $f_0$.

That is: 

$\size {\map f x} \le \map p x$ for each $x \in X$
and:

$\map f x = \map {f_0} x$ for each $x \in X_0$.


Corollary 2
Let $\struct {X, \norm \cdot}$ be a normed vector space over $\R$.
Let $X_0$ be a linear subspace of $X$. 
Let $f_0 : X_0 \to \R$ be a bounded linear functional.

Then $f_0$ can be extended to a bounded linear functional $f : X \to \R$ with: 

$\norm f_{X^\ast} = \norm {f_0}_{\paren {X_0}^\ast}$
where $\norm \cdot_{X^\ast}$ and $\norm \cdot_{\paren {X_0}^\ast}$ are the norms of the normed dual spaces $X^\ast$ and $\paren {X_0}^\ast$.



This article is complete as far as it goes, but it could do with expansion.In particular: The proof can also be made using a weaker form of Axiom of Choice/Zorn's Lemma, which is the Boolean Prime Ideal Theorem/Ultrafilter Lemma. It would be nice to have a proof using this weaker axiom as wellYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Proof
We first prove a lemma:

Lemma 1
Let $G$ be a proper linear subspace of $X$. 
Let $g_0 : G \to \R$ be a linear functional such that: 

$\map {g_0} x \le \map p x$ for each $x \in G$.

Then there exists a linear subspace $G'$ of $X$ and a linear functional $g : G' \to \R$ such that: 

$g$ extends $g_0$ with $\map g x \le \map p x$ for each $x \in G'$.
$\Box$

Let $P$ be the set of pairs $\tuple {G, g}$ such that: 

$(1): \quad$ $G$ is a linear subspace of $X$ with $X_0 \subseteq G$
$(2): \quad$ $g : G \to \R$ is a linear functional extending $f_0$
$(3): \quad$ $\map g x \le \map p x$ for each $x \in G$.
This set is non-empty from Lemma 1.
Define the relation $\preceq$ on $P$ by:

$\tuple {G, g} \preceq \tuple {H, h}$ if and only if:
$(1): \quad$ $G \subseteq H$
$(2): \quad$ $h$ extends $g$.
Lemma 2
$\struct {P, \preceq}$ is an ordered set.
$\Box$

We show that every non-empty chain in $\struct {P, \preceq}$ has an upper bound. 
We will then invoke Zorn's Lemma.

Lemma 3
every non-empty chain in $\struct {P, \preceq}$ has an upper bound.
$\Box$

From Zorn's Lemma, we have that $P$ has a maximal element.
Let $\struct {G, g}$ be a maximal element of $P$. 
Then: 

$G$ is a linear subspace of $X$ with $X_0 \subseteq G$
and:

$g : G \to \R$ is a linear functional extending $f_0$ with:
$\map g x \le \map p x$ for each $x \in G$.
Aiming for a contradiction, suppose suppose that $G \ne X$.
Then, by Lemma 1, there exists a proper superset $G'$ of $G$ and a linear functional $g^* : G' \to \R$ such that:

$(1): \quad$ $G'$ is a linear subspace of $X$
$(2): \quad$ $g^\ast$ extends $f_0$ with $\map {g^\ast} x \le \map p x$ for each $x \in G'$.
So:

$\tuple {G, g} \preceq \tuple {G', g^\ast}$
Since $\tuple {G, g}$ is maximal, we have: 

$\tuple {G, g} = \tuple {G', g^\ast}$
So $G = G'$. 
But $G'$ is a proper superset of $G$, which implies $G \ne G'$.
So we have a contradiction, giving $G = X$.
Setting $f = g$, we have therefore found a linear functional $f : X \to \R$ extending $f_0$ with: 

$\map f x \le \map p x$ for each $x \in X$.
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice, by way of Zorn's Lemma.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Source of Name
This entry was named for Hans Hahn and Stefan Banach.


Sources
2013: Francis Clarke: Functional Analysis, Calculus of Variations and Optimal Control ... (previous): $1.2$: Linear mappings




