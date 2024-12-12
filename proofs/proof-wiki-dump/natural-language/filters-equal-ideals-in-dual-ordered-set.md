# 

Source: https://proofwiki.org/wiki/Filters_equal_Ideals_in_Dual_Ordered_Set

Theorem
Let $L_1 = \struct {S, \preceq_1}$ be an ordered set.
Let $L_2 = \struct {S, \preceq_2}$ be a dual ordered set of $L_1$.

Then $\map {\mathit {Filt} } {L_1} = \map {\mathit {Ids} } {L_2}$
where

$\map {\mathit {Filt} } {L_1}$ denotes the set of all filters of $L_1$,
$\map {\mathit {Ids} } {L_2}$ denotes the set of all ideals of $L_2$.


Proof
Let $x$ be a set.
By definition of $\mathit {Filt}$:

$x \in \map {\mathit {Filt} } {L_1} \iff x$ is a filter on $L_1$.
By Filter is Ideal in Dual Ordered Set:

$x \in \map {\mathit {Filt} } {L_1} \iff x$ is an ideal in $L_2$.
By definition of $\mathit{Ids}$:

$x \in \map {\mathit {Filt} } {L_1} \iff x \in \map {\mathit {Ids} } {L_2}$
Hence by definition of set equality:

$\map {\mathit {Filt} } {L_1} = \map {\mathit {Ids} } {L_2}$
$\blacksquare$


Sources
Mizar article WAYBEL16:7




