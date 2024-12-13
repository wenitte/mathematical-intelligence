# 

Source: https://proofwiki.org/wiki/Set_is_Neighborhood_of_Subset_iff_Neighborhood_of_all_Points_of_Subset


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $N \subseteq S$ be a subset of $T$.
Let $A \subseteq N$ be a subset of $T$.

Then:

$N$ is a neighborhood of $A$ in $T$
if and only if:

$N$ is a neighborhood of all points in $A$


Proof
Necessary Condition
Let $N$ be a neighborhood of $A$ in $T$.
By definition of neighborhood of set:

$\exists U \in \tau : A \subseteq U \subseteq N$

Let $z \in A$.
By definition of subset:

$z \in U$
From Set is Open iff Neighborhood of all its Points:

$U$ is a neighborhood of $z$
From Superset of Neighborhood in Topological Space is Neighborhood:

$N$ is a neighborhood of $z$

Since $z$ was arbitrary:

$N$ is a neighborhood of all points in $A$
$\Box$


Sufficient Condition
Suppose that for all points of $z \in A$, $N$ is a neighborhood of $z$.
That is, for all $z \in A$ there exists an open set $U_z \subseteq N$ of $T$ such that $z \in U_z$.

Now by Union is Smallest Superset: Family of Sets:

$\ds \bigcup_{z \mathop \in A} U_z \subseteq N$
as $\forall z \in A: U_z \subseteq N$.

If $z \in A$, then $z \in U_z$ by definition of $U_z$.
So:

$\ds z \in \bigcup_{z \mathop \in A} U_z$
Thus we also have:

$\ds A \subseteq \bigcup_{z \mathop \in A} U_z$

Let $U = \ds \bigcup_{z \mathop \in A} U_z$.
By Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets:

$U$ is open in $T$
Since $A \subseteq U \subseteq N$, then $N$ is neighborhood of $A$ in $T$ by definition.
$\blacksquare$





