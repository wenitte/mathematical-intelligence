# 

Source: https://proofwiki.org/wiki/Resolvent_Set_of_Element_in_Banach_Algebra_has_same_Unique_Unbounded_Component_as_Resolvent_Set_of_Element_in_Closed_Subalgebra

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital Banach algebra over $\C$.
Let $B$ be a closed unital subalgebra of $A$. 
Let $x \in B$.
Let $\map {\rho_A} x$ and $\map {\rho_B} x$ be the resolvent sets of $x$ in $A$ and $B$ respectively.

Then $\map {\rho_A} x$ and $\map {\rho_B} x$ both have unique unbounded component, and further these components coincide. 


Proof
Let $\map {\sigma_A} x$ and $\map {\sigma_B} x$ be the spectra of $x$ in $A$ and $B$ respectively. 
From Spectrum of Element of Banach Algebra is Bounded, we have:

$\map {\sigma_A} x$ and $\map {\sigma_B} x$ are bounded.
Hence, from Complement of Bounded Set in Complex Plane has at most One Unbounded Component:

$\map {\rho_A} x$ and $\map {\rho_B} x$ both have a unique unbounded component.
Let $U$ be the unbounded component of $\map {\rho_A} x$.
From Complement of Closed Disk in Complex Plane is Path-Connected, we have that:

$\set {z \in \C : \cmod z > \norm x}$ is path-connected.
From Path-Connected Space is Connected:

$\set {z \in \C : \cmod z > \norm x}$ is connected.
From Spectrum of Element of Banach Algebra is Bounded, we have:

$\map {\rho_A} x \supseteq \set {z \in \C : \cmod z > \norm x}$
and:

$\map {\rho_B} x \supseteq \set {z \in \C : \cmod z > \norm x}$
and hence:

$U \cap \map {\rho_B} x \supseteq \set {z \in \C : \cmod z > \norm x} \ne \O$
From Component of Resolvent Set of Element in Unital Banach Algebra is Disjoint from or Component of Resolvent Set in Closed Subalgebra, we therefore have:

$U$ is a component of $\map {\rho_B} x$.
Since $U$ is unbounded, we conclude that $U$ is also the unique unbounded component of $\map {\rho_B} x$. 
$\blacksquare$





