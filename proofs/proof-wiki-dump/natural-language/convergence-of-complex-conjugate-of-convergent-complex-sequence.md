# 

Source: https://proofwiki.org/wiki/Convergence_of_Complex_Conjugate_of_Convergent_Complex_Sequence

Theorem
Let $z \in \C$. 
Let $\sequence {z_n}_{n \mathop \in \N}$ be a complex sequence converging to $z$. 

Then: 

$\overline {z_n} \to \overline z$


Proof
Let $\epsilon > 0$.
Since $z_n \to z$, from the definition of convergence, we can find $N \in \N$ such that: 

$\cmod {z_n - z} < \epsilon$
From Complex Modulus equals Complex Modulus of Conjugate, we have: 

$\cmod {\overline {z_n - z} } = \cmod {z_n - z}$
From Difference of Complex Conjugates, we have: 

$\cmod {z_n - z} = \cmod {\overline {z_n} - \overline z}$
So we have: 

$\cmod {\overline {z_n} - \overline z} < \epsilon$
for each $n \ge N$.
Since $\epsilon$ was arbitrary, we have: 

$\overline {z_n} \to \overline z$
$\blacksquare$





