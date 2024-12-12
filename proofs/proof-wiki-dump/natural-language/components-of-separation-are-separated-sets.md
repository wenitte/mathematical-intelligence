# 

Source: https://proofwiki.org/wiki/Components_of_Separation_are_Separated_Sets

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A \mid B$ be a separation of $T$.

Then $A$ and $B$ are separated sets of $T$.


Proof
By definition of closure, $A^-$ is the smallest closed set of $T$ that contains $A$.
Components of Separation are Clopen shows that $A$ and $B$ are closed.
It follows that $A^- = A$, and $B^- = B$.
Definition of separation shows that $A \cap B = \O$, so we have:














\(\ds A^- \cap B\)

\(=\)







\(\ds A \cap B\)

\(\ds = \O\)


















\(\ds A \cap B^-\)

\(=\)







\(\ds A \cap B\)

\(\ds = \O\)








Hence the result by definition of separated sets.
$\blacksquare$





