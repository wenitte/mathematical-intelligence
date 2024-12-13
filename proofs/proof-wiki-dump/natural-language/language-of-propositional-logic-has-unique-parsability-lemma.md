# 

Source: https://proofwiki.org/wiki/Language_of_Propositional_Logic_has_Unique_Parsability/Lemma

Lemma
Let $\LL_0$ be the language of propositional logic.
Let $\mathbf A$ be a WFF.
Suppose that $\mathbf A = \paren {\mathbf B \circ \mathbf C} = \paren {\mathbf D * \mathbf E}$.

Then $\mathbf B = \mathbf D$, ${\circ} = {*}$, and $\mathbf C = \mathbf E$.


Proof
The WFFs $\mathbf B$ and $\mathbf D$ are strings which both start in the same place, right after the first left bracket in $\mathbf A$.
By Prefix of WFF of PropLog is not WFF, neither $\mathbf B$ nor $\mathbf D$ can be a prefix of the other.
Therefore $\mathbf B = \mathbf D$.
It follows that $* = \circ$ and $\mathbf C = \mathbf E$.

Hence the result.
$\blacksquare$


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.4$: Main Connective: Theorem $1.4.2$




