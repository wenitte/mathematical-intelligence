# 

Source: https://proofwiki.org/wiki/Carath%C3%A9odory%27s_Theorem_(Convex_Analysis)

This proof is about Carathéodory's Theorem in the context of Convex Analysis. For other uses, see Carathéodory's Theorem.


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $E \subset \R^l$.
Let $\mathbb x \in \map {\operatorname {conv} } E$, where $\map {\operatorname {conv} } E$ denotes the convex hull of $E$.

Then $\mathbf x$ is a convex combination of affinely independent points of $E$. 
In particular, $\mathbf x$ is a convex combination of at most $l + 1$ points of $E$.


Proof
Since $\mathbb x \in \map {\operatorname {conv} } E$, $\mathbf x$ is a convex combination of points in $E$.
From the definition of convex combination:

$\ds \mathbf x = \sum_{i \mathop = 1}^k \gamma_i \mathbf y_i$
with:

$\gamma_i \ge 0$
$\ds \sum_{i \mathop = 1}^k \gamma_i = 1$
and:

$\mathbf y_i \in E$

Let $K \subset \N$ be the set of all possible $k$ such that $\mathbf x$ is a convex combination of $k$ elements of $E$.
By the Well-Ordering Principle, $K$ is well-ordered. 
$K$ has a smallest element $k_s$ by the definition of well-ordered sets.

Suppose that the set $\set {\mathbf y_i: i \le k_s}$ is affinely dependent.
From the condition for affinely dependent set, there exists a set $\set {\alpha_i: i \le k_s}$ such that for some $\alpha_i > 0$:

$\ds \sum_{i \mathop = 1}^{k_s} \alpha_i \mathbf y_i = 0$
and:

$\ds \sum_{i \mathop = 1}^{k_s} \alpha_i = 0$

Pick the smallest $\dfrac {\gamma_j} {\alpha_j} > 0$.
Then:

$\ds \mathbf x = \paren {\sum_{i \mathop = 1}^{k_s} \gamma_i \mathbf y_i} + 0 = \paren {\sum_{i \mathop = 1}^{k_s} \gamma_i \mathbf y_i} - \paren {\frac {\gamma_j} {\alpha_j} \sum_{i \mathop = 1}^{k_s} \alpha_i \mathbf y_i}$
Rearrange to get:

$\ds \mathbf x = \paren {\sum_{i \mathop = 1}^{k_s} \paren {\gamma_i - \frac {\gamma_j} {\alpha_j} \alpha_i} \mathbf y_i}$
Since $\gamma_j > 0$ is made the smallest and $\alpha_j > 0$ is made the greatest:

$\dfrac {\alpha_i} {\alpha_j} \gamma_j \le \gamma_j \le \gamma_i$
for all $i \le k_s$.
Thus:

$\paren {\gamma_i - \dfrac {\gamma_j} {\alpha_j} \alpha_i} \ge 0$
For $i = j$:

$\paren {\gamma_i - \dfrac {\gamma_j} {\alpha_j} \alpha_i} = 0$
For $i \ne j$, let:

$\gamma'_{i'} \equiv \gamma_i - \dfrac {\gamma_j} {\alpha_j} \alpha_i$
We can express:

$\ds x = \sum_{i' \mathop = 1}^{k_s-1} \gamma'_{i'} \mathbf y_i$
which contradicts the assumption that $k_s = \min K$.


This needs considerable tedious hard slog to complete it.In particular: It seems to intend to prove $k_s \le l + 1$ with affine independence of $\set {\mathbf y_i: i \le k_s}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$


Source of Name
This entry was named for Constantin Carathéodory.


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Carathéodory's Theorem (C. Carathéodory, 1911)
2009: Dean Corbae, Maxwell B. Stinchcombe and Juraj Zeman: An Introduction to Mathematical Analysis for Economic Theory and Econometrics: $\S 5.4.b$ Theorem $5.4.13$
2013: Francis Clarke: Functional Analysis, Calculus of Variations and Optimal Control: $2.1$: Properties of convex sets




