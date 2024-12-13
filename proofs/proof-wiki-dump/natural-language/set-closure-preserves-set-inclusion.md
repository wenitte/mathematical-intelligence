# 

Source: https://proofwiki.org/wiki/Set_Closure_Preserves_Set_Inclusion

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $B \subseteq A \subseteq S$.

Then:

$B^- \subseteq A^-$
where $A^-$ and $B^-$ are the set closures in $T$ of $A$ and $B$ respectively.


Proof
By definition 1 of set closure:

$B^- = B \cup B'$
where $B'$ is the derived set of $B$ in $T$. 
Similarly:

$A^- = A \cup A'$
where $A'$ is the derived set of $A$ in $T$.
From Derived Set Preserves Set Inclusion:

$B' \subseteq A'$
So, by Set Union Preserves Subsets:

$B \cup B' \subseteq A \cup A'$
That is:

$B^- \subseteq A^-$
$\blacksquare$





