# 

Source: https://proofwiki.org/wiki/Mapping_at_Element_is_Supremum_of_Compact_Elements_implies_Mapping_at_Element_is_Supremum_that_Way_Below

Theorem
Let $\struct{S, \vee_1, \wedge_1, \preceq_1}$ and $\struct{T, \vee_2, \wedge_2, \preceq_2}$ be complete lattices.
Let $f: S \to T$ be a mapping such that

$\forall x \in S: \map f x = \sup \leftset {\map f w: w \in S \land w \preceq_1 x \land w}$ is compact$\rightset{}$

Then

$\forall x \in S: \map f x = \sup \set{ \map f w: w \in S \land w \ll x}$


Proof
Let $x \in S$.
Define $X = \leftset {\map f w: w \in S \land w \preceq_1 x \land w}$ is compact$\rightset{}$
Define $Y = \set { \map f w: w \in S \land w \ll x}$
We will prove that

$X \subseteq Y$
Let $b \in X$.
By definition of $X$:

$\exists w \in S: b = \map f w \land w \preceq_1 x \land w$ is compact.
By definition of compact element:

$w \ll w$
By Preceding and Way Below implies Way Below:

$w \ll x$
Thus by definition of $Y$:

$b \in Y$
$\Box$
We will prove that

$\map f x$ is upper bound for $Y$.
Let $b \in Y$.
By definition of $Y$:

$\exists w \in S: b = \map f w \land w \ll x$
By Way Below implies Preceding:

$w \preceq_1 x$
By Mapping at Element is Supremum implies Mapping is Increasing:

$f$ is an increasing mapping.
Thus by definition of increasing mapping:

$b \preceq_2 \map f x$
$\Box$

We will prove that

$\forall b \in T: b$ is upper bound for $Y \implies \map f x \preceq_2 b$
Let $b \in T$ such that

$b$ is upper bound for $Y$.
By Upper Bound for Subset:

$b$ is upper bound for $X$.
By assumption:

$\map f x = \sup X$
Thus by definition of supremum:

$\map f x \preceq_2 b$
$\Box$

Thus by definition of supremum:

$\map f x = \sup Y$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL17:26




