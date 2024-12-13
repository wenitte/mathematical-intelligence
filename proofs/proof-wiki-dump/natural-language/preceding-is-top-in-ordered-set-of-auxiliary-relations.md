# 

Source: https://proofwiki.org/wiki/Preceding_is_Top_in_Ordered_Set_of_Auxiliary_Relations

Theorem
Let $L = \struct {S, \vee, \preceq}$ be a bounded below join semilattice.
Let $\map {\it Aux} L$ be the set of all auxiliary relations on $S$.
Let $P = \struct {\map {\it Aux} L, \precsim}$ be an ordered set
where $\precsim \mathop = \subseteq \restriction_{\map {\it Aux} L \times \map {\it Aux} L}$

Then

$\preceq \mathop = \top_P$
where $\top_P$ denotes the greatest element in $P$.


Proof
By Preceding is Auxiliary Relation:

$\preceq \mathop \in \map {\it Aux} L$
By definition:

$\preceq$ is lower bound for $\O$ in $P$
We will prove that:

$\forall R \in \map {\it Aux} L: R$ is lower bound for $\O \implies R \mathop \precsim \preceq$
Let $R \in \map {\it Aux} L$
By condition $(i)$ of definition of auxiliary relation:

$R \mathop \subseteq \preceq$
Thus by definition of $\precsim$:

$R \mathop \precsim \preceq$
$\Box$

By definition of infimum:

$\preceq \mathop = \inf_P \O$
Thus by Infimum of Empty Set is Greatest Element:

$\preceq \mathop = \top_P$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_4:3




