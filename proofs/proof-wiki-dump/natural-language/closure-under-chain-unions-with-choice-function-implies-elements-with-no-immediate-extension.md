# 

Source: https://proofwiki.org/wiki/Closure_under_Chain_Unions_with_Choice_Function_implies_Elements_with_no_Immediate_Extension

Theorem
Let $S$ be a set of sets which:

is closed under chain unions
has a choice function $C$ for its union $\bigcup S$.
Let $b \in S$.
Then $b$ is the subset of an element of $S$ which has no immediate extension in $S$.


Proof
Let the hypothesis be assumed.
Let $A = \bigcup S$
Let $x \in S$ be arbitrary.
Let $\map E x$ be the set of all elements $a \in A$ such that $x \cup \set a$ is an immediate extension of $x$.
Note that:

$\map E x \subseteq \bigcup S$

Suppose $x$ has an immediate extension in $S$.
Then:

$\map E x$ is non-empty
because $\map E x \subseteq \bigcup S$, $\map E x$ is in the domain of the choice function $C$.

Let us define a progressing mapping $g: S \to S$ as follows:

$\forall x \in S: \map g x = \begin {cases}
x & : \text {$x$ has no immediate extension in $S$} \\ \\ 
x \cup \set {\map C {\map E x} } & : \text {$x$ does have an immediate extension in $S$}
\end{cases}$

Thus $g$ is a progressing mapping whose fixed points are those elements of $S$ that have no immediate extensions in $S$.
Hence the criteria hold for Set which is Superinductive under Progressing Mapping has Fixed Point: Corollary to be applied.
That tells us that an arbitrary $b \in S$ is the subset of a fixed point $x$ of $g$.
Such an element, by definition of $g$, has no immediate extension in $S$.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text {II}$ -- Maximal principles: $\S 6$ Another approach to maximal principles: Theorem $6.2$




