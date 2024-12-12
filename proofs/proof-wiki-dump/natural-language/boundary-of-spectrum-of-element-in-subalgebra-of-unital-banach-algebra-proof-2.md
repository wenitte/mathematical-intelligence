# 

Source: https://proofwiki.org/wiki/Boundary_of_Spectrum_of_Element_in_Subalgebra_of_Unital_Banach_Algebra/Proof_2

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital Banach algebra over $\C$.
Let $B$ be a closed unital subalgebra of $A$. 
Let $x \in B$.
Let $\map {\sigma_A} x$ and $\map {\sigma_B} x$ be the spectra of $x$ in $A$ and $B$ respectively.

Then:

$\partial \map {\sigma_B} x \subseteq \partial \map {\sigma_A} x$
where $\partial$ denotes topological boundary.


Proof
Let:

$\lambda \in \partial \map {\sigma_B} x$.
From Boundary is Intersection of Closure with Closure of Complement and Spectrum of Element of Banach Algebra is Closed, we have:

$\partial \map {\sigma_B} x = \map {\sigma_B} x \cap \map \cl {\map {\rho_B} x}$
where $\map {\rho_B} x$ is the resolvent set of $x$ in $B$. 
Likewise let $\map {\rho_A} x$ be the resolvent set of $x$ in $A$. 
Aiming for a contradiction, suppose that $\lambda \in \map {\rho_A} x$.
Then:

$\lambda \in \map \cl {\map {\rho_B} x} \cap \map {\rho_A} x$
That is, from Closure of Subset in Subspace:

$\lambda \in \map {\cl_{\map {\rho_A} x} } {\map {\rho_B} x}$
where $\cl_{\map {\rho_A} x}$ is the closure taken in the subspace topology of $\map {\rho_A} x$.
From Resolvent Set of Element in Closed Unital Subalgebra of Banach Algebra is Clopen in Resolvent Set, we have:

$\map {\rho_B} x$ is clopen in $\map {\rho_A} x$.
From Set is Closed iff Equals Topological Closure, we therefore have:

$\map {\cl_{\map {\rho_A} x} } {\map {\rho_B} x} = \map {\rho_B} x$
Hence $\lambda \in \map {\sigma_B} x \cap \map {\rho_B} x$. 
Since $\map {\rho_B} x = \C \setminus \map {\sigma_B} x$, this contradicts the definition of set complement. 
Hence $\lambda \in \C \setminus \map {\rho_A} x = \map {\sigma_A} x$.
From Resolvent Set of Element in Subalgebra, we have $\map {\rho_B} x \subseteq \map {\rho_A} x$. 
Hence from Set Closure Preserves Set Inclusion, we have $\map \cl {\map {\rho_B} x} \subseteq \map \cl {\map {\rho_A} x}$. 
We therefore have $\lambda \in \map {\sigma_A} x \cap \map \cl {\map {\rho_A} x} = \partial \map {\sigma_A} x$.
$\blacksquare$





