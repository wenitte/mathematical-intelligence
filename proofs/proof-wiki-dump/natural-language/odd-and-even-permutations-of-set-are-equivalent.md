# 

Source: https://proofwiki.org/wiki/Odd_and_Even_Permutations_of_Set_are_Equivalent

Theorem
Let $n \in \N_{> 0}$ be a natural number greater than $0$.
Let $S$ be a set of cardinality $n$.
Let $S_n$ denote the symmetric group on $S$ of order $n$.
Let $R_e$ and $R_o$ denote the subsets of $S_n$ consisting of even permutations and odd permutations respectively.

Then $R_e$ and $R_o$ are equivalent.


Proof
From Symmetric Group on n Letters is Isomorphic to Symmetric Group, it is sufficient to investigate the symmetric group on n letters.

Let $\tau$ be a transposition.
By definition of sign:

$\map \sgn \rho = -1$
By definition of odd permutation:

$\tau \in R_o$
Moreover, also by definition of sign, for any $\rho \in R_e$ we have:

$\rho \circ \tau \in R_o$

Define the mapping $\phi$:

$\forall \rho \in R_e: \map \phi \sigma = \rho \circ \tau$

We claim that $\phi$ is injective.
Suppose:

$\map \phi {\rho_1} = \map \phi {\rho_2}$
Then:

$\rho_1 \circ \tau = \rho_2 \circ \tau$
Since each Transposition is Self-Inverse, it follows that:

$\rho_1 = \rho_1 \circ \tau \circ \tau = \rho_2 \circ \tau \circ \tau = \rho_2$
Thus $\phi$ is indeed injective.
$\Box$

We claim that $\phi$ is also surjective.
Let $\sigma \in R_o$. 
We need to show that there exists an element $\rho\in R_e$ such that:

$\map \phi \rho = \sigma$
By definition of sign:

$\sigma \circ \tau \in R_e$
Since each Transposition is Self-Inverse, it follows that:

$\map \phi {\sigma \circ \tau} = \sigma \circ \tau \circ \tau = \sigma$
Thus $\phi$ is surjective.
$\Box$

Since $\phi$ is injective and surjective, $\phi$ is the desired bijection.
Hence the result by definition of set equivalence.
$\blacksquare$


Sources
1968: Ian D. Macdonald: The Theory of Groups ... (previous) ... (next): Appendix: Elementary set and number theory




