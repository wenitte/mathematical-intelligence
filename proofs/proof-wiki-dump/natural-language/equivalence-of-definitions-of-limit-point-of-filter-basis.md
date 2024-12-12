# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Limit_Point_of_Filter_Basis



Theorem
The following definitions of the concept of Limit Point of Filter Basis are equivalent:
Let $T = \struct {S, \tau}$ be a topological space.
Let $\FF$ be a filter on the underlying set $S$ of $T$.
Let $\BB$ be a filter basis of $\FF$.

Definition 1
A point $x \in S$ is called a limit point of $\BB$ if and only if $\FF$ converges on $x$.
$\BB$ is likewise said to converge on $x$.

Definition 2
A point $x \in S$ is called a limit point of $\BB$ if and only if every neighborhood of $x$ contains a set of $\BB$.


Proof
Let $\FF$ be a filter on $S$.
Let $\BB$ be a filter basis of $\FF$.


$(1)$ implies $(2)$
Let $x \in S$ be a limit Point of $\BB$ by definition $1$.
Then by definition $\FF$ converges on $x$.
By definition of convergent filter:

$\forall N_x \subseteq S: N_x \in \FF$
where $N_x$ is a neighborhood of $x$.
That is, every neighborhood of $x$ is an element of $\FF$.
By definition of filter basis:

$\forall U \in \FF: \exists V \in \BB: V \subseteq U$
But we have shown that $N_x \in \FF$.
Therefore:

$\exists V \in \BB: V \subseteq N_x$
That is, every neighborhood of $x$ contains a set of $\BB$.
Thus $x \in S$ is a limit Point of $\BB$ by definition $2$.
$\Box$


$(2)$ implies $(1)$
Let $x \in S$ be a limit Point of $\BB$ by definition $2$.
Then by definition every neighborhood of $x$ contains a set of $\BB$.
By definition of filter basis, $\FF := \set {V \subseteq X: \exists U \in \BB: U \subseteq V}$ is a filter on $S$ if and only if:

$\forall V_1, V_2 \in \BB: \exists U \in \BB: U \subseteq V_1 \cap V_2$
But then letting $V_1 = V_2 = V$, we have:

$\forall V \in \BB: \exists U \in \BB: U \subseteq V$
and so $V \in \FF$.
Thus every neighborhood of $x$ is an element of $\FF$.
Thus, by definition, $\FF$ converges on $x$.
Thus $x \in S$ is a limit Point of $\BB$ by definition $1$.
$\blacksquare$





