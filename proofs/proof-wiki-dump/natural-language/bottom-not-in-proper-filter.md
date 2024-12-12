# 

Source: https://proofwiki.org/wiki/Bottom_not_in_Proper_Filter



Theorem
Let $L = \struct {S, \preceq}$ be a bounded below preordered set.
Let $F$ be a filter on $L$.

Then $F$ is proper filter if and only if $\bot \notin F$
where $\bot$ denotes the smallest element of $S$.


Proof
Sufficient Condition
Suppose:

$F$ is proper.
By definition of proper subset:

$F \subseteq S$ and $F \ne S$
By definitions of set equality and subset:

$\exists x: x \in S \land x \notin F$
By definition of smallest element:

$\bot \preceq x$
Thus by definition of upper section:

$\bot \notin F$
$\Box$


Necessary Condition
Suppose $\bot \notin F$
By definition of set equality:

$F \ne S$
Hence $F$ is proper filter.
$\blacksquare$


Sources
Mizar article WAYBEL_7:4




