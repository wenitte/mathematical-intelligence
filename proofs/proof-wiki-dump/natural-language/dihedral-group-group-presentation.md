# 

Source: https://proofwiki.org/wiki/Dihedral_Group/Group_Presentation

Theorem
The dihedral group $D_n$ has the group presentation:

$D_n = \gen {\alpha, \beta: \alpha^n = \beta^2 = e, \beta \alpha \beta = \alpha^{−1} }$

That is, the dihedral group $D_n$ is generated by two elements $\alpha$ and $\beta$ such that:

$(1): \quad \alpha^n = e$
$(2): \quad \beta^2 = e$
$(3): \quad \beta \alpha = \alpha^{n - 1} \beta$


Proof
By definition, the dihedral group $D_n$ of order $2 n$ is the group of symmetries of the regular $n$-gon.
So, let $P$ denote a regular polygon with $n$ sides.

Let $\alpha$ be a rotation of $P$ by $\dfrac {2 \pi} n$.
Let $\beta$ be a reflection $P$ whose axis of reflection is the $y$ axis.

It takes $n$ rotations by $\dfrac {2 \pi} n$ to return $P$ to its original position.
Thus $\alpha$ is of order $n$, and so:

$\alpha^n = e$
Two reflections of $P$ in the same axis of reflection also returns $P$ to its original position.
Thus $\beta$ is of order $2$, and so:

$\beta^2 = e$

It remains to be shown that $\beta \alpha \beta = \alpha^{-1}$.
Let the vertices of $P$ be labelled in order anticlockwise from the $y$-axis: $A_1, A_2, \ldots, A_n$.
Let $P$ be arranged so that $A_1$ is on the $y$-axis.
From here, $\beta$ on $P$ exchanges the places of $A_2$ and $A_n$.
From here, $\alpha$ sends $A_2$ to the position of $A_1$, $A_1$ to the original position of $A_2$, and $A_3$ to the original position of $A_n$.
From here, $\beta$ sends exchanges the positions of $A_3$ and $A_1$.

So $\beta \alpha \beta$ on $P$ results in $A_1$ moving to the original position of $A_n$, $A_2$ moving to the original position of $A_1$ and $A_3$ moving to the original position of $A_2$.
That is, $\beta \alpha \beta$ is a rotation of $P$ by $-\dfrac {2 \pi} n$, or $\alpha^{-1}$.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 35 \eta$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $4$: Subgroups: Example $4.10$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): dihedral group
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): dihedral group



