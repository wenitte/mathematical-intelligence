# 

Source: https://proofwiki.org/wiki/Left_Cosets_are_Equal_iff_Element_in_Other_Left_Coset/Proof_2

Theorem
Let $x H$ denote the left coset of $H$ by $x$.

Then:

$x H = y H \iff x \in y H$


Proof
Let $x \in y H$.
Then $x$ is of the form $y h_1$ for some $h_1 \in H$.
Thus every element of the form $x h_2 \in x H$ is of the form $y h_1 h_2$ for some $h_2 \in H$.
But:

$h_1 h_2 \in H$
and so:

$x h_2 \in y H$
So by definition of subset:

$x H \subseteq y H$

Let $x \in y H$ again.
Then $x$ is of the form $y h$ for some $h \in H$.
But then:

$y = x h^{-1} \in x H$
Thus every element of the form $y h_2 \in y H$ is of the form $x h^{-1} h_2 \in x H$.
Thus by definition of subset:

$y H \subseteq x H$

By definition of set equality:

$x H = y H$
$\Box$

Let $x H = y H$.
Then $x h_1 = y h_2$ for some $h_1, h_2 \in H$.
Hence:

$x = y h_2 h^{-1} \in y H$

The result follows.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Subgroups




