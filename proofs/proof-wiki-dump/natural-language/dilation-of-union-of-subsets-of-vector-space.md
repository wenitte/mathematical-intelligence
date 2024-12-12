# 

Source: https://proofwiki.org/wiki/Dilation_of_Union_of_Subsets_of_Vector_Space

Theorem
Let $K$ be a field. 
Let $X$ be a vector space over $K$.
Let $\family {E_\alpha}_{\alpha \mathop \in I}$ be an indexed family of subsets of $X$.
Let $\lambda \in K$.

Then: 

$\ds \lambda \bigcup_{\alpha \mathop \in I} E_\alpha = \bigcup_{\alpha \mathop \in I} \paren {\lambda E_\alpha}$
where $\lambda E_\alpha$ denotes the dilation of $E_\alpha$ by $\lambda$.


Proof
We have: 

$\ds v \in \lambda \bigcup_{\alpha \mathop \in I} E_\alpha$
if and only if:

$v = \lambda x$ for some $\ds x \in \bigcup_{\alpha \mathop \in I} E_\alpha$.
This is equivalent to: 

there exists some $\alpha \in I$ such that $v = \lambda x$ for some $x \in E_\alpha$.
This is equivalent to: 

there exists some $\alpha \in I$ such that $v \in \lambda E_\alpha$.
This is finally equivalent to: 

$\ds v \in \bigcup_{\alpha \mathop \in I} \paren {\lambda E_\alpha}$
So by the definition of set equality, we have: 

$\ds \lambda \bigcup_{\alpha \mathop \in I} E_\alpha = \bigcup_{\alpha \mathop \in I} \paren {\lambda E_\alpha}$
$\blacksquare$





