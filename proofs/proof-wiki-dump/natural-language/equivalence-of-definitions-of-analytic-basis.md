# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Analytic_Basis



Theorem
The following definitions of the concept of Analytic Basis are equivalent:


Definition 1
Let $\struct {S, \tau}$ be a topological space.

An analytic basis for $\tau$ is a subset $\BB \subseteq \tau$ such that:

$\ds \forall U \in \tau: \exists \AA \subseteq \BB: U = \bigcup \AA$

That is, such that for all $U \in \tau$, $U$ is a union of sets from $\BB$.

Definition 2
Let $\struct {S, \tau}$ be a topological space.
Let $\BB \subseteq \tau$.

Then $\BB$ is an analytic basis for $\tau$ if and only if:

$\forall U \in \tau: \forall x \in U: \exists V \in \BB: x \in V \subseteq U$


Proof
Definition 1 implies Definition 2
Let $\BB$ be an analytic basis for $\tau$ by definition 1.
Let $U \in \tau$.
By definition 1 of an analytic basis, we can choose $\AA \subseteq \BB$ such that:

$\ds U = \bigcup \AA$
By the definition of union:

$\forall x \in U: \exists B \in \AA: x \in B$
By Union is Smallest Superset:

$\forall B \in \AA: B \subseteq U$
Since $\AA \subseteq \BB$, the result follows.
Thus $\BB$ is an analytic basis for $\tau$ by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $\BB$ be an analytic basis for $\tau$ by definition 2.
Let $U \in \tau$.
Let $\AA = \set {B \in \BB: B \subseteq U}$.
Then $\AA \subseteq \BB$.

Let $x \in U$ be arbitrary.
Since $\BB$ is an analytic basis for $\tau$ by definition 2, there is some $B_x \in \BB$ such that:

$x \in B_x \subseteq U$
Hence, by construction of $\AA$, $B_x \in \AA$.
Thus:

$\ds x \in \bigcup \AA$
and it follows that:

$\ds U \subseteq \bigcup \AA$

By Union is Smallest Superset applied to $\AA$ and $U$:

$\ds \bigcup \AA \subseteq U$
By definition of set equality and definition 1 of an analytic basis, the result follows.
Thus $\BB$ is an analytic basis for $\tau$ by definition 1.
$\blacksquare$





