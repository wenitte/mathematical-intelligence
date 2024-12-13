# 

Source: https://proofwiki.org/wiki/Pasting_Lemma/Pair_of_Continuous_Mappings_on_Open_Sets



Theorem
Let $X$ and $Y$ be topological spaces.
Let $A$ and $B$ be open in $X$.
Let $f: A \to Y$ and $g: B \to Y$ be continuous mappings that agree on $A \cap B$.
Let $f \cup g$ be the union of the mappings $f$ and $g$:

$\forall x \in A \cup B: \map {f \cup g} x = \begin {cases} \map f x & : x \in A \\ \map g x & : x \in B \end {cases}$

Then the mapping $f \cup g : A \cup B \to Y$ is continuous.


Proof 1
Follows directly from Pasting Lemma for Continuous Mappings on Open Sets.
$\blacksquare$


Proof 2
From Union of Mappings which Agree is Mapping

$f \cup g$ is well-defined.

By Definition of Continuous Mapping:

$f \cup g$ is continuous if and only if $\paren {f \cup g}^{-1} \sqbrk U$ is open in $A \cup B$ for every open $U$ in $Y$.

Let $U$ be an arbitrary open subset in $Y$.
From Preimage of Union Mapping is Union of Preimages:

$\paren {f \cup g}^{-1} \sqbrk U = f^{-1} \sqbrk U \cup g^{-1} \sqbrk U$

By Definition of Continuous Mapping:

$f^{-1} \sqbrk U$ is open in $A$
$g^{-1} \sqbrk U$ is open in $B$.
From Open Set in Open Subspace:

$f^{-1} \sqbrk U$ and $g^{-1} \sqbrk U$ are open in $X$.
By Open Set Axiom $\paren {\text O 1 }$: Union of Open Sets:

$A \cup B$ is open in $X$
$f^{-1} \sqbrk U \cup g^{-1} \sqbrk U$ is open in $X$
From Open Set in Open Subspace:

$f^{-1} \sqbrk U \cup g^{-1} \sqbrk U$ is open in $A \cup B$
Hence:

$\paren {f \cup g}^{-1} \sqbrk U$ is open in $A \cup B$

Since $U$ was an arbitrary open subset of $Y$:

for all open subsets $U$ of $Y$, $\paren {f \cup g}^{-1} \sqbrk U$ is open in $A \cup B$
By Definition of Continuous Mapping:

$f \cup g$ is continuous.
$\blacksquare$


Also see
Pasting Lemma for Pair of Continuous Mappings on Closed Sets for an analogous statement for closed sets.




