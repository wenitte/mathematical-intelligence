# 

Source: https://proofwiki.org/wiki/Dilation_of_Subset_of_Vector_Space_Distributes_over_Sum/General_Case

Theorem
Let $K$ be a field.
Let $X$ be a vector space over $K$. 
Let $\family {E_\alpha}_{\alpha \mathop \in A}$ be an $A$-indexed family of sets. 
Let $\lambda \in K$.

Then:

$\ds \lambda \sum_{\alpha \mathop \in A} E_\alpha = \sum_{\alpha \mathop \in A} \paren {\lambda E_\alpha}$


Proof
Let $x \in X$.
We have:

$\ds x \in \lambda \sum_{\alpha \mathop \in A} E_\alpha$
if and only if there exists:

a finite subset $F \subseteq E_\alpha$
$x_\alpha \in F$ for each $\alpha \in F$
such that:

$\ds x = \lambda \sum_{\alpha \in F} x_\alpha$
This is equivalent to:

$\ds x = \sum_{\alpha \in F} \lambda x_\alpha$
for a finite subset $F \subseteq E_\alpha$, with $x_\alpha \in F$ for each $\alpha \in F$. 
Hence we obtain:

$\ds x \in \lambda \sum_{\alpha \mathop \in A} E_\alpha$ if and only if $x \in \sum_{\alpha \mathop \in A} \paren {\lambda E_\alpha}$
so that:

$\ds \lambda \sum_{\alpha \mathop \in A} E_\alpha = \sum_{\alpha \mathop \in A} \paren {\lambda E_\alpha}$
$\blacksquare$





