# 

Source: https://proofwiki.org/wiki/Intersection_of_Vertical_Sections_is_Vertical_Section_of_Intersection

Theorem
Let $X$ and $Y$ be sets.
Let $\set {E_\alpha : \alpha \in A}$ be a set of subsets of $X \times Y$. 
Let $x \in X$. 

Then: 

$\ds \paren {\bigcap_{\alpha \in A} E_\alpha}_x = \bigcap_{\alpha \in A} \paren {E_\alpha}_x$
where:

$\ds \paren {\bigcap_{\alpha \in A} E_\alpha}_x$ is the $x$-vertical section of $\ds \bigcap_{\alpha \in A} E_\alpha$
$\paren {E_\alpha}_x$ is the $x$-vertical section of $E_\alpha$.


Proof
Note that:

$\ds y \in \bigcap_{\alpha \in A} \paren {E_\alpha}_x$
if and only if: 

$y \in \paren {E_\alpha}_x$ for all $\alpha \in A$.
From the definition of the $x$-vertical section, this is equivalent to:

$\tuple {x, y} \in E_\alpha$ for all $\alpha \in A$.
This in turn is equivalent to: 

$\ds \tuple {x, y} \in \bigcap_{\alpha \in A} E_\alpha$
Again applying the definition of the $x$-vertical section, this is equivalent to:

$\ds y \in \paren {\bigcap_{\alpha \in A} E_\alpha}_x$
So:

$\ds y \in \bigcap_{\alpha \in A} \paren {E_\alpha}_x$ if and only if $\ds y \in \paren {\bigcap_{\alpha \in A} E_\alpha}_x$
giving:

$\ds \paren {\bigcap_{\alpha \in A} E_\alpha}_x = \bigcap_{\alpha \in A} \paren {E_\alpha}_x$
$\blacksquare$





