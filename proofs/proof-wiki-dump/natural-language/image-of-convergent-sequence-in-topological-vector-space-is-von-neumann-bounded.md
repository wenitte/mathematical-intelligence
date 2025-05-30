# 

Source: https://proofwiki.org/wiki/Image_of_Convergent_Sequence_in_Topological_Vector_Space_is_von_Neumann-Bounded

Theorem
Let $\struct {X, \tau}$ be a topological vector space. 
Let $\sequence {x_n}_{n \in \N}$ be a convergent sequence with $x_n \to x$. 
Let: 

$E = \set {x_n : n \in \N}$

Then $E$ is von Neumann-bounded. 


Proof 1
From Convergent Sequence in Topological Vector Space is Cauchy, $\sequence {x_n}_{n \in \N}$ is a Cauchy sequence.
From Image of Cauchy Sequence in Topological Vector Space is von Neumann-Bounded, $E$ is von Neumann-bounded.
$\blacksquare$


Proof 2
From Union of Image of Convergent Sequence and Limit in Topological Space is Compact, $E \cup \set x$ is compact.
From Compact Subspace of Topological Vector Space is von Neumann-Bounded, $E \cup \set x$ is von Neumann bounded.
From Subset of von Neumann-Bounded Set is von Neumann-Bounded, $E$ is von Neumann bounded.
$\blacksquare$





