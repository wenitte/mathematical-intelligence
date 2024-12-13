# 

Source: https://proofwiki.org/wiki/User:Jshflynn/Linguistic_Structure_Underlying_Set

Theorem
Let $\left({V, \circ}\right)$ be a linguistic structure.

Then the underlying set $V$ is either an inifinite set or the null language.


Proof
Suppose $(V, \circ)$ is a linguistic structure and $V$ is a finite set such that there exists an $x \in V$ where $x \ne \lambda$. 

Then $V$ contains a word $y$ of greatest length $m$. 

Then $\operatorname{len}(y \circ x) > \operatorname{len}(y)$ which contradicts our assumption. 

If $V = \{\lambda\}$ then from Empty Word is Two-sided Identity we have that $V$ is closed under $\circ$ and so $(\{\lambda\},\circ)$ is a linguistic structure.

$\blacksquare$





