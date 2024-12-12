# 

Source: https://proofwiki.org/wiki/Cowen-Engeler_Lemma


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $X$ and $Y$ be sets.
Let $M$ be a set of mappings from subsets of $X$ to $Y$.
Thus each element of $M$ is a partial mapping from $X$ to $Y$.

Define a mapping $\Phi: X \to \powerset Y$ thus:

$\map \Phi x = \set {\map f x: f \in M \text{ and } x \in \Dom f}$
That is:

$\map \Phi x = \set {y \in Y: \exists f \in M: \tuple {x, y} \in f}$

Suppose that the following hold:




\((1)\)  

$:$  













$\map \Phi x$ is finite for each $x \in X$.   

  


\((2)\)  

$:$  













For each finite subset $F$ of $X$, there exists an element $f \in M$ such that the domain of $f$ is $F$.   

  


\((3)\)  

$:$  













$M$ has finite character.   

  


















That is, a mapping $f$ from some subset of $X$ to $Y$ is an element of $M$ if and only if its restriction to each finite subset of $\Dom f$ is in $M$.   

  


Then there exists an element of $M$ with domain $X$.


Proof
Let $\map {\operatorname {Fin} } X$ be the set of finite subsets of $X$.
For each $S \in \map {\operatorname {Fin} } X$, let $\Gamma_S = \set {f \in M: S \subseteq \Dom f}$.
By $(2)$, $\Gamma_S$ is non-empty for each $S \in \map {\operatorname {Fin} } X$.

For each $S \in \map {\operatorname {Fin} } X$, $\Gamma_S \cap \Gamma_T = \Gamma_{S \cup T}$:
If $f \in \Gamma_{S \cup T}$, then $S \cup T \subseteq \Dom f$.
Then $S \subseteq \Dom f$ and $T \subseteq \Dom f$, so $f \in \Gamma_S$ and $f \in \Gamma_T$.
Thus $f \in \Gamma_S \cap \Gamma_T$.
If $f \in \Gamma_S \cap \Gamma_T$, then $f \in \Gamma_S$ and $f \in \Gamma_T$.
Thus $S \subseteq \Dom f$ and $T \subseteq \Dom f$.
Thus $S \cup T \subseteq \Dom f$.
So $f \in \Gamma_{S \cup T}$.

Thus $\set {\Gamma_S: S \in \map {\operatorname {Fin} } X}$ has the finite intersection property.
Then by the corollary to the Ultrafilter Lemma, there is an ultrafilter $\UU$ on on $M$ which includes $\set {\Gamma_S: S \in \map {\operatorname {Fin} } X}$ as a subset.
We will now construct a mapping $\phi: X \to Y$.
Fix $x \in X$.
Note that by the definitions of $\Phi$ and $\Gamma$:

$\map \Phi x = \set {\map f x: f \in \Gamma_{\set x} }$
For each $y \in \map \Phi x$, let $K_y = \set {f \in \Gamma_{\set x} : \map f x = y}$.
Then $\set {K_y : y \in \map \Phi x}$ is a partition of $\Gamma_{\set x}$.


This article, or a section of it, needs explaining.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Because $\set x \in \map {\operatorname {Fin} } X$:

$\Gamma_{\set x} \in \UU$
By $(1)$, $\map \Phi x$ is finite.
Thus by Component of Finite Union in Ultrafilter, there is exactly one $y \in \map \Phi x$ such that $K_y \in \UU$.
We define $\map \phi x$ to be that $y$.
By the definition of $K_y$, for each $x \in X$ we have:

$\set {f \in \Gamma_{\set x}: \map f x = \map \phi x} \in \UU$

We must show that $\phi \in M$.
Let $S$ be a finite subset of $X$.
Let $\ds \Psi = \bigcap_{x \mathop \in S} \set {f \in \Gamma_{\set x}: \map f x = \map \phi x}$.
Since:

$\set {f \in \Gamma_{\set x}: \map f x = \map \phi x} \in \UU$ for each $x \in X$
$S$ is finite
$\UU$ is a filter
it follows that:

$\Psi \in \UU$
Thus $\Psi \ne \O$.
Choose any $f \in \Psi$.
Then $\map f x \in \Gamma_{\set x}$ for each $x \in S$.
So $f \in M$ and $S$ is a finite subset of the domain of $f$.
Since $M$ has finite character, $f \restriction S \in M$.
Furthermore, by the definition of $\Psi$:

$\map f x = \map \phi x$
for each $x \in S$.
Thus:

$\phi \restriction S = f \restriction S \in \phi$
So we see that $\phi \restriction S \in M$ for each finite subset $S$ of $X$.
Since $M$ has finite character, $\phi \in M$.
$\blacksquare$


Boolean Prime Ideal Theorem
This theorem depends on the Boolean Prime Ideal Theorem (BPI), by way of Ultrafilter Lemma.
Although not as strong as the Axiom of Choice, the BPI is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Source of Name
This entry was named for Robert H. Cowen and Erwin Engeler.


Sources
1996: Eric Schechter: Handbook of Analysis and its Foundations: $\S 6.35$




