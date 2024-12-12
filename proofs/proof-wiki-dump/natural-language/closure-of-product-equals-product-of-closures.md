# 

Source: https://proofwiki.org/wiki/Closure_of_product_equals_product_of_closures


It has been suggested that this page or section be merged into Closure of Cartesian Product is Product of Closures.In particular: I've even set up a page within into which it will go. Please take as long as you need to read and understand our house policies. You will find a link on your user talk page.See if you can work out for yourself what changes you would need to make to this page in order for it to be compliant.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.In particular: throughout, including categoryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\set {X_i}_{i \mathop \in I}$ be an arbitrary family of topological spaces.
Let:

$A_i \subset X_i$
for each $i \in I$.
Let $X = \ds \prod_{i \mathop \in I} X_i$ have the product topology.

Then:

$\ds \prod_{i \mathop \in I} \overline{A_i} = \overline {\prod_{i \mathop \in I} A_i}$


Proof
We proceed by double inclusion.


This article, or a section of it, needs explaining.In particular: what does "double inclusion" mean?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Suppose:

$\ds \family {x_i}_{i \mathop \in I} \in \prod_{i \mathop \in I} \overline {A_i}$
This means:

$x_i \in \overline {A_i}$
for each $i \in I$. 

Let $U$ be an open set containing $\family {x_i}_{i \mathop \in I}$. 
Since:

$x_i \in \overline {A_i}$
we can choose:

$y_i \in U_i \cap A_i$
and then:

$\ds \family {y_i}_{i \mathop \in I} \in U \cap \prod_{i \mathop \in I} A_i$
But $U$ was arbitrary, hence:

$\ds \family {x_i}_{i \mathop \in I} \in \overline {\prod_{i \mathop \in I} A_i}$

Conversely, suppose:

$\ds \family {x_i}_{i \mathop \in I} \in \overline {\prod_{i \mathop \in I} A_i}$
We want to show that:

$x_j \in \overline {A_j}$ for all $j$

Fixed $j$, we take $V_j$ to be open set in $X_j$ such that:

$x_j \in V_j$
Since $\pi_j^{-1} \sqbrk {V_j}$ is open in $\ds \prod_{i \mathop \in I} X_i$, we can pick:

$\ds \family {y_i}_{i \mathop \in I} \in \prod_{i \mathop \in I} A_i$
Then:

$y_j \in V_j \cap A_j$
so it follows that:

$x_j \in \overline {A_j}$
namely:

$\family {x_i}_{i \mathop \in I} \in \prod_{i \mathop \in I} \overline{A_i}$
$\blacksquare$





