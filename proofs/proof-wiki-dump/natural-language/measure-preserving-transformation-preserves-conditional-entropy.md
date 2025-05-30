# 

Source: https://proofwiki.org/wiki/Measure-Preserving_Transformation_Preserves_Conditional_Entropy

Theorem
Let $\struct {X, \BB, \mu}$ be a probability space.
Let $T: X \to X$ be a $\mu$-preserving transformation.
Let $\AA, \DD \subseteq \Sigma$ be finite sub-$\sigma$-algebras.

Then:

$\map H {T^{-1} \AA \mid T^{-1} \DD} = \map H {\AA \mid \DD}$
where:

$\map H {\cdot \mid \cdot}$ denotes the conditional entropy
$T^{-1} \AA$ is the pre-image $\sigma$-algebra of $\AA$ on the domain of $T$
$T^{-1} \DD$ is the pre-image $\sigma$-algebra of $\DD$ on the domain of $T$


Corollary
$\map H {T^{-1} \AA} = \map H \AA$


Proof
By Definition of Finite Partition Generated by Finite Sub-Sigma-Algebra, we have:

$\map \xi {T^{-1} \AA} = T^{-1} {\map \xi \AA}$
for each finite sub-$\sigma$-algebras $\AA \subseteq \Sigma$.
Thus it suffices to show that the entropy of finite partition satisfies:

$\map H {T^{-1} \xi \mid T^{-1} \eta} = \map H {\xi \mid \eta}$
for all $\xi, \eta$ be finite partitions of $\Omega$.
Now:














\(\ds \map H {T^{-1} \xi \mid T^{-1} \eta}\)

\(=\)







\(\ds \sum_{\substack {B \mathop \in \eta \\ \map \mu {T^{-1} B} \mathop > 0} } \map \mu {T^{-1} B} \sum_{A \mathop \in \xi} \map \phi {\dfrac {\map \mu {T^{-1} A \cap T^{-1} B} } {\map \mu {T^{-1} B} } }\)





Definition of Conditional Entropy of Finite Partitions














\(\ds \)

\(=\)







\(\ds \sum_{\substack {B \mathop \in \eta \\ \map \mu B \mathop > 0} } \map \mu B \sum_{A \mathop \in \xi} \map \phi {\dfrac {\map \mu {A \cap B} } {\map \mu B } }\)





since $T$ is $\mu$-preserving














\(\ds \)

\(=\)







\(\ds \map H {\xi \mid \eta}\)





Definition of Conditional Entropy of Finite Partitions


$\blacksquare$








