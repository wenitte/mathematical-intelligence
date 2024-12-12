# 

Source: https://proofwiki.org/wiki/Cardinal_One_is_Cancellable_for_Cardinal_Sum

Theorem
Let $\mathbf a$ and $\mathbf b$ be cardinals.

Then:

$\mathbf a + \mathbf 1 = \mathbf b + \mathbf 1 \implies \mathbf a = \mathbf b$
where $\mathbf 1$ is (cardinal) one.


Proof
Suppose $\mathbf a + \mathbf 1 = \mathbf b + \mathbf 1$.
Then from Condition for Existence of Cardinal Sum there exists some cardinal $\mathbf c$ such that 

$\mathbf a + \mathbf 1 = \mathbf b + \mathbf 1 = \mathbf c$
By definition of cardinal there exists a set $C$ such that $\mathbf c = \map \Card C$.
$C$ also has subsets $A$ and $B$ such that there also exist elements of $\alpha, \beta \in C$ such that:

$\relcomp C A = \set \alpha$
$\relcomp C B = \set \beta$
If $\alpha = \beta$ then $A = B$ and so $\mathbf a = \mathbf b$.
On the other hand, if $\alpha \ne \beta$ then $\alpha \in B$ and $\beta \in A$ and so:

$\set \beta \cup \paren {A \cap B} = A$
$\set \alpha \cup \paren {A \cap B} = B$
Since:

$\set \beta \cap A \cap B = \O = \set \alpha \cap A \cap B$
it follows that:

$\mathbf a = \map \Card A = \mathbf 1 + \map \Card {A \cap B} = \map \Card B = \mathbf b$
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 8$: Theorem $8.9$




