# 

Source: https://proofwiki.org/wiki/Existence_of_Non-Square_Residue

Theorem
Let $m \in \Z$ be an integer such that $m > 2$.
Let $\Z_m$ be the set of integers modulo $m$:

$\Z_m = \set {\eqclass 0 m, \eqclass 1 m, \ldots, \eqclass {m - 1} m}$

Then there exists at least one residue in $\Z_m$ which is not the product modulo $m$ of a residue with itself:

$\exists p \in \Z_m: \forall x \in \Z_m: x \cdot_m x \ne p$


Proof
We have that $1 \in \Z_m$ and that:

$1 \cdot_m 1 = 1$
We have that $m - 1 \in \Z_m$ and that:

$\paren {m - 1} \cdot_m \paren {m - 1} = 1$
Thus unless $m - 1 = 1$, that is, $m = 2$, there exist $2$ residues of $\Z_m$ whose product modulo $m$ with itself equals $1$.
There are $m - 2$ residues which, when multiplied modulo $m$ with themselves have as a result a residue.
Thus there can be at maximum $m - 2$ residues (excluding $1$) which can be the product modulo $m$ of a residue with itself.
But there are $m - 1$ residues (excluding $1$).
So at least $1$ residue is not the product modulo $m$ of a residue with itself.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Exercise $2.5$




