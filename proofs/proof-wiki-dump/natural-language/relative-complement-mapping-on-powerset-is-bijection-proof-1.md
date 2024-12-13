# 

Source: https://proofwiki.org/wiki/Relative_Complement_Mapping_on_Powerset_is_Bijection/Proof_1

Theorem
Let $S$ be a set.
Let $\complement_S: \powerset S \to \powerset S$ denote the relative complement mapping on the power set of $S$.

Then $\complement_S$ is a bijection.
Thus each $T \subseteq S$ is in one-to-one correspondence with its relative complement.


Proof
From Relative Complement of Relative Complement:

$\forall X \subseteq S: \relcomp S {\relcomp S X} = X$
That is, $\complement_S$ is an involution.
The result follows from Mapping is Involution iff Bijective and Symmetric.
$\blacksquare$





