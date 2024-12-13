# 

Source: https://proofwiki.org/wiki/Open_Set_Characterization_of_Denseness/Analytic_Basis



Theorem
Let $\struct {X, \tau}$ be a topological space.
Let $S \subseteq X$.
Let $\BB \subseteq \tau$ be an analytic basis for $\tau$.

Then $S$ is (everywhere) dense in $X$ if and only if every non-empty open set of $\BB$ contains an element of $S$.

Proof
Necessary Condition
Let $S$ be everywhere dense in $X$.
By Open Set Characterization of Denseness then every non-empty open set contains an element of $S$.
Every non-empty set of an analytic basis is an open set by definition.
Hence every non-empty set of non-empty open set of $\BB$ contains an element of $S$.
$\Box$


Sufficient Condition
Suppose that every non-empty open set of $\BB$ contains an element of $S$.
Let $U$ be any non-empty open set.
Let $x \in U$.
By definition of an analytic basis then:

$\exists B \in \BB: x \in B \subseteq U$
By assumption $B$ contains an element $s$ of $S$.
Hence $s \in U$.
Since $U$ was an arbitrary non-empty open set then every non-empty open set contains an element of $S$
By Open Set Characterization of Denseness, $S$ is everywhere dense in $X$.
$\blacksquare$





