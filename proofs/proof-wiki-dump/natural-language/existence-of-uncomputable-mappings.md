# 

Source: https://proofwiki.org/wiki/Existence_of_Uncomputable_Mappings

Theorem
There exists a mapping that is not computable.


Proof
Overview
Aiming for a contradiction, suppose every mapping is computable.
Hence for each mapping there exists a computer program or algorithm which computes it.
This computer program is a finite string of symbols from some alphabet.
Hence the set of all computer programs $\CC$ is countably infinite.

Consider now the set $S$ of mappings which maps the set of integers $\Z$ to the Boolean domain $\set {0, 1}$.
Aiming for a contradiction, suppose $S$ is countably infinite.
Let $S$ be placed in one-to-one correspondence with $\Z$.
Let $f_i$ be the mapping in $S$ which corresponds to the $i$th integer.
Now consider the mapping $f: \Z \to \set {0, 1}$ defined as follows:

$\forall n \in \Z: \map f n = \begin {cases} 0 & : \map {f_n} n = 1 \\ 1 & : \text {otherwise} \end {cases}$
Then $\map f n$ cannot correspond to any integer.
This contradicts our supposition that $S$ is countably infinite.
Hence it cannot be the case that $\CC$ is countably infinite.
So $\CC$ is uncountable.
But this contradicts our deduction that $\CC$ is countably infinite.
Hence by Proof by Contradiction it cannot be the case that every mapping is computable.
$\blacksquare$



This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




