# 

Source: https://proofwiki.org/wiki/Compact_Subset_is_Bounded_Below_Join_Semilattice

Theorem
Let $L = \left({S, \vee, \preceq}\right)$ be a bounded below join semilattice.
Let $P = \left({K\left({L}\right), \precsim}\right)$ be an ordered subset of $L$,
where $K\left({L}\right)$ denotes the compact subset of $L$.

Then $P$ is a bounded below join semilattice.


Proof
By Bottom is Compact:

$\bot_L$ is a compact element,
where $\bot_L$ denotes the smallest element in $L$.
By definition of compact subset:

$\bot_L \in K \left({L} \right)$
By definition of the smallest element:

$\forall x \in K\left({L}\right): \bot_L \preceq x$
By definition of ordered subset:

$\forall x \in K\left({L}\right): \bot_L \precsim x$
Thus by definition:

$P$ is bounded below.
Thus by Compact Subset is Join Subsemilattice:

$P$ is join semilattice.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL13:15




