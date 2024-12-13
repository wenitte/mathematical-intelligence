# 

Source: https://proofwiki.org/wiki/Talk:Normal_Subgroup_Equivalent_Definitions

I would like to verify whether one of the following steps contains an error. I've marked it in red.
Should that line have an equal sign instead of a subset sign? I argue that it is the following. Thank you.
$\left({g \circ N \circ g^{-1} }\right) \circ g \color{green}{=} N \circ g$      (by Definition of Subset Product)

The original proof: 

Proof that $g \circ n \circ g^{-1} = N \implies g \circ N = N \circ g$ (ie Sufficient Condition)
$\forall g \in G: \circ N \circ g^{-1} = N$
$\color{red}{\implies g \circ N \circ g^{-1} \circ g \subseteq N \circ g} $ (by Definition of Subset Product)
$\implies g \circ N \circ ({g^{-1} \circ g } = N \circ g $ (by Subset Product within Semigroup is Associative: Corollary)
$\implies g \circ N \circ e =N \circ g$ (by Definition of inverse element)
$\implies g \circ N = N \circ g$ (by Coset by Identity)
$\blacksquare$


Thank you very much for noticing this. I have changed the proof according to your suggestion. --Lord_Farin (talk) 09:13, 19 December 2012 (UTC)




