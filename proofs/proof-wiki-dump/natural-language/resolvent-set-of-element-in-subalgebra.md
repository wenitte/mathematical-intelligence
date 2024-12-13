# 

Source: https://proofwiki.org/wiki/Resolvent_Set_of_Element_in_Subalgebra

Theorem
Let $A$ be a Banach algebra.
Let $B$ be a closed unital subalgebra of $A$.
Let $x \in B$.
Let $\map {\rho_A} x$ and $\map {\rho_B} x$ be the resolvent sets of $x$ in $A$ and $B$ respectively. 

Then:

$\map {\rho_B} x \subseteq \map {\rho_A} x$


Proof
Let $\map {\sigma_A} x$ and $\map {\sigma_B} x$ be the spectra of $x$ in $A$ and $B$ respectively. 
From Spectrum of Element in Unital Subalgebra, we have:

$\map {\sigma_A} x \subseteq \map {\sigma_B} x$
From Set Complement inverts Subsets, we have:

$\C \setminus \map {\sigma_B} x \subseteq \C \setminus \map {\sigma_A} x$
From the definition of the resolvent set, we have:

$\map {\rho_B} x \subseteq \map {\rho_A} x$
$\blacksquare$





