# 

Source: https://proofwiki.org/wiki/Bottom_Relation_is_Bottom_in_Ordered_Set_of_Auxiliary_Relations

Theorem
Let $L = \struct {S, \vee, \preceq}$ be a bounded below join semilattice.
Let $\map {\it Aux} L$ be the set of all auxiliary relations on $S$.
Let $P = \struct {\map {\it Aux} L, \precsim}$ be an ordered set where:

$\precsim \mathop = \subseteq \restriction_{ \map {\it Aux} L \times \map {\it Aux} L}$
Let $B = \set {\struct {\bot_L, x}: x \in S}$
where $\bot_L$ denotes smallest element in $L$.

Then

$B \mathop = \bot_P$


Proof
By Bottom Relation is Auxiliary Relation:

$B \in \map {\it Aux} L$
By definition:

$B$ is an upper bound for $\O$ in $P$
We will prove that:

$\forall R \in \map {\it Aux} L: R$ is an upper bound for $\O \implies B \mathop \precsim R$
Let $R \in \map {\it Aux} L$.
By condition $(iv)$ of definition of auxiliary relation:

$B \subseteq R$
Thus by definition of $\precsim$:

$B \precsim R$
$\Box$

By definition of supremum:

$B = \sup_P \O$
Thus by Supremum of Empty Set is Smallest Element:

$B = \bot_P$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:5




