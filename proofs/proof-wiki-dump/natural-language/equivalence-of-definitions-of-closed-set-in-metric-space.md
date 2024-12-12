# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Closed_Set_in_Metric_Space



Theorem
The following definitions of the concept of Closed Set in the context of Metric Spaces are equivalent:
Let $M = \struct {A, d}$ be a metric space.
Let $H \subseteq A$.

Definition 1
$H$ is closed (in $M$) if and only if its complement $A \setminus H$ is open in $M$. 

Definition 2
$H$ is closed (in $M$) if and only if every limit point of $H$ is also a point of $H$.


Proof
Let $H'$ denote the set of limit points of $H$.

Definition 1 implies Definition 2
Let $H$ be closed in $M$ by definition 1.
Then by definition $A \setminus H$ is open in $M$.
Let $b \in M: b \in A \setminus H$.
Then by definition of open set:

$\exists \delta \in \R_{>0}: \map {B_\delta} {b; d} \subseteq A \setminus H$
where $\map {B_\delta} {b; d}$ denotes the open $\delta$-ball of $b$.
From Intersection with Complement is Empty iff Subset:

$\map {B_\delta} {b; d} \cap H = \O$
So by definition of limit point:

$b \notin H'$
Hence:

$A \setminus H \cap H' = \O$
By Intersection with Complement is Empty iff Subset:

$H' \subseteq H$
Thus $H$ contains all its limit points.
That is, $H$ be closed in $M$ by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $H$ be closed in $M$ by definition 2.
That is:

$H' \subseteq H$
Then by Set Complement inverts Subsets:

$A \setminus H \subseteq A \setminus H'$
Let $b \in A \setminus H$.
Then by definition of relative complement:

$b \notin H'$
Then by definition of limit point:

$\exists \delta \in \R_{>0}: \map {B_\delta} {b; d} \cap H = \O$
and so:

$\map {B_\delta} {b; d} \subseteq A \setminus H$
As $b$ is arbitrary, it follows that $A \setminus H$ is open in $M$.
Hence by definition, $H$ is closed in $M$ by definition 1.
$\blacksquare$


Also see
Complement of Closed Set in Complex Plane is Open
Complement of Open Set in Complex Plane is Closed


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 6$: Open Sets and Closed Sets: Theorem $6.7$




