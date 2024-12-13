# 

Source: https://proofwiki.org/wiki/Ordering_of_Cardinals_Compatible_with_Cardinal_Product


This article needs to be linked to other articles.In particular: Anything about what the ordering of the cardinals means. It's not on the cardinals definition page.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\mathbf a$, $\mathbf b$ and $\mathbf c$ be cardinals.

Then:

$\mathbf a \le \mathbf b \implies \mathbf a \mathbf c \le \mathbf b \mathbf c$
where $\mathbf a \mathbf c$ denotes the product of $\mathbf a$ and $\mathbf c$.


Proof
Let $\mathbf a = \map \Card A$, $\mathbf b = \map \Card B$ and $\mathbf c = \map \Card C$ for some sets $A$, $B$ and $C$.
Let $\mathbf a \le \mathbf b$.
Then by definition of cardinal, there exists an injection $f: A \to B$.
Then the mapping $g: A \times C \to B \times C$ defined as:

$\forall \tuple {a, c} \in A \times C: \map g {a, c} = \tuple {\map f a, c}$
Let $\tuple {a_1, c_1} \in A \times C$ and $\tuple {a_2, c_2} \in A \times C$ such that:

$\map g {a_1, c_1} = \map g {a_2, c_2}$
That is:

$\tuple {\map f {a_1}, c_1} = \tuple {\map f {a_2}, c_2}$
By Equality of Ordered Pairs:

$\map f {a_1} = \map f {a_2}, c_1 = c_2$
and so as $f$ is an injection:

$a_1 = a_2, c_1 = c_2$
By Equality of Ordered Pairs:

$\tuple {a_1, c_1} = \tuple {a_2, c_2}$
demonstrating that $g$ is an injection.
So, by definition of product of cardinals:

$\mathbf a \mathbf c \le \mathbf b \mathbf c$
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 8$: Theorem $8.7$




