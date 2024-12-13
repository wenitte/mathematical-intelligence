# 

Source: https://proofwiki.org/wiki/Ordered_Set_of_Closure_Systems_is_Ordered_Set



Theorem
Let $L = \left({S, \preceq}\right)$ be an ordered set.

Then $\operatorname{ClSystems}\left({L}\right)$ is an ordered set,
where $\operatorname{ClSystems}\left({L}\right)$ denotes the ordered set of closure systems.


Proof
By definition of ordered set of closure systems:

$\operatorname{ClSystems}\left({L}\right) = \left({X, \precsim}\right)$
where

$X$ is the set of all closure systems of $L$,
dor all closure systems $s_1 = \left({T_1, \preceq_1}\right), s_2 = \left({T_2, \preceq_2}\right)$ of $L$: $s_1 \precsim s_2 \iff T_1 \subseteq T_2$
Reflexivity
Let $s = \left({T, \preceq'}\right)$ be a closure system.
By Set is Subset of Itself:

$T \subseteq T$
By definition of $\precsim$:

$s \precsim s$
Thus by definition

$\precsim$ is reflexive.
$\Box$

Transitivity
Let $s_1 = \left({T_1, \preceq_1}\right)$, $s_2 = \left({T_2, \preceq_2}\right)$, $s_3 = \left({T_3, \preceq_3}\right)$ be closure systems such that

$s_1 \precsim s_2$ and $s_2 \precsim s_3$
By definition of $\precsim$:

$T_1 \subseteq T_2$ and $T_2 \subseteq T_3$
By Subset Relation is Transitive:

$T_1 \subseteq T_3$
By definition of $\precsim$:

$s_1 \precsim s_3$
Thus by definition:

$\precsim$ is transitive.
$\Box$

Antisymmetry
Let $s_1 = \left({T_1, \preceq_1}\right)$, $s_2 = \left({T_2, \preceq_2}\right)$ be closure systems such that

$s_1 \precsim s_2$ and $s_2 \precsim s_1$
By definition of $\precsim$:

$T_1 \subseteq T_2$ and $T_2 \subseteq T_1$
By definition of set equality:

$T_1 = T_2$
By definition of ordered subset:

$\mathord\preceq_1 = \mathord\preceq \cap \left({T_1 \times T_1}\right) = \mathord\preceq_2$
Then

$s_1 = s_2$
Thus by definition:

$\precsim$ is antisymmetric
$\Box$
So, by definition:

$\precsim$ is ordering.
Hence $\operatorname{ClSystems}\left({L}\right)$ is an ordered set,
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL10:def 3




