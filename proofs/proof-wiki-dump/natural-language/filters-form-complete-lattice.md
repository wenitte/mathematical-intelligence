# 

Source: https://proofwiki.org/wiki/Filters_form_Complete_Lattice

Theorem
Let $L = \left({S, \wedge, \preceq}\right)$ be a bounded above meet semilattice.
Let $F = \left({\mathit{Filt}\left({L}\right), \subseteq}\right)$ be an inclusion ordered set,
where $\mathit{Filt}\left({L}\right)$ denotes set of all filters on $L$.

Then $F$ is a complete lattice.


Proof
Define $L^{-1} := \left({S, \succeq}\right)$ be a dual ordered set of $L$.
By Dual Pairs (Order Theory):

$L^{-1}$ is a bounded below meet semilattice.
By Filters equal Ideals in Dual Ordered Set:

$\mathit{Filt}\left({L}\right) = \mathit{Ids}\left({L^{-1} }\right)$
where $\mathit{Ids}\left({L^{-1} }\right)$ denotes the set of all ideals in $L^{-1}$.
Thus by Ideals form Complete Lattice:

$F$ is a complete lattice.
$\blacksquare$


Sources
Mizar article WAYBEL16:18




