# 

Source: https://proofwiki.org/wiki/Convergence_of_Modulus_of_Convergent_Complex_Sequence

Theorem
Let $\sequence {z_n}$ be a sequence in $\C$.
Let $\sequence {z_n}$ converge to a value $c \in \C$.
Let $\cmod z$ denote the modulus of a complex number $z$.

Then:

$\sequence {\cmod {z_n} }$ converges to a value $\cmod c$.


Proof
By definition of convergent complex sequence:

$\forall \epsilon \in \R_{>0}: \exists N \in \R: n > N \implies \cmod {z_n - c} < \epsilon$
From the Reverse Triangle Inequality:

$\size {\cmod x - \cmod y} \le \cmod {x - y}$
and the result follows.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.2$. Sequences: Corollary.




