# 

Source: https://proofwiki.org/wiki/Normal_Subgroup_Test


It has been suggested that this page or section be merged into Subgroup is Superset of Conjugate iff Normal.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.

It has been suggested that this page or section be merged into Definition:Normal Subgroup/Definition 3.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $G$ be a group and $H \le G$.

Then $H$ is a normal subgroup (by definition 1) of $G$ if and only if:

$\forall x \in G: x H x^{-1} \subseteq H$.


Proof
Let $H$ be a subgroup of $G$.

Suppose $H$ is normal in $G$.
Then $\forall x \in G, a \in H: \exists b \in H: x a = b x$.
Thus, $x a x^{-1} = b \in H$ implying $x H x^{-1} \subseteq H$.

Conversely, suppose $\forall x \in G: x H x^{-1} \subseteq H$.
Then for $g \in G$, we have $g H g^{-1} \subseteq H$, which implies $g H \subseteq H g$.
Also, for $g^{-1} \in G$, we have $g^{-1} H (g^{-1})^{-1} = g^{-1} H g \subseteq H$ which implies $H g \subseteq g H$.
Therefore, $g H = H g$ meaning $H \lhd G$.
$\blacksquare$





