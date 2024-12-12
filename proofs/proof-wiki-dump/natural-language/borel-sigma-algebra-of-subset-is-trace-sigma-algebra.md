# 

Source: https://proofwiki.org/wiki/Borel_Sigma-Algebra_of_Subset_is_Trace_Sigma-Algebra

Theorem
Let $\struct {X, \tau}$ be a topological space, and let $A \subseteq X$ be a subset of $X$.
Let $\tau_A$ be the subspace topology on $A$.

Then the following equality of $\sigma$-algebras on $A$ holds:

$\map \BB {A, \tau_A} = \map \BB {X, \tau}_A$
where $\BB$ signifies Borel $\sigma$-algebra, and $\map \BB {X, \tau}_A$ signifies trace $\sigma$-algebra.


Proof
By definition of Borel $\sigma$-algebra, it holds that:

$\map \BB {X, \tau} = \map \sigma \tau$
and also, by definition of subspace topology:

$\tau_A = A \cap \tau = \set {A \cap U: U \in \tau}$
Thus, it follows that:

$\map \BB {A, \tau_A} = \map \sigma {A \cap \tau}$

Thereby, the desired equality:

$\map \BB {A, \tau_A} = \map \BB {X, \tau}_A$
follows directly from applying Trace Sigma-Algebra of Generated Sigma-Algebra with $\GG = \tau$.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 3$: Problem $10 \ \text{(ii)}$




