# 

Source: https://proofwiki.org/wiki/Complement_of_Clopen_Set_is_Clopen

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $H \subseteq S$ be a clopen set of $T$.
Let $\relcomp S H$ denote the complement of $H$ relative to $S$.

Then $\relcomp S H$ is also a clopen set of $T$.


Proof
By definition of clopen, $H$ is open in $T$.
By definition of closed set, $\relcomp S H$ is closed in $T$.

By definition of clopen, $H$ is closed in $T$. 
By definition of closed set, $\relcomp S H$ is open in $T$.

Thus $\relcomp S H$ is both open in $T$ and closed in $T$.
Hence the result, by definition of clopen set.
$\blacksquare$





