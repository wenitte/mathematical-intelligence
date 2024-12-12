# 

Source: https://proofwiki.org/wiki/Component_of_Resolvent_Set_of_Element_in_Unital_Banach_Algebra_is_Disjoint_from_or_Component_of_Resolvent_Set_in_Closed_Subalgebra

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital Banach algebra over $\C$.
Let $B$ be a closed unital subalgebra of $A$. 
Let $x \in B$.
Let $\map {\rho_A} x$ and $\map {\rho_B} x$ be the resolvent sets of $x$ in $A$ and $B$ respectively.
Let $U$ be a component of $\map {\rho_A} x$. 

Then either:

$U$ is a component of $\map {\rho_B} x$
or:

$U \cap \map {\rho_B} x = \O$


Proof
From Resolvent Set of Element of Banach Algebra is Open:

$\map {\rho_B} x$ is open in $\C$.
From Normed Vector Space is Locally Connected:

$\C$ is locally connected.
From Open Subset of Locally Connected Space is Locally Connected:

$\map {\rho_B} x$ is locally connected.
Hence, from Component of Locally Connected Space is Open:

$U$ is open in $\map {\rho_B} x$.
From Open Set in Open Subspace, we have:

$U$ is open in $\C$.
Now consider:

$V = U \cap \map {\sigma_B} x$
From the definition of the subspace topology, we have:

$V$ is closed in $U$.
From Closure of Subset in Subspace we have:

$\map {\cl_U} V = \map \cl V \cap U$
where $\cl_U$ denotes the closure in the subspace topology of $U$.
Since $U$ is open, we also have:

$\map {\mathrm{Int}_U} V = \map {\mathrm{Int} } V$
by Open Set in Open Subspace.
Hence we have:

$\partial_U V = \paren {\map \cl V \cap U} \setminus \map {\mathrm{Int} } V$
where $\partial_U$ denotes topological boundary relative to $U$.
We want to show that:

$\paren {\map \cl V \cap U} \setminus \map {\mathrm{Int} } V \subseteq \map {\sigma_B} x \setminus \map {\mathrm{Int} } {\map {\sigma_B} x}$
Since $\map {\sigma_B} x$ is closed, we have:

$\map \cl V \subseteq \map {\sigma_B} x$
from Set Closure Preserves Set Inclusion.
Hence, we have:

$\map \cl V \cap U \subseteq \map {\sigma_B} x \cap U$
From Interior of Finite Intersection equals Intersection of Interiors, we have:

$\map {\mathrm {Int} } V = \map {\mathrm {Int} } {\map {\sigma_B} x} \cap U$
since $U$ is open.
Hence we have:

$\paren {\map \cl V \cap U} \setminus \map {\mathrm{Int} } V \subseteq \paren {\map {\sigma_B} x \cap U} \setminus \paren {\map {\mathrm {Int} } {\map {\sigma_B} x} \cap U}$
Since:

$\map {\sigma_B} x \cap U \subseteq U$
we have:

$\paren {\map {\sigma_B} x \cap U} \setminus \paren {\map {\mathrm {Int} } {\map {\sigma_B} x} \cap U} = \paren {\map {\sigma_B} x \cap U} \setminus \paren {\map {\mathrm {Int} } {\map {\sigma_B} x} }$
and finally:

$\paren {\map {\sigma_B} x \cap U} \setminus \paren {\map {\mathrm {Int} } {\map {\sigma_B} x} } \subseteq \map {\sigma_B} x \setminus \map {\mathrm{Int} } {\map {\sigma_B} x} = \partial \map {\sigma_B} x$
From Boundary of Spectrum of Element in Subalgebra of Unital Banach Algebra, we have:

$\partial \map {\sigma_B} x \subseteq \partial \map {\sigma_A} x$
Since $\map {\sigma_A} x$ is again closed, we have:

$\partial \map {\sigma_A} x \subseteq \map {\sigma_A} x$
While, since $U \subseteq \C \setminus \map {\sigma_A} x$, we have:

$\map {\sigma_A} x \subseteq \C \setminus U$
from Set Complement inverts Subsets.
To put everything together, we have shown:

$\partial_V U \subseteq \partial \map {\sigma_A} x \subseteq \C \setminus U$
Since $\partial_U V \subseteq U$ and $\partial_U V \subseteq \C \setminus U$, we must have $\partial_U V = \O$. 
Recall that $U$, as a component of $\map {\rho_A} x$, is connected.
Hence from Topological Space is Connected iff any Proper Non-Empty Subset has Non-Empty Boundary, we have:

$V = \O$ or $V = U$.
In the former case, we have $U \cap \map {\rho_B} x = \O$. 
In the latter case, we have $U \subseteq \map {\rho_B} x$ from Intersection with Subset is Subset.
Since $U$ is a component of $\map {\rho_A} x$ contained in $\map {\rho_B} x$, we argue it must be a component of $\map {\rho_B} x$.
If $U$ were not a component of $\map {\rho_B} x$, it would be strictly contained in some component $S$ of $\map {\rho_B} x$. 
$S$ remains connected in $\map {\rho_A} x$, so this contradicts that $U$ is a component of $\map {\rho_A} x$.
Hence $U$ is a component of $\map {\rho_B} x$ in the latter case.
$\blacksquare$





