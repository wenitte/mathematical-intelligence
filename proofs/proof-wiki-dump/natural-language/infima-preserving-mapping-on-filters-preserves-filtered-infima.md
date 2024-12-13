# 

Source: https://proofwiki.org/wiki/Infima_Preserving_Mapping_on_Filters_Preserves_Filtered_Infima

Theorem
Let $\struct {S, \preceq}$, $\struct {T, \precsim}$ be ordered sets.
Let $f: S \to T$ be a mapping.

For every filter $F$ in $\struct {S, \preceq}$, let $f$ preserve the infimum on $F$.

Then $f$ preserves filtered infima.


Proof
Let $F$ be a filtered subset of $S$ such that:

$F$ admits an infimum in $\struct {S, \preceq}$.
By Filtered iff Upper Closure Filtered:

$F^\succeq$ is filtered
where $F^\succeq$ denotes the upper closure of $F$.
By Upper Closure is Upper Section:

$F^\succeq$ is upper.
Because filtered is non-empty, by definition:

$F^\succeq$ is filter in $\struct {S, \preceq}$.
By Infimum of Upper Closure of Set:

$F^\succeq$ admits an infimum in $\struct {S, \preceq}$
and

$\map \inf {F^\succeq} = \inf F$
By assumption and mapping preserves the infimum on subset:

$\map {f^\to} {F^\succeq}$ admits an infimum in $\struct {T, \precsim}$
and

$\map \inf {\map {f^\to} {F^\succeq} } = \map f {\map \inf {F^\succeq} }$
By Upper Closure is Closure Operator:

$F \subseteq F^\succeq$
By Image of Subset under Mapping is Subset of Image:

$\map {f^\to} F \subseteq \map {f^\to} {F^\succeq}$
By definition of infimum:

$\map f {\inf F}$ is lower bound for $\map {f^\to} {F^\succeq}$
By Lower Bound is Lower Bound for Subset:

$\map f {\inf F}$ is a lower bound for $\map {f^\to} F$
We will prove that:

for every element $x$ of $T$:
if $x$ is lower bound for $\map {f^\to} F$, then $x \precsim \map f {\inf F}$
Let $x \in T$ such that:

$x$ is a lower bound for $\map {f^\to} \F$
We will prove as a sublemma that:

$x$ is a lower bound for $\map {f^\to} {F^\succeq}$
Let $y \in \map {f^\to} {F^\succeq}$.
By definition of image of set under mapping:

$\exists a \in S: a \in F^\succeq \land y = \map f a$
By definition of upper closure of set:

$\exists b \in F: b \preceq a$
By Infima Preserving Mapping on Filters is Increasing:

$f$ is increasing.
By definition of increasing:

$\map f b \precsim \map f a$
By definition of image of set under mapping:

$\map f b \in \map {f^\to} F$
By definition of lower bound of set:

$x \precsim \map f b$
Thus by definition of transitivity:

$x \precsim y$
Thus by definition:

$x$ is a lower bound for $\map {f^\to} {F^\succeq}$
This ends the proof of the sublemma.

Thus by definition of infimum:

$x \precsim \map f {\inf F}$

Thus again by definition of infimum:

$\map {f^\to} F$ admits an infimum in $\struct {T, \precsim}$
and

$\map \inf {\map {f^\to} F} = \map f {\inf F}$
Thus result follows by definition of mapping preserves filtered infima.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_0:70




