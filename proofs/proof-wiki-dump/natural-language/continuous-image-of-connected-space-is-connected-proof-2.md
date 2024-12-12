# 

Source: https://proofwiki.org/wiki/Continuous_Image_of_Connected_Space_is_Connected/Proof_2

Theorem
Let $T_1$ and $T_2$ be topological spaces.
Let $S_1 \subseteq T_1$ be connected.
Let $f: T_1 \to T_2$ be a continuous mapping.

Then the image $f \sqbrk {S_1}$ is connected.


Proof
Suppose that $S_2 = f \sqbrk {S_1}$ is not connected in $T_2$.
Then by definition there exist open sets $U_2$ and $V_2$ in $T_2$ such that:

$S_2 \subseteq U_2 \cup V_2$
$U_2 \cap V_2 \cap S_2 = \O$
$U_2 \cap S_2 \ne \O$
$V_2 \cap S_2 \ne \O$
We have by hypothesis that $f: T_1 \to T_2$ is continuous.
Thus $U_1 = f^{-1} \sqbrk {U_2}$ and $V_1 = f^{-1} \sqbrk {V_2}$ are open in $T_1$.
We have that:

$U_2 \cap S_2 \ne \O$
Therefore:

$\exists x \in S_1: \map f x \in U_2$
Then:

$x \in f^{-1} \sqbrk {U_2} = U_1$
and:

$x \in S_1$
so:

$U_1 \cap S_1 \ne \O$
Similarly:

$V_1 \cap S_1 \ne \O$

Suppose there exists $x \in S_1$ such that $x \in U_1 \cap V_1 \cap S_1$.
Then:

$\map f x \in U_2 \cap V_2 \cap S_2$
which is a contradiction.
It follows that:

$U_1 \cap V_1 \cap S_1 = \O$
Thus by definition $S_1$ is not connected in $T_1$.
The result follows by the Rule of Transposition.
$\blacksquare$





