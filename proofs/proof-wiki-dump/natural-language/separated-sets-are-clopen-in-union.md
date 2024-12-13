# 

Source: https://proofwiki.org/wiki/Separated_Sets_are_Clopen_in_Union

Theorem
Let $T = \left({S, \tau}\right)$ be a topological space.
Let $A$ and $B$ be separated sets in $T$.
Let $H = A \cup B$ be given the subspace topology.
Then $A$ and $B$ are each both open and closed in $H$.


Proof
By hypothesis, $A$ and $B$ are separated:

$A \cap B^- = A^- \cap B = \O$
Then:














\(\ds H \cap B^-\)

\(=\)







\(\ds \paren {A \cup B} \cap B^-\)




















\(\ds \)

\(=\)







\(\ds \paren {A \cap B^-} \cup \paren {B \cap B^-}\)





Intersection Absorbs Union














\(\ds \)

\(=\)







\(\ds \O \cup B\)





Set is Subset of its Topological Closure and Intersection with Subset is Subset‎














\(\ds \)

\(=\)







\(\ds B\)





Union with Empty Set



Since the intersection of a closed set with a subspace is closed in the subspace, $B$ is closed in $H$.


This article, or a section of it, needs explaining.In particular: Link to the above resultYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Since $A = H \setminus B$ and $B$ is closed in $H$, $A$ is open in $H$.


This article, or a section of it, needs explaining.In particular: $A = H \setminus B$: it may be trivial but all statements are linked to or explained.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By the same argument with the roles of $A$ and $B$ reversed, $A$ is closed in $H$ and $B$ is open in $H$.
Hence the result.
$\blacksquare$





