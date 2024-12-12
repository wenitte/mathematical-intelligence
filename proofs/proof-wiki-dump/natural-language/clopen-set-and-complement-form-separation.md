# 

Source: https://proofwiki.org/wiki/Clopen_Set_and_Complement_form_Separation

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $H \subseteq S$ be a clopen set of $T$.
Let $\relcomp S H$ be the complement of $H$ relative to $S$.

Then $H$ and $\relcomp S H$ form a separation of $T$.


Proof
By Set with Relative Complement forms Partition, $H$ and $\relcomp S H$ form a partition of $S$.
By Complement of Clopen Set is Clopen, $\relcomp S H$ is also a clopen set of $T$.
By definition of clopen set, both $H$ and $\relcomp S H$ are open in $T$.
Thus $H$ and $\relcomp S H$ are a pair of open sets in $T$ forming a partition of $S$.
Hence the result, by definition of separation.
$\blacksquare$





