# 

Source: https://proofwiki.org/wiki/Intersection_of_Horizontal_Sections_is_Horizontal_Section_of_Intersection

Theorem
Let $X$ and $Y$ be sets.
Let $\set {E_\alpha : \alpha \mathop \in A}$ be a set of subsets of $X \times Y$. 
Let $y \in Y$. 

Then: 

$\ds \paren {\bigcap_{\alpha \mathop \in A} E_\alpha}^y = \bigcap_{\alpha \mathop \in A} \paren {E_\alpha}^y$
where:

$\ds \paren {\bigcap_{\alpha \mathop \in A} E_\alpha}^y$ is the $y$-horizontal section of $\ds \bigcap_{\alpha \mathop \in A} E_\alpha$
$\paren {E_\alpha}^y$ is the $y$-horizontal section of $E_\alpha$.


Proof
Note that:

$\ds x \in \bigcap_{\alpha \mathop \in A} \paren {E_\alpha}^y$
if and only if: 

$x \in \paren {E_\alpha}^y$ for all $\alpha \in A$.
From the definition of the $x$-horizontal section, this is equivalent to:

$\tuple {x, y} \in E_\alpha$ for all $\alpha \in A$.
This in turn is equivalent to: 

$\ds \tuple {x, y} \in \bigcap_{\alpha \mathop \in A} E_\alpha$
Again applying the definition of the $x$-horizontal section, this is equivalent to:

$\ds x \in \paren {\bigcap_{\alpha \mathop \in A} E_\alpha}^y$
So:

$\ds x \in \bigcap_{\alpha \mathop \in A} \paren {E_\alpha}^y$ if and only if $\ds x \in \paren {\bigcap_{\alpha \mathop \in A} E_\alpha}^y$
giving:

$\ds \paren {\bigcap_{\alpha \mathop \in A} E_\alpha}^y = \bigcap_{\alpha \mathop \in A} \paren {E_\alpha}^y$
$\blacksquare$





