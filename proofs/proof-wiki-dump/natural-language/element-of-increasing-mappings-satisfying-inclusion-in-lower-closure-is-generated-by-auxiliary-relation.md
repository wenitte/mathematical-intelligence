# 

Source: https://proofwiki.org/wiki/Element_of_Increasing_Mappings_Satisfying_Inclusion_in_Lower_Closure_is_Generated_by_Auxiliary_Relation

Theorem
Let $R = \struct {S, \preceq}$ be a bounded below join semilattice.
Let $\map {\operatorname{Ids} } R$ be the set of all ideals in $R$.
Let $L = \struct {\map {\operatorname{Ids} } R, \precsim}$ be an ordered set where $\precsim \mathop = \subseteq\restriction_{\map {\operatorname{Ids} } R \times \map {\operatorname{Ids} } R}$.
Let $M = \struct {F, \preccurlyeq}$ be the ordered set of increasing mappings $g: S \to \map {\operatorname{Ids} } R$ satisfying $\forall x \in S: \map g x \subseteq x^\preceq$.
Let $f \in F$.

Then

there exists an auxiliary relation $\RR$ on $S$ such that:
$\forall x \in S: \map f x = x^\RR$
where $x^\RR$ denotes the $\RR$-segment of $x$.


Proof
Define relation $\RR$ on $S$:

$\forall x, y \in S: \tuple {x, y} \in \RR \iff x \in \map f y$
We will prove that:

$(1): \quad \forall x, y \in S: \tuple {x, y} \in \RR \implies x \preceq y$
Let $x, y \in S$ such that:

$\tuple {x, y} \in \RR$
By definitions of $\RR$ and $F$:

$x \in \map f y \subseteq y^\preceq$
By definition of subset;

$x \in y^\preceq$
Thus be definition of lower closure of element:

$x \preceq y$
$\Box$
We will prove that:

$(2): \quad \forall x, y, z, u \in S: x \preceq y \land \tuple {y, z} \in \RR \land z \preceq u \implies \tuple {x, u} \in \RR$
Let $x, y, z, u \in S$ such that:

$x \preceq y \land \tuple {y, z} \in \RR \land z \preceq u$
By definition of $\RR$:

$y \in \map f z$
By definition of increasing mapping:

$\map f z \precsim \map f u$
By definition of $\precsim$:

$\map f z \subseteq \map f u$
By definition of subset:

$y \in \map f u$
By definition of $F$:

$\map f u$ is an ideal in $R$.
By definition of ideal:

$\map f u$ is a lower section.
By definition of lower section:

$x \in \map f u$
Thus by definition of $\RR$:

$\tuple {x, u} \in \RR$
$\Box$

We will prove that:

$(3): \quad \forall x, y, z \in S: \tuple {x, z} \in \RR \land \tuple {y, z} \in \RR \implies \tuple {x \vee y, z} \in \RR$
Let $x, y, z \in S$ such that:

$\tuple {x, z} \in \RR \land \tuple {y, z} \in \RR$
By definition of $\RR$:

$x \in \map f z$ and $y \in \map f z$
By definition of $F$:

$\map f z$ is an ideal in $R$.
By definition of ideal:

$\map f z$ is a directed lower section.
By definition of directed subset:

$\exists d \in \map f z: x \preceq d \land y \preceq d$
By definition of supremum:

$x \vee y \preceq d$
By definition of lower section:

$x \vee y \in \map f z$
Thus by definition of $\RR$:

$\tuple {x \vee y, z} \in \RR$
$\Box$
We will prove that:

$(4): \quad \forall x \in S: \tuple {\bot, x} \in \RR$
where $\bot$ denotes the smallest element in $R$.
Let $x \in S$.
By definition of $F$:

$\map f x$ is an ideal in $R$.
By definition of ideal:

$\map f z$ is a non-empty lower section.
By definition of non-empty set:

$\exists z: z \in \map f x$
By definition of smallest element:

$\bot \preceq z$
By definition of lower section:

$\bot \in \map f x$
Thus by definition of $\RR$:

$\tuple {\bot, x} \in \RR$
$\Box$
By definition:

$\RR$ is an auxiliary relation on $S$.
Thus by definitions of $\RR$ and $\RR$-segment:

$\forall x \in S: \map f x = x^\RR$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:30




