# 

Source: https://proofwiki.org/wiki/Complement_of_Bounded_Set_in_Complex_Plane_has_at_most_One_Unbounded_Component

Theorem
Let $S \subseteq \C$ be bounded.
Then $\C \setminus S$ has at most one unbounded component.


Proof
If $\C \setminus S$ has no unbounded components, we are done.
Suppose that $\C \setminus S$ has at least one unbounded component.
We must show that it has at most one. 
Since $S$ is bounded, there exists $R > 0$ such that:

$\cmod z \le R$ for all $z \in S$.
Let $C$ be an unbounded component of $\C \setminus S$.
Since $C$ is unbounded, there exists $z_0 \in C$ with $\cmod {z_0} > R$.
Hence:

$\ds z_0 \in C \cap \set {z \in \C : \cmod z > R}$
From Complement of Closed Disk in Complex Plane is Path-Connected, we have that:

$\set {z \in \C : \cmod z > R}$ is path-connected.
From Path-Connected Space is Connected:

$\set {z \in \C : \cmod z > R}$ is connected.
Hence from Union of Connected Sets with Common Point is Connected, we have that:

$C \cup \set {z \in \C : \cmod z > R}$ is connected.
From definition 3 of a component, we have that:

$C$ is a maximal connected set.
Since:

$C \subseteq C \cup \set {z \in \C : \cmod z > R}$
we therefore have:

$C = C \cup \set {z \in \C : \cmod z > R}$
So we have:

$\set {z \in \C : \cmod z > R} \subseteq C$
Let $C'$ be a component of $\C \setminus S$ that is distinct from $C$. 
Then $C'$ is disjoint from $C$.
In particular, $C'$ is disjoint from $\set {z \in \C : \cmod z > R}$.
So, we have:

$C' \subseteq \C \setminus C \subseteq \set {z \in \C : \cmod z \le R}$
That is:

$C'$ is bounded.
Hence:

$C$ is the only unbounded component of $\C \setminus S$.
This was the demand.
$\blacksquare$





