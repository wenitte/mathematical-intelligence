# 

Source: https://proofwiki.org/wiki/Disjoint_Compact_Sets_in_Hausdorff_Space_have_Disjoint_Neighborhoods/Proof_2

Theorem
Let $T = \struct {S, \tau}$ be a Hausdorff space.
Let $V_1$ and $V_2$ be compact sets in $T$.

Then $V_1$ and $V_2$ have disjoint neighborhoods.


Proof
We first suppose that $V_1 = \set x$ and $x \not \in V_2$. 
Since $T$ is Hausdorff:

for each $y \in V_2$ there exists an open neighborhood $O^1_y$ of $x$ and an open neighborhood $O^2_y$ of $y$ such that $O^1_y \cap O^2_y = \O$.
Hence we have:

$\ds V_2 \subseteq \bigcup_{y \mathop \in V_2} O_y^2$
Since $V_2$ is compact, there exists $y_1, \ldots, y_n \in V_2$ such that:

$\ds V_2 \subseteq \bigcup_{i \mathop = 1}^n O_{y_i}^2$
Now let:

$\ds U_2 = \bigcup_{i \mathop = 1}^n O_{y_i}^2$
and:

$\ds U_1 = \bigcap_{i \mathop = 1}^n O_{y_i}^1$
We have that $U_1$ and $U_2$ are open, $x \in U_1$ and $V_2 \subseteq U_2$. 
Further, if $x \in U_2$ then $x \in O_{y_i}^2$ for some $i$. 
Since $O_{y_i}^2 \cap O_{y_i}^1 = \O$, it follows that $x \not \in O_{y_i}^1$. 
Hence $x \not \in U_1$. 
So $U_1 \cap U_2 = \O$.
Hence $U_1$ and $U_2$ are disjoint open sets with $V_1 \subseteq U_1$ and $V_2 \subseteq U_2$. 
Hence we have proven the claim in the case $V_1 = \set x$. 

Now take $V_1$ to be general.
For each $x \in V_1$, there exists open sets $U_{1, x}$ and $U_{2, x}$ such that $U_{1, x} \cap U_{2, x} = \O$, $x \in U_{1, x}$ and $V_2 \subseteq U_{2, x}$.
In particular:

$\ds V_1 \subseteq \bigcup_{x \in V_1} U_{1, x}$
Since $V_1$ is compact, there exists $x_1, \ldots, x_n \in V_1$ such that:

$\ds V_1 \subseteq \bigcup_{i \mathop = 1}^n U_{1, x_i}$
Now set:

$\ds U_1 = \bigcup_{i \mathop = 1}^n U_{1, x_i}$
and:

$\ds U_2 = \bigcap_{i \mathop = 1}^n U_{2, x_i}$
We have $U_1 \cap U_2 = \O$ by an identical argument to above. 
Further, $U_1$ and $U_2$ are both open.
Since $V_2 \subseteq U_{2, x_i}$ for each $i$ it follows that $V_2 \subseteq U_2$.
Hence $U_1$ and $U_2$ are the desired open sets.
$\blacksquare$



This article needs to be tidied.In particular: consistency of presentationPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.




