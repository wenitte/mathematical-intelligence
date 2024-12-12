# 

Source: https://proofwiki.org/wiki/Complement_of_Primitive_Recursive_Set

Theorem
Let $S \subseteq \N$ be primitive recursive.
Then its relative complement $\N \setminus S$ of $S$ in $\N$ is primitive recursive.


Proof
By definition, we have that the characteristic function $\map {\chi_{\N \mathop \setminus S} } n = 1$ if and only if $\map {\chi_S} n = 0$.
So:

$\map {\chi_{\N \mathop \setminus S} } n = \map {\chi_{\set 0} } {\map {\chi_S} n}$
Thus $\chi_{\N \mathop \setminus S}$ is obtained by substitution from $\chi_{\set 0}$ and $\chi_S$.
The result follows from Set Containing Only Zero is Primitive Recursive.
$\blacksquare$





