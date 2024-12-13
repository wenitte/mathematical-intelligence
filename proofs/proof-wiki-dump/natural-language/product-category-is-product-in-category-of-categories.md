# 

Source: https://proofwiki.org/wiki/Product_Category_is_Product_in_Category_of_Categories

Theorem
Let $\mathbf{Cat}$ be the category of categories.
Let $\mathbf C$ and $\mathbf D$ be small categories, and let $\mathbf C \times \mathbf D$ be their product category.

Then $\mathbf C \times \mathbf D$ is a binary product of $\mathbf C$ and $\mathbf D$ in $\mathbf{Cat}$.


Proof
Let $F: \mathbf A \to \mathbf C$ and $G: \mathbf A \to \mathbf D$ be morphisms in $\mathbf{Cat}$, i.e. functors.
Suppose $X: \mathbf A \to \mathbf C \times \mathbf D$ is a functor such that $\pr_1 \circ X = F$ and $\pr_2 \circ X = G$:

$\begin{xy}\xymatrix@C=3em@R=3em@L+3mu{
&

\mathbf A
 \ar[dl]_*{F}
 \ar[d]^*{X}
 \ar[dr]^*{G}

\\

\mathbf C

&

\mathbf C \times \mathbf D
 \ar[l]^*{\pr_1}
 \ar[r]_*{\pr_2}

&

\mathbf D

}\end{xy}$
Here, $\pr_1$ and $\pr_2$ are projection functors.

Thus, for all objects $A$ of $\mathbf A$, it is required that:

$\map {\pr_1} {X A} = F A$
$\map {\pr_2} {X A} = G A$
meaning that $X A = \tuple {F A, G A}$ by definition of the objects of the product category $\mathbf C \times \mathbf D$.
Similarly, for all morphisms $f$ of $\mathbf A$, it is required that:

$\map {\pr_1} {X f} = F f$
$\map {\pr_2} {X f} = G f$
meaning that $X f = \tuple {F f, G f}$ by definition of the morphisms of the product category $\mathbf C \times \mathbf D$.

This uniquely determines the functor $X$, if it exists.
That this definition actually yields a functor is shown on Functor to Product Category.

Hence $\mathbf C \times \mathbf D$ is a binary product of $\mathbf C$ and $\mathbf D$ in $\mathbf{Cat}$.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 2.5.3$




