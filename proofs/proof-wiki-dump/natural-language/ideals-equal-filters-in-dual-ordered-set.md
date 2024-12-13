# 

Source: https://proofwiki.org/wiki/Ideals_equal_Filters_in_Dual_Ordered_Set

Theorem
Let $L_1 = \struct {S, \preceq_1}$ be an ordered set.
Let $L_2 = \struct {S, \preceq_2}$ be a dual ordered set of $L_1$.

Then $\map {\mathit {Ids} } {L_1} = \map {\mathit {Filt} } {L_2}$
where

$\map {\mathit {Filt} } {L_2}$ denotes the set of all filters of $L_2$
$\map {\mathit {Ids} } {L_1}$ denotes the set of all ideals of $L_1$.


Proof
Let $x$ be a set.
By definition of $\mathit {Filt}$:

$x \in \map {\mathit {Filt} } {L_2} \iff x$ is a filter on $L_2$.
By Ideal is Filter in Dual Ordered Set:

$x \in \map {\mathit {Filt} } {L_2} \iff x$ is an ideal in $L_1$.
By definition of $\mathit{Ids}$:

$x \in \map {\mathit {Filt} } {L_2} \iff x \in \map {\mathit {Ids} } {L_1}$
Hence by definition of set equality:

$\map {\mathit {Ids} } {L_1} = \map {\mathit {Filt} } {L_2}$
$\blacksquare$


Sources
Mizar article WAYBEL16:8




