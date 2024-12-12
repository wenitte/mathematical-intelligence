# 

Source: https://proofwiki.org/wiki/Dihedral_Group_is_Non-Abelian

Theorem
Let $n \in \N$ be a natural number such that $n > 2$.
Let $D_n$ denote the dihedral group of order $2 n$.

Then $D_n$ is not abelian.


Proof
From Group of Order less than 6 is Abelian we have that $D_1$ and $D_2$ are abelian, which is why the condition on $n$.
From Group Presentation of Dihedral Group we have:

$\beta \alpha = \alpha^{n - 1} \beta$
for some $\alpha, \beta \in D_n$ such that $\alpha \ne \beta$.
We also have:

$\alpha^n = e$
But if $D_n$ were abelian, that would mean:

$\beta \alpha = \beta \alpha^{n - 1}$
and so by the Cancellation Laws:

$\alpha = \alpha^{n - 1}$
and so:

$\alpha^2 = e$
But by definition of the dihedral group, this is not the case.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Definition of Group Structure: $\S 29 \gamma$




