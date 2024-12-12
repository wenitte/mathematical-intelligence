# 

Source: https://proofwiki.org/wiki/Condition_for_Existence_of_Cardinal_Sum

Theorem
Let $\mathbf a$ and $\mathbf b$ be cardinals.

Then:

$\mathbf a \le \mathbf b \iff \exists \mathbf c: \mathbf a + \mathbf c = \mathbf b$
where $\mathbf c$ is also a cardinal.


Proof
Let $\mathbf a = \card A$ and $\mathbf b = \card B$ for some sets $A$ and $B$.
From Equivalence of Definitions of Dominate (Set Theory), there exists a bijection from $A$ onto a subset $E$ of $B$.
Thus:

$\mathop a = \card E$

Let $F = \relcomp B E$
From Set with Relative Complement forms Partition:

$B = E \cup F$
$E \cap F = \O$
By definition of sum of cardinals, it follows that:














\(\ds \mathbf b\)

\(=\)







\(\ds \card B\)




















\(\ds \)

\(=\)







\(\ds \card {E \cup F}\)




















\(\ds \)

\(=\)







\(\ds \card E + \card F\)




















\(\ds \)

\(=\)







\(\ds \mathbf a + \card F\)









By defining $\mathbf c := \card F$ it follows that:

$\mathbf a + \mathbf c = \mathbf b$
for the $\mathbf c$ that has been demonstrated to exist.

Now suppose there exists a cardinal $\mathbf c$ such that $\mathbf a + \mathbf c = \mathbf b$.
Then by definition of sum of cardinals:

$\card B = \card {A \cup C}$
for some sets $A$, $B$ and $C$ such that $A \cap C = \O$.
Let $f: A \to B$ be an injection, proved to exist by Equivalence of Definitions of Dominate (Set Theory).
Then it follows that $\mathbf a \le \mathbf b$.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 8$: Theorem $8.8$




