# 

Source: https://proofwiki.org/wiki/Boundary_of_Spectrum_of_Element_in_Subalgebra_of_Unital_Banach_Algebra

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital Banach algebra over $\C$.
Let $B$ be a closed unital subalgebra of $A$. 
Let $x \in B$.
Let $\map {\sigma_A} x$ and $\map {\sigma_B} x$ be the spectra of $x$ in $A$ and $B$ respectively.

Then:

$\partial \map {\sigma_B} x \subseteq \partial \map {\sigma_A} x$
where $\partial$ denotes topological boundary.


Proof 1
Let $\map G B$ be the group of units of $B$. 
Let $\lambda \in \partial \map {\sigma_B} x$. 
From Boundary is Intersection of Closure with Closure of Complement we have:

$\lambda \in \map \cl {\C \setminus \map {\sigma_B} x}$
So from Point in Closure of Subset of Metric Space iff Limit of Sequence, we have: 

there exists a sequence $\sequence {\lambda_n}_{n \in \N}$ in $\C \setminus \map {\sigma_B} x$ such that $\lambda_n \to \lambda$.
Hence, we have:

$\lambda_n {\mathbf 1}_A - x \to \lambda {\mathbf 1}_A - x$ as $n \to \infty$
where $\lambda_n {\mathbf 1}_A - x \in \map G B$ for each $n \in \N$ yet $\lambda {\mathbf 1}_A - x \not \in \map G B$.
From Group of Units in Unital Banach Algebra is Open:

$\map G B$ is open in $B$.
Hence $\partial \map G B = \map G B^- \setminus \map G B$.
Since $\lambda {\mathbf 1}_A - x$ is the limit of a sequence in $\map G B$, yet is not contained in $\map G B$, we have $\lambda {\mathbf 1}_A - x \in \partial \map G B$. 
From Element of Unital Banach Algebra on Boundary of Group of Units of Subalgebra is Not Invertible in Algebra, we have:

$\lambda {\mathbf 1}_A - x \not \in \map G A$
Hence $\lambda \in \map {\sigma_A} x$.
We show additionally that $\lambda \not \in \map {\sigma_A} x^\circ$. 
Suppose otherwise that $\lambda \in \map {\sigma_A} x^\circ$, then by the definition of a convergent sequence we would have $\lambda_n \in \map {\sigma_A} x$ for sufficiently large $n$. 
However, $\lambda_n \not \in \map {\sigma_A} x$ for all $n \in \N$. 
Hence $\lambda \not \in \map {\sigma_A} x^\circ$.
Hence by the definition of topological boundary, we have:

$\lambda \in \partial \map {\sigma_A} x$
$\blacksquare$


Proof 2
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





