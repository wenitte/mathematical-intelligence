# 

Source: https://proofwiki.org/wiki/Dilation_of_Intersection_of_Subsets_of_Vector_Space

Theorem
Let $K$ be a field. 
Let $X$ be a vector space over $K$.
Let $\family {E_\alpha}_{\alpha \mathop \in I}$ be an indexed family of subsets of $X$.
Let $\lambda \in K$.

Then:

$\ds \lambda \bigcap_{\alpha \mathop \in I} E_\alpha = \bigcap_{\alpha \mathop \in I} \paren {\lambda E_\alpha}$
where $\lambda E_\alpha$ denotes the dilation of $E_\alpha$ by $\lambda$.


Proof
First, if $\lambda = 0_K$ then we have:

$\lambda E_\alpha = \set { {\mathbf 0}_X}$
and:

$\ds \lambda \bigcap_{\alpha \mathop \in I} E_\alpha = \set { {\mathbf 0}_X}$
so that:

$\ds \bigcap_{\alpha \mathop \in I} \paren {\lambda E_\alpha} = \set { {\mathbf 0}_X} = \lambda \bigcap_{\alpha \mathop \in I} E_\alpha$

Now take $\lambda \ne 0_K$.
Let $v \in X$.
Then, we have:

$\ds v \in \lambda \bigcap_{\alpha \mathop \in I} E_\alpha$
if and only if:

$\ds \lambda^{-1} v \in \bigcap_{\alpha \mathop \in I} E_\alpha$
if and only if:

$\lambda^{-1} v \in E_\alpha$ for each $\alpha \in I$
if and only if:

$v \in \lambda E_\alpha$ for each $\alpha \in I$
if and only if:

$\ds v \in \bigcap_{\alpha \mathop \in I} \paren {\lambda E_\alpha}$
So, we have:

$\ds \lambda \bigcap_{\alpha \mathop \in I} E_\alpha = \bigcap_{\alpha \mathop \in I} \paren {\lambda E_\alpha}$
in the case $\lambda \ne 0_K$ as well.
$\blacksquare$





