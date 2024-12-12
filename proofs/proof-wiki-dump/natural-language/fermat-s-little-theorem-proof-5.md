# 

Source: https://proofwiki.org/wiki/Fermat%27s_Little_Theorem/Proof_5

Theorem
Let $p$ be a prime number.
Let $n \in \Z_{>0}$ be a positive integer such that $p$ is not a divisor of $n$.

Then:

$n^{p - 1} \equiv 1 \pmod p$


Proof

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Let $S$ be a set of n elements, and consider $p$-tuples $\left( a_1, a_2, \dots, a_p \right)$ and consider the Group Action of these p-tuples by $\Z/p\Z$ via cyclic shifts.
For example, if $S = \{ b, r, g \}$ and $p=5$, then $rgbgg$ is equivalent to $grgbg, ggrgb, bggrg, gbggr$.
We use Burnside's Lemma, counting the number of elements fixed by each element of the group $\Z/p\Z$. Note that the identity fixes all $a^p$ elements, and the only tuples fixed by any of the other $p-1$ elements of $\Z/p\Z$ are the $a$ tuples that are made up of only one element of $S$, for example $rrrrr$, $ggggg$, and $bbbbb$. 
Burnside's Lemma says that $p \mid \left( n^p + (p-1) n \right)$ equivalently, $n^p \equiv n \pmod p$
$\blacksquare$


Sources




